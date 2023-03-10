"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[445],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),m=a,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},23258:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={author:["Mike Howes"],"ft:originID":"ide_integrations","ft:lang":"en-US",title:"Use Veracode in Your IDE",slug:"/r/IDEs",media_dir:"images/"},i=void 0,s={unversionedId:"guides/ides/README",id:"guides/ides/README",title:"Use Veracode in Your IDE",description:"Before checking in your code, you can start a scan, review security findings and triage the results, all from within your IDE.",source:"@site/docs/guides/05_ides/README.md",sourceDirName:"guides/05_ides",slug:"/r/IDEs",permalink:"/km-docusaurus-test/r/IDEs",draft:!1,tags:[],version:"current",frontMatter:{author:["Mike Howes"],"ft:originID":"ide_integrations","ft:lang":"en-US",title:"Use Veracode in Your IDE",slug:"/r/IDEs",media_dir:"images/"},sidebar:"tutorialSidebar",previous:{title:"Troubleshooting Ticketing Integrations",permalink:"/km-docusaurus-test/r/Troubleshooting_Ticketing_Integrations"},next:{title:"IDE Plugins",permalink:"/km-docusaurus-test/r/c_ide_intro"}},c={},l=[{value:"Static Analysis and SCA Plugins",id:"static-analysis-and-sca-plugins",level:2},{value:"Greenlight Plugins",id:"greenlight-plugins",level:2},{value:"Mobile Applications",id:"mobile-applications",level:2}],u={toc:l};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Before checking in your code, you can start a scan, review security findings and triage the results, all from within your IDE."),(0,a.kt)("h2",{id:"static-analysis-and-sca-plugins"},"Static Analysis and SCA Plugins"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/api_eclipse"},"Eclipse")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/api_intellij"},"IntelliJ and Android Studio")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/About_Veracode_Static_for_Visual_Studio_New"},"Visual Studio (New)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/c_title_VS"},"Visual Studio (Legacy)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/Veracode_SCA_Scan_for_VS_Code?tocId=5IJQaxF2Zyw1nj7MyEvtlQ"},"VS Code"))),(0,a.kt)("h2",{id:"greenlight-plugins"},"Greenlight Plugins"),(0,a.kt)("p",null,"To view and fix flaws directly in your code, see ",(0,a.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_master_greenlight"},"Veracode Greenlight"),"."),(0,a.kt)("h2",{id:"mobile-applications"},"Mobile Applications"),(0,a.kt)("p",null,"To compile and package tvOS or iOS applications that you developed in the Xcode IDE, see the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/compilation_ios"},"packaging requirements"),". You can use the Veracode Platform to upload your packaged applications for analysis."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Veracode APIs and integrations require access to ",(0,a.kt)("inlineCode",{parentName:"p"},"analysiscenter.veracode.com")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"api.veracode.com"),". Contact your IT team to ensure these domains are on the allowlist for your organization and that there is one-way communication on port 443 to ",(0,a.kt)("inlineCode",{parentName:"p"},"api.veracode.com"),". Refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/IP_addresses"},"complete list of domains and IP addresses to add to your allowlist"),". Also, ensure you access the APIs with the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs"},"domain for your region"),".")))}d.isMDXComponent=!0}}]);