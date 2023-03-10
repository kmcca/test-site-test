"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[92316],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(r),d=a,g=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(g,i(i({ref:t},s),{},{components:r})):n.createElement(g,i({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3338:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={title:"Create a Scheme for Archiving Debug Builds",slug:"/r/Create_a_Scheme_for_Archiving_Debug_Builds"},i=void 0,p={unversionedId:"guides/packaging/ios_tvos/use_xcode/create_scheme",id:"guides/packaging/ios_tvos/use_xcode/create_scheme",title:"Create a Scheme for Archiving Debug Builds",description:"You must create a scheme in Xcode to archive your debug builds.",source:"@site/docs/guides/03_packaging/14_ios_tvos/02_use_xcode/01_create_scheme.md",sourceDirName:"guides/03_packaging/14_ios_tvos/02_use_xcode",slug:"/r/Create_a_Scheme_for_Archiving_Debug_Builds",permalink:"/km-docusaurus-test/r/Create_a_Scheme_for_Archiving_Debug_Builds",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Create a Scheme for Archiving Debug Builds",slug:"/r/Create_a_Scheme_for_Archiving_Debug_Builds"},sidebar:"tutorialSidebar",previous:{title:"Use Xcode to Package iOS and tvOS Apps",permalink:"/km-docusaurus-test/r/Use_Xcode_to_Package_iOS_and_tvOS_Apps"},next:{title:"Archive and Export with Xcode",permalink:"/km-docusaurus-test/r/Archive_and_Export_with_Xcode"}},c={},l=[],s={toc:l};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You must create a scheme in Xcode to archive your debug builds."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"To complete this task:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open your project in Xcode, and make sure it is in a buildable state.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"From the top menu bar in MacOS, select ",(0,a.kt)("strong",{parentName:"p"},"Product")," > ",(0,a.kt)("strong",{parentName:"p"},"Scheme"),", and then choose your main scheme. For example, your scheme name can be ",(0,a.kt)("inlineCode",{parentName:"p"},"MyApp"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select ",(0,a.kt)("strong",{parentName:"p"},"Product")," > ",(0,a.kt)("strong",{parentName:"p"},"Scheme")," > ",(0,a.kt)("strong",{parentName:"p"},"New Scheme"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Choose the target build, and then append ",(0,a.kt)("inlineCode",{parentName:"p"},"-Veracode")," to the name of your new scheme. For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"MyApp-Veracode"),"."),(0,a.kt)("p",{parentName:"li"},"To avoid accidentally submitting this debug archive to AppStore Connect, Veracode recommends that you keep this scheme separate from your regular scheme.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select ",(0,a.kt)("strong",{parentName:"p"},"Product")," > ",(0,a.kt)("strong",{parentName:"p"},"Scheme")," > ",(0,a.kt)("strong",{parentName:"p"},"Edit Scheme\u2026")," > ",(0,a.kt)("strong",{parentName:"p"},"Archive")," > ",(0,a.kt)("strong",{parentName:"p"},"Build Configuration")," > ",(0,a.kt)("strong",{parentName:"p"},"Debug"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"To avoid confusion, ensure the ",(0,a.kt)("strong",{parentName:"p"},"Archive Name")," field name is different than your regular archive names. The default name is ",(0,a.kt)("inlineCode",{parentName:"p"},"MyApp-Veracode"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Close"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"From the top-left of Xcode, click the ",(0,a.kt)("strong",{parentName:"p"},"Project navigator")," folder icon in the menu. The Project navigator menu loads on the left side of Xcode.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select the project, which is usually the top of the Project navigator. For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"MyApp"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"From the top-middle of Xcode, click ",(0,a.kt)("strong",{parentName:"p"},"Build Settings")," > ",(0,a.kt)("strong",{parentName:"p"},"All")," > ",(0,a.kt)("strong",{parentName:"p"},"Build Options")," > ",(0,a.kt)("strong",{parentName:"p"},"Debug Information Format"),", and then set the values to ",(0,a.kt)("strong",{parentName:"p"},"DWARF with dSYM"),"."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Next steps:")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Archive_and_Export_with_Xcode"},"Archive and Export a Build Log with Xcode")))}m.isMDXComponent=!0}}]);