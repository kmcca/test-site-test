"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[79164],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=s(r),m=n,_=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return r?a.createElement(_,i(i({ref:t},l),{},{components:r})):a.createElement(_,i({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},57309:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const o={title:"Use Xcode to Package iOS and tvOS Apps",slug:"/r/Use_Xcode_to_Package_iOS_and_tvOS_Apps"},i=void 0,p={unversionedId:"guides/packaging/ios_tvos/use_xcode/README",id:"guides/packaging/ios_tvos/use_xcode/README",title:"Use Xcode to Package iOS and tvOS Apps",description:"You can package your iOS and tvOS applications with the Apple Xcode IDE.",source:"@site/docs/guides/03_packaging/14_ios_tvos/02_use_xcode/README.md",sourceDirName:"guides/03_packaging/14_ios_tvos/02_use_xcode",slug:"/r/Use_Xcode_to_Package_iOS_and_tvOS_Apps",permalink:"/km-docusaurus-test/r/Use_Xcode_to_Package_iOS_and_tvOS_Apps",draft:!1,tags:[],version:"current",frontMatter:{title:"Use Xcode to Package iOS and tvOS Apps",slug:"/r/Use_Xcode_to_Package_iOS_and_tvOS_Apps"},sidebar:"tutorialSidebar",previous:{title:"Use xcodebuild to Package iOS and tvOS Apps",permalink:"/km-docusaurus-test/r/Use_xcodebuild_to_Package_iOS_and_tvOS_Apps"},next:{title:"Create a Scheme for Archiving Debug Builds",permalink:"/km-docusaurus-test/r/Create_a_Scheme_for_Archiving_Debug_Builds"}},c={},s=[],l={toc:s};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"You can package your iOS and tvOS applications with the Apple Xcode IDE."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Before you begin:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You have installed or updated ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/veracode/gen-ir#readme"},"gen-ir"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You have cleaned your project. For information about the importance of this step, see the ",(0,n.kt)("strong",{parentName:"p"},"Before You Use")," section in this ",(0,n.kt)("inlineCode",{parentName:"p"},"gen-ir")," ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/veracode/gen-ir#readme"},"README.md")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"To package iOS and tvOS applications, you must complete the following tasks in this order:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Create_a_Scheme_for_Archiving_Debug_Builds"},"Create a Scheme for Archiving Debug Builds"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Archive_and_Export_with_Xcode"},"Archive and Export a Build Log with Xcode"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Generate_IR_to_Package_iOS_and_tvOS_Apps"},"Generate IR and Upload Your App to Veracode")))))}u.isMDXComponent=!0}}]);