"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[93056],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(n),f=r,d=m["".concat(s,".").concat(f)]||m[f]||l[f]||o;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},66240:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"Request a Static Scan and Configure Scan Options",slug:"/r/Request_a_Static_Scan_and_Configure_Scan_Options"},i=void 0,c={unversionedId:"guides/static/request_static_scan_options",id:"guides/static/request_static_scan_options",title:"Request a Static Scan and Configure Scan Options",description:"You can begin the process of requesting a static scan from the Applications page.",source:"@site/docs/guides/06_static/03_request_static_scan_options.md",sourceDirName:"guides/06_static",slug:"/r/Request_a_Static_Scan_and_Configure_Scan_Options",permalink:"/km-docusaurus-test/r/Request_a_Static_Scan_and_Configure_Scan_Options",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Request a Static Scan and Configure Scan Options",slug:"/r/Request_a_Static_Scan_and_Configure_Scan_Options"},sidebar:"tutorialSidebar",previous:{title:"Veracode Scan Workflows",permalink:"/km-docusaurus-test/r/request_main"},next:{title:"Video: Request a Static Scan",permalink:"/km-docusaurus-test/r/c_video_request_a_static_scan"}},s={},p=[],u={toc:p};function l(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can begin the process of requesting a static scan from the Applications page."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"To complete this task:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From the Veracode Platform, select ",(0,r.kt)("strong",{parentName:"p"},"My Portfolio")," ",">"," ",(0,r.kt)("strong",{parentName:"p"},"Applications"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click the application name in the Applications list.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Start a Static Scan")," from the Start a Scan dropdown menu."),(0,r.kt)("p",{parentName:"li"},"The Static Scan Configuration page opens for you to provide scan information.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You can change the name of the scan and configure optional metadata about the scan on the Static Scan Configuration page. Additionally, you can configure the Auto-Scan setting."),(0,r.kt)("p",{parentName:"li"},"By default, the ",(0,r.kt)("strong",{parentName:"p"},"Auto-Scan")," option is on. When the setting is on, Veracode automatically moves directly to the full scan after the prescan completes successfully, using the Veracode recommended modules selection. This action allows Veracode to accelerate your scan process."),(0,r.kt)("p",{parentName:"li"},"To turn Auto-Scan off to be able to manually ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_request_modules_scan"},"select modules")," and start scans, change the ",(0,r.kt)("strong",{parentName:"p"},"Auto-Scan after Prescan")," option in the Static Scan Configuration page, or while the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Understanding_Prescan_Verification"},"prescan")," is running."))))}l.isMDXComponent=!0}}]);