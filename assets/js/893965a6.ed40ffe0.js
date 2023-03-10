"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[69482],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),y=r,d=m["".concat(o,".").concat(y)]||m[y]||p[y]||i;return n?a.createElement(d,s(s({ref:t},u),{},{components:n})):a.createElement(d,s({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},48676:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={author:["Mike Howes"],"ft:originID":"View_Dynamic_Analysis_Results","ft:lang":"en-US",title:"Review Dynamic Analysis Results",slug:"/r/View_Dynamic_Analysis_Results",media_dir:"images/"},s=void 0,l={unversionedId:"guides/dynamic_analysis/da_scan_web/da_web_reviewing_results/README",id:"guides/dynamic_analysis/da_scan_web/da_web_reviewing_results/README",title:"Review Dynamic Analysis Results",description:"You can view the results for a Dynamic Analysis in the Triage Flaws view of the Veracode Platform.",source:"@site/docs/guides/10_dynamic_analysis/01_da_scan_web/04_da_web_reviewing_results/README.md",sourceDirName:"guides/10_dynamic_analysis/01_da_scan_web/04_da_web_reviewing_results",slug:"/r/View_Dynamic_Analysis_Results",permalink:"/km-docusaurus-test/r/View_Dynamic_Analysis_Results",draft:!1,tags:[],version:"current",frontMatter:{author:["Mike Howes"],"ft:originID":"View_Dynamic_Analysis_Results","ft:lang":"en-US",title:"Review Dynamic Analysis Results",slug:"/r/View_Dynamic_Analysis_Results",media_dir:"images/"},sidebar:"tutorialSidebar",previous:{title:"Video: Configure a Veracode Dynamic Analysis for Internal Scanning",permalink:"/km-docusaurus-test/r/c_was_video_configure_internal_scanning"},next:{title:"Video: View Dynamic Analysis Results of a Web Application",permalink:"/km-docusaurus-test/r/c_video_was_results"}},o={},c=[],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can view the results for a Dynamic Analysis in the Triage Flaws view of the Veracode Platform."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Before you begin:")),(0,r.kt)("p",null,"You must have the Creator, Reviewer, or Security Lead ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_role_permissions"},"role")," to be able to view the results of a Dynamic Analysis, unless the results are ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/About_Dynamic_Analysis_Application_Linking"},"linked to an application")," that you have permission to view."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"To complete this task:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the Veracode Platform, select ",(0,r.kt)("strong",{parentName:"p"},"Scans & Analysis")," ",">"," ",(0,r.kt)("strong",{parentName:"p"},"Dynamic Analysis"),"."),(0,r.kt)("p",{parentName:"li"},"The All Dynamic Analyses page opens.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Locate the row for the Dynamic Analysis for which you want to view the results.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From the Actions menu at the end of the row, select ",(0,r.kt)("strong",{parentName:"p"},"View Analysis Results"),"."),(0,r.kt)("p",{parentName:"li"},"The results open in the Triage Flaws view of the selected Dynamic Analysis, listing all the vulnerabilities found and the details about the vulnerabilities.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the Triage Flaws view, review all the details of each vulnerability, including the URL, vulnerability path, and CWE information."))))}p.isMDXComponent=!0}}]);