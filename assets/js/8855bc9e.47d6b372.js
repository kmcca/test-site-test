"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[42952],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(r),m=a,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},56575:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=r(87462),a=(r(67294),r(3905));const o={title:"Troubleshooting GRC Integrations",slug:"/r/Troubleshooting_GRC_Integrations"},i=void 0,l={unversionedId:"guides/integrations/troubleshooting/troubleshoot_apis_integrations/r_troubleshooting_grc",id:"guides/integrations/troubleshooting/troubleshoot_apis_integrations/r_troubleshooting_grc",title:"Troubleshooting GRC Integrations",description:"This section helps you remedy common problems and understand how better to use the Archer API for GRC integrations.",source:"@site/docs/guides/04_integrations/09_troubleshooting/03_troubleshoot_apis_integrations/04_r_troubleshooting_grc.md",sourceDirName:"guides/04_integrations/09_troubleshooting/03_troubleshoot_apis_integrations",slug:"/r/Troubleshooting_GRC_Integrations",permalink:"/km-docusaurus-test/r/Troubleshooting_GRC_Integrations",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Troubleshooting GRC Integrations",slug:"/r/Troubleshooting_GRC_Integrations"},sidebar:"tutorialSidebar",previous:{title:"Troubleshooting Build and Release Management System Integrations",permalink:"/km-docusaurus-test/r/Troubleshooting_Build_and_Release_Management_System_Integrations"},next:{title:"Troubleshooting Greenlight",permalink:"/km-docusaurus-test/r/Troubleshooting_Veracode_Greenlight"}},s={},d=[],c={toc:d};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This section helps you remedy common problems and understand how better to use the Archer API for GRC integrations."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Issue"),(0,a.kt)("th",{parentName:"tr",align:null},"Solution"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Invalid IP address range."),(0,a.kt)("td",{parentName:"tr",align:null},"Ensure that you are attempting to connect from an IP address that is allowed by the IP address restrictions for the login you are using. Veracode APIs and integrations require access to ",(0,a.kt)("inlineCode",{parentName:"td"},"analysiscenter.veracode.com")," and ",(0,a.kt)("inlineCode",{parentName:"td"},"api.veracode.com"),". Contact your IT team to ensure these domains are on the allowlist for your organization and that there is one-way communication on port 443 to ",(0,a.kt)("inlineCode",{parentName:"td"},"api.veracode.com"),". Refer to the ",(0,a.kt)("a",{parentName:"td",href:"https://docs.veracode.com/r/IP_addresses"},"complete list of domains and IP addresses to add to your allowlist"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Invalid login type."),(0,a.kt)("td",{parentName:"tr",align:null},"Ensure that you are providing credentials for an API class login with the Archer API role.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Invalid or null token."),(0,a.kt)("td",{parentName:"tr",align:null},"Each login account is limited to using five tokens at a time to download Archer reports. The last five generated tokens are valid. All tokens expire after 30 days whether they are used or not. Using invalid tokens returns HTTP status code 403.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Incorrect date format."),(0,a.kt)("td",{parentName:"tr",align:null},"Ensure the date format for the ",(0,a.kt)("inlineCode",{parentName:"td"},"date_from")," and ",(0,a.kt)("inlineCode",{parentName:"td"},"date_to")," fields is dd-mm-yyyy.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"The report is not ready."),(0,a.kt)("td",{parentName:"tr",align:null},"If you try to call ",(0,a.kt)("a",{parentName:"td",href:"https://docs.veracode.com/r/r_downloadarcher"},(0,a.kt)("inlineCode",{parentName:"a"},"downloadarcherreport.do"))," before ",(0,a.kt)("a",{parentName:"td",href:"https://docs.veracode.com/r/r_generatearcher"},(0,a.kt)("inlineCode",{parentName:"a"},"generatearcherreport.do"))," has completed, you receive HTTP status code 204 to indicate no content is available. Try to download the report at a later time. After an excessively long time, if the Veracode Platform does not return the report, contact Veracode Technical Support.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"The results file is too large."),(0,a.kt)("td",{parentName:"tr",align:null},"When attempting to fetch the Archer feed for a large number of applications at the same time, the Veracode Platform may return HTTP status code 500. Veracode recommends that you fetch the data using the optional arguments for the Archer API to limit the scope of the data being pulled, for example using ",(0,a.kt)("inlineCode",{parentName:"td"},"scan_type")," or a date range. After all the historical data is in place, use one of these ",(0,a.kt)("inlineCode",{parentName:"td"},"period")," arguments to pull data on a scheduled basis: ",(0,a.kt)("inlineCode",{parentName:"td"},"yesterday"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"last_week"),", or ",(0,a.kt)("inlineCode",{parentName:"td"},"last_month"),".",(0,a.kt)("br",null),"Alternatively, you can use the asynchronous calls ",(0,a.kt)("a",{parentName:"td",href:"https://docs.veracode.com/r/r_generatearcher"},(0,a.kt)("inlineCode",{parentName:"a"},"generatearcherreport.do"))," and ",(0,a.kt)("a",{parentName:"td",href:"https://docs.veracode.com/r/r_downloadarcher"},(0,a.kt)("inlineCode",{parentName:"a"},"downloadarcherreport.do")),".")))))}u.isMDXComponent=!0}}]);