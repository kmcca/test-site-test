"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[83949],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=o,_=m["".concat(c,".").concat(d)]||m[d]||p[d]||i;return r?a.createElement(_,n(n({ref:t},u),{},{components:r})):a.createElement(_,n({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,n=new Array(i);n[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,n[1]=l;for(var s=2;s<i;s++)n[s]=r[s];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},54051:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=r(87462),o=(r(67294),r(3905));const i={title:"Manually Precompile Web Projects Using Visual Studio (Legacy)",slug:"/r/Precompile_Web_Projects_Using_Visual_Studio"},n=void 0,l={unversionedId:"guides/ides/static_ide/static_for_visual_studio_legacy/create_build_static_vs_legacy/precompile_manually_static_vs_legacy",id:"guides/ides/static_ide/static_for_visual_studio_legacy/create_build_static_vs_legacy/precompile_manually_static_vs_legacy",title:"Manually Precompile Web Projects Using Visual Studio (Legacy)",description:"You can choose to manually precompile your builds when they complete if you do not want them to precompile automatically, which is the default.",source:"@site/docs/guides/05_ides/01_static_ide/06_static_for_visual_studio_legacy/05_create_build_static_vs_legacy/01_precompile_manually_static_vs_legacy.md",sourceDirName:"guides/05_ides/01_static_ide/06_static_for_visual_studio_legacy/05_create_build_static_vs_legacy",slug:"/r/Precompile_Web_Projects_Using_Visual_Studio",permalink:"/km-docusaurus-test/r/Precompile_Web_Projects_Using_Visual_Studio",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Manually Precompile Web Projects Using Visual Studio (Legacy)",slug:"/r/Precompile_Web_Projects_Using_Visual_Studio"},sidebar:"tutorialSidebar",previous:{title:"Create a Veracode Build Using Visual Studio (Legacy)",permalink:"/km-docusaurus-test/r/c_creating_build_VS"},next:{title:"Upload Files for Analysis Using Visual Studio (Legacy)",permalink:"/km-docusaurus-test/r/c_uploading_build_VS"}},c={},s=[],u={toc:s};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can choose to manually precompile your builds when they complete if you do not want them to precompile automatically, which is the default."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Before you begin:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You meet the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/Permissioning_Veracode_Static_for_Visual_Studio"},"prerequisites for Veracode Static for Visual Studio"),"."),(0,o.kt)("li",{parentName:"ul"},"To precompile web projects that target a 64-bit architecture, you must use the 64-bit version of Windows."),(0,o.kt)("li",{parentName:"ul"},"Before you can successfully upload your binaries, you must correct all compilation and precompilation errors. Veracode cannot upload and scan an application that does not build successfully.")),(0,o.kt)("p",null,"Precompilation translates ASP.NET views/pages and controls into DLL files with debug information for Veracode to analyze. It stores the precompilation output in ",(0,o.kt)("inlineCode",{parentName:"p"},"$(SolutionDir)\\PrecompiledWeb"),". Defaults to Automatic Precompilation."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"To complete this task:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In Visual Studio, select ",(0,o.kt)("strong",{parentName:"p"},"Extensions")," > ",(0,o.kt)("strong",{parentName:"p"},"Veracode Static")," ",">"," ",(0,o.kt)("strong",{parentName:"p"},"Options")," ",">"," ",(0,o.kt)("strong",{parentName:"p"},"Precompilation"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Clear the ",(0,o.kt)("strong",{parentName:"p"},"Publish on build with Veracode settings")," checkbox to disable automatic precompilation.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("strong",{parentName:"p"},"Veracode Static")," ",">"," ",(0,o.kt)("strong",{parentName:"p"},"Publish/Precompile Web Projects")," to start precompiling your web project.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To issue a clean solution command that deletes all artifacts and creates a new build, select ",(0,o.kt)("strong",{parentName:"p"},"Veracode Static")," ",">"," ",(0,o.kt)("strong",{parentName:"p"},"Rebuild With Veracode Settings"),"."))))}p.isMDXComponent=!0}}]);