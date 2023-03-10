"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[72024],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>y});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(t),y=a,f=d["".concat(c,".").concat(y)]||d[y]||u[y]||i;return t?n.createElement(f,s(s({ref:r},p),{},{components:t})):n.createElement(f,s({ref:r},p))}));function y(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=d;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},63619:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=t(87462),a=(t(67294),t(3905));const i={title:"Discovery Scans for Web Applications",slug:"/r/About_Discovery_Scans"},s=void 0,o={unversionedId:"guides/dynamic_analysis/discovery/README",id:"guides/dynamic_analysis/discovery/README",title:"Discovery Scans for Web Applications",description:"Discovery scans analyze your web application perimeter and perform focused searches for web applications within a defined IP address range or list of known hosts. In the Veracode Platform, the Discovery scan results provide a detailed list of all discovered applications. This list of applications can help you determine which applications to include in your Dynamic Analysis scans.",source:"@site/docs/guides/10_dynamic_analysis/10_discovery/README.md",sourceDirName:"guides/10_dynamic_analysis/10_discovery",slug:"/r/About_Discovery_Scans",permalink:"/km-docusaurus-test/r/About_Discovery_Scans",draft:!1,tags:[],version:"current",frontMatter:{title:"Discovery Scans for Web Applications",slug:"/r/About_Discovery_Scans"},sidebar:"tutorialSidebar",previous:{title:"Delete a Dynamic Analysis",permalink:"/km-docusaurus-test/r/c_was_delete"},next:{title:"Run a Discovery Scan",permalink:"/km-docusaurus-test/r/Request_a_Discovery_Scan"}},c={},l=[],p={toc:l};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Discovery scans analyze your web application perimeter and perform focused searches for web applications within a defined IP address range or list of known hosts. In the Veracode Platform, the Discovery scan results provide a detailed list of all discovered applications. This list of applications can help you determine which applications to include in your ",(0,a.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_was_intro"},"Dynamic Analysis")," scans."),(0,a.kt)("p",null,"Veracode designed Discovery and Dynamic Analysis to run as part of a regular monitoring program. Discovery identifies relevant information, including protocol and port usage, deployed software, misconfigured DNS servers, and unique site fingerprints. Dynamic Analysis uses this information to quickly assess the security of the application perimeter. Dynamic Analysis scans hundreds of applications simultaneously to provide rapid risk assessment."),(0,a.kt)("p",null,"When configuring a Discovery scan, you can select which ",(0,a.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/admin_team"},"teams")," and ",(0,a.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_role_permissions"},"Security Leads")," have access to the scan results."))}u.isMDXComponent=!0}}]);