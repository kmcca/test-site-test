"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[83421],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,g=m["".concat(p,".").concat(d)]||m[d]||s[d]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},35800:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const i={title:"Titanium Packaging",slug:"/r/compilation_titan"},o=void 0,l={unversionedId:"guides/packaging/titan",id:"guides/packaging/titan",title:"Titanium Packaging",description:"Your Titanium applications must meet specific compilation requirements before you can submit them for scanning.",source:"@site/docs/guides/03_packaging/31_titan.md",sourceDirName:"guides/03_packaging",slug:"/r/compilation_titan",permalink:"/km-docusaurus-test/r/compilation_titan",draft:!1,tags:[],version:"current",sidebarPosition:31,frontMatter:{title:"Titanium Packaging",slug:"/r/compilation_titan"},sidebar:"tutorialSidebar",previous:{title:"Transact-SQL Packaging",permalink:"/km-docusaurus-test/r/Packaging_Transact_SQL_Applications"},next:{title:"Visual Basic 6 Packaging",permalink:"/km-docusaurus-test/r/compilation_vb6"}},p={},u=[{value:"Required Files",id:"required-files",level:2},{value:"Supported Titanium Versions",id:"supported-titanium-versions",level:2},{value:"Packaging Guidance",id:"packaging-guidance",level:2}],c={toc:u};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Your Titanium applications must meet specific compilation requirements before you can submit them for scanning."),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/r_supported_table"},"Supported Languages and Platforms")," for instructions for other platforms."),(0,a.kt)("h2",{id:"required-files"},"Required Files"),(0,a.kt)("p",null,"Veracode requires your Titanium application to be a compiled Android package ","(","APK",")","."),(0,a.kt)("h2",{id:"supported-titanium-versions"},"Supported Titanium Versions"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Technology"),(0,a.kt)("th",{parentName:"tr",align:null},"Platform"),(0,a.kt)("th",{parentName:"tr",align:null},"Version"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"JavaScript/Titanium"),(0,a.kt)("td",{parentName:"tr",align:null},"Cross-Platform, compiled as Android"),(0,a.kt)("td",{parentName:"tr",align:null},"1.0 and later")))),(0,a.kt)("h2",{id:"packaging-guidance"},"Packaging Guidance"),(0,a.kt)("p",null,"If you build your application using an older version of Titanium that supports Rhino compilation, disable JS compilation before building the APK. To disable JS compilation, set the ",(0,a.kt)("inlineCode",{parentName:"p"},"ti.android.compilejs")," property to ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"tiapp.xml")," file."))}s.isMDXComponent=!0}}]);