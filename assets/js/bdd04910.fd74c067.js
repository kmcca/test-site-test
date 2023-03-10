"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2925],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>y});var a=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(r),y=i,f=d["".concat(p,".").concat(y)]||d[y]||u[y]||n;return r?a.createElement(f,o(o({ref:t},s),{},{components:r})):a.createElement(f,o({ref:t},s))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<n;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},73221:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>c,toc:()=>l});var a=r(87462),i=(r(67294),r(3905));const n={title:"Deleting a Policy with the REST API",slug:"/r/c_delete_policy"},o=void 0,c={unversionedId:"guides/apis/rest_apis/policy_rest_apis/policy_api_delete",id:"guides/apis/rest_apis/policy_rest_apis/policy_api_delete",title:"Deleting a Policy with the REST API",description:"Use this command to delete a policy and replace it with another policy for the affected applications:",source:"@site/docs/guides/15_apis/04_rest_apis/13_policy_rest_apis/03_policy_api_delete.md",sourceDirName:"guides/15_apis/04_rest_apis/13_policy_rest_apis",slug:"/r/c_delete_policy",permalink:"/km-docusaurus-test/r/c_delete_policy",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Deleting a Policy with the REST API",slug:"/r/c_delete_policy"},sidebar:"tutorialSidebar",previous:{title:"Updating a Policy with the REST API",permalink:"/km-docusaurus-test/r/t_update_policy"},next:{title:"Policy REST API Rules Properties",permalink:"/km-docusaurus-test/r/Policy_API_Rules_Properties"}},p={},l=[],s={toc:l};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Use this command to delete a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_appsec_policies"},"policy")," and replace it with another policy for the affected applications:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"http --auth-type=veracode_hmac DELETE \u201chttps://api.veracode.com/appsec/v1/policies/{policyGuid}?replacement_GUID={replacement_GUID}\u201d   \n")),(0,i.kt)("p",null,"Use this command to delete a policy and replace it with a default policy for the affected applications:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"http --auth-type=veracode_hmac DELETE \u201chttps://api.veracode.com/appsec/v1/policies/{policyGuid}?replace_with_default_policy=true\u201d\n")))}u.isMDXComponent=!0}}]);