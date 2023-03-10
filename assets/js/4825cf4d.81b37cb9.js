"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[66154],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,b=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(b,s(s({ref:n},u),{},{components:t})):r.createElement(b,s({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},22665:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const o={title:"Understanding Webhooks",slug:"/r/Understanding_Webhooks"},s=void 0,i={unversionedId:"guides/sca/using_agent_based_scans/project_management/understanding_webhooks",id:"guides/sca/using_agent_based_scans/project_management/understanding_webhooks",title:"Understanding Webhooks",description:"A webhook allows Veracode Software Composition Analysis to notify you when certain events occur in your project. When the event is triggered, Veracode sends an HTTP POST request with a payload to your configured URL.",source:"@site/docs/guides/07_sca/04_using_agent_based_scans/21_project_management/05_understanding_webhooks.md",sourceDirName:"guides/07_sca/04_using_agent_based_scans/21_project_management",slug:"/r/Understanding_Webhooks",permalink:"/km-docusaurus-test/r/Understanding_Webhooks",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Understanding Webhooks",slug:"/r/Understanding_Webhooks"},sidebar:"tutorialSidebar",previous:{title:"Enable Notifications for Watched Projects",permalink:"/km-docusaurus-test/r/Enable_Notifications_for_Watched_Projects"},next:{title:"Add a Webhook to a Project",permalink:"/km-docusaurus-test/r/Add_Webhook_to_a_Project"}},l={},c=[{value:"Webhook Trigger Events",id:"webhook-trigger-events",level:2},{value:"Webhook Payload Examples",id:"webhook-payload-examples",level:2}],u={toc:c};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A webhook allows Veracode Software Composition Analysis to notify you when certain events occur in your project. When the event is triggered, Veracode sends an HTTP POST request with a payload to your configured URL."),(0,a.kt)("h2",{id:"webhook-trigger-events"},"Webhook Trigger Events"),(0,a.kt)("p",null,"These events can trigger notifications:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Event"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Scan"),(0,a.kt)("td",{parentName:"tr",align:null},"Veracode successfully scans project.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Vulnerability issues discovered in project library after a scan"),(0,a.kt)("td",{parentName:"tr",align:null},"The Veracode research team releases a new vulnerability that affects your project")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Vulnerability issues changed in project library after a scan"),(0,a.kt)("td",{parentName:"tr",align:null},"The Veracode research team updates a vulnerability that affects your project")))),(0,a.kt)("h2",{id:"webhook-payload-examples"},"Webhook Payload Examples"),(0,a.kt)("p",null,"Each trigger event generates a particular type of payload with the relevant information. These examples show the content Veracode provides for each event."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Event: scan success")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'    {\n      "event": "SCAN_SUCCESS",\n      "organization": {\n        "id": 310,\n        "name": "Veracode",\n        "planType": "ENTERPRISE"\n      },\n      "workspace": {\n        "id": 4788,\n        "name": "Webhooks"\n      },\n      "user": {\n        "id": 2910,\n        "name": "John Smith"\n      },\n      "scan": {\n        "id": 1099430,\n        "commit": "2bedd63b8e3019121c89108bfccb2421b08e28e9",\n        "branch": "New_demo_branch",\n        "tag": null,\n        "reportLink": "<LINK TO REPORT>",\n        "vulnIssuesCount": 31,\n        "outofDateIssuesCount": 9,\n        "licenseIssuesCount": 0\n      },\n      "project": {\n        "id": 20757,\n        "name": "example-javascript"\n      }\n    }\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Event: vulnerability issues discovered")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'    {\n      "event": "VULN_ISSUES_DISCOVERED_AFTER_SCAN",\n      "organization": {\n        "id": 310,\n        "name": "Veracode",\n        "planType": "ENTERPRISE"\n      },\n      "workspace": {\n        "id": 4788,\n        "name": "Webhooks"\n      },\n      "user": null,\n      "issues": [\n        {\n          "id": 111967,\n          "status": "NEW",\n          "issueUrl": "<LINK TO ISSUE>",\n          "vuln": {\n            "id": 16462,\n            "title": \u201cTitle of vulnerability",\n            "cvssScore": 4.3,\n            "cvss3Score": 5.9,\n            "cve": null,\n            "cveStatus": "NA",\n            "stage": "RELEASED",\n            "disclosureDate": null,\n            "hasExploits": false,\n            "vulnerabilityTypes": [],\n            "overview": null\n          }\n        }\n      ],\n      "project": {\n        "id": 20757,\n        "name": "example-javascript"\n      }\n    }\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Event: vulnerability issues changed")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'    {\n      "event": "VULN_ISSUES_CHANGED_AFTER_SCAN",\n      "organization": {\n        "id": 310,\n        "name": "Veracode",\n        "planType": "ENTERPRISE"\n      },\n      "workspace": {\n        "id": 4788,\n        "name": "Webhooks"\n      },\n      "user": null,\n      "issues": [\n        {\n          "id": 111967,\n          "status": "RESOLVED",\n          "issueUrl": \u201c<LINK TO ISSUE>\u201d,\n          "vuln": {\n            "id": 16462,\n            "title": "Title of vulnerability",\n            "cvssScore": 7.8,\n            "cvss3Score": 5.9,\n            "cve": null,\n            "cveStatus": "NA",\n            "stage": "RELEASED",\n            "disclosureDate": null,\n            "hasExploits": false,\n            "vulnerabilityTypes": [],\n            "overview": null\n          }\n        }\n      ],\n      "project": {\n        "id": 20757,\n        "name": "example-javascript"\n      }\n     }\n')))}p.isMDXComponent=!0}}]);