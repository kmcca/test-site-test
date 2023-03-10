"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[58371],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),u=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(r),d=n,f=m["".concat(c,".").concat(d)]||m[d]||l[d]||o;return r?a.createElement(f,i(i({ref:t},p),{},{components:r})):a.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4578:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const o={title:"Summary Report REST API",slug:"/r/c_rest_summary_report_intro"},i=void 0,s={unversionedId:"guides/apis/rest_apis/summary_report_rest_api/README",id:"guides/apis/rest_apis/summary_report_rest_api/README",title:"Summary Report REST API",description:"You can use the Veracode Summary Report API to get a Summary Report of the overall security quality of your application without sharing the details of the discovered findings.",source:"@site/docs/guides/15_apis/04_rest_apis/16_summary_report_rest_api/README.md",sourceDirName:"guides/15_apis/04_rest_apis/16_summary_report_rest_api",slug:"/r/c_rest_summary_report_intro",permalink:"/km-docusaurus-test/r/c_rest_summary_report_intro",draft:!1,tags:[],version:"current",frontMatter:{title:"Summary Report REST API",slug:"/r/c_rest_summary_report_intro"},sidebar:"tutorialSidebar",previous:{title:"Security Labs REST API",permalink:"/km-docusaurus-test/r/Using_the_Security_Labs_APIs"},next:{title:"Generating a Summary Report with the REST API",permalink:"/km-docusaurus-test/r/c_sum_report_gen_rest"}},c={},u=[{value:"Permissions and Authentication",id:"permissions-and-authentication",level:2},{value:"Summary Report API Specification",id:"summary-report-api-specification",level:2}],p={toc:u};function l(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"You can use the Veracode Summary Report API to get a Summary Report of the overall security quality of your application without sharing the details of the discovered findings."),(0,n.kt)("p",null,"You can use the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_findings_v2_intro"},"Findings API")," to get more detailed findings information, such as the list of findings, their location, and remediation guidance."),(0,n.kt)("h2",{id:"permissions-and-authentication"},"Permissions and Authentication"),(0,n.kt)("p",null,"Before you can use this API, you must have one of these ",(0,n.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_about_veracode_accounts"},"account")," types:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"An API service account with the Results API ",(0,n.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/c_API_roles_details"},"role")),(0,n.kt)("li",{parentName:"ul"},"A user account with the Reviewer or Security Lead ",(0,n.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/c_role_permissions"},"role"))),(0,n.kt)("p",null,"This API uses API ID/key credentials and HMAC authentication to provide improved security. Before you can send requests, you must complete these configurations:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/c_api_credentials3"},"Veracode API credentials")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/c_enabling_hmac"},"HMAC authentication"))),(0,n.kt)("p",null,"Ensure you access the APIs with the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs"},"domain for your region"),"."),(0,n.kt)("h2",{id:"summary-report-api-specification"},"Summary Report API Specification"),(0,n.kt)("p",null,"The Summary Report API specification is available from ",(0,n.kt)("a",{parentName:"p",href:"https://app.swaggerhub.com/apis/Veracode/veracode-summary_report_api/v2"},"SwaggerHub"),"."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"}," The scan type field in past results from this API may contain values for deprecated Dynamic Analysis products. All new scans return a ",(0,n.kt)("code",null,"DynamicScanType")," type of ",(0,n.kt)("code",null,"DA"),".")))}l.isMDXComponent=!0}}]);