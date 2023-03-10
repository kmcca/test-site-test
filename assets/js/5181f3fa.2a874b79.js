"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[14669],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>u});var a=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),f=c(i),u=n,h=f["".concat(s,".").concat(u)]||f[u]||p[u]||o;return i?a.createElement(h,r(r({ref:t},d),{},{components:i})):a.createElement(h,r({ref:t},d))}));function u(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,r=new Array(o);r[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var c=2;c<o;c++)r[c]=i[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,i)}f.displayName="MDXCreateElement"},16916:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=i(87462),n=(i(67294),i(3905));const o={title:"Developing a Remediation Plan",slug:"/r/review_remediationplan"},r=void 0,l={unversionedId:"guides/findings/improve/developing_remediation_plan",id:"guides/findings/improve/developing_remediation_plan",title:"Developing a Remediation Plan",description:"After you review the flaws identified in a Veracode automated scan, you can use the guidance in the Triage Flaws page and the report to fix the flaws.",source:"@site/docs/guides/11_findings/07_improve/03_developing_remediation_plan.md",sourceDirName:"guides/11_findings/07_improve",slug:"/r/review_remediationplan",permalink:"/km-docusaurus-test/r/review_remediationplan",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Developing a Remediation Plan",slug:"/r/review_remediationplan"},sidebar:"tutorialSidebar",previous:{title:"Understanding Veracode Mitigation Proposal Reviews",permalink:"/km-docusaurus-test/r/c_mitigation_performance_review"},next:{title:"Schedule a Consultation",permalink:"/km-docusaurus-test/r/t_schedule_consultation"}},s={},c=[{value:"Defining the Target Fix List with Action Items",id:"defining-the-target-fix-list-with-action-items",level:3},{value:"Defining Which Flaws to Fix",id:"defining-which-flaws-to-fix",level:3},{value:"Flaws in Common Modules",id:"flaws-in-common-modules",level:3},{value:"Guidance on Fixing Flaws",id:"guidance-on-fixing-flaws",level:3}],d={toc:c};function p(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"After you review the flaws identified in a Veracode automated scan, you can use the guidance in the Triage Flaws page and the report to fix the flaws."),(0,n.kt)("h3",{id:"defining-the-target-fix-list-with-action-items"},"Defining the Target Fix List with Action Items"),(0,n.kt)("p",null,"The Action Items section of the Veracode report provides guidance on how to get the application to an A score."),(0,n.kt)("p",null,"The Action Items: the Immediate Timeframe section of every report provides Veracode's short-term recommendations for improving the security quality of your application. The recommendations are based on the dates that flaws in your application should be fixed to meet the requirements of the application ",(0,n.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/policy_understand"},"policy"),", including the grace period, if applicable. These recommendations are based on the flaws that must be fixed to bring the application into compliance with the policy. The recommendation takes into account the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/review_severity_exploitability"},"severity")," of the flaws so that the minimum work is necessary to achieve the A rating. After fixing these flaws, you should run the application scan for a follow-up analysis to ensure that the flaws are fixed and no new flaws have been introduced."),(0,n.kt)("h3",{id:"defining-which-flaws-to-fix"},"Defining Which Flaws to Fix"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Fix First: Severity and Ease of Fix")),(0,n.kt)("p",null,"You can use the Fix First Analyzer for a visual representation of exactly which flaws to fix first to improve the overall security posture of the application. You can view flaws based on severity of the flaw and the difficulty to fix the flaw. To access the Fix First Analyzer, on the ",(0,n.kt)("strong",{parentName:"p"},"Triage Flaws")," page, select ",(0,n.kt)("strong",{parentName:"p"},"Fix First Analyzer")," in the top-right corner. The size of the circles on the Fix First Analyzer is proportional to the number of flaws for a given combination of severity and effort to fix."),(0,n.kt)("p",null,"To identify a group of flaws within a given severity, click the red circles, starting with the upper right-hand quadrant. The chart displays the list of flaws you must remediate to decrease the application's risk quickly with the least amount of effort. To see all flaws again after choosing one of the circles, click ",(0,n.kt)("strong",{parentName:"p"},"Clear Filter"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Prioritizing by Exploitability")),(0,n.kt)("p",null,"Within a given group of flaws in the Fix First Analyzer, you can sort the flaws by ",(0,n.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/review_severity_exploitability"},"exploitability")," to further prioritize the flaws, beginning with flaws that are Very Likely to be exploited."),(0,n.kt)("p",null,"Some flaws have additional information about the likelihood that they will be exploited, based on contextual analysis of the dataflow. For example, flaws could show the source of a potential tainted data input and whether any attempt is made to cleanse the data. These flaws have an information icon next to the exploitability rating, which provides additional information about the likelihood the flaw can be exploited."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"}," Likelihood of exploitability is available only for static flaws. Dynamic flaws are assumed always to be exploitable because of the nature of dynamic testing.")),(0,n.kt)("h3",{id:"flaws-in-common-modules"},"Flaws in Common Modules"),(0,n.kt)("p",null,"If your application reuses some code modules repeatedly, flaws in those modules can have a disproportionate impact on the security of your application. Reports for applications containing flaws in common modules contain a list of these flaws prioritized by score impact. If you address these flaws first, it can have a large impact on your score."),(0,n.kt)("h3",{id:"guidance-on-fixing-flaws"},"Guidance on Fixing Flaws"),(0,n.kt)("p",null,"After you use the Fix First Analyzer to determine which flaws you must fix to have the greatest impact on the security of the application, Veracode provides detailed remediation recommendations that include a description of the flaw, its severity, specific flaw sub-category details, effort to fix, exploitability, compliance relevant impact such as PCI, and the exact line number or URL where the flaw is located. This guidance is available both on the Review Flaws page and in the reports. Each vulnerability finding is also presented with a direct link to the Common Weakness Enumeration ","(","CWE",")"," and other standards-based resources such as OWASP, where developers can find additional guidance from third-party resources."),(0,n.kt)("p",null,"The flaw details provide guidance on how the flaw was discovered and how it can be remediated, as well as links to CWE and OWASP guidelines."))}p.isMDXComponent=!0}}]);