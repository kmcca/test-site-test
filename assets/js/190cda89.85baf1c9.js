"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[36147],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,y=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},42535:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={title:"Troubleshooting Configuration Errors in the ISM Endpoint Installer",slug:"/r/c_installer_troubleshooting"},i=void 0,l={unversionedId:"guides/dynamic_analysis/ism/troubleshooting_configuration_ism_endpoint_installer",id:"guides/dynamic_analysis/ism/troubleshooting_configuration_ism_endpoint_installer",title:"Troubleshooting Configuration Errors in the ISM Endpoint Installer",description:"This table provides guidance for resolving errors you may encounter using the ISM endpoint installer. If an issue persists after attempting the solution, contact Veracode Technical Support.",source:"@site/docs/guides/10_dynamic_analysis/11_ism/15_troubleshooting_configuration_ism_endpoint_installer.md",sourceDirName:"guides/10_dynamic_analysis/11_ism",slug:"/r/c_installer_troubleshooting",permalink:"/km-docusaurus-test/r/c_installer_troubleshooting",draft:!1,tags:[],version:"current",sidebarPosition:15,frontMatter:{title:"Troubleshooting Configuration Errors in the ISM Endpoint Installer",slug:"/r/c_installer_troubleshooting"},sidebar:"tutorialSidebar",previous:{title:"ISM Endpoint Release History",permalink:"/km-docusaurus-test/r/c_ism_endpoint_history"},next:{title:"Troubleshooting ISM",permalink:"/km-docusaurus-test/r/c_troubleshooting_endpoints"}},s={},u=[],c={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This table provides guidance for resolving errors you may encounter using the ISM endpoint installer. If an issue persists after attempting the solution, contact Veracode Technical Support."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Issue"),(0,o.kt)("th",{parentName:"tr",align:null},"Solution"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Invalid installation folder"),(0,o.kt)("td",{parentName:"tr",align:null},"Verify that the location specified in the Installation Folder field is either an empty folder that you created or a nonexistent folder that the installer creates.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Invalid Java home location"),(0,o.kt)("td",{parentName:"tr",align:null},"Verify that the Java Home field points to a valid Java Runtime Environment ","(","JRE",")"," or Java Development Kit ","(","JDK",")"," and that your machine uses Java version 1.8 or later. Veracode recommends using Oracle Java SE Runtime Environment 8u212.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Proxy settings errors"),(0,o.kt)("td",{parentName:"tr",align:null},"Verify that the proxy server is accessible from the machine running the installer and does not require more authentication in addition to username and password. The installer supports only basic proxy authentication.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Failure to authenticate endpoint key"),(0,o.kt)("td",{parentName:"tr",align:null},"Copy the endpoint key to your clipboard directly from the Veracode Platform. To copy the key, go to the gateway page, click the Actions menu for the endpoint you are installing, and select ",(0,o.kt)("strong",{parentName:"td"},"Copy Endpoint Key"),". ",(0,o.kt)("br",null),(0,o.kt)("br",null),"If you still encounter an error, verify that you have not already installed an endpoint with that key on another machine.")))))}p.isMDXComponent=!0}}]);