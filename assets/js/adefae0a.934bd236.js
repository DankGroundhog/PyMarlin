(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3536],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),l=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(r),d=a,m=p["".concat(o,".").concat(d)]||p[d]||f[d]||s;return r?n.createElement(m,c(c({ref:t},u),{},{components:r})):n.createElement(m,c({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,c=new Array(s);c[0]=p;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<s;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},7823:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},metadata:function(){return i},toc:function(){return o},default:function(){return u}});var n=r(2122),a=r(9756),s=(r(7294),r(3905)),c={sidebar_label:"data_classes",title:"plugins.hf_seq2seq.data_classes"},i={unversionedId:"reference/plugins/hf_seq2seq/data_classes",id:"reference/plugins/hf_seq2seq/data_classes",isDocsHomePage:!1,title:"plugins.hf_seq2seq.data_classes",description:"HfSeq2SeqData Objects",source:"@site/docs/reference/plugins/hf_seq2seq/data_classes.md",sourceDirName:"reference/plugins/hf_seq2seq",slug:"/reference/plugins/hf_seq2seq/data_classes",permalink:"/PyMarlin/docs/reference/plugins/hf_seq2seq/data_classes",editUrl:"https://github.com/microsoft/PyMarlin/edit/master/website/docs/reference/plugins/hf_seq2seq/data_classes.md",version:"current",sidebar_label:"data_classes",frontMatter:{sidebar_label:"data_classes",title:"plugins.hf_seq2seq.data_classes"},sidebar:"referenceSideBar",previous:{title:"plugins.hf_ner.sequence_labelling_metrics",permalink:"/PyMarlin/docs/reference/plugins/hf_ner/sequence_labelling_metrics"},next:{title:"plugins.hf_seq2seq.implementation",permalink:"/PyMarlin/docs/reference/plugins/hf_seq2seq/implementation"}},o=[{value:"HfSeq2SeqData Objects",id:"hfseq2seqdata-objects",children:[]}],l={toc:o};function u(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"hfseq2seqdata-objects"},"HfSeq2SeqData Objects"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"class HfSeq2SeqData(data_interface.DataInterface)\n")),(0,s.kt)("p",null,"Class which expects input data to have different files for source and target.\nReturns dataset which returns non tokenized source and target text."))}u.isMDXComponent=!0}}]);