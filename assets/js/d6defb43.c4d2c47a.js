"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[54416],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),f=i,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},16274:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(87462),i=(r(67294),r(3905));const a={title:"Run a Prescan from Within IntelliJ or Android Studio",slug:"/r/c_intellij_prescan"},o=void 0,s={unversionedId:"guides/ides/static_ide/static_for_intellij_android_studio/scan_static_intellij_android/run_prescan_static_intellij",id:"guides/ides/static_ide/static_for_intellij_android_studio/scan_static_intellij_android/run_prescan_static_intellij",title:"Run a Prescan from Within IntelliJ or Android Studio",description:"You can begin a prescan of your application binaries immediately after you upload all files to Veracode. Prescans send email notifications when they complete. You can also check for prescan results using the getprescanresults.do call.",source:"@site/docs/guides/05_ides/01_static_ide/04_static_for_intellij_android_studio/03_scan_static_intellij_android/03_run_prescan_static_intellij.md",sourceDirName:"guides/05_ides/01_static_ide/04_static_for_intellij_android_studio/03_scan_static_intellij_android",slug:"/r/c_intellij_prescan",permalink:"/km-docusaurus-test/r/c_intellij_prescan",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Run a Prescan from Within IntelliJ or Android Studio",slug:"/r/c_intellij_prescan"},sidebar:"tutorialSidebar",previous:{title:"Use Sandboxes with Veracode Static for IntelliJ",permalink:"/km-docusaurus-test/r/c_intelliJ_sandbox"},next:{title:"Debug Prescan Files in Error Status Using IntelliJ or Android Studio",permalink:"/km-docusaurus-test/r/Debug_Prescan_Files_in_Error_Status_with_IntelliJ"}},l={},c=[],u={toc:c};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can begin a prescan of your application binaries immediately after you upload all files to Veracode. Prescans send email notifications when they complete. You can also check for prescan results using the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/r_getprescanresults"},(0,i.kt)("inlineCode",{parentName:"a"},"getprescanresults.do"))," call."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Before you begin:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You must have the ",(0,i.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/c_API_roles"},"Upload and Scan API role")," or ",(0,i.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/c_role_permissions"},"Submitter role"),". To obtain detailed findings information in your scan results, the builder you use to package your code must generate debug symbol information."),(0,i.kt)("li",{parentName:"ul"},"You have ",(0,i.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/c_Eclipse_upload"},"uploaded your files to Veracode for scanning"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"To complete this task:")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select ",(0,i.kt)("strong",{parentName:"p"},"Yes")," in the window that opens."),(0,i.kt)("p",{parentName:"li"},"Prescan results appear in the Prescan Verification Results window informing you if the prescan succeeded or failed.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If the prescan succeeded, select the checkbox in the Scan? column and click ",(0,i.kt)("strong",{parentName:"p"},"Yes")," at the bottom of the window."))))}p.isMDXComponent=!0}}]);