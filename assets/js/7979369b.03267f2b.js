"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[42428],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),g=i,h=d["".concat(c,".").concat(g)]||d[g]||u[g]||a;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},95870:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(87462),i=(r(67294),r(3905));const a={title:"Greenlight REST API",slug:"/r/c_greenlight_intro"},o=void 0,s={unversionedId:"guides/apis/rest_apis/greenlight_rest_apis/README",id:"guides/apis/rest_apis/greenlight_rest_apis/README",title:"Greenlight REST API",description:"The Veracode Greenlight API starts Greenlight Java binary scans or obtains results from previous scans directly in the CI pipeline.",source:"@site/docs/guides/15_apis/04_rest_apis/08_greenlight_rest_apis/README.md",sourceDirName:"guides/15_apis/04_rest_apis/08_greenlight_rest_apis",slug:"/r/c_greenlight_intro",permalink:"/km-docusaurus-test/r/c_greenlight_intro",draft:!1,tags:[],version:"current",frontMatter:{title:"Greenlight REST API",slug:"/r/c_greenlight_intro"},sidebar:"tutorialSidebar",previous:{title:"Findings REST API Examples",permalink:"/km-docusaurus-test/r/c_findings_v2_examples"},next:{title:"Healthcheck REST API",permalink:"/km-docusaurus-test/r/c_healthcheck_intro"}},c={},l=[{value:"Permissions and Authentication",id:"permissions-and-authentication",level:2},{value:"Greenlight API Specification",id:"greenlight-api-specification",level:2}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Veracode Greenlight API starts Greenlight Java binary scans or obtains results from previous scans directly in the CI pipeline. "),(0,i.kt)("h2",{id:"permissions-and-authentication"},"Permissions and Authentication"),(0,i.kt)("p",null,"This API uses API ID/key credentials and HMAC authentication to provide improved security. Before you can send requests, you must complete these configurations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/c_api_credentials3"},"Veracode API credentials")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/c_enabling_hmac"},"HMAC authentication"))),(0,i.kt)("p",null,"Ensure you access the APIs with the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs"},"domain for your region"),"."),(0,i.kt)("h2",{id:"greenlight-api-specification"},"Greenlight API Specification"),(0,i.kt)("p",null,"The Greenlight API specification is available from ",(0,i.kt)("a",{parentName:"p",href:"https://app.swaggerhub.com/apis/Veracode/veracode-greenlight_api_specification/v3"},"SwaggerHub"),"."))}u.isMDXComponent=!0}}]);