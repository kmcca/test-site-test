"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[57243],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||r;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1961:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const r={title:"Understanding Policies",slug:"/r/policy_understand"},o=void 0,l={unversionedId:"guides/findings/policies/understand",id:"guides/findings/policies/understand",title:"Understanding Policies",description:"The Veracode Platform enables an organization to define and enforce a uniform application security policy across all applications in its portfolio. An application security policy includes these elements:",source:"@site/docs/guides/11_findings/10_policies/16_understand.md",sourceDirName:"guides/11_findings/10_policies",slug:"/r/policy_understand",permalink:"/km-docusaurus-test/r/policy_understand",draft:!1,tags:[],version:"current",sidebarPosition:16,frontMatter:{title:"Understanding Policies",slug:"/r/policy_understand"},sidebar:"tutorialSidebar",previous:{title:"Set Default Policies",permalink:"/km-docusaurus-test/r/policy_setdefaults"},next:{title:"Reviewing the Veracode Default Policies",permalink:"/km-docusaurus-test/r/policy_veracodedefault"}},s={},c=[{value:"Policy Constraints",id:"policy-constraints",level:3},{value:"Evaluating Applications Against a Policy",id:"evaluating-applications-against-a-policy",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Veracode Platform enables an organization to define and enforce a uniform application security policy across all applications in its portfolio. An application security policy includes these elements:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The target ",(0,i.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/policy_veracodelevel"},"Veracode Level")," for the application.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Types of findings that should not be in the application. You can restrict findings by severity, CWE category, CWE ID, license risk, CVSS score, or a common standard, including OWASP, OWASP Mobile, CWE Top 25, or PCI.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Minimum Veracode security score.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Component blocklist for Veracode SCA findings.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Required scan types and frequencies.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Time period in which findings can impact policy compliance.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Grace period within which you must fix any policy-relevant findings."))),(0,i.kt)("h3",{id:"policy-constraints"},"Policy Constraints"),(0,i.kt)("p",null,"You can apply three main constraints to policies: rules, required scans, and remediation grace periods."),(0,i.kt)("h3",{id:"evaluating-applications-against-a-policy"},"Evaluating Applications Against a Policy"),(0,i.kt)("p",null,"When an application is evaluated against a policy, it can receive one of the following four assessments:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Not assessed")),(0,i.kt)("p",null,"The application has not yet had a scan published."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Passed")),(0,i.kt)("p",null,"The application has passed all the aspects of the policy, including rules, required scans, and grace period."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Did not pass")),(0,i.kt)("p",null,"The application has not completed all required scans, has not achieved the target Veracode Level, or has one or more policy-relevant findings that have exceeded the grace period to fix."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Conditional pass")),(0,i.kt)("p",null,"The application has one or more flaws related to a policy and these flaws have not yet exceeded the grace period to fix. All sandbox scans also have this status."))}u.isMDXComponent=!0}}]);