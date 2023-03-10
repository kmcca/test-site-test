"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[97284],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>_});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=c(n),_=a,d=p["".concat(u,".").concat(_)]||p[_]||g[_]||i;return n?r.createElement(d,s(s({ref:t},l),{},{components:n})):r.createElement(d,s({ref:t},l))}));function _(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},61319:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"Creating and Fixing Agent-Based Scanning GitHub Issues",slug:"/r/Creating_and_Fixing_Veracode_SCA_GitHub_Issues"},s=void 0,o={unversionedId:"guides/sca/setting_up_agent_based_scans/issues_integration/creating_agent_github_issues",id:"guides/sca/setting_up_agent_based_scans/issues_integration/creating_agent_github_issues",title:"Creating and Fixing Agent-Based Scanning GitHub Issues",description:"Create Issues from Vulnerability Reports",source:"@site/docs/guides/07_sca/03_setting_up_agent_based_scans/02_issues_integration/05_creating_agent_github_issues.md",sourceDirName:"guides/07_sca/03_setting_up_agent_based_scans/02_issues_integration",slug:"/r/Creating_and_Fixing_Veracode_SCA_GitHub_Issues",permalink:"/km-docusaurus-test/r/Creating_and_Fixing_Veracode_SCA_GitHub_Issues",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Creating and Fixing Agent-Based Scanning GitHub Issues",slug:"/r/Creating_and_Fixing_Veracode_SCA_GitHub_Issues"},sidebar:"tutorialSidebar",previous:{title:"Create an Agent-Based Scanning Integration for GitHub",permalink:"/km-docusaurus-test/r/Create_an_Agent_Based_Scanning_Integration_for_GitHub"},next:{title:"Using the Veracode SCA Command-Line Agent",permalink:"/km-docusaurus-test/r/Using_the_Veracode_SCA_Command_Line_Agent"}},u={},c=[],l={toc:c};function g(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Create Issues from Vulnerability Reports")),(0,a.kt)("p",null,"In the Veracode Platform, select the checkbox next to each issue in the Issues List table, and click ",(0,a.kt)("strong",{parentName:"p"},"Actions")," > ",(0,a.kt)("strong",{parentName:"p"},"Create Issue")," to create issues."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"}," If you select more than one issue, the ",(0,a.kt)("b",null,"Create Issue")," button is unavailable. You can only create one issue for each ticket.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Fix Issues with GitHub Issues")),(0,a.kt)("p",null,"You can edit the GitHub issue before creating it. The issue automatically includes a link to the vulnerability and details on how to upgrade."))}g.isMDXComponent=!0}}]);