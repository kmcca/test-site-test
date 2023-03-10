"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[54298],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>_});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(i),_=r,f=p["".concat(s,".").concat(_)]||p[_]||u[_]||a;return i?n.createElement(f,l(l({ref:t},d),{},{components:i})):n.createElement(f,l({ref:t},d))}));function _(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,l=new Array(a);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<a;c++)l[c]=i[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}p.displayName="MDXCreateElement"},53832:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var n=i(87462),r=(i(67294),i(3905));const a={title:"View Call Stacks for Findings in IntelliJ or Android Studio",slug:"/r/View_Call_Stacks_in_IntelliJ"},l=void 0,o={unversionedId:"guides/ides/static_ide/static_for_intellij_android_studio/manage_results_static_intellij_android/view_call_stacks_static_intellij",id:"guides/ides/static_ide/static_for_intellij_android_studio/manage_results_static_intellij_android/view_call_stacks_static_intellij",title:"View Call Stacks for Findings in IntelliJ or Android Studio",description:"You can view call stacks for findings in from within your IDE.",source:"@site/docs/guides/05_ides/01_static_ide/04_static_for_intellij_android_studio/04_manage_results_static_intellij_android/05_view_call_stacks_static_intellij.md",sourceDirName:"guides/05_ides/01_static_ide/04_static_for_intellij_android_studio/04_manage_results_static_intellij_android",slug:"/r/View_Call_Stacks_in_IntelliJ",permalink:"/km-docusaurus-test/r/View_Call_Stacks_in_IntelliJ",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"View Call Stacks for Findings in IntelliJ or Android Studio",slug:"/r/View_Call_Stacks_in_IntelliJ"},sidebar:"tutorialSidebar",previous:{title:"View Flaw Details in IntelliJ or Android Studio",permalink:"/km-docusaurus-test/r/View_Flaw_Details_in_IntelliJ"},next:{title:"Mitigate Flaws from Within IntelliJ or Android Studio",permalink:"/km-docusaurus-test/r/Mitigate_Flaws_from_Within_IntelliJ"}},s={},c=[],d={toc:c};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can view call stacks for findings in from within your IDE."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Before you begin:")),(0,r.kt)("p",null,"You have ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Download_Veracode_Results_for_IntelliJ_Using_the_Veracode_Platform"},"imported the scan results"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"To complete this task:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In your IDE, select a finding in the Results view.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Right-click the row you selected and, then, select ",(0,r.kt)("strong",{parentName:"p"},"Show Call Stacks")," to download the call stacks for that finding.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the Call Stacks view, double-click the finding to open the source file.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Scroll the window to highlight the location of the finding within the source file. If the source file does not open, because it is not referenced in a project that is part of the current workspace, you can add references to that file."))))}u.isMDXComponent=!0}}]);