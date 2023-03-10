"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6872],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,_=d["".concat(l,".").concat(m)]||d[m]||p[m]||n;return r?a.createElement(_,s(s({ref:t},u),{},{components:r})):a.createElement(_,s({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,s=new Array(n);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<n;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},49114:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var a=r(87462),o=(r(67294),r(3905));const n={title:"Import Scan Results into Visual Studio with the Results API (Legacy)",slug:"/r/t_vs_download_results"},s=void 0,i={unversionedId:"guides/ides/static_ide/static_for_visual_studio_legacy/manage_results_static_vs_legacy/import_results_api_static_vs_legacy",id:"guides/ides/static_ide/static_for_visual_studio_legacy/manage_results_static_vs_legacy/import_results_api_static_vs_legacy",title:"Import Scan Results into Visual Studio with the Results API (Legacy)",description:"You can download and import Veracode results from within your IDE using the Results API. You can download and import the results from the Veracode Platform.",source:"@site/docs/guides/05_ides/01_static_ide/06_static_for_visual_studio_legacy/07_manage_results_static_vs_legacy/02_import_results_api_static_vs_legacy.md",sourceDirName:"guides/05_ides/01_static_ide/06_static_for_visual_studio_legacy/07_manage_results_static_vs_legacy",slug:"/r/t_vs_download_results",permalink:"/km-docusaurus-test/r/t_vs_download_results",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Import Scan Results into Visual Studio with the Results API (Legacy)",slug:"/r/t_vs_download_results"},sidebar:"tutorialSidebar",previous:{title:"Video: Working with Scan Results Using Veracode Static for Visual Studio (Legacy)",permalink:"/km-docusaurus-test/r/c_video_visual_studio_results"},next:{title:"Import Scan Results from the Veracode Platform into Visual Studio (Legacy)",permalink:"/km-docusaurus-test/r/t_vs_import_results"}},l={},c=[],u={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can download and import Veracode results from within your IDE using the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_results_main"},"Results API"),". You can ",(0,o.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/t_vs_import_results"},"download and import the results from the Veracode Platform"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Before you begin:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You meet the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/Permissioning_Veracode_Static_for_Visual_Studio"},"prerequisites for Veracode Static for Visual Studio"),"."),(0,o.kt)("li",{parentName:"ul"},"Your account has the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/c_API_roles"},"Results API role"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"To complete this task:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("strong",{parentName:"p"},"Extensions")," > ",(0,o.kt)("strong",{parentName:"p"},"Veracode")," ",">"," ",(0,o.kt)("strong",{parentName:"p"},"Download Results"),". If the Veracode menu is not visible, ensure you have correctly installed the plugin.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If prompted, enter your ",(0,o.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_api_credentials3"},"Veracode API ID and key"),". Optionally, select the ",(0,o.kt)("strong",{parentName:"p"},"Store API and key")," checkbox, so that you only have to enter your credentials one time.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Submit"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the Download Results window, select the required application, scan type, and specific scan. Then, click ",(0,o.kt)("strong",{parentName:"p"},"Download"),"."),(0,o.kt)("p",{parentName:"li"},"The results download from Veracode into the Results view. By default, Veracode saves the results file to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Downloads")," directory on your local computer. For example, on Windows: ",(0,o.kt)("inlineCode",{parentName:"p"},"C:\\Users\\{username}\\Downloads"),". You can ",(0,o.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_vs_config"},"change the default location on the Detailed Reports tab in the Option window"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Apply")," and ",(0,o.kt)("strong",{parentName:"p"},"OK"),"."))))}p.isMDXComponent=!0}}]);