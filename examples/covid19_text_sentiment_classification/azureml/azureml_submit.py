import argparse

from azureml.core import Workspace, Datastore, Dataset, Experiment, ScriptRunConfig, Environment
from azureml.core.compute import ComputeTarget, AmlCompute
from azureml.core.runconfig import PyTorchConfiguration, MpiConfiguration
from azureml.data import OutputFileDatasetConfig
from azureml.exceptions import ComputeTargetException

def prepare_env_cmd():
    """Prepare the environment and submission command for the classification example."""
    env = Environment("pymarlin_requirements")
    env.docker.enabled = True
    env.docker.base_image = None
    env.docker.base_dockerfile = 'examples/azureml/dockerfile'
    env.python.user_managed_dependencies = True
    env.python.interpreter_path = "/opt/miniconda/bin/python"
    env.register(ws)

    cmd = f"python train.py --trainer.backend {args.backend}".split()
    
    return env, cmd
    
if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--target_name", default="sriovdedicated1")
    parser.add_argument("--node_count", "-n", type=int, default=1)
    parser.add_argument("--process_count", "-p", type=int, default=1)
    parser.add_argument("--experiment_name", type=str, default="marlin-tests")
    parser.add_argument("--distributed_config", "-d", type=str, choices=["mpi", "pytorch"], default="pytorch")
    parser.add_argument("--backend", "-b", choices=["sp", "ddp-amp"], default="sp")
    parser.add_argument("--subsciption_id", help='azure subscription id', required=True)
    parser.add_argument("--resource_group", help='azure resource group', required=True)
    parser.add_argument("--workspace_name", help='azure machine learning workspace', required=True)
    parser.add_argument("--wait", "-w", action="store_true", help="Throw error is Azure ML job fails.")
    args = parser.parse_args()

    ws = Workspace(args.subscription_id, args.resource_group, args.workspace_name)

    target = ws.compute_targets[args.target_name]

    if args.distributed_config == "pytorch":
        distributed_job_config = PyTorchConfiguration(
            process_count=args.process_count, node_count=args.node_count
        )
    elif args.distributed_config == "mpi":
        distributed_job_config = MpiConfiguration(
            process_count_per_node=args.process_count, node_count=args.node_count
        )
    else:
        raise ValueError(f"Didn't recognize the distributed config {args.distributed_config}. Select on of 'mpi' or 'pytorch'.")

    env, cmd = prepare_env_cmd()

    src = ScriptRunConfig(
        source_directory='..',
        command=cmd,
        compute_target=target,
        distributed_job_config=distributed_job_config,
        environment=env,
    )

    print("Submitting experiment...")
    run = Experiment(ws, args.experiment_name).submit(src)

    print(f"{run.get_portal_url()}")

    if args.wait:
        print("Waiting for run completion...")
        run.wait_for_completion(show_output=True, raise_on_error=True)
