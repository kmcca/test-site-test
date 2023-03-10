"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[30703],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,g=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},21129:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={title:"ISM Diagnostic Tool Parameters",slug:"/r/r_ism_diagnostic_parameters"},o=void 0,s={unversionedId:"guides/dynamic_analysis/ism/test_ism_endpoint_diagnostic/ism_diagnostic_parameters",id:"guides/dynamic_analysis/ism/test_ism_endpoint_diagnostic/ism_diagnostic_parameters",title:"ISM Diagnostic Tool Parameters",description:"You can set your preferred parameters for the Veracode Internal Scanning Management (ISM) endpoint diagnostic tool in your application.properties file to avoid having to set them every time you run a test.",source:"@site/docs/guides/10_dynamic_analysis/11_ism/23_test_ism_endpoint_diagnostic/02_ism_diagnostic_parameters.md",sourceDirName:"guides/10_dynamic_analysis/11_ism/23_test_ism_endpoint_diagnostic",slug:"/r/r_ism_diagnostic_parameters",permalink:"/km-docusaurus-test/r/r_ism_diagnostic_parameters",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"ISM Diagnostic Tool Parameters",slug:"/r/r_ism_diagnostic_parameters"},sidebar:"tutorialSidebar",previous:{title:"Understanding ISM Diagnostic Tool Results",permalink:"/km-docusaurus-test/r/c_ism_diagnostic_results"},next:{title:"Manage Findings",permalink:"/km-docusaurus-test/r/review_main"}},l={},c=[],p={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can set your preferred parameters for the Veracode Internal Scanning Management (ISM) endpoint diagnostic tool in your ",(0,r.kt)("inlineCode",{parentName:"p"},"application.properties")," file to avoid having to set them every time you run a test."),(0,r.kt)("p",null,"This table describes the parameters you can define for diagnosing ISM connection issues."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"diagnosticUrl")),(0,r.kt)("td",{parentName:"tr",align:null},"Destination URL that you want to scan with Veracode Dynamic Analysis.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"diagnosticTunnelBatchSizeKB")),(0,r.kt)("td",{parentName:"tr",align:null},"Size, in kilobytes, of the data package sent to the Veracode gateway. Default is ",(0,r.kt)("inlineCode",{parentName:"td"},"1000"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"diagnosticTunnelBatchCount")),(0,r.kt)("td",{parentName:"tr",align:null},"Number of times the endpoint resends the test data to the Veracode gateway. Default is ",(0,r.kt)("inlineCode",{parentName:"td"},"10"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"diagnosticUrlBatchCount")),(0,r.kt)("td",{parentName:"tr",align:null},"Number of times the endpoint attempts to connect to the destination URL. Default is ",(0,r.kt)("inlineCode",{parentName:"td"},"10"),".")))),(0,r.kt)("p",null,"This example ",(0,r.kt)("inlineCode",{parentName:"p"},"application.properties")," file includes all the diagnostic tool parameters:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"#application key\ntoken = $TOKEN$\n#gateway host name\ngateway = $GATEWAY$\nwebsocketProtocol = wss\nwsendpoint = /wsendpoint\nsocketConnectionTimeoutMs = 5000\nsocketReadTimeoutMs = 5000\ndiagnosticUrl = http://www.veracode.com \ndiagnosticTunnelBatchSizeKB = 500\ndiagnosticTunnelBatchCount = 5\ndiagnosticUrlBatchCount = 5\n")))}d.isMDXComponent=!0}}]);