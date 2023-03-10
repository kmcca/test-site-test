"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[38180],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>p});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(o),p=r,y=m["".concat(l,".").concat(p)]||m[p]||u[p]||a;return o?n.createElement(y,i(i({ref:t},d),{},{components:o})):n.createElement(y,i({ref:t},d))}));function p(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},32567:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=o(87462),r=(o(67294),o(3905));const a={title:"Flaw Methodology",slug:"/r/c_review_flaw_method"},i=void 0,s={unversionedId:"guides/findings/review_methodology/flaw_methodology",id:"guides/findings/review_methodology/flaw_methodology",title:"Flaw Methodology",description:"Flaw Types by Severity Level",source:"@site/docs/guides/11_findings/09_review_methodology/01_flaw_methodology.md",sourceDirName:"guides/11_findings/09_review_methodology",slug:"/r/c_review_flaw_method",permalink:"/km-docusaurus-test/r/c_review_flaw_method",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Flaw Methodology",slug:"/r/c_review_flaw_method"},sidebar:"tutorialSidebar",previous:{title:"Understanding Veracode Scoring and Methodology",permalink:"/km-docusaurus-test/r/review_methodology"},next:{title:"Reviewing Flaw Sources",permalink:"/km-docusaurus-test/r/c__review_flawsources"}},l={},c=[{value:"Flaw Types by Severity Level",id:"flaw-types-by-severity-level",level:3},{value:"Flaws by Severity",id:"flaws-by-severity",level:3},{value:"Flaws in Common Modules",id:"flaws-in-common-modules",level:3},{value:"Action Items",id:"action-items",level:3},{value:"Common Weakness Enumeration (CWE)",id:"common-weakness-enumeration-cwe",level:3}],d={toc:c};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"flaw-types-by-severity-level"},"Flaw Types by Severity Level"),(0,r.kt)("p",null,"The Flaw Types by Severity level table provides a summary of flaws found in the application by Severity and Category. The table puts the Security Quality Score into context by showing the specific breakout of flaws by severity, used to compute the score as described above. If multiple analysis techniques are used, the table includes a breakout of all flaws by category and severity for each analysis type performed."),(0,r.kt)("h3",{id:"flaws-by-severity"},"Flaws by Severity"),(0,r.kt)("p",null,"The Flaws by Severity chart shows the distribution of flaws by severity. An application can receive a mediocre security rating by having a few high-risk flaws or many medium-risk flaws."),(0,r.kt)("h3",{id:"flaws-in-common-modules"},"Flaws in Common Modules"),(0,r.kt)("p",null,"The flaws in the Common Modules Listing shows a summary of flaws in shared dependency modules in this application. A shared dependency is a dependency that is used by more than one analyzed module. Each module is listed with the number of executables that consume it as a dependency and a summary of the impact on the application's security score of the flaws found in the dependency."),(0,r.kt)("p",null,"The score impact represents the amount that the application score would increase if all the flaws in the shared dependency module were fixed. This information can be used to focus remediation efforts on common modules with a higher impact on the application security score."),(0,r.kt)("p",null,"Only common modules uploaded with debug information are included in the Flaws in Common Modules listing."),(0,r.kt)("h3",{id:"action-items"},"Action Items"),(0,r.kt)("p",null,"The Action Items section of the Veracode scan results report provides guidance on the steps required to bring the application to a state where it passes its assigned policy. These steps may include fixing or mitigating flaws or performing additional scans. The section also includes best practice recommendations to improve the security quality of the application."),(0,r.kt)("h3",{id:"common-weakness-enumeration-cwe"},"Common Weakness Enumeration (CWE)"),(0,r.kt)("p",null,"The Common Weakness Enumeration (CWE) is an industry standard classification of types of software weaknesses, or flaws, that can lead to security problems. CWE is widely used to provide a standard taxonomy of software errors. Every flaw in a Veracode report is classified according to a standard CWE identifier. More guidance and background about the CWE is available at ",(0,r.kt)("a",{parentName:"p",href:"http://cwe.mitre.org/data/index.html"},"http://cwe.mitre.org/data/index.html"),"."))}u.isMDXComponent=!0}}]);