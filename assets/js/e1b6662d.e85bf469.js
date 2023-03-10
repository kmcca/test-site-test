"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[26576],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},39551:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const i={title:"View ISM Endpoint Logs",slug:"/r/t_view_endpoint_logs"},a=void 0,l={unversionedId:"guides/dynamic_analysis/ism/view_ism_endpoint_logs",id:"guides/dynamic_analysis/ism/view_ism_endpoint_logs",title:"View ISM Endpoint Logs",description:"If you encounter errors using ISM, you can refer to the log files for your endpoint to help with troubleshooting.",source:"@site/docs/guides/10_dynamic_analysis/11_ism/22_view_ism_endpoint_logs.md",sourceDirName:"guides/10_dynamic_analysis/11_ism",slug:"/r/t_view_endpoint_logs",permalink:"/km-docusaurus-test/r/t_view_endpoint_logs",draft:!1,tags:[],version:"current",sidebarPosition:22,frontMatter:{title:"View ISM Endpoint Logs",slug:"/r/t_view_endpoint_logs"},sidebar:"tutorialSidebar",previous:{title:"Delete an ISM Gateway",permalink:"/km-docusaurus-test/r/t_delete_gateway"},next:{title:"Test Your ISM Endpoint with the Diagnostic Tool",permalink:"/km-docusaurus-test/r/t_ism_run_diagnostics"}},s={},p=[],c={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you encounter errors using ISM, you can refer to the log files for your endpoint to help with troubleshooting."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"To complete this task:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Navigate to the logs folder in your ISM installation directory. For example: ",(0,o.kt)("inlineCode",{parentName:"p"},"C:\\Program Files\\Veracode\\ISM\\veracode\\ism\\logs"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open the log file relevant to your issue."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"endpointinstaller.log")," records the events of the endpoint installation.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"smartendpoint.log")," records the endpoint activity."))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Next steps:")),(0,o.kt)("p",null,"To access your scan logs, you must contact Veracode Technical Support."))}u.isMDXComponent=!0}}]);