"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[60348],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),l=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=a,b=d["".concat(o,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(b,c(c({ref:t},u),{},{components:r})):n.createElement(b,c({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var l=2;l<i;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},99111:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const i={title:"Ruby Scan Directives",slug:"/r/Ruby_Scan_Directives"},c=void 0,s={unversionedId:"guides/sca/using_agent_based_scans/scan_directives_agent/ruby_scan_directives",id:"guides/sca/using_agent_based_scans/scan_directives_agent/ruby_scan_directives",title:"Ruby Scan Directives",description:"force_bundle_install",source:"@site/docs/guides/07_sca/04_using_agent_based_scans/10_scan_directives_agent/04_ruby_scan_directives.md",sourceDirName:"guides/07_sca/04_using_agent_based_scans/10_scan_directives_agent",slug:"/r/Ruby_Scan_Directives",permalink:"/km-docusaurus-test/r/Ruby_Scan_Directives",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Ruby Scan Directives",slug:"/r/Ruby_Scan_Directives"},sidebar:"tutorialSidebar",previous:{title:"Java Scan Directives",permalink:"/km-docusaurus-test/r/Java_Scan_Directives"},next:{title:"Python Scan Directives",permalink:"/km-docusaurus-test/r/Python_Scan_Directives"}},o={},l=[],u={toc:l};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"force_bundle_install"))),(0,a.kt)("p",null,"Boolean attribute that forces the Veracode SCA agent to perform a bundle install, even when a ",(0,a.kt)("inlineCode",{parentName:"p"},"Gemfile.lock")," file already exists."),(0,a.kt)("p",null,"Default value: ",(0,a.kt)("inlineCode",{parentName:"p"},"false")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"force_bundle_install: true\n")))}p.isMDXComponent=!0}}]);