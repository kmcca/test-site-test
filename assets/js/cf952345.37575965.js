"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[57733],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>d});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),c=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=c(e.components);return a.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},f=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(t),d=n,m=f["".concat(s,".").concat(d)]||f[d]||u[d]||o;return t?a.createElement(m,i(i({ref:r},p),{},{components:t})):a.createElement(m,i({ref:r},p))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=f;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3724:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=t(87462),n=(t(67294),t(3905));const o={title:"Flaw Report XML API",slug:"/r/c_about_flawreport"},i=void 0,l={unversionedId:"guides/apis/xml_apis/flaw_report_xml_apis/README",id:"guides/apis/xml_apis/flaw_report_xml_apis/README",title:"Flaw Report XML API",description:"The Flaw Report API has two calls that enable you to generate and download a summarized history of all findings for one, several, or all applications.",source:"@site/docs/guides/15_apis/05_xml_apis/07_flaw_report_xml_apis/README.md",sourceDirName:"guides/15_apis/05_xml_apis/07_flaw_report_xml_apis",slug:"/r/c_about_flawreport",permalink:"/km-docusaurus-test/r/c_about_flawreport",draft:!1,tags:[],version:"current",frontMatter:{title:"Flaw Report XML API",slug:"/r/c_about_flawreport"},sidebar:"tutorialSidebar",previous:{title:"Dynamic XML API",permalink:"/km-docusaurus-test/r/r_getdynamicflaws"},next:{title:"Flaw Report XML APIs Quick Reference",permalink:"/km-docusaurus-test/r/Flaw_Report_XML_APIs_Quick_Reference"}},s={},c=[{value:"Prerequisites",id:"prerequisites",level:2}],p={toc:c};function u(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The Flaw Report API has two calls that enable you to generate and download a summarized history of all findings for one, several, or all applications."),(0,n.kt)("p",null,"Veracode provides this API to simplify the process of identifying the current status, such as new, fixed, open, or reopened, of all the findings for a given application by returning one record per each finding discovered in the application history. The new calls are designed for integrating with external dashboards for vulnerability management."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"An ",(0,n.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/c_about_veracode_accounts"},"API service account")," with the Archer Report API role."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/c_api_credentials3"},"Veracode API credentials"),"."),(0,n.kt)("li",{parentName:"ul"},"Ensure you access the APIs with the ",(0,n.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs"},"domain for your region"),".")))}u.isMDXComponent=!0}}]);