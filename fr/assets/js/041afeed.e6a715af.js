"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7050],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=o,g=c["".concat(l,".").concat(m)]||c[m]||p[m]||i;return n?r.createElement(g,a(a({ref:t},d),{},{components:n})):r.createElement(g,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2489:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const i={"ft:title":"ISM Endpoint Release History","ft:prettyUrl":"c_ism_endpoint_history"},a=void 0,s={unversionedId:"guides/ism/ism_endpoint_release_history",id:"guides/ism/ism_endpoint_release_history",title:"ism_endpoint_release_history",description:"View the list of changes included in the latest versions of the Veracode Internal Scanning Management endpoint.",source:"@site/docs/guides/ism/14_ism_endpoint_release_history.md",sourceDirName:"guides/ism",slug:"/guides/ism/ism_endpoint_release_history",permalink:"/kmcca/km-docusaurus-test/fr/docs/guides/ism/ism_endpoint_release_history",draft:!1,tags:[],version:"current",sidebarPosition:14,frontMatter:{"ft:title":"ISM Endpoint Release History","ft:prettyUrl":"c_ism_endpoint_history"},sidebar:"tutorialSidebar",previous:{title:"about_ism_gateway_retention",permalink:"/kmcca/km-docusaurus-test/fr/docs/guides/ism/about_ism_gateway_retention"},next:{title:"troubleshooting_configuration_ism_endpoint_installer",permalink:"/kmcca/km-docusaurus-test/fr/docs/guides/ism/troubleshooting_configuration_ism_endpoint_installer"}},l={},u=[{value:"22.1.10 - Released on January 25, 2022",id:"22110---released-on-january-25-2022",level:3},{value:"21.12.13 - Released on December 21, 2021",id:"211213---released-on-december-21-2021",level:3},{value:"20.8.5 - Released on August 10, 2020",id:"2085---released-on-august-10-2020",level:3},{value:"20.3.5 - Released on March 9, 2020",id:"2035---released-on-march-9-2020",level:3}],d={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"View the list of changes included in the latest versions of the Veracode Internal Scanning Management endpoint."),(0,o.kt)("p",null,"If you are logged in to the Veracode Platform, you can ",(0,o.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_endpoint_installer"},"download the installer")," to update your endpoint to the latest version."),(0,o.kt)("h3",{id:"22110---released-on-january-25-2022"},"22.1.10 - Released on January 25, 2022"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Endpoint upgraded to Log4j 2.17.1 to address security findings."),(0,o.kt)("li",{parentName:"ul"},"Improved thread management for connection stability."),(0,o.kt)("li",{parentName:"ul"},"Advanced memory usage diagnostics.")),(0,o.kt)("h3",{id:"211213---released-on-december-21-2021"},"21.12.13 - Released on December 21, 2021"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Endpoint upgraded to Log4j 2.17 to address known vulnerabilities CVE-2021-44228 and CVE-2021-45046."),(0,o.kt)("li",{parentName:"ul"},"Additional libraries upgraded to address security findings.")),(0,o.kt)("h3",{id:"2085---released-on-august-10-2020"},"20.8.5 - Released on August 10, 2020"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Endpoint now supports not resolving the hostname when accessing the ISM gateway via proxy. This support enables you to only allow the gateway hostname for outbound HTTPS calls."),(0,o.kt)("li",{parentName:"ul"},"Endpoint now supports not resolving the hostname when accessing scanned URLs via proxy. This support simplifies proxy configuration if you do not want to access external sites, such as Okta, during the scan."),(0,o.kt)("li",{parentName:"ul"},"Improved interface for configuring a proxy for the endpoint installer."),(0,o.kt)("li",{parentName:"ul"},"Endpoint installer supports configuring hostname resolution properties."),(0,o.kt)("li",{parentName:"ul"},"Java WebSocket library for the endpoint upgraded to version 1.5.1."),(0,o.kt)("li",{parentName:"ul"},"Endpoint supports specifying non-default network interface via endpoint properties, including the option to see a list of available network interfaces."),(0,o.kt)("li",{parentName:"ul"},"Endpoint process name on Linux includes a Veracode identifier."),(0,o.kt)("li",{parentName:"ul"},"Improved endpoint logging.")),(0,o.kt)("h3",{id:"2035---released-on-march-9-2020"},"20.3.5 - Released on March 9, 2020"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Endpoint installer supports client-side Java and 32-bit Java."),(0,o.kt)("li",{parentName:"ul"},"Endpoint installer supports proxy gateway-only property."),(0,o.kt)("li",{parentName:"ul"},"Endpoint supports running diagnostics through a DSE tunnel."),(0,o.kt)("li",{parentName:"ul"},"Endpoint supports new advanced diagnostics options."),(0,o.kt)("li",{parentName:"ul"},"Consolidated direct diagnostic options and diagnostics options that run through a DSE tunnel."),(0,o.kt)("li",{parentName:"ul"},"The ISM service from the Windows installer runs under the less privileged LocalService account instead of LocalSystem."),(0,o.kt)("li",{parentName:"ul"},"Proxy configuration in the installer no longer requires web access to ",(0,o.kt)("inlineCode",{parentName:"li"},"veracode.com"),"."),(0,o.kt)("li",{parentName:"ul"},"Resolved issue with property merge in the endpoint installer."),(0,o.kt)("li",{parentName:"ul"},"Improved endpoint memory management and ",(0,o.kt)("inlineCode",{parentName:"li"},"out of memory")," protection.")))}p.isMDXComponent=!0}}]);