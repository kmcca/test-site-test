"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[66333],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},81811:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const a={title:"Using TLS with Veracode Integrations",slug:"/r/c_tls_support"},i=void 0,s={unversionedId:"guides/integrations/troubleshooting/c_tls_support",id:"guides/integrations/troubleshooting/c_tls_support",title:"Using TLS with Veracode Integrations",description:"For security reasons, Veracode APIs block connections that use TLS 1.0 or 1.1. This section explains how to avoid issues when connecting to Veracode using TLS.",source:"@site/docs/guides/04_integrations/09_troubleshooting/01_c_tls_support.md",sourceDirName:"guides/04_integrations/09_troubleshooting",slug:"/r/c_tls_support",permalink:"/km-docusaurus-test/r/c_tls_support",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Using TLS with Veracode Integrations",slug:"/r/c_tls_support"},sidebar:"tutorialSidebar",previous:{title:"Secure and Troubleshoot Integrations",permalink:"/km-docusaurus-test/r/r_troubleshoot"},next:{title:"Using SSL Certificates with Veracode Integrations",permalink:"/km-docusaurus-test/r/c_using_certificates"}},l={},u=[{value:"TLS Error Messages",id:"tls-error-messages",level:2}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"For security reasons, Veracode APIs block connections that use TLS 1.0 or 1.1. This section explains how to avoid issues when connecting to Veracode using TLS."),(0,o.kt)("p",null,"Veracode no longer supports integrations for Team Foundation Server 2010 and Visual Studio 2010, which do not support TLS 1.2. ",(0,o.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_static_overview"},"About Veracode Static Analysis")," continues to support applications compiled with Visual Studio 2003 and later."),(0,o.kt)("p",null,"To avoid connection issues, you must upgrade these ",(0,o.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_veracode_integrations"},"integrations")," to support .NET 4.5 and TLS 1.2:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},".NET wrapper/SDK"),(0,o.kt)("li",{parentName:"ul"},"Veracode Static for Visual Studio")),(0,o.kt)("p",null,"You must upgrade these integrations if you are using Java 1.7:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Java wrapper/SDK"),(0,o.kt)("li",{parentName:"ul"},"Veracode Static for Eclipse"),(0,o.kt)("li",{parentName:"ul"},"Veracode Static for IntelliJ"),(0,o.kt)("li",{parentName:"ul"},"Veracode Jenkins Plugin"),(0,o.kt)("li",{parentName:"ul"},"Veracode Integration for Jira"),(0,o.kt)("li",{parentName:"ul"},"Veracode TeamCity Plugin")),(0,o.kt)("p",null,"To support TLS 1.2 with Java 1.7, you must apply the Java Cryptographic Extension (JCE) Unlimited Strength Jurisdiction Policy to the JRE. You can download the JCE Unlimited Strength Jurisdiction Policy files from Oracle. Because Java 1.7 requires you to both patch the JRE and upgrade your Veracode integrations, Veracode recommends upgrading to Java 1.8 instead."),(0,o.kt)("h2",{id:"tls-error-messages"},"TLS Error Messages"),(0,o.kt)("p",null,"If you use an integration that attempts to connect over TLS 1.0 or 1.1, you may receive one of these error messages:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Received fatal alert: handshake_failure")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Peer not authenticated error")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"System.Net.WebException was unhandled. Message=The request was aborted: Could not create SSL/TLS secure channel")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"OpenSSL::SSL::SSLError: Received fatal alert: handshake_failure")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"The underlying connection was closed: An unexpected error occurred on a send.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Could not create SSL/TLS secure channel"))))}p.isMDXComponent=!0}}]);