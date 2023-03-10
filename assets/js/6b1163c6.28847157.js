"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[55002],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(g,o(o({ref:t},u),{},{components:r})):n.createElement(g,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},89095:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const i={title:"Integrating with Ticketing Systems",slug:"/r/c_integration_ticketing"},o=void 0,c={unversionedId:"guides/integrations/ticketing/README",id:"guides/integrations/ticketing/README",title:"Integrating with Ticketing Systems",description:"The Veracode integrations for ticketing and defect-tracking systems enable you to automatically create tickets and merge them into defect backlogs.",source:"@site/docs/guides/04_integrations/07_ticketing/README.md",sourceDirName:"guides/04_integrations/07_ticketing",slug:"/r/c_integration_ticketing",permalink:"/km-docusaurus-test/r/c_integration_ticketing",draft:!1,tags:[],version:"current",frontMatter:{title:"Integrating with Ticketing Systems",slug:"/r/c_integration_ticketing"},sidebar:"tutorialSidebar",previous:{title:"Uninstall the Veracode TeamCity Plugin",permalink:"/km-docusaurus-test/r/Uninstall_the_Veracode_TeamCity_Plugin"},next:{title:"Veracode Azure DevOps Extension",permalink:"/km-docusaurus-test/r/About_the_Veracode_Azure_DevOps_Extension"}},s={},l=[],u={toc:l};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Veracode integrations for ticketing and defect-tracking systems enable you to automatically create tickets and merge them into defect backlogs."),(0,a.kt)("p",null,"The tickets contain information about the production-level and sandbox vulnerabilities identified during Veracode application security scans. These tickets are then managed like all application bugs or defects and are automatically given a severity, assigned to developers, and prioritized."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Veracode APIs and integrations require access to ",(0,a.kt)("inlineCode",{parentName:"p"},"analysiscenter.veracode.com")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"api.veracode.com"),". Contact your IT team to ensure these domains are on the allowlist for your organization and that there is one-way communication on port 443 to ",(0,a.kt)("inlineCode",{parentName:"p"},"api.veracode.com"),". Refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/IP_addresses"},"complete list of domains and IP addresses to add to your allowlist"),". Also, ensure you access the APIs with the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs"},"domain for your region"),".")),(0,a.kt)("p",null,"Veracode integrates with these ticketing systems:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/t_importflaws"},"Azure DevOps")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/c_integration_bugzilla"},"Bugzilla")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/c_jira_about"},"Jira")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/c_jira_cloud_about"},"Jira Cloud"))))}p.isMDXComponent=!0}}]);