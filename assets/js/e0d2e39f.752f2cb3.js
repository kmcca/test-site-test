"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[92749],{3905:(e,t,i)=>{i.d(t,{Zo:()=>l,kt:()=>m});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function p(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var o=n.createContext({}),c=function(e){var t=n.useContext(o),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},l=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),f=c(i),m=r,b=f["".concat(o,".").concat(m)]||f[m]||u[m]||a;return i?n.createElement(b,s(s({ref:t},l),{},{components:i})):n.createElement(b,s({ref:t},l))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,s=new Array(a);s[0]=f;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,s[1]=p;for(var c=2;c<a;c++)s[c]=i[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,i)}f.displayName="MDXCreateElement"},13232:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var n=i(87462),r=(i(67294),i(3905));const a={title:"Listing Applications by Business Unit with the REST API",slug:"/r/r_applications_bu"},s=void 0,p={unversionedId:"guides/apis/rest_apis/applications_rest_api/applications_api_list_bu",id:"guides/apis/rest_apis/applications_rest_api/applications_api_list_bu",title:"Listing Applications by Business Unit with the REST API",description:"Use this command to return the list of applications to which a specific business unit is assigned:",source:"@site/docs/guides/15_apis/04_rest_apis/02_applications_rest_api/11_applications_api_list_bu.md",sourceDirName:"guides/15_apis/04_rest_apis/02_applications_rest_api",slug:"/r/r_applications_bu",permalink:"/km-docusaurus-test/r/r_applications_bu",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"Listing Applications by Business Unit with the REST API",slug:"/r/r_applications_bu"},sidebar:"tutorialSidebar",previous:{title:"Listing Applications by Scan Type with the REST API",permalink:"/km-docusaurus-test/r/r_applications_scan_type"},next:{title:"Listing Applications by Compliance Status with the REST API",permalink:"/km-docusaurus-test/r/r_applications_compliance"}},o={},c=[],l={toc:c};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Use this command to return the list of applications to which a specific business unit is assigned:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'http --auth-type=veracode_hmac GET "https://api.veracode.com/appsec/v1/applications?business_unit={name}"\n')))}u.isMDXComponent=!0}}]);