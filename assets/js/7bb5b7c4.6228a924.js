"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4565],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>c});var a=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=a.createContext({}),d=function(e){var t=a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(i),c=n,m=u["".concat(s,".").concat(c)]||u[c]||f[c]||r;return i?a.createElement(m,l(l({ref:t},p),{},{components:i})):a.createElement(m,l({ref:t},p))}));function c(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,l=new Array(r);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var d=2;d<r;d++)l[d]=i[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,i)}u.displayName="MDXCreateElement"},1608:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=i(87462),n=(i(67294),i(3905));const r={title:"Understanding Severity, Exploitability, and Effort to Fix",slug:"/r/review_severity_exploitability"},l=void 0,o={unversionedId:"guides/findings/review_methodology/understanding_severity_exploitability_effort",id:"guides/findings/review_methodology/understanding_severity_exploitability_effort",title:"Understanding Severity, Exploitability, and Effort to Fix",description:"Severity and exploitability are two different measurements of the seriousness of a finding. Effort to Fix measures the complexity of the work required to fix the finding.",source:"@site/docs/guides/11_findings/09_review_methodology/06_understanding_severity_exploitability_effort.md",sourceDirName:"guides/11_findings/09_review_methodology",slug:"/r/review_severity_exploitability",permalink:"/km-docusaurus-test/r/review_severity_exploitability",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Understanding Severity, Exploitability, and Effort to Fix",slug:"/r/review_severity_exploitability"},sidebar:"tutorialSidebar",previous:{title:"Veracode and the CWE",permalink:"/km-docusaurus-test/r/c_review_cwe"},next:{title:"Best Practice Findings",permalink:"/km-docusaurus-test/r/review_bestpractices"}},s={},d=[{value:"Veracode Finding Severities",id:"veracode-finding-severities",level:2},{value:"Informational Findings",id:"informational-findings",level:2},{value:"Exploitability",id:"exploitability",level:2},{value:"Effort to Fix",id:"effort-to-fix",level:2}],p={toc:d};function f(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Severity and exploitability are two different measurements of the seriousness of a finding. Effort to Fix measures the complexity of the work required to fix the finding."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"#severity"},"Severity")," is the potential impact on confidentiality, integrity, and availability of the application as defined in the CVSS. ",(0,n.kt)("a",{parentName:"p",href:"#exploitability"},"Exploitability")," is the likelihood or ease with which an attacker could exploit a finding. A high-severity finding with a high likelihood of being exploited by an attacker is potentially more dangerous than a high-severity finding with a low likelihood of being exploited."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"#effort"},"Effort to Fix"),", also called Complexity of Fix, is a measure of the expected effort required to fix a finding. In addition to severity, Veracode uses Effort to Fix to provide ",(0,n.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/review_remediationplan"},"Fix First guidance"),"."),(0,n.kt)("h2",{id:"veracode-finding-severities"},"Veracode Finding Severities"),(0,n.kt)("a",{name:"severity"}),(0,n.kt)("p",null,"Veracode defines finding severities on a severity scale, which, for SCA and manual results, is based on the CVSS rating assigned to the CVE:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Severity"),(0,n.kt)("th",{parentName:"tr",align:null},"CVSS Rating ","(","SCA and MPT only",")"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"5 - Very High"),(0,n.kt)("td",{parentName:"tr",align:null},"8.1-10"),(0,n.kt)("td",{parentName:"tr",align:null},"These lines of code have a very serious weakness and are an easy target for an attacker. Fix this finding immediately to avoid potential attacks.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"4 - High"),(0,n.kt)("td",{parentName:"tr",align:null},"6.1-8"),(0,n.kt)("td",{parentName:"tr",align:null},"These lines of code have a serious weakness and are an easy target for an attacker. Fix this finding immediately to avoid potential attacks.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"3 - Medium"),(0,n.kt)("td",{parentName:"tr",align:null},"4.1-6"),(0,n.kt)("td",{parentName:"tr",align:null},"These lines of code have a moderate weakness and might be an easy target for an attacker. Fix this finding after fixing all Very High and High findings.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"2 - Low"),(0,n.kt)("td",{parentName:"tr",align:null},"2.1-4"),(0,n.kt)("td",{parentName:"tr",align:null},"These lines of code have a low weakness. Consider fixing this finding after fixing all Very High, High, and Medium findings.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"1 - Very Low"),(0,n.kt)("td",{parentName:"tr",align:null},"0.1-2"),(0,n.kt)("td",{parentName:"tr",align:null},"These lines of code have a very low weakness. The finding might indicate other problems in the code, but you do not need to mitigate it.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"0 - Informational"),(0,n.kt)("td",{parentName:"tr",align:null},"0"),(0,n.kt)("td",{parentName:"tr",align:null},"These lines of code have an issue with no impact on the security of the application, but the finding might indicate other problems in the code. You can safely ignore this issue.")))),(0,n.kt)("h2",{id:"informational-findings"},"Informational Findings"),(0,n.kt)("p",null,"Informational ","(","Severity 0",")"," findings are items Veracode observes in the application scan that have no impact on the security quality of the application but might be interesting to the reviewer for other reasons. These findings might include code quality issues, API usage, and other factors."),(0,n.kt)("p",null,"Informational findings have no impact on the security quality score of the application and are not included in the summary tables of findings for the application."),(0,n.kt)("h2",{id:"exploitability"},"Exploitability"),(0,n.kt)("a",{name:"exploitability"}),(0,n.kt)("p",null,"Each finding instance in a static scan may receive an exploitability rating. The rating is the likelihood that a finding can be found and used by an attacker to cause damage to the application or the data it protects. Veracode recommends that you use the exploitability rating to prioritize finding remediation within a specific group of findings with the same severity and difficulty of fix classification."),(0,n.kt)("p",null,"The possible exploitability ratings include:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Exploitability"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"V. Unlikely"),(0,n.kt)("td",{parentName:"tr",align:null},"Very unlikely to be exploited")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Unlikely"),(0,n.kt)("td",{parentName:"tr",align:null},"Unlikely to be exploited")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Neutral"),(0,n.kt)("td",{parentName:"tr",align:null},"Neither likely nor unlikely to be exploited")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Likely"),(0,n.kt)("td",{parentName:"tr",align:null},"Likely to be exploited")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"V. Likely"),(0,n.kt)("td",{parentName:"tr",align:null},"Very likely to be exploited")))),(0,n.kt)("p",null,"Two different methods determine exploitability:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Categorical exploitability")),(0,n.kt)("p",null,"Describes the likelihood of exploit, from Very Unlikely to Very Likely, based on proprietary formula and input from the Veracode security research team. All Veracode static flaw categories have categorical exploitability."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Contextual exploitability")),(0,n.kt)("p",null,"Increases or decreases the categorical exploitability assigned to an individual flaw using this data:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Information about the data flow path, specifically, the source of the tainted data"),(0,n.kt)("li",{parentName:"ul"},"Heuristics")),(0,n.kt)("p",null,"If the tainted data comes from an HTTP request, the contextual exploitability calculations might increase the exploitability of a cross-site scripting flaw. If the tainted data comes from a file on the application local file system, the contextual exploitability calculations might decrease the exploitability of a SQL injection flaw."),(0,n.kt)("h2",{id:"effort-to-fix"},"Effort to Fix"),(0,n.kt)("a",{name:"effort"}),(0,n.kt)("p",null,"Each finding instance receives an effort-to-fix rating based on the classification of the finding. The effort-to-fix rating is a scale from 1 to 5, as explained in this table."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Effort to Fix"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"5"),(0,n.kt)("td",{parentName:"tr",align:null},"Complex design error. Requires significant redesign.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"4"),(0,n.kt)("td",{parentName:"tr",align:null},"Simple design error. Requires redesign and up to 5 days to fix.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"3"),(0,n.kt)("td",{parentName:"tr",align:null},"Complex implementation error. Fix is approx. 51-500 lines of code. Up to 5 days to fix.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"2"),(0,n.kt)("td",{parentName:"tr",align:null},"Implementation error. Fix is approx. 6-50 lines of code. 1 day to fix.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"1"),(0,n.kt)("td",{parentName:"tr",align:null},"Trivial implementation error. Fix is up to 5 lines of code. One hour or less to fix.")))))}f.isMDXComponent=!0}}]);