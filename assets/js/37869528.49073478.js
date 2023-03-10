"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[55710],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(r),f=a,m=d["".concat(i,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(m,s(s({ref:t},l),{},{components:r})):n.createElement(m,s({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},95439:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={title:"Calling the Status of Veracode Services Endpoint",slug:"/r/Calling_the_Status_of_Veracode_Services_Endpoint"},s=void 0,c={unversionedId:"guides/admin/checking_status_veracode_services/calling_status_services_endpoint",id:"guides/admin/checking_status_veracode_services/calling_status_services_endpoint",title:"Calling the Status of Veracode Services Endpoint",description:"You can call an endpoint to retrieve the status information on this status page//status.veracode.com/.",source:"@site/docs/guides/14_admin/07_checking_status_veracode_services/01_calling_status_services_endpoint.md",sourceDirName:"guides/14_admin/07_checking_status_veracode_services",slug:"/r/Calling_the_Status_of_Veracode_Services_Endpoint",permalink:"/km-docusaurus-test/r/Calling_the_Status_of_Veracode_Services_Endpoint",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Calling the Status of Veracode Services Endpoint",slug:"/r/Calling_the_Status_of_Veracode_Services_Endpoint"},sidebar:"tutorialSidebar",previous:{title:"Checking the Status of Veracode Services",permalink:"/km-docusaurus-test/r/c_about_site_status"},next:{title:"Access the License Consumption Reports",permalink:"/km-docusaurus-test/r/Access_the_License_Consumption_Reports"}},i={},u=[],l={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can call an endpoint to retrieve the status information on this status page: ",(0,a.kt)("a",{parentName:"p",href:"http://status.veracode.com/"},"http://status.veracode.com/"),"."),(0,a.kt)("p",null,"Use this command to get the current status of Veracode services:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'http GET "https://api.status.veracode.com/status"\n')),(0,a.kt)("p",null,"You can also use this cURL command to get the current status of Veracode services:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'curl "https://api.status.veracode.com/status"\n')))}p.isMDXComponent=!0}}]);