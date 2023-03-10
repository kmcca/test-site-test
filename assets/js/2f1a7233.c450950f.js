"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[30406],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=a.createContext({}),u=function(e){var r=a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=u(e.components);return a.createElement(p.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(t),m=n,y=d["".concat(p,".").concat(m)]||d[m]||l[m]||i;return t?a.createElement(y,s(s({ref:r},c),{},{components:t})):a.createElement(y,s({ref:r},c))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,s=new Array(i);s[0]=d;var o={};for(var p in r)hasOwnProperty.call(r,p)&&(o[p]=r[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var u=2;u<i;u++)s[u]=t[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5606:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>s,default:()=>l,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=t(87462),n=(t(67294),t(3905));const i={title:"Using the API Wrappers as a Library",slug:"/r/c_using_wrappers_AS"},s=void 0,o={unversionedId:"guides/apis/api_wrappers/use_wrappers_library/README",id:"guides/apis/api_wrappers/use_wrappers_library/README",title:"Using the API Wrappers as a Library",description:"You can use the Veracode API wrappers as a library, which enables you to call API functions without having to set up web requests and look up the required URL or query string parameters.",source:"@site/docs/guides/15_apis/06_api_wrappers/07_use_wrappers_library/README.md",sourceDirName:"guides/15_apis/06_api_wrappers/07_use_wrappers_library",slug:"/r/c_using_wrappers_AS",permalink:"/km-docusaurus-test/r/c_using_wrappers_AS",draft:!1,tags:[],version:"current",frontMatter:{title:"Using the API Wrappers as a Library",slug:"/r/c_using_wrappers_AS"},sidebar:"tutorialSidebar",previous:{title:"switchtosaml",permalink:"/km-docusaurus-test/r/r_switchtosaml"},next:{title:"Reference the Veracode C# API Wrapper from Visual Studio",permalink:"/km-docusaurus-test/r/t_VS_library"}},p={},u=[],c={toc:u};function l(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"You can use the Veracode API wrappers as a library, which enables you to call API functions without having to set up web requests and look up the required URL or query string parameters."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"}," The Veracode XML APIs and the wrappers use a different syntax. For the wrappers, the parameter names omit the underscores, the parameter values omit spaces, and some parameters use different names. For example, the parameter ",(0,n.kt)("code",null,"app_id")," in the API is ",(0,n.kt)("code",null,"appid")," in the wrapper and the parameter value ",(0,n.kt)("code",null,"Very High")," in the API is ",(0,n.kt)("code",null,"VeryHigh")," in the wrapper. The parameter ",(0,n.kt)("code",null,"business_criticality")," in the API is ",(0,n.kt)("code",null,"criticality")," in the wrapper. The syntax is not interchangeable and using the wrong syntax causes your command to fail. To ensure you are using the correct syntax, see the documentation provided in the Help directory for each wrapper.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/km-docusaurus-test/r/t_VS_library"},"Referencing the API wrappers from Visual Studio")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/km-docusaurus-test/r/t_Eclipse_library"},"Referencing the API wrappers from Eclipse"))))}l.isMDXComponent=!0}}]);