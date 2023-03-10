"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[99805],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>_});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=p(n),_=a,d=g["".concat(c,".").concat(_)]||g[_]||l[_]||i;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function _(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},74068:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={title:"Create an Agent-Based Scanning Integration for GitHub",slug:"/r/Create_an_Agent_Based_Scanning_Integration_for_GitHub"},o=void 0,s={unversionedId:"guides/sca/setting_up_agent_based_scans/issues_integration/create_agent_integration_github",id:"guides/sca/setting_up_agent_based_scans/issues_integration/create_agent_integration_github",title:"Create an Agent-Based Scanning Integration for GitHub",description:"Veracode Software Composition Analysis agent-based scanning supports cloud-hosted (GitHub.com) and self-hosted (GitHub Enterprise) versions of GitHub issues.",source:"@site/docs/guides/07_sca/03_setting_up_agent_based_scans/02_issues_integration/04_create_agent_integration_github.md",sourceDirName:"guides/07_sca/03_setting_up_agent_based_scans/02_issues_integration",slug:"/r/Create_an_Agent_Based_Scanning_Integration_for_GitHub",permalink:"/km-docusaurus-test/r/Create_an_Agent_Based_Scanning_Integration_for_GitHub",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Create an Agent-Based Scanning Integration for GitHub",slug:"/r/Create_an_Agent_Based_Scanning_Integration_for_GitHub"},sidebar:"tutorialSidebar",previous:{title:"Atlassian Jira Legacy Integration for Veracode SCA",permalink:"/km-docusaurus-test/r/Atlassian_Jira_Legacy_Integration_for_Veracode_SCA"},next:{title:"Creating and Fixing Agent-Based Scanning GitHub Issues",permalink:"/km-docusaurus-test/r/Creating_and_Fixing_Veracode_SCA_GitHub_Issues"}},c={},p=[],u={toc:p};function l(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Veracode Software Composition Analysis agent-based scanning supports cloud-hosted (GitHub.com) and self-hosted (GitHub Enterprise) versions of GitHub issues."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Before you begin:")),(0,a.kt)("p",null,"You must have the Security Lead ",(0,a.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_role_permissions"},"role")," in the Veracode Platform."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"To complete this task:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the Veracode Platform, select ",(0,a.kt)("strong",{parentName:"p"},"Scans & Analysis")," > ",(0,a.kt)("strong",{parentName:"p"},"Software Composition Analysis"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click the ",(0,a.kt)("strong",{parentName:"p"},"Agent-Based Scan")," tab.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Agent-Based Scan Settings")," > ",(0,a.kt)("strong",{parentName:"p"},"Integrations")," > ",(0,a.kt)("strong",{parentName:"p"},"Actions")," > ",(0,a.kt)("strong",{parentName:"p"},"Create GitHub Integration"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Choose the workspace where you want to set up the integration.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select the ",(0,a.kt)("strong",{parentName:"p"},"Activate GitHub integration")," checkbox."))))}l.isMDXComponent=!0}}]);