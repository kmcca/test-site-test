"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[95481],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,g=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(g,l(l({ref:t},d),{},{components:n})):a.createElement(g,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},96842:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"IDE and Pipeline Scans Explore Data Dictionary",slug:"/r/r_greenlight_explore"},l=void 0,o={unversionedId:"guides/findings/analytics/using_explore/greenlight_explore",id:"guides/findings/analytics/using_explore/greenlight_explore",title:"IDE and Pipeline Scans Explore Data Dictionary",description:"These definitions describe the dimensions and measures used on the IDE and Pipeline Scans explore in Veracode Analytics.",source:"@site/docs/guides/11_findings/01_analytics/07_using_explore/03_greenlight_explore.md",sourceDirName:"guides/11_findings/01_analytics/07_using_explore",slug:"/r/r_greenlight_explore",permalink:"/km-docusaurus-test/r/r_greenlight_explore",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"IDE and Pipeline Scans Explore Data Dictionary",slug:"/r/r_greenlight_explore"},sidebar:"tutorialSidebar",previous:{title:"Scans Explore Data Dictionary",permalink:"/km-docusaurus-test/r/r_scans_explore"},next:{title:"Findings Data Dictionary",permalink:"/km-docusaurus-test/r/r_findings_explore"}},s={},p=[{value:"IDE and Pipeline Scans Dimensions",id:"ide-and-pipeline-scans-dimensions",level:2},{value:"IDE and Pipeline Scans Measures",id:"ide-and-pipeline-scans-measures",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"These definitions describe the dimensions and measures used on the IDE and Pipeline Scans explore in Veracode Analytics."),(0,r.kt)("h2",{id:"ide-and-pipeline-scans-dimensions"},"IDE and Pipeline Scans Dimensions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Dimension"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Account Name"),(0,r.kt)("td",{parentName:"tr",align:null},"The account name provided in the Veracode Platform.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IDE"),(0,r.kt)("td",{parentName:"tr",align:null},"The development environment in which the scan ran.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IDE Version"),(0,r.kt)("td",{parentName:"tr",align:null},"The version of the IDE where the scan started. If empty, it was an API scan.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OS"),(0,r.kt)("td",{parentName:"tr",align:null},"The operating system of the IDE that the user is using.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Plugin Version"),(0,r.kt)("td",{parentName:"tr",align:null},"The version of the Veracode IDE scan plugin or Pipeline Scan JAR file.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Project Name"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional field for the name of the project containing the scanned files, where applicable.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Project Reference"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional field for the source control reference, revision, or branch of the development project.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Project URI"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional field for the URI of the development project.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Results Size ","(","MB",")"),(0,r.kt)("td",{parentName:"tr",align:null},"The size of the JSON results file ","(","MB",")",".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Scan End Date"),(0,r.kt)("td",{parentName:"tr",align:null},"The date and time the scan completed. Possible values are date, month, month name, quarter, time, week, and year.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Scan Language"),(0,r.kt)("td",{parentName:"tr",align:null},"The language of the files to be scanned.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Scan Start Date"),(0,r.kt)("td",{parentName:"tr",align:null},"The date and time the scan started. Possible values are date, month, month name, quarter, time, week, and year.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Scan Status"),(0,r.kt)("td",{parentName:"tr",align:null},"The status of the scan.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Scan Type"),(0,r.kt)("td",{parentName:"tr",align:null},"How the scan was submitted. Active = User-Initiated IDE Scan, Passive = Auto-Initiated IDE Scan, API = Pipeline Scan API, DevOps = Pipeline Scan Pre-Release, Pipeline = Pipeline Scan.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"User Email"),(0,r.kt)("td",{parentName:"tr",align:null},"The email address of the user who submitted the scan.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"User Timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"User-defined value for the number of seconds to wait before a scan times out. This field only populates if you provide a value.")))),(0,r.kt)("h2",{id:"ide-and-pipeline-scans-measures"},"IDE and Pipeline Scans Measures"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Measure"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Scan Counts"),(0,r.kt)("td",{parentName:"tr",align:null},"The total count of unique scans.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"User Counts"),(0,r.kt)("td",{parentName:"tr",align:null},"The count of distinct users.")))))}u.isMDXComponent=!0}}]);