"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[30788],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=i,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},23333:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),i=(r(67294),r(3905));const o={title:"Understanding Veracode Mitigation Proposal Reviews",slug:"/r/c_mitigation_performance_review"},a=void 0,s={unversionedId:"guides/findings/improve/understanding_veracode_mprs",id:"guides/findings/improve/understanding_veracode_mprs",title:"Understanding Veracode Mitigation Proposal Reviews",description:"You can purchase an optional Veracode Mitigation Proposal Review \\(MPR\\) service from Veracode to request that Veracode consultants perform additional mitigation triage work for your applications.",source:"@site/docs/guides/11_findings/07_improve/02_understanding_veracode_mprs.md",sourceDirName:"guides/11_findings/07_improve",slug:"/r/c_mitigation_performance_review",permalink:"/km-docusaurus-test/r/c_mitigation_performance_review",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Understanding Veracode Mitigation Proposal Reviews",slug:"/r/c_mitigation_performance_review"},sidebar:"tutorialSidebar",previous:{title:"View Mitigated Flaws in Reports",permalink:"/km-docusaurus-test/r/View_Mitigated_Flaws_in_Reports"},next:{title:"Developing a Remediation Plan",permalink:"/km-docusaurus-test/r/review_remediationplan"}},p={},c=[],l={toc:c};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can purchase an optional Veracode Mitigation Proposal Review ","(","MPR",")"," service from Veracode to request that Veracode consultants perform additional mitigation triage work for your applications."),(0,i.kt)("p",null,"Your security team can use the Veracode Mitigation Proposal Review to request Veracode application security consultants to review mitigation proposals that your developers enter. Your security team can make a more informed decision about whether to accept or reject a mitigation proposal."),(0,i.kt)("p",null,"To request a Mitigation Proposal Review, contact ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@veracode.com"},"support@veracode.com"),"."),(0,i.kt)("p",null,"During the review, the Veracode application security consultants provide feedback on the mitigation proposal based on your custom risk-tolerance guidelines. The Veracode consultants can propose these mitigation types:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Conforms")),(0,i.kt)("p",null,"Veracode has determined the mitigation is present and functioning as described. The mitigation may reduce the risk that the flaw presents."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Deviates")),(0,i.kt)("p",null,"Veracode determined that the described mitigation is not present or may not reduce the risk presented by the flaw. Veracode specifies a mitigation as ",(0,i.kt)("strong",{parentName:"p"},"Deviates")," if the mitigation relies on factors such as:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Trusted sources of data")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Configuration file settings")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Operating system controls")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Network controls"),(0,i.kt)("p",{parentName:"li"},"The Veracode consultants also specify a mitigation as ",(0,i.kt)("strong",{parentName:"p"},"Deviates")," if they cannot find the described control or cannot determine how the mitigation is intended to work."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Defer")),(0,i.kt)("p",null,"Veracode has reviewed the finding proposal and the custom risk-tolerance guidelines and has determined that the mitigation requires a more thorough review by your security team."),(0,i.kt)("p",null,"If Veracode performed the mitigation proposal review for you, you can filter the proposed mitigations by the Mitigation Conformation type."))}u.isMDXComponent=!0}}]);