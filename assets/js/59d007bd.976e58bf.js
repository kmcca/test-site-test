"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[47469],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},32755:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const o={title:"ISM Endpoint Installer",slug:"/r/c_endpoint_installer"},a=void 0,l={unversionedId:"guides/dynamic_analysis/ism/ism_endpoint_installer",id:"guides/dynamic_analysis/ism/ism_endpoint_installer",title:"ISM Endpoint Installer",description:"Veracode recommends you use the ISM endpoint installer to install endpoints on Windows or Linux servers instead of performing a manual installation.",source:"@site/docs/guides/10_dynamic_analysis/11_ism/06_ism_endpoint_installer.md",sourceDirName:"guides/10_dynamic_analysis/11_ism",slug:"/r/c_endpoint_installer",permalink:"/km-docusaurus-test/r/c_endpoint_installer",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"ISM Endpoint Installer",slug:"/r/c_endpoint_installer"},sidebar:"tutorialSidebar",previous:{title:"Best Practices for Endpoint Management",permalink:"/km-docusaurus-test/r/c_endpoint_best_practices"},next:{title:"Configure Internal Scanning",permalink:"/km-docusaurus-test/r/t_configure_gateway"}},s={},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Veracode recommends you use the ISM endpoint installer to install endpoints on Windows or Linux servers instead of performing a manual installation."),(0,i.kt)("p",null,"If you are logged in to the Veracode Platform, you can download the installer for both platforms here:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://ui.analysiscenter.veracode.com/mvsa/admin/installer/windows"},"Windows endpoint installer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://ui.analysiscenter.veracode.com/mvsa/admin/installer/linux"},"Linux endpoint installer"))),(0,i.kt)("p",null,"The endpoint installer simplifies the process of deploying endpoints and creates a service that runs the endpoint continuously until you stop it."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Related Concepts")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_installer_troubleshooting"},"Troubleshooting Configuration Errors in the ISM Endpoint Installer")))}u.isMDXComponent=!0}}]);