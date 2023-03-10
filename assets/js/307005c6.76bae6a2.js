"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[14793],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>p});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=u(n),p=o,g=f["".concat(c,".").concat(p)]||f[p]||d[p]||i;return n?r.createElement(g,a(a({ref:t},l),{},{components:n})):r.createElement(g,a({ref:t},l))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},11866:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const i={title:"About Veracode Greenlight for VS Code Scan Queue",slug:"/r/c_scan_queue_vs_code"},a=void 0,s={unversionedId:"guides/ides/greenlight/greenlight_vs_code/scan_greenlight_vs_code/scan_queue_vs_code",id:"guides/ides/greenlight/greenlight_vs_code/scan_greenlight_vs_code/scan_queue_vs_code",title:"About Veracode Greenlight for VS Code Scan Queue",description:"When you change and save two or more files at the same time, the first saved file enters the queue for scanning and the next saved file enters the queue for auto-scanning until scanning of the first file completes.",source:"@site/docs/guides/05_ides/02_greenlight/07_greenlight_vs_code/02_scan_greenlight_vs_code/04_scan_queue_vs_code.md",sourceDirName:"guides/05_ides/02_greenlight/07_greenlight_vs_code/02_scan_greenlight_vs_code",slug:"/r/c_scan_queue_vs_code",permalink:"/km-docusaurus-test/r/c_scan_queue_vs_code",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"About Veracode Greenlight for VS Code Scan Queue",slug:"/r/c_scan_queue_vs_code"},sidebar:"tutorialSidebar",previous:{title:"Enable Auto-Scan with Veracode Greenlight for VS Code",permalink:"/km-docusaurus-test/r/t_set_vs_code_autoscan"},next:{title:"Reviewing Findings in Veracode Greenlight for VS Code",permalink:"/km-docusaurus-test/r/c_vs_code_findings"}},c={},u=[],l={toc:u};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When you change and save two or more files at the same time, the first saved file enters the queue for scanning and the next saved file enters the queue for auto-scanning until scanning of the first file completes."),(0,o.kt)("p",null,"If you change multiple files, they are set to scan in the order that you save them. New files are placed at the bottom of the list when they are queued to scan respectively while the next file to be scanned is at the top of the list."),(0,o.kt)("p",null,"The scan queue shows the files in the order that they are queued."))}d.isMDXComponent=!0}}]);