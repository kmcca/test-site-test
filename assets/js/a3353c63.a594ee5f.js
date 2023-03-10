"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[65734],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},97699:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const a={title:"About the Veracode GRC Integration",slug:"/r/c_about_grc"},i=void 0,c={unversionedId:"guides/integrations/grc/README",id:"guides/integrations/grc/README",title:"About the Veracode GRC Integration",description:"Veracode supports Governance, Risk, and Compliance \\(GRC\\) with an Archer integration.",source:"@site/docs/guides/04_integrations/08_grc/README.md",sourceDirName:"guides/04_integrations/08_grc",slug:"/r/c_about_grc",permalink:"/km-docusaurus-test/r/c_about_grc",draft:!1,tags:[],version:"current",frontMatter:{title:"About the Veracode GRC Integration",slug:"/r/c_about_grc"},sidebar:"tutorialSidebar",previous:{title:"Clear the Cache for the Veracode Integration for Jira Cloud",permalink:"/km-docusaurus-test/r/t_jira_cloud_troubleshoot"},next:{title:"Using the Archer API",permalink:"/km-docusaurus-test/r/c_about_archer"}},s={},u=[],l={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Veracode supports Governance, Risk, and Compliance ","(","GRC",")"," with an Archer integration."),(0,o.kt)("p",null,"The Veracode integrations for GRC platforms enable you to include security vulnerabilities found by Veracode in the reporting of enterprise-wide risk assessments, providing a single-pane view for all risk factors. Code vulnerabilities are integrated into the GRC objectives, making enterprise software security part of the overall risk management strategy."),(0,o.kt)("p",null,"Veracode provides a GRC integration for Archer dashboards using XML reporting."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Veracode APIs and integrations require access to ",(0,o.kt)("inlineCode",{parentName:"p"},"analysiscenter.veracode.com")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"api.veracode.com"),". Contact your IT team to ensure these domains are on the allowlist for your organization and that there is one-way communication on port 443 to ",(0,o.kt)("inlineCode",{parentName:"p"},"api.veracode.com"),". Refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/IP_addresses"},"complete list of domains and IP addresses to add to your allowlist"),". Also, ensure you access the APIs with the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs"},"domain for your region"),".")))}p.isMDXComponent=!0}}]);