"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[98679],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>_});var a=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),_=i,g=d["".concat(s,".").concat(_)]||d[_]||p[_]||n;return r?a.createElement(g,o(o({ref:t},u),{},{components:r})):a.createElement(g,o({ref:t},u))}));function _(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<n;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},36062:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>c,toc:()=>l});var a=r(87462),i=(r(67294),r(3905));const n={title:"Create a Veracode Build Using Visual Studio (Legacy)",slug:"/r/c_creating_build_VS"},o=void 0,c={unversionedId:"guides/ides/static_ide/static_for_visual_studio_legacy/create_build_static_vs_legacy/README",id:"guides/ides/static_ide/static_for_visual_studio_legacy/create_build_static_vs_legacy/README",title:"Create a Veracode Build Using Visual Studio (Legacy)",description:"You can use Veracode Static for Visual Studio to create a build of your application and upload the application to Veracode for analysis.",source:"@site/docs/guides/05_ides/01_static_ide/06_static_for_visual_studio_legacy/05_create_build_static_vs_legacy/README.md",sourceDirName:"guides/05_ides/01_static_ide/06_static_for_visual_studio_legacy/05_create_build_static_vs_legacy",slug:"/r/c_creating_build_VS",permalink:"/km-docusaurus-test/r/c_creating_build_VS",draft:!1,tags:[],version:"current",frontMatter:{title:"Create a Veracode Build Using Visual Studio (Legacy)",slug:"/r/c_creating_build_VS"},sidebar:"tutorialSidebar",previous:{title:"Using Standard MSBuild Paths with Visual Studio 2015 (Legacy)",permalink:"/km-docusaurus-test/r/Using_Standard_MSBuild_Paths_with_Visual_Studio_2015"},next:{title:"Manually Precompile Web Projects Using Visual Studio (Legacy)",permalink:"/km-docusaurus-test/r/Precompile_Web_Projects_Using_Visual_Studio"}},s={},l=[],u={toc:l};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can use Veracode Static for Visual Studio to create a build of your application and upload the application to Veracode for analysis."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Before you begin:")),(0,i.kt)("p",null,"You meet the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Permissioning_Veracode_Static_for_Visual_Studio"},"prerequisites for Veracode Static for Visual Studio"),"."),(0,i.kt)("p",null,"When you create a new build of your application, the extension creates the build with the necessary compilation and linker settings as outlined in ",(0,i.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/compilation_packaging"},"Veracode Packaging Requirements"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"To complete this task:")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open your project solution in Visual Studio.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select ",(0,i.kt)("strong",{parentName:"p"},"Extensions")," > ",(0,i.kt)("strong",{parentName:"p"},"Veracode Static")," ",">"," ",(0,i.kt)("strong",{parentName:"p"},"Build with Veracode Settings"),"."),(0,i.kt)("p",{parentName:"li"},"This action temporarily changes the compilation and linker settings of the source build configuration in preparation for uploading to Veracode. By default, the extension builds your code using the active build configuration, then precompiles your project automatically."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Next steps:")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Precompile_Web_Projects_Using_Visual_Studio"},"Manually Precompile Web Projects Using Visual Studio")))}p.isMDXComponent=!0}}]);