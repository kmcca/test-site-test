"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[70287],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),b=a,f=m["".concat(o,".").concat(b)]||m[b]||p[b]||i;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},90261:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"View SCA Vulnerability Details",slug:"/r/View_SCA_Vulnerability_Details"},s=void 0,l={unversionedId:"guides/sca/using_agent_based_scans/issue_management/view_sca_vulnerability_details",id:"guides/sca/using_agent_based_scans/issue_management/view_sca_vulnerability_details",title:"View SCA Vulnerability Details",description:"Vulnerabilities represent the set of security concerns across a project or workspace. Viewing vulnerability details allows you to view information across all versions of a specific vulnerability, such as libraries in which the agent-based scan has found it.",source:"@site/docs/guides/07_sca/04_using_agent_based_scans/19_issue_management/06_view_sca_vulnerability_details.md",sourceDirName:"guides/07_sca/04_using_agent_based_scans/19_issue_management",slug:"/r/View_SCA_Vulnerability_Details",permalink:"/km-docusaurus-test/r/View_SCA_Vulnerability_Details",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"View SCA Vulnerability Details",slug:"/r/View_SCA_Vulnerability_Details"},sidebar:"tutorialSidebar",previous:{title:"View Comments on an Issue in SCA",permalink:"/km-docusaurus-test/r/View_Comments_on_an_Issue_in_SCA"},next:{title:"Understanding SCA License Risk",permalink:"/km-docusaurus-test/r/c_integrated_license_agent"}},o={},c=[],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Vulnerabilities represent the set of security concerns across a project or workspace. Viewing vulnerability details allows you to view information across all versions of a specific vulnerability, such as libraries in which the agent-based scan has found it."),(0,a.kt)("p",null,"Unlike issues of type Vulnerability, Veracode SCA counts each vulnerability only once within the context of a workspace, even if the same library and corresponding vulnerabilities exist across multiple projects. Also, you cannot ignore vulnerabilities, which means the number of vulnerabilities could be greater than the number of issues of type Vulnerability."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"To complete this task:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the Veracode Platform, select ",(0,a.kt)("strong",{parentName:"p"},"Scans & Analysis")," > ",(0,a.kt)("strong",{parentName:"p"},"Software Composition Analysis"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click the ",(0,a.kt)("strong",{parentName:"p"},"Agent-Based Scan")," tab.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select a workspace.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If you want to view vulnerabilities for an individual project, click ",(0,a.kt)("strong",{parentName:"p"},"Projects")," and select a project.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select the ",(0,a.kt)("strong",{parentName:"p"},"Vulnerabilities")," tab.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the list of vulnerabilities, select the ",(0,a.kt)("strong",{parentName:"p"},"Vulnerability")," link for a given issue:"),(0,a.kt)("p",{parentName:"li"},"Clicking this link takes you to the Veracode Vulnerability Database where you can view the vulnerability details in the left navigation menu."))))}p.isMDXComponent=!0}}]);