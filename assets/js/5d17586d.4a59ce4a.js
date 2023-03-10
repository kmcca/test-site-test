"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[89053],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>_});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(n),_=r,y=m["".concat(o,".").concat(_)]||m[_]||u[_]||i;return n?a.createElement(y,s(s({ref:t},l),{},{components:n})):a.createElement(y,s({ref:t},l))}));function _(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},26018:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"Create a Dynamic Analysis with a Crawl Script Using the REST API",slug:"/r/Create_a_Dynamic_Analysis_with_a_Crawl_Script_Using_the_REST_API"},s=void 0,c={unversionedId:"guides/apis/rest_apis/dynamic_rest_apis/dynamic_api_create_with_crawl_script",id:"guides/apis/rest_apis/dynamic_rest_apis/dynamic_api_create_with_crawl_script",title:"Create a Dynamic Analysis with a Crawl Script Using the REST API",description:"You can use the Dynamic Analysis API with a prerecorded crawl sequence to supplement the crawl automation of the Veracode scan engine.",source:"@site/docs/guides/15_apis/04_rest_apis/05_dynamic_rest_apis/06_dynamic_api_create_with_crawl_script.md",sourceDirName:"guides/15_apis/04_rest_apis/05_dynamic_rest_apis",slug:"/r/Create_a_Dynamic_Analysis_with_a_Crawl_Script_Using_the_REST_API",permalink:"/km-docusaurus-test/r/Create_a_Dynamic_Analysis_with_a_Crawl_Script_Using_the_REST_API",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Create a Dynamic Analysis with a Crawl Script Using the REST API",slug:"/r/Create_a_Dynamic_Analysis_with_a_Crawl_Script_Using_the_REST_API"},sidebar:"tutorialSidebar",previous:{title:"Create an Authenticated Dynamic Analysis with the REST API",permalink:"/km-docusaurus-test/r/t_dynamic_logins"},next:{title:"Create a Dynamic Analysis with a User Agent and Blocklisted URLs Using the REST API",permalink:"/km-docusaurus-test/r/t_dynamic_useragent"}},o={},p=[],l={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can use the Dynamic Analysis API with a prerecorded crawl sequence to supplement the crawl automation of the Veracode scan engine."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"To complete this task:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter values for the ",(0,r.kt)("inlineCode",{parentName:"p"},"scan_config_request"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"crawl_configuration"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"schedule")," properties in the JSON file.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run this command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'http --auth-type=veracode_hmac POST "https://api.veracode.com/was/configservice/v1/analyses" < input.json\n')),(0,r.kt)("p",{parentName:"li"},"This is an example of how to use a Dynamic Analysis with a crawl script:"),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Before you paste the crawl script into the API body, you must escape the JSON. If you need assistance, use the JSON escape utility available at ",(0,r.kt)("a",{href:"https://jsonformatter.org"},(0,r.kt)("a",{parentName:"p",href:"https://jsonformatter.org"},"https://jsonformatter.org")),".")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n  "name": "Name-of-Your-Dynamic-Analysis",\n  "scans": [\n    {\n      "scan_config_request": {\n        "target_url": {\n          "url": "http://www.example.com",\n          "http_and_https": true,\n          "directory_restriction_type": "DIRECTORY_AND_SUBDIRECTORY"\n        },\n      "crawl_configuration": {\n        "scripts": [\n          {\n            "crawl_script_data": {\n              "script_type": "SELENIUM",\n              "script_body": "<escaped JSON>"\n            },\n            "name": "ExampleCrawlScript.side"\n          }\n        ],\n        "disabled": false\n      }\n        }\n    }\n  ],\n  "schedule": {\n    "now": true,\n    "duration": {\n      "length": 1,\n      "unit": "DAY"\n    }\n  }\n}\n')))))}u.isMDXComponent=!0}}]);