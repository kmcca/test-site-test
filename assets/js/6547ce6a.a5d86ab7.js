"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[23149],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||s;return r?n.createElement(f,o(o({ref:t},l),{},{components:r})):n.createElement(f,o({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<s;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7882:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const s={title:"Security Labs REST API",slug:"/r/Using_the_Security_Labs_APIs"},o=void 0,i={unversionedId:"guides/apis/rest_apis/sec_labs_rest_apis/README",id:"guides/apis/rest_apis/sec_labs_rest_apis/README",title:"Security Labs REST API",description:"You can use the Veracode Security Labs APIs to manage users and teams. You can also get reports of user onboarding analytics and lesson progress.",source:"@site/docs/guides/15_apis/04_rest_apis/15_sec_labs_rest_apis/README.md",sourceDirName:"guides/15_apis/04_rest_apis/15_sec_labs_rest_apis",slug:"/r/Using_the_Security_Labs_APIs",permalink:"/km-docusaurus-test/r/Using_the_Security_Labs_APIs",draft:!1,tags:[],version:"current",frontMatter:{title:"Security Labs REST API",slug:"/r/Using_the_Security_Labs_APIs"},sidebar:"tutorialSidebar",previous:{title:"About Data Deduplication in SBOMs for Application Profiles with Linked Projects",permalink:"/km-docusaurus-test/r/About_Data_Deduplication_in_SBOMs_for_Application_Profiles_with_Linked_Projects"},next:{title:"Summary Report REST API",permalink:"/km-docusaurus-test/r/c_rest_summary_report_intro"}},c={},u=[{value:"Permissions and Authentication",id:"permissions-and-authentication",level:2}],l={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can use the Veracode Security Labs APIs to manage users and teams. You can also get reports of user onboarding analytics and lesson progress."),(0,a.kt)("h2",{id:"permissions-and-authentication"},"Permissions and Authentication"),(0,a.kt)("p",null,"Before you can use these APIs, you must have Security Labs API credentials. These are not the same API credentials you generate in the Veracode Platform."),(0,a.kt)("p",null,"If you have the Security Labs administrator role, you can log in to Security Labs and generate API credentials on the Account Settings page. If you do not see the option for generating API credentials, contact Veracode Technical Support."),(0,a.kt)("p",null,"The complete API documentation is available from ",(0,a.kt)("a",{parentName:"p",href:"https://apidocs.hunter2.com/"},"Security Labs APIs documentation"),"."))}p.isMDXComponent=!0}}]);