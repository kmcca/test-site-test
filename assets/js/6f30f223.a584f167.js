"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[72743],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>_});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},c=Object.keys(e);for(i=0;i<c.length;i++)r=c[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(i=0;i<c.length;i++)r=c[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),l=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),f=l(r),_=n,d=f["".concat(s,".").concat(_)]||f[_]||p[_]||c;return r?i.createElement(d,a(a({ref:t},u),{},{components:r})):i.createElement(d,a({ref:t},u))}));function _(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,a=new Array(c);a[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,a[1]=o;for(var l=2;l<c;l++)a[l]=r[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}f.displayName="MDXCreateElement"},13852:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var i=r(87462),n=(r(67294),r(3905));const c={title:"Viewing Flaws in Source Files from Within Eclipse",slug:"/r/c_Eclipse_source"},a=void 0,o={unversionedId:"guides/ides/static_ide/static_for_eclipse/manage_flaws_static_eclipse/eclipse_viewing_flaws_source_files",id:"guides/ides/static_ide/static_for_eclipse/manage_flaws_static_eclipse/eclipse_viewing_flaws_source_files",title:"Viewing Flaws in Source Files from Within Eclipse",description:"If you have an open Eclipse project in the current workspace and that project references a source file for a flaw, Veracode Static for Eclipse can open that source file and go to the line containing the flaw.",source:"@site/docs/guides/05_ides/01_static_ide/03_static_for_eclipse/04_manage_flaws_static_eclipse/04_eclipse_viewing_flaws_source_files.md",sourceDirName:"guides/05_ides/01_static_ide/03_static_for_eclipse/04_manage_flaws_static_eclipse",slug:"/r/c_Eclipse_source",permalink:"/km-docusaurus-test/r/c_Eclipse_source",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Viewing Flaws in Source Files from Within Eclipse",slug:"/r/c_Eclipse_source"},sidebar:"tutorialSidebar",previous:{title:"View Flaw Details in Eclipse",permalink:"/km-docusaurus-test/r/View_Flaw_Details_in_Eclipse"},next:{title:"Create an Eclipse Project with References to Source Files",permalink:"/km-docusaurus-test/r/Create_an_Eclipse_Project_with_References_to_Source_Files"}},s={},l=[],u={toc:l};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"If you have an open Eclipse project in the current workspace and that ",(0,n.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Create_an_Eclipse_Project_with_References_to_Source_Files"},"project references a source file for a flaw"),", Veracode Static for Eclipse can open that source file and go to the line containing the flaw."),(0,n.kt)("p",null,"If source files are available, but are not referenced in any Eclipse project, you can create an Eclipse project and add references to the directory containing the source files. The directory structure of the binaries uploaded to Veracode must match the directory structure of the local source files. Veracode Static for Eclipse can open the source file of the flaw and locate the line where the flaw occurs as long as:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The folder structure within the Eclipse project is consistent with the Folder Path value in the Results view."),(0,n.kt)("li",{parentName:"ul"},"The filename of the source file matches the File Name value in the Results view.")))}p.isMDXComponent=!0}}]);