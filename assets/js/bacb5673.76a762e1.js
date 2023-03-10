"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[92906],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=u(n),f=s,g=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(g,i(i({ref:t},l),{},{components:n})):r.createElement(g,i({ref:t},l))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,i=new Array(a);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},63447:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var r=n(87462),s=(n(67294),n(3905));const a={author:["Kevin McCarthy"],title:"Managing Issues in Agent-Based Scans",slug:"/r/c_sc_issues_overview",media_dir:"images/"},i=void 0,o={unversionedId:"guides/sca/using_agent_based_scans/issue_management/README",id:"guides/sca/using_agent_based_scans/issue_management/README",title:"Managing Issues in Agent-Based Scans",description:"Issues are the essential components of Veracode Software Composition Analysis agent-based scanning. They allow you to track and take action on vulnerabilities, out-of-date libraries, and software licensing concerns for open-source libraries in a specific software project.",source:"@site/docs/guides/07_sca/04_using_agent_based_scans/19_issue_management/README.md",sourceDirName:"guides/07_sca/04_using_agent_based_scans/19_issue_management",slug:"/r/c_sc_issues_overview",permalink:"/km-docusaurus-test/r/c_sc_issues_overview",draft:!1,tags:[],version:"current",frontMatter:{author:["Kevin McCarthy"],title:"Managing Issues in Agent-Based Scans",slug:"/r/c_sc_issues_overview",media_dir:"images/"},sidebar:"tutorialSidebar",previous:{title:"Validating Fixed Agent-Based Scan Results",permalink:"/km-docusaurus-test/r/Validating_Fixed_Agent_Based_Scan_Results"},next:{title:"View SCA Issue Details",permalink:"/km-docusaurus-test/r/View_SCA_Issue_Details"}},c={},u=[],l={toc:u};function p(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Issues are the essential components of Veracode Software Composition Analysis agent-based scanning. They allow you to track and take action on vulnerabilities, out-of-date libraries, and software licensing concerns for open-source libraries in a specific software project."),(0,s.kt)("p",null,"Issues are unique to a specific project as well as the library and corresponding version."),(0,s.kt)("p",null,"If a library is updated to a different version that also includes the same vulnerability, Veracode SCA creates a new issue that references the new version. The new issue automatically replaces the old issue because the older version is no longer in use."))}p.isMDXComponent=!0}}]);