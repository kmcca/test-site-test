"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[94670],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),y=c(r),d=a,_=y["".concat(s,".").concat(d)]||y[d]||u[d]||i;return r?n.createElement(_,o(o({ref:t},p),{},{components:r})):n.createElement(_,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},84553:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={title:"Creating a Policy with the REST API",slug:"/r/Creating_a_Policy_with_the_REST_API"},o=void 0,l={unversionedId:"guides/apis/rest_apis/policy_rest_apis/policy_api_create",id:"guides/apis/rest_apis/policy_rest_apis/policy_api_create",title:"Creating a Policy with the REST API",description:"Use this command to create a policy:",source:"@site/docs/guides/15_apis/04_rest_apis/13_policy_rest_apis/01_policy_api_create.md",sourceDirName:"guides/15_apis/04_rest_apis/13_policy_rest_apis",slug:"/r/Creating_a_Policy_with_the_REST_API",permalink:"/km-docusaurus-test/r/Creating_a_Policy_with_the_REST_API",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Creating a Policy with the REST API",slug:"/r/Creating_a_Policy_with_the_REST_API"},sidebar:"tutorialSidebar",previous:{title:"Policy REST API",permalink:"/km-docusaurus-test/r/c_policy_rest_api"},next:{title:"Updating a Policy with the REST API",permalink:"/km-docusaurus-test/r/t_update_policy"}},s={},c=[],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Use this command to create a ",(0,a.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_appsec_policies"},"policy"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"http --auth-type=veracode_hmac POST \u201chttps://api.veracode.com/appsec/v1/policies\u201d < input.json\n")),(0,a.kt)("p",null,"The API passes the JSON file that you populate with the necessary values as shown in this example payload:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "TestPolicy",\n  "type": "BLACKLIST",\n  "description": "Policy to test create endpoint in end-to-end testing",\n  "vendor_policy": false,\n  "finding_rules": [\n    {\n      "type": "MAX_SEVERITY",\n      "scan_type": [\n        "DYNAMIC",\n        "MANUAL",\n        "STATIC"\n      ],\n      "value": "3"\n    }\n  ],\n  "scan_type": [\n    "SCA"\n  ],\n  "value": "14212"\n}      \n')),(0,a.kt)("p",null,"The example payload specifies to create a policy with two ",(0,a.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_policy_rules"},"policy rules"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"MAX_SEVERITY")," rule that specifies to apply a ",(0,a.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/review_severity_exploitability"},"finding-severity rating")," of ",(0,a.kt)("inlineCode",{parentName:"li"},"3")," to all dynamic analysis, manual testing, and static analysis scans."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"BLACKLIST")," rule that specifies to apply the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/c_blocklist"},"blocklist")," for the organization, based on the organization ID, to all SCA scans.")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Policy_API_Rules_Properties"},"Policy API Rules Properties")," describes each of the rule properties."))}u.isMDXComponent=!0}}]);