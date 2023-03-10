"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6158],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61958:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={title:"Veracode SCA Remediation Guidance",slug:"/r/About_Veracode_SCA_Remediation_Guidance"},i=void 0,c={unversionedId:"guides/sca/using_veracode_sca_upload_scan_results/about_sca_remediation_guidance",id:"guides/sca/using_veracode_sca_upload_scan_results/about_sca_remediation_guidance",title:"Veracode SCA Remediation Guidance",description:"These guidelines can help you lower your application risk in Veracode Software Composition Analysis.",source:"@site/docs/guides/07_sca/07_using_veracode_sca_upload_scan_results/08_about_sca_remediation_guidance.md",sourceDirName:"guides/07_sca/07_using_veracode_sca_upload_scan_results",slug:"/r/About_Veracode_SCA_Remediation_Guidance",permalink:"/km-docusaurus-test/r/About_Veracode_SCA_Remediation_Guidance",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Veracode SCA Remediation Guidance",slug:"/r/About_Veracode_SCA_Remediation_Guidance"},sidebar:"tutorialSidebar",previous:{title:"Using Application Data with Veracode SCA",permalink:"/km-docusaurus-test/r/Using_Application_Data_with_Veracode_SCA"},next:{title:"Mitigating Veracode SCA Vulnerabilities and Licenses",permalink:"/km-docusaurus-test/r/Mitigating_Veracode_SCA_Vulnerabilities"}},l={},s=[],u={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"These guidelines can help you lower your application risk in Veracode Software Composition Analysis."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Download the latest version, or least-vulnerable version of the component."),(0,a.kt)("admonition",{parentName:"li",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The latest version of the component is not always the least vulnerable."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Replace the vulnerable component with a different component with similar functionality.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Use environmental controls to suppress application risk. If you are using the vulnerable portion of the component, try a workaround.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Mitigate the functionality of the vulnerability or license in the component.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Build your own secure component."))))}p.isMDXComponent=!0}}]);