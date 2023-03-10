"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[39126],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,g=d["".concat(l,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},15642:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"PhoneGap/Cordova Packaging",slug:"/r/compilation_phonegap"},i=void 0,p={unversionedId:"guides/packaging/phonegap",id:"guides/packaging/phonegap",title:"PhoneGap/Cordova Packaging",description:"Your PhoneGap/Cordova applications must meet specific compilation requirements before you can submit them for scanning.",source:"@site/docs/guides/03_packaging/22_phonegap.md",sourceDirName:"guides/03_packaging",slug:"/r/compilation_phonegap",permalink:"/km-docusaurus-test/r/compilation_phonegap",draft:!1,tags:[],version:"current",sidebarPosition:22,frontMatter:{title:"PhoneGap/Cordova Packaging",slug:"/r/compilation_phonegap"},sidebar:"tutorialSidebar",previous:{title:"Perl Packaging",permalink:"/km-docusaurus-test/r/compilation_perl"},next:{title:"PHP Packaging",permalink:"/km-docusaurus-test/r/compilation_php"}},l={},c=[{value:"Required Files",id:"required-files",level:2},{value:"Supported PhoneGap/Cordova Versions",id:"supported-phonegapcordova-versions",level:2},{value:"Packaging Guidance",id:"packaging-guidance",level:2}],u={toc:c};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Your PhoneGap/Cordova applications must meet specific compilation requirements before you can submit them for scanning."),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/r_supported_table"},"Supported Languages and Platforms")," for instructions for other platforms."),(0,a.kt)("h2",{id:"required-files"},"Required Files"),(0,a.kt)("p",null,"Veracode requires your Adobe PhoneGap/Apache Cordova application to be a compiled iOS archive ","(","IPA",")"," or Android package ","(","APK",")",". Compiling your application in one of these formats produces a scannable module for the JavaScript and for the native component, which can be Android or iOS. Ensure that you select the JavaScript module, and, if you have native plugins, the native module."),(0,a.kt)("p",null,"If you have native plugins for both platforms, you can upload Android and iOS packages, but you should only select a single JavaScript module."),(0,a.kt)("h2",{id:"supported-phonegapcordova-versions"},"Supported PhoneGap/Cordova Versions"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Technology"),(0,a.kt)("th",{parentName:"tr",align:null},"Platform"),(0,a.kt)("th",{parentName:"tr",align:null},"Version"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"JavaScript/PhoneGap"),(0,a.kt)("td",{parentName:"tr",align:null},"Android, iOS"),(0,a.kt)("td",{parentName:"tr",align:null},"1.0 and later")))),(0,a.kt)("h2",{id:"packaging-guidance"},"Packaging Guidance"),(0,a.kt)("p",null,"Veracode strongly recommends that you submit applications that have not been processed with a JavaScript minifier or obfuscation tool. Minified JavaScript can increase the difficulty in reviewing flaw results because line-number information can become obscured."))}s.isMDXComponent=!0}}]);