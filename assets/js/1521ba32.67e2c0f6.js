"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2805],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=i.createContext({}),c=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return i.createElement(o.Provider,{value:t},e.children)},_={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,h=u["".concat(o,".").concat(d)]||u[d]||_[d]||a;return n?i.createElement(h,s(s({ref:t},l),{},{components:n})):i.createElement(h,s({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,s[1]=p;for(var c=2;c<a;c++)s[c]=n[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},10207:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>_,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var i=n(87462),r=(n(67294),n(3905));const a={title:"Viewing Pipeline Scan Details with the REST API",slug:"/r/Get_Pipeline_Scan_Details_with_the_REST_API"},s=void 0,p={unversionedId:"guides/apis/rest_apis/pipeline_scan_rest_apis/pipeline_scan_api_view_details",id:"guides/apis/rest_apis/pipeline_scan_rest_apis/pipeline_scan_api_view_details",title:"Viewing Pipeline Scan Details with the REST API",description:"Use this command to obtain scan details for a Pipeline Scan:",source:"@site/docs/guides/15_apis/04_rest_apis/12_pipeline_scan_rest_apis/05_pipeline_scan_api_view_details.md",sourceDirName:"guides/15_apis/04_rest_apis/12_pipeline_scan_rest_apis",slug:"/r/Get_Pipeline_Scan_Details_with_the_REST_API",permalink:"/km-docusaurus-test/r/Get_Pipeline_Scan_Details_with_the_REST_API",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Viewing Pipeline Scan Details with the REST API",slug:"/r/Get_Pipeline_Scan_Details_with_the_REST_API"},sidebar:"tutorialSidebar",previous:{title:"Starting a Pipeline Scan with the REST API",permalink:"/km-docusaurus-test/r/Starting_a_Pipeline_Scan_with_the_REST_API"},next:{title:"Viewing Pipeline Scan Findings with the REST API",permalink:"/km-docusaurus-test/r/Obtaining_Pipeline_Scan_Findings_with_the_REST_API"}},o={},c=[],l={toc:c};function _(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Use this command to obtain scan details for a Pipeline Scan:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'http --auth-type=veracode_hmac GET "https://api.veracode.com/pipeline_scan/v1/scans/{scan_id}"\n')),(0,r.kt)("p",null,"Obtain the ",(0,r.kt)("inlineCode",{parentName:"p"},"scan_id")," from the response of the POST to the ",(0,r.kt)("inlineCode",{parentName:"p"},"/scans")," endpoint as described in ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Configuring_a_Pipeline_Scan_with_the_REST_API"},"Configuring a Pipeline Scan with the REST API"),"."),(0,r.kt)("p",null,"This command checks the status of a running scan. ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Obtaining_Pipeline_Scan_Findings_with_the_REST_API"},"Retrieve available results")," if the ",(0,r.kt)("inlineCode",{parentName:"p"},"scan_status")," value is ",(0,r.kt)("inlineCode",{parentName:"p"},'"SUCCESS"'),"."))}_.isMDXComponent=!0}}]);