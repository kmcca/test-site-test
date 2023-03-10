"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[39640],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},45228:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={author:["Kevin McCarthy"],title:"About Automatic Pull Requests",slug:"/r/About_Automatic_Pull_Requests",media_dir:"images/"},i=void 0,s={unversionedId:"guides/sca/using_agent_based_scans/using_sca_agent/about_automatic_pull_requests/README",id:"guides/sca/using_agent_based_scans/using_sca_agent/about_automatic_pull_requests/README",title:"About Automatic Pull Requests",description:"Veracode Software Composition Analysis (SCA) agent-based scanning supports automatically generating pull requests of GitHub and GitLab repositories to fix vulnerabilities identified in agent scans.",source:"@site/docs/guides/07_sca/04_using_agent_based_scans/09_using_sca_agent/06_about_automatic_pull_requests/README.md",sourceDirName:"guides/07_sca/04_using_agent_based_scans/09_using_sca_agent/06_about_automatic_pull_requests",slug:"/r/About_Automatic_Pull_Requests",permalink:"/km-docusaurus-test/r/About_Automatic_Pull_Requests",draft:!1,tags:[],version:"current",frontMatter:{author:["Kevin McCarthy"],title:"About Automatic Pull Requests",slug:"/r/About_Automatic_Pull_Requests",media_dir:"images/"},sidebar:"tutorialSidebar",previous:{title:"Veracode SCA Agent Configuration Values",permalink:"/km-docusaurus-test/r/Veracode_SCA_Agent_Configuration_Values"},next:{title:"Enable Pull Requests for GitHub",permalink:"/km-docusaurus-test/r/t_configure_pr_github"}},u={},c=[],l={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Veracode Software Composition Analysis (SCA) agent-based scanning supports automatically generating pull requests of GitHub and GitLab repositories to fix vulnerabilities identified in agent scans."),(0,a.kt)("p",null,"Using the information the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/t_update_advisor"},"update advisor")," identifies, the automatic pull requests modify package dependency files and update the libraries to the next closest safe version."),(0,a.kt)("p",null,"If the recommended safe version is a major version, and you do not want to update your application, Veracode recommends that you ignore the pull request."))}p.isMDXComponent=!0}}]);