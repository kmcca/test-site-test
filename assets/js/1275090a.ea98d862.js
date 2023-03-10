"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[64723],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(r),f=n,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||i;return r?a.createElement(d,o(o({ref:t},p),{},{components:r})):a.createElement(d,o({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},29696:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const i={title:"Obtain a Certificate Using Chrome",slug:"/r/t_obtain_certificate_chrome"},o=void 0,c={unversionedId:"guides/integrations/troubleshooting/using_ssl_certs/t_obtain_certificate_chrome",id:"guides/integrations/troubleshooting/using_ssl_certs/t_obtain_certificate_chrome",title:"Obtain a Certificate Using Chrome",description:"You can use Google Chrome to obtain an SSL certificate for accessing Veracode.",source:"@site/docs/guides/04_integrations/09_troubleshooting/02_using_ssl_certs/01_t_obtain_certificate_chrome.md",sourceDirName:"guides/04_integrations/09_troubleshooting/02_using_ssl_certs",slug:"/r/t_obtain_certificate_chrome",permalink:"/km-docusaurus-test/r/t_obtain_certificate_chrome",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Obtain a Certificate Using Chrome",slug:"/r/t_obtain_certificate_chrome"},sidebar:"tutorialSidebar",previous:{title:"Using SSL Certificates with Veracode Integrations",permalink:"/km-docusaurus-test/r/c_using_certificates"},next:{title:"Obtain a Certificate Using Internet Explorer",permalink:"/km-docusaurus-test/r/t_obtain_certificate_ie"}},s={},l=[],p={toc:l};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"You can use Google Chrome to obtain an SSL certificate for accessing Veracode."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Before you begin:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You have a ",(0,n.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/c_about_veracode_accounts"},"Veracode account")," for logging in to Veracode."),(0,n.kt)("li",{parentName:"ul"},"If you are using an SSL inspection device, you have added the Veracode URLs, such as ",(0,n.kt)("inlineCode",{parentName:"li"},"analysiscenter.veracode.com")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"api.veracode.com"),", to your ",(0,n.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/IP_addresses"},"allowlist"),".")),(0,n.kt)("p",null,"If you have obtained the certificate from your IT team, you can proceed to ",(0,n.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/t_import_certificate"},"import the certificate"),". This procedure uses an example GoDaddy certificate, but you may see different certificates depending on your environment."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"To complete this task:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Log in to the Veracode Platform at ",(0,n.kt)("a",{parentName:"p",href:"https://analysiscenter.veracode.com"},"https://analysiscenter.veracode.com"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the browser address bar, click the lock icon. Then, click ",(0,n.kt)("strong",{parentName:"p"},"Certificate"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the Certificate window, click the ",(0,n.kt)("strong",{parentName:"p"},"Certification Path")," tab.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select the certificate at the top of the list. Then, click ",(0,n.kt)("strong",{parentName:"p"},"View Certificate")," to open the root certificate in a separate window.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click the ",(0,n.kt)("strong",{parentName:"p"},"Details")," tab in the Certificate window. Then, click ",(0,n.kt)("strong",{parentName:"p"},"Copy to File"),"."),(0,n.kt)("p",{parentName:"li"},"The Certificate Export Wizard opens.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Next"),", then select ",(0,n.kt)("strong",{parentName:"p"},"DER encoded binary X.509 (.CER)"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Next"),", then enter a name for the root certificate.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Next"),"."),(0,n.kt)("p",{parentName:"li"},"The Certificate Export Wizard shows the result of the certificate exported to your hard drive.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Finish"),"."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Next steps:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/c_identify_trust_store"},"Identify the relevant TrustStore")," for your Veracode integration."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/t_import_certificate"},"Import the certificate into the Java certificate trust"),".")))}u.isMDXComponent=!0}}]);