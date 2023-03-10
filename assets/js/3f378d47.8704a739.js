"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[40262],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>d});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),u=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=u(e.components);return a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=u(t),d=r,y=f["".concat(c,".").concat(d)]||f[d]||p[d]||i;return t?a.createElement(y,o(o({ref:n},l),{},{components:t})):a.createElement(y,o({ref:n},l))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},12482:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=t(87462),r=(t(67294),t(3905));const i={title:"Scan APIs",slug:"/r/About_Veracode_API_Scanning"},o=void 0,s={unversionedId:"guides/dynamic_analysis/da_scan_apis/README",id:"guides/dynamic_analysis/da_scan_apis/README",title:"Scan APIs",description:"You use API Scanning to perform a Dynamic Analysis of your REST APIs. Veracode crawls and analyzes the API endpoints to assess the security posture of the API. The results identify the vulnerabilities you might need to fix.",source:"@site/docs/guides/10_dynamic_analysis/02_da_scan_apis/README.md",sourceDirName:"guides/10_dynamic_analysis/02_da_scan_apis",slug:"/r/About_Veracode_API_Scanning",permalink:"/km-docusaurus-test/r/About_Veracode_API_Scanning",draft:!1,tags:[],version:"current",frontMatter:{title:"Scan APIs",slug:"/r/About_Veracode_API_Scanning"},sidebar:"tutorialSidebar",previous:{title:"Review URL Scan Results for a Web Application",permalink:"/km-docusaurus-test/r/c_was_url_results"},next:{title:"About API Scanning and API Specifications",permalink:"/km-docusaurus-test/r/About_API_Scanning_and_API_Specifications"}},c={},u=[{value:"About Licensing for API Scanning",id:"about-licensing-for-api-scanning",level:2}],l={toc:u};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You use API Scanning to perform a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_was_intro"},"Dynamic Analysis")," of your REST APIs. Veracode crawls and analyzes the API endpoints to assess the security posture of the API. The results identify the vulnerabilities you might need to fix."),(0,r.kt)("p",null,"In the Veracode Platform, you create a new Dynamic Analysis and upload or select the API specification you want to analyze. An analysis can contain a maximum of 250 specifications."),(0,r.kt)("p",null,"If you want to try API Scanning, but you do not have an OpenAPI 3.0 or 2.0 specification, you can create an HTTP Archive (HAR) file using several free tools, such as ",(0,r.kt)("a",{parentName:"p",href:"https://toolbox.googleapps.com/apps/har_analyzer/"},"Chrome Developer Tools"),". To reduce extraneous traffic, such as third-party traffic, you can select ",(0,r.kt)("strong",{parentName:"p"},"Fetch/XHR")," to apply filtering before exporting the HAR."),(0,r.kt)("p",null,"To learn more about API specification support and how API Scanning processes these files during analysis, see ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/About_API_Scanning_and_API_Specifications"},"About API Scanning and API Specifications"),"."),(0,r.kt)("h2",{id:"about-licensing-for-api-scanning"},"About Licensing for API Scanning"),(0,r.kt)("p",null,"API Scanning requires a Dynamic Analysis license. Veracode uses target URLs in your license to determine the number of API specifications you can scan. Each target URL equates to a unique API server defined in your specifications. When you upload a specification in the Veracode Platform, it imports the URLs of the defined API servers."),(0,r.kt)("p",null,"During a specification scan, Veracode detects the target API server and deducts it from the number of target URLs available in your license. If a specification has multiple servers defined, you can select the server you want to use when configuring the scan. If you scan a specification using a defined server and then scan that same specification using a different server, Veracode treats both servers as separate target URLs and deducts both target URLs from your license."),(0,r.kt)("p",null,"Ensure your Dynamic Analysis license has an adequate number of target URLs for the number of API specifications you want to scan. To obtain or change a Dynamic Analysis license, contact your Veracode sales representative."))}p.isMDXComponent=!0}}]);