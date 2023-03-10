"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[719],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},_=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),_=p(t),d=r,m=_["".concat(l,".").concat(d)]||_[d]||u[d]||i;return t?a.createElement(m,s(s({ref:n},c),{},{components:t})):a.createElement(m,s({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=_;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}_.displayName="MDXCreateElement"},48049:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const i={title:"Configuring a Pipeline Scan with the REST API",slug:"/r/Configuring_a_Pipeline_Scan_with_the_REST_API"},s=void 0,o={unversionedId:"guides/apis/rest_apis/pipeline_scan_rest_apis/pipeline_scan_api_configure",id:"guides/apis/rest_apis/pipeline_scan_rest_apis/pipeline_scan_api_configure",title:"Configuring a Pipeline Scan with the REST API",description:"Use this command to configure a Pipeline Scan:",source:"@site/docs/guides/15_apis/04_rest_apis/12_pipeline_scan_rest_apis/02_pipeline_scan_api_configure.md",sourceDirName:"guides/15_apis/04_rest_apis/12_pipeline_scan_rest_apis",slug:"/r/Configuring_a_Pipeline_Scan_with_the_REST_API",permalink:"/km-docusaurus-test/r/Configuring_a_Pipeline_Scan_with_the_REST_API",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Configuring a Pipeline Scan with the REST API",slug:"/r/Configuring_a_Pipeline_Scan_with_the_REST_API"},sidebar:"tutorialSidebar",previous:{title:"Dividing Files into Segments for a Pipeline Scan",permalink:"/km-docusaurus-test/r/Dividing_Files_into_Segments_for_a_Pipeline_Scan"},next:{title:"Uploading File Segments to a Pipeline Scan",permalink:"/km-docusaurus-test/r/Uploading_File_Segments_to_a_Pipeline_Scan"}},l={},p=[{value:"Example Results",id:"example-results",level:2}],c={toc:p};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Use this command to configure a Pipeline Scan:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'http --auth-type=veracode_hmac POST "https://api.veracode.com/pipeline_scan/v1/scans" < input.json\n')),(0,r.kt)("p",null,"The API passes the JSON file that you populate with the necessary values as shown in this example payload:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "binary_name": "verademo.war",\n  "binary_size": 6577398,\n  "binary_hash": "48c96bf1ff8b47316683c99376b67b455f0e4a2d9705323fa3bcbe71afe350c7",\n  "project_name": "verademo",\n  "project_uri": "https://github.com/veracode/verademo", \n  "dev_stage": "DEVELOPMENT"\n}   \n')),(0,r.kt)("p",null,"The Pipeline Scan requires ",(0,r.kt)("inlineCode",{parentName:"p"},"binary_name"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"binary_size"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"binary_hash"),"."),(0,r.kt)("p",null,"Property descriptions are available in the ",(0,r.kt)("a",{parentName:"p",href:"https://app.swaggerhub.com/apis/Veracode/veracode-pipeline_scan_api_specification/v1"},"Veracode Pipeline Scan API Specification"),"."),(0,r.kt)("h2",{id:"example-results"},"Example Results"),(0,r.kt)("p",null,"This example shows sample results from the command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "_links": {\n    "root": {\n      "href": "/"\n    },\n    "self": {\n      "href": "/scans"\n    },\n    "help": {\n      "href": "https://docs.veracode.com/reader/tS9CaFwL4_lbIEWWomsJoA/ovfZGgu96UINQxIuTqRDwg"\n    },\n    "create": {\n      "href": "/scans"\n    },\n    "details": {\n      "href": "/scans/2138d64e-56b1-4d8b-a9c8-489ef38fd0a2"\n    },\n    "upload": {\n      "href": "/scans/2138d64e-56b1-4d8b-a9c8-489ef38fd0a2/segments/0"\n    },\n    "cancel": {\n      "href": "/scans/2138d64e-56b1-4d8b-a9c8-489ef38fd0a2"\n    }\n  },\n  "scan_id": "2138d64e-56b1-4d8b-a9c8-489ef38fd0a2",\n  "scan_status": "UPLOADING",\n  "api_version": 1,\n  "app_id": null,\n  "project_name": "verademo",\n  "project_uri": "https://github.com/veracode/verademo",\n  "project_ref": null,\n  "commit_hash": null,\n  "dev_stage": "DEVELOPMENT",\n  "binary_name": "verademo.war",\n  "binary_size": 6577398,\n  "binary_hash": "48c96bf1ff8b47316683c99376b67b455f0e4a2d9705323fa3bcbe71afe350c7",\n  "binary_segments_expected": 3,\n  "binary_segments_uploaded": 0,\n  "scan_timeout": null,\n  "scan_duration": null,\n  "results_size": null,\n  "message": null,\n  "created": "2021-02-02T21:29:51.180433",\n  "changed": "2021-02-02T21:29:52.564409"\n} \n')),(0,r.kt)("p",null,"The results provide values required for other operations, including:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"scan_id"),", which you provide in other Pipeline Scan API commands."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"binary_segments_expected")," value, which you supply when ",(0,r.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/Uploading_File_Segments_to_a_Pipeline_Scan"},"uploading file segments"),".")))}u.isMDXComponent=!0}}]);