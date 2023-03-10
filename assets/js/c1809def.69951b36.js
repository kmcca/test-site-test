"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[42483],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>d});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),c=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=c(e.components);return a.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=c(t),d=n,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return t?a.createElement(h,i(i({ref:r},l),{},{components:t})):a.createElement(h,i({ref:r},l))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=m;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5433:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var a=t(87462),n=(t(67294),t(3905));const o={title:"Using the Veracode API Wrappers from the Command Line",slug:"/r/c_wrapper_CL"},i=void 0,p={unversionedId:"guides/apis/api_wrappers/wrappers_command_line/README",id:"guides/apis/api_wrappers/wrappers_command_line/README",title:"Using the Veracode API Wrappers from the Command Line",description:"The Veracode XML APIs allow you to access Veracode and perform actions such as creating application profiles, uploading files, starting scans, and downloading reports. You can interact with the APIs programmatically or through a web browser.",source:"@site/docs/guides/15_apis/06_api_wrappers/04_wrappers_command_line/README.md",sourceDirName:"guides/15_apis/06_api_wrappers/04_wrappers_command_line",slug:"/r/c_wrapper_CL",permalink:"/km-docusaurus-test/r/c_wrapper_CL",draft:!1,tags:[],version:"current",frontMatter:{title:"Using the Veracode API Wrappers from the Command Line",slug:"/r/c_wrapper_CL"},sidebar:"tutorialSidebar",previous:{title:"Using an API Credentials File with the API Wrappers",permalink:"/km-docusaurus-test/r/c_wrappers_using_api_creds_file"},next:{title:"Run the API Wrapper from the Command Line",permalink:"/km-docusaurus-test/r/t_running_wrapper_CL"}},s={},c=[],l={toc:c};function u(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_api_main"},"Veracode XML APIs")," allow you to access Veracode and perform actions such as creating application profiles, uploading files, starting scans, and downloading reports. You can interact with the APIs programmatically or through a web browser."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"}," The Veracode XML APIs and the wrappers use a different syntax. For the wrappers, the parameter names omit the underscores, the parameter values omit spaces, and some parameters use different names. For example, the parameter ",(0,n.kt)("code",null,"app_id")," in the API is ",(0,n.kt)("code",null,"appid")," in the wrapper and the parameter value ",(0,n.kt)("code",null,"Very High")," in the API is ",(0,n.kt)("code",null,"VeryHigh")," in the wrapper. The parameter ",(0,n.kt)("code",null,"business_criticality")," in the API is ",(0,n.kt)("code",null,"criticality")," in the wrapper. The syntax is not interchangeable and using the wrong syntax causes your command to fail. To ensure you are using the correct syntax, see the documentation provided in the Help directory for each wrapper.")),(0,n.kt)("p",null,"Like the Veracode APIs, the API wrappers allow you to access Veracode and perform different actions in a more simplified way that requires neither a web browser nor repetitive programming. When using the wrappers as a library, you no longer have to programmatically configure web requests and look up the URL or query string parameters of the functions you want to call. When using the wrappers as command-line applications, you can perform these actions, which require no programming knowledge:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/c_wrapper_simple_actions"},"Simple actions")," correspond to a single call to one of the functions of the Veracode APIs."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/c_wrapper_composite_actions"},"Composite actions")," correspond to calls to multiple functions of the Veracode APIs.")))}u.isMDXComponent=!0}}]);