"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[51763],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,b=d["".concat(c,".").concat(m)]||d[m]||p[m]||n;return r?a.createElement(b,i(i({ref:t},u),{},{components:r})):a.createElement(b,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<n;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},18648:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var a=r(87462),o=(r(67294),r(3905));const n={title:"Veracode Bamboo Integration",slug:"/r/c_integration_bamboo"},i=void 0,s={unversionedId:"guides/integrations/build_systems/bamboo_integration/README",id:"guides/integrations/build_systems/bamboo_integration/README",title:"Veracode Bamboo Integration",description:"You use the Veracode Java API wrapper to integrate Veracode with your Maven build server. The integration seamlessly adds static scanning into the existing build processes that you use in your Software Development Life Cycle (SDLC).",source:"@site/docs/guides/04_integrations/06_build_systems/05_bamboo_integration/README.md",sourceDirName:"guides/04_integrations/06_build_systems/05_bamboo_integration",slug:"/r/c_integration_bamboo",permalink:"/km-docusaurus-test/r/c_integration_bamboo",draft:!1,tags:[],version:"current",frontMatter:{title:"Veracode Bamboo Integration",slug:"/r/c_integration_bamboo"},sidebar:"tutorialSidebar",previous:{title:"Hide a Proxy Password in Azure DevOps or TFS",permalink:"/km-docusaurus-test/r/t_hide_password"},next:{title:"Create a Plan in Bamboo for Java Applications",permalink:"/km-docusaurus-test/r/Create_a_Plan_in_Bamboo_for_Java_Applications"}},c={},l=[{value:"Prerequisites",id:"prerequisites",level:2}],u={toc:l};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You use the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_about_wrappers"},"Veracode Java API wrapper")," to integrate Veracode with your Maven build server. The integration seamlessly adds static scanning into the existing build processes that you use in your Software Development Life Cycle (SDLC)."),(0,o.kt)("p",null,"You use the Veracode Java API wrapper to integrate the Veracode APIs with Bamboo to run Maven builds. To integrate Veracode with Bamboo, you use the Veracode APIs provided in the Java API wrapper. The API wrapper takes input from the command line, external tools, or existing build server integration workflows and returns a response from Veracode. You install the wrapper on the build server and it initiates communication between the build server and Veracode."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Before integrating Veracode with Bamboo, you must meet these prerequisites:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"An ",(0,o.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/c_about_veracode_accounts"},"API service account")," with the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/c_API_roles_details"},"Upload API role")," or a Veracode user account with the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/c_role_permissions"},"Creator role"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/c_api_credentials3"},"Veracode API credentials"),"."),(0,o.kt)("li",{parentName:"ul"},"The application you plan to scan is properly compiled according to the instructions in the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/compilation_packaging"},"Veracode Packaging Requirements"),"."),(0,o.kt)("li",{parentName:"ul"},"Bamboo is installed on your build server. You can download Bamboo from ",(0,o.kt)("a",{parentName:"li",href:"http://www.atlassian.com/software/bamboo/download"},"http://www.atlassian.com/software/bamboo/download"),". If you downloaded the archive file, instead of the EXE installer, you have unzipped the archive."),(0,o.kt)("li",{parentName:"ul"},"Bamboo is configured according to the Bamboo installation instructions on the ",(0,o.kt)("a",{parentName:"li",href:"https://support.atlassian.com/bamboo/"},"Atlassian Support website"),"."),(0,o.kt)("li",{parentName:"ul"},"Java and a zip utility, such as WinZip, are defined as executables in your Bamboo Administration account.")))}p.isMDXComponent=!0}}]);