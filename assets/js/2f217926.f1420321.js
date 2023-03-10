"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[25553],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,_=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(_,p(p({ref:t},l),{},{components:n})):a.createElement(_,p({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,p=new Array(i);p[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var c=2;c<i;c++)p[c]=n[c];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},57283:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={title:"Creating an Application Assigned to a Team with the REST API",slug:"/r/r_applications_create_assign_team"},p=void 0,o={unversionedId:"guides/apis/rest_apis/applications_rest_api/applications_api_create_assign_team",id:"guides/apis/rest_apis/applications_rest_api/applications_api_create_assign_team",title:"Creating an Application Assigned to a Team with the REST API",description:"Use this command to create an application:",source:"@site/docs/guides/15_apis/04_rest_apis/02_applications_rest_api/02_applications_api_create_assign_team.md",sourceDirName:"guides/15_apis/04_rest_apis/02_applications_rest_api",slug:"/r/r_applications_create_assign_team",permalink:"/km-docusaurus-test/r/r_applications_create_assign_team",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Creating an Application Assigned to a Team with the REST API",slug:"/r/r_applications_create_assign_team"},sidebar:"tutorialSidebar",previous:{title:"Creating an Application with the REST API",permalink:"/km-docusaurus-test/r/r_applications_create"},next:{title:"Updating an Application with the REST API",permalink:"/km-docusaurus-test/r/r_applications_update"}},s={},c=[],l={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Use this command to create an application:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'http --auth-type=veracode_hmac POST "https://api.veracode.com/appsec/v1/applications" < input.json\n')),(0,r.kt)("p",null,"Include a payload to define the required parameters and assign the application to a team. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "profile":{\n      "name":"Applications REST API Demo",\n      "tags":"demo,restapi",\n      "business_unit":{\n         "guid":"08w93dm6-b5gf-4259-a895-39e7d933956k"\n      },\n      "teams":[\n         {\n            "guid":"string"\n         }\n      ],\n      "policies":[\n         {\n            "guid":"1wg6dc84-76kk-5467-a5t2-c5885277jf1p"\n         }\n      ],\n      "business_criticality":"HIGH"\n   }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"team_id")," is equivalent to ",(0,r.kt)("inlineCode",{parentName:"p"},"team_legacy_id")," in the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_identity_intro"},"Identity API"),"."))}u.isMDXComponent=!0}}]);