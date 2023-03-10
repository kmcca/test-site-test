"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[55705],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||i;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},68740:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const i={title:"Dynamic Scan Overview in the Veracode Platform",slug:"/r/c_using_dynamic_overview"},o=void 0,s={unversionedId:"guides/getting_started/platform_basics/choose_scan_type/dynamic_analysis_overview",id:"guides/getting_started/platform_basics/choose_scan_type/dynamic_analysis_overview",title:"Dynamic Scan Overview in the Veracode Platform",description:"The Dynamic Analysis scan overview page in the Veracode Platform provides at-a-glance information for the latest Dynamic Analysis.",source:"@site/docs/guides/02_getting_started/05_platform_basics/10_choose_scan_type/02_dynamic_analysis_overview.md",sourceDirName:"guides/02_getting_started/05_platform_basics/10_choose_scan_type",slug:"/r/c_using_dynamic_overview",permalink:"/km-docusaurus-test/r/c_using_dynamic_overview",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Dynamic Scan Overview in the Veracode Platform",slug:"/r/c_using_dynamic_overview"},sidebar:"tutorialSidebar",previous:{title:"Static Scan Overview in the Veracode Platform",permalink:"/km-docusaurus-test/r/c_using_static_overview"},next:{title:"Add and Edit Application Metadata in the Veracode Platform",permalink:"/km-docusaurus-test/r/t_add_metadata"}},c={},l=[{value:"Scan Name",id:"scan-name",level:3},{value:"Real-time Scan Information",id:"real-time-scan-information",level:3},{value:"Scan Status and Progress",id:"scan-status-and-progress",level:3},{value:"Common Actions",id:"common-actions",level:3},{value:"Scan Submission Details",id:"scan-submission-details",level:3},{value:"Activity Log",id:"activity-log",level:3}],u={toc:l};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Dynamic Analysis scan overview page in the Veracode Platform provides at-a-glance information for the latest ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Dynamic_Analysis"},"Dynamic Analysis"),"."),(0,r.kt)("h3",{id:"scan-name"},"Scan Name"),(0,r.kt)("p",null,"Click ",(0,r.kt)("strong",{parentName:"p"},"Edit")," at any time to change the name of the scan."),(0,r.kt)("h3",{id:"real-time-scan-information"},"Real-time Scan Information"),(0,r.kt)("p",null,"When a scan is complete, click the Scan Completed link under the Scan Status field to open the Real-time Scan Information window, which provides all the preliminary details of the scan results."),(0,r.kt)("h3",{id:"scan-status-and-progress"},"Scan Status and Progress"),(0,r.kt)("p",null,"These fields provide the status information you need from submission to completion:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Scan Status"),(0,r.kt)("li",{parentName:"ul"},"Progress Meter"),(0,r.kt)("li",{parentName:"ul"},"Submitted Date"),(0,r.kt)("li",{parentName:"ul"},"Current Status")),(0,r.kt)("p",null,"The Scan Status field tells you which stage the scan is in or if the scan request is incomplete, while the Current Status field provides the estimated date of completion."),(0,r.kt)("h3",{id:"common-actions"},"Common Actions"),(0,r.kt)("p",null,"Action buttons appear on this page if it is possible for you to perform actions on this scan, such as edit or delete the scan request, depending on the user ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_role_permissions"},"roles")," you have."),(0,r.kt)("h3",{id:"scan-submission-details"},"Scan Submission Details"),(0,r.kt)("p",null,"The submission details summarize the information you provided when you requested the scan."),(0,r.kt)("h3",{id:"activity-log"},"Activity Log"),(0,r.kt)("p",null,"This log shows all actions performed in the request and submission process for this current static scan."))}m.isMDXComponent=!0}}]);