"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[77630],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>_});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(r),_=a,d=f["".concat(c,".").concat(_)]||f[_]||p[_]||n;return r?o.createElement(d,i(i({ref:t},u),{},{components:r})):o.createElement(d,i({ref:t},u))}));function _(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<n;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},49058:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var o=r(87462),a=(r(67294),r(3905));const n={title:"Configure Proxy Settings for Veracode Static for Visual Studio (Legacy)",slug:"/r/Install_Veracode_Static_for_Visual_Studio_Behind_a_Proxy"},i=void 0,s={unversionedId:"guides/ides/static_ide/static_for_visual_studio_legacy/configure_static_vs_legacy/configure_proxy_static_vs_legacy",id:"guides/ides/static_ide/static_for_visual_studio_legacy/configure_static_vs_legacy/configure_proxy_static_vs_legacy",title:"Configure Proxy Settings for Veracode Static for Visual Studio (Legacy)",description:"You can configure Veracode Static for Visual Studio to access Veracode through a proxy.",source:"@site/docs/guides/05_ides/01_static_ide/06_static_for_visual_studio_legacy/04_configure_static_vs_legacy/01_configure_proxy_static_vs_legacy.md",sourceDirName:"guides/05_ides/01_static_ide/06_static_for_visual_studio_legacy/04_configure_static_vs_legacy",slug:"/r/Install_Veracode_Static_for_Visual_Studio_Behind_a_Proxy",permalink:"/km-docusaurus-test/r/Install_Veracode_Static_for_Visual_Studio_Behind_a_Proxy",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Configure Proxy Settings for Veracode Static for Visual Studio (Legacy)",slug:"/r/Install_Veracode_Static_for_Visual_Studio_Behind_a_Proxy"},sidebar:"tutorialSidebar",previous:{title:"Configure Veracode Static for Visual Studio (Legacy)",permalink:"/km-docusaurus-test/r/c_vs_config"},next:{title:"Configuring Precompilation Options for Visual Studio (Legacy)",permalink:"/km-docusaurus-test/r/c_precompilation"}},c={},l=[],u={toc:l};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can configure Veracode Static for Visual Studio to access Veracode through a proxy."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Before you begin:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You meet the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/Permissioning_Veracode_Static_for_Visual_Studio"},"prerequisites for Veracode Static for Visual Studio"),"."),(0,a.kt)("li",{parentName:"ul"},"You have ",(0,a.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/t_install_visual_studio_extension_2"},"installed the extension"),"."),(0,a.kt)("li",{parentName:"ul"},"Ensure you can configure the extension to use the correct HTTPS proxy settings for accessing Veracode. If you are unsure about your proxy settings, contact your network IT team.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"To complete this task:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In Visual Studio, select ",(0,a.kt)("strong",{parentName:"p"},"Extensions")," > ",(0,a.kt)("strong",{parentName:"p"},"Veracode Static")," ",">"," ",(0,a.kt)("strong",{parentName:"p"},"Options")," ",">"," ",(0,a.kt)("strong",{parentName:"p"},"Proxy"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select ",(0,a.kt)("strong",{parentName:"p"},"Connect using the default HTTPS proxy settings")," if you want to use the HTTPS proxy settings that you previously configured within your IDE. If you want to specify different proxy settings, complete these steps.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select ",(0,a.kt)("strong",{parentName:"p"},"Connect using the following proxy settings"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Edit"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Enter the proxy settings. Optionally, select the ",(0,a.kt)("strong",{parentName:"p"},"Requires Authentication")," option.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"OK"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the Preferences window, click ",(0,a.kt)("strong",{parentName:"p"},"OK"),"."))))}p.isMDXComponent=!0}}]);