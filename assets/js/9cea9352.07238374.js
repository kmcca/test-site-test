"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[33322],{3905:(t,e,i)=>{i.d(e,{Zo:()=>d,kt:()=>_});var a=i(67294);function r(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function s(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function n(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?s(Object(i),!0).forEach((function(e){r(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function o(t,e){if(null==t)return{};var i,a,r=function(t,e){if(null==t)return{};var i,a,r={},s=Object.keys(t);for(a=0;a<s.length;a++)i=s[a],e.indexOf(i)>=0||(r[i]=t[i]);return r}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(a=0;a<s.length;a++)i=s[a],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(r[i]=t[i])}return r}var l=a.createContext({}),u=function(t){var e=a.useContext(l),i=e;return t&&(i="function"==typeof t?t(e):n(n({},e),t)),i},d=function(t){var e=u(t.components);return a.createElement(l.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var i=t.components,r=t.mdxType,s=t.originalType,l=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),p=u(i),_=r,m=p["".concat(l,".").concat(_)]||p[_]||c[_]||s;return i?a.createElement(m,n(n({ref:e},d),{},{components:i})):a.createElement(m,n({ref:e},d))}));function _(t,e){var i=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var s=i.length,n=new Array(s);n[0]=p;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o.mdxType="string"==typeof t?t:r,n[1]=o;for(var u=2;u<s;u++)n[u]=i[u];return a.createElement.apply(null,n)}return a.createElement.apply(null,i)}p.displayName="MDXCreateElement"},1121:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>n,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var a=i(87462),r=(i(67294),i(3905));const s={title:"Using Standard MSBuild Paths with Visual Studio 2019",slug:"/r/Using_Standard_MSBuild_Paths_with_Visual_Studio_2019"},n=void 0,o={unversionedId:"guides/ides/static_ide/static_for_visual_studio_legacy/configure_static_vs_legacy/msbuild_paths_static_vs_legacy/msbuild_paths_vs2019_legacy",id:"guides/ides/static_ide/static_for_visual_studio_legacy/configure_static_vs_legacy/msbuild_paths_static_vs_legacy/msbuild_paths_vs2019_legacy",title:"Using Standard MSBuild Paths with Visual Studio 2019",description:"For Visual Studio 2019, the first two paths with a \\Professional directory differ based on your edition of Visual Studio. As appropriate, you can replace \\Professional with \\Enterprise or \\Community. The Visual Studio Preview installation also changes the path based on Enterprise, Professional, or Community.",source:"@site/docs/guides/05_ides/01_static_ide/06_static_for_visual_studio_legacy/04_configure_static_vs_legacy/03_msbuild_paths_static_vs_legacy/01_msbuild_paths_vs2019_legacy.md",sourceDirName:"guides/05_ides/01_static_ide/06_static_for_visual_studio_legacy/04_configure_static_vs_legacy/03_msbuild_paths_static_vs_legacy",slug:"/r/Using_Standard_MSBuild_Paths_with_Visual_Studio_2019",permalink:"/km-docusaurus-test/r/Using_Standard_MSBuild_Paths_with_Visual_Studio_2019",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Using Standard MSBuild Paths with Visual Studio 2019",slug:"/r/Using_Standard_MSBuild_Paths_with_Visual_Studio_2019"},sidebar:"tutorialSidebar",previous:{title:"Using Standard MSBuild Paths with Visual Studio",permalink:"/km-docusaurus-test/r/c_msbuild_paths"},next:{title:"Using Standard MSBuild Paths with Visual Studio 2017 (Legacy)",permalink:"/km-docusaurus-test/r/Using_Standard_MSBuild_Paths_with_Visual_Studio_2017"}},l={},u=[{value:"Standard Visual Studio Paths",id:"standard-visual-studio-paths",level:2},{value:"Visual Studio Preview Paths",id:"visual-studio-preview-paths",level:2},{value:"MSBuild Tools Paths",id:"msbuild-tools-paths",level:2}],d={toc:u};function c(t){let{components:e,...i}=t;return(0,r.kt)("wrapper",(0,a.Z)({},d,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"For Visual Studio 2019, the first two paths with a ",(0,r.kt)("inlineCode",{parentName:"p"},"\\Professional")," directory differ based on your edition of Visual Studio. As appropriate, you can replace ",(0,r.kt)("inlineCode",{parentName:"p"},"\\Professional")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"\\Enterprise")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"\\Community"),". The Visual Studio Preview installation also changes the path based on Enterprise, Professional, or Community."),(0,r.kt)("p",null,"These paths apply to the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_title_VS"},"legacy")," and ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Veracode_Static_for_Visual_Studio_New"},"new")," versions of Veracode Static for Visual Studio, both of which support Visual Studio 2019."),(0,r.kt)("h2",{id:"standard-visual-studio-paths"},"Standard Visual Studio Paths"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"C:\\Program Files (x86)\\Microsoft Visual Studio\\2019\\Professional\\MSBuild\\Current\\Bin\\")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"C:\\Program Files (x86)\\Microsoft Visual Studio\\2019\\Professional\\MSBuild\\Current\\Bin\\amd64\\"))),(0,r.kt)("h2",{id:"visual-studio-preview-paths"},"Visual Studio Preview Paths"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"C:\\Program Files (x86)\\Microsoft Visual Studio\\2019\\Preview\\MSBuild\\Current\\Bin")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"C:\\Program Files (x86)\\Microsoft Visual Studio\\2019\\Preview\\MSBuild\\Current\\Bin\\amd64\\"))),(0,r.kt)("h2",{id:"msbuild-tools-paths"},"MSBuild Tools Paths"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"C:\\Program Files (x86)\\Microsoft Visual Studio\\2019\\BuildTools\\MSBuild\\Current\\Bin\\")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"C:\\Program Files (x86)\\Microsoft Visual Studio\\2019\\BuildTools\\MSBuild\\Current\\Bin\\amd64\\"))))}c.isMDXComponent=!0}}]);