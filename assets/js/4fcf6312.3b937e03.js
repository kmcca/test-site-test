"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[99896],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),l=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(r),f=a,m=d["".concat(o,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(m,s(s({ref:t},p),{},{components:r})):n.createElement(m,s({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var l=2;l<i;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},33648:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const i={title:"PHP Scan Directives",slug:"/r/PHP_Scan_Directives"},s=void 0,c={unversionedId:"guides/sca/using_agent_based_scans/scan_directives_agent/php_scan_directives",id:"guides/sca/using_agent_based_scans/scan_directives_agent/php_scan_directives",title:"PHP Scan Directives",description:"skip_composer_install",source:"@site/docs/guides/07_sca/04_using_agent_based_scans/10_scan_directives_agent/09_php_scan_directives.md",sourceDirName:"guides/07_sca/04_using_agent_based_scans/10_scan_directives_agent",slug:"/r/PHP_Scan_Directives",permalink:"/km-docusaurus-test/r/PHP_Scan_Directives",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"PHP Scan Directives",slug:"/r/PHP_Scan_Directives"},sidebar:"tutorialSidebar",previous:{title:"Go Scan Directives",permalink:"/km-docusaurus-test/r/Go_Scan_Directives"},next:{title:".NET Scan Directives",permalink:"/km-docusaurus-test/r/NET_Scan_Directives"}},o={},l=[],p={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"skip_composer_install"))),(0,a.kt)("p",null,"Boolean value that can prevent Veracode SCA from re-installing composer packages. If you use this directive, the ",(0,a.kt)("inlineCode",{parentName:"p"},"composer.lock")," file must be present in the repository already."),(0,a.kt)("p",null,"Default value: ",(0,a.kt)("inlineCode",{parentName:"p"},"false")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"`skip_composer_install: false`\n")))}u.isMDXComponent=!0}}]);