"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3460],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),c=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),f=c(r),m=n,d=f["".concat(s,".").concat(m)]||f[m]||u[m]||a;return r?i.createElement(d,p(p({ref:t},l),{},{components:r})):i.createElement(d,p({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,p=new Array(a);p[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,p[1]=o;for(var c=2;c<a;c++)p[c]=r[c];return i.createElement.apply(null,p)}return i.createElement.apply(null,r)}f.displayName="MDXCreateElement"},23161:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var i=r(87462),n=(r(67294),r(3905));const a={title:"Listing Applications with the REST API",slug:"/r/r_applications_list"},p=void 0,o={unversionedId:"guides/apis/rest_apis/applications_rest_api/applications_api_list",id:"guides/apis/rest_apis/applications_rest_api/applications_api_list",title:"Listing Applications with the REST API",description:"Use this command to return a list of applications with 50 applications on each page:",source:"@site/docs/guides/15_apis/04_rest_apis/02_applications_rest_api/07_applications_api_list.md",sourceDirName:"guides/15_apis/04_rest_apis/02_applications_rest_api",slug:"/r/r_applications_list",permalink:"/km-docusaurus-test/r/r_applications_list",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Listing Applications with the REST API",slug:"/r/r_applications_list"},sidebar:"tutorialSidebar",previous:{title:"Deleting an Application with the REST API",permalink:"/km-docusaurus-test/r/r_applications_delete"},next:{title:"Listing Applications by Tag with the REST API",permalink:"/km-docusaurus-test/r/r_applications_tag"}},s={},c=[],l={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Use this command to return a list of applications with ",(0,n.kt)("inlineCode",{parentName:"p"},"50")," applications on each page:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'http --auth-type=veracode_hmac GET "https://api.veracode.com/appsec/v1/applications/?page=0&size=50"\n')))}u.isMDXComponent=!0}}]);