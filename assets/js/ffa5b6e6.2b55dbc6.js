"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[96088],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},45852:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const a={title:"Uninstall an ISM Endpoint",slug:"/r/t_uninstall_endpoint"},l=void 0,o={unversionedId:"guides/dynamic_analysis/ism/uninstall_ism_endpoint",id:"guides/dynamic_analysis/ism/uninstall_ism_endpoint",title:"Uninstall an ISM Endpoint",description:"If you installed an endpoint using the endpoint installer, but no longer want to use it for scanning, you can uninstall it from your machine.",source:"@site/docs/guides/10_dynamic_analysis/11_ism/18_uninstall_ism_endpoint.md",sourceDirName:"guides/10_dynamic_analysis/11_ism",slug:"/r/t_uninstall_endpoint",permalink:"/km-docusaurus-test/r/t_uninstall_endpoint",draft:!1,tags:[],version:"current",sidebarPosition:18,frontMatter:{title:"Uninstall an ISM Endpoint",slug:"/r/t_uninstall_endpoint"},sidebar:"tutorialSidebar",previous:{title:"Delete an ISM Endpoint",permalink:"/km-docusaurus-test/r/t_delete_endpoint"},next:{title:"Edit an ISM Endpoint",permalink:"/km-docusaurus-test/r/t_edit_endpoint"}},s={},p=[],u={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If you installed an endpoint using the endpoint installer, but no longer want to use it for scanning, you can uninstall it from your machine."),(0,i.kt)("p",null,"Uninstalling an endpoint stops all scans currently using the endpoint."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"To complete this task:")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Navigate to the installation folder specified during the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/t_create_endpoint"},"endpoint installation"),"."),(0,i.kt)("p",{parentName:"li"},"The default destination is ",(0,i.kt)("inlineCode",{parentName:"p"},"C:\\Program Files\\Veracode\\ISM"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open the ",(0,i.kt)("inlineCode",{parentName:"p"},"uninstall")," folder.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open the uninstall file."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"On Windows, the filename is ",(0,i.kt)("inlineCode",{parentName:"li"},"uninstall.bat"),"."),(0,i.kt)("li",{parentName:"ul"},"On Linux, the filename is ",(0,i.kt)("inlineCode",{parentName:"li"},"uninstall.sh"),"."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Uninstall"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"When the endpoint successfully uninstalls, click ",(0,i.kt)("strong",{parentName:"p"},"Close"),"."))))}c.isMDXComponent=!0}}]);