"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[83439],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=l(a),d=r,y=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return a?n.createElement(y,s(s({ref:t},p),{},{components:a})):n.createElement(y,s({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},20195:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const i={title:"Dynamic Analysis REST API",slug:"/r/c_dynamic_intro"},s=void 0,o={unversionedId:"guides/apis/rest_apis/dynamic_rest_apis/README",id:"guides/apis/rest_apis/dynamic_rest_apis/README",title:"Dynamic Analysis REST API",description:"You can use the Veracode Dynamic Analysis REST API to automate major dynamic scanning tasks.",source:"@site/docs/guides/15_apis/04_rest_apis/05_dynamic_rest_apis/README.md",sourceDirName:"guides/15_apis/04_rest_apis/05_dynamic_rest_apis",slug:"/r/c_dynamic_intro",permalink:"/km-docusaurus-test/r/c_dynamic_intro",draft:!1,tags:[],version:"current",frontMatter:{title:"Dynamic Analysis REST API",slug:"/r/c_dynamic_intro"},sidebar:"tutorialSidebar",previous:{title:"Deleting a Development Sandbox with the REST API",permalink:"/km-docusaurus-test/r/c_sandbox_delete_rest"},next:{title:"Create a Dynamic Analysis of a Single URL with the REST API",permalink:"/km-docusaurus-test/r/t_dynamic_single"}},c={},l=[{value:"Permissions and Authentication",id:"permissions-and-authentication",level:2},{value:"Dynamic Analysis API Specification",id:"dynamic-analysis-api-specification",level:2},{value:"Authentication Errors",id:"authentication-errors",level:2},{value:"Scan APIs with the Dynamic Analysis REST API",id:"scan-apis-with-the-dynamic-analysis-rest-api",level:2}],p={toc:l};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can use the Veracode Dynamic Analysis REST API to automate major dynamic scanning tasks."),(0,r.kt)("p",null,"This API enables you to programmatically initiate dynamic scanning with the flexibility necessary for incorporating this type of security scanning into your Software Development Life Cycle."),(0,r.kt)("p",null,"The API endpoints perform these tasks:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create analyses with URL scans"),(0,r.kt)("li",{parentName:"ul"},"Configure analyses and URL scans"),(0,r.kt)("li",{parentName:"ul"},"Schedule and run analyses"),(0,r.kt)("li",{parentName:"ul"},"Link analyses to Veracode application profiles")),(0,r.kt)("p",null,"After completing a dynamic analysis scan, you can use the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_findings_v2_intro"},"Findings API")," to get information on a discovered flaw."),(0,r.kt)("h2",{id:"permissions-and-authentication"},"Permissions and Authentication"),(0,r.kt)("p",null,"To be able to use the Veracode Dynamic Analysis REST API, you must have one of these ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_about_veracode_accounts"},"account")," types:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"An API service account with the Upload and Scan API ",(0,r.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/c_API_roles_details"},"role"),"."),(0,r.kt)("li",{parentName:"ul"},"A user account with the Security Lead, Creator, or Submitter ",(0,r.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/c_role_permissions"},"role"),".")),(0,r.kt)("p",null,"This API uses API ID/key credentials and HMAC authentication to provide improved security. Before you can send requests, you must complete these configurations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/c_api_credentials3"},"Veracode API credentials")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/c_enabling_hmac"},"HMAC authentication"))),(0,r.kt)("p",null,"Ensure you access the APIs with the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs"},"domain for your region"),"."),(0,r.kt)("h2",{id:"dynamic-analysis-api-specification"},"Dynamic Analysis API Specification"),(0,r.kt)("p",null,"The Dynamic Analysis API specification is available from ",(0,r.kt)("a",{parentName:"p",href:"https://app.swaggerhub.com/apis/Veracode/veracode-dynamic_analysis_configuration_service_api/1.0"},"SwaggerHub"),"."),(0,r.kt)("h2",{id:"authentication-errors"},"Authentication Errors"),(0,r.kt)("p",null,"To see authentication errors for the Dynamic Analysis REST API, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"http --auth-type=veracode_hmac GET https://api.veracode.com/was/configservice/v1/code_groups/errorcode\n")),(0,r.kt)("h2",{id:"scan-apis-with-the-dynamic-analysis-rest-api"},"Scan APIs with the Dynamic Analysis REST API"),(0,r.kt)("p",null,"By default, any ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"PUT")," request to the Dynamic Analysis REST API assumes that the target is a web application. For a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/About_Veracode_API_Scanning"},"Dynamic Analysis scan of APIs"),", append the ",(0,r.kt)("inlineCode",{parentName:"p"},"scan_type=API_SCAN")," query parameter to your ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"PUT")," request. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'http --auth-type=veracode_hmac POST "https://api.veracode.com/was/configservice/v1/analyses?scan_type=API_SCAN" < input.json\n')),(0,r.kt)("p",null,"   To scan web applications, exclude this parameter or change it to ",(0,r.kt)("inlineCode",{parentName:"p"},"scan_type=WEB_SCAN"),"."))}u.isMDXComponent=!0}}]);