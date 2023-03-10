"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[30659],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>_});var n=r(67294);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,i=function(t,e){if(null==t)return{};var r,n,i={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var s=n.createContext({}),c=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},p=function(t){var e=c(t.components);return n.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,i=t.mdxType,a=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),d=c(r),_=i,f=d["".concat(s,".").concat(_)]||d[_]||u[_]||a;return r?n.createElement(f,o(o({ref:e},p),{},{components:r})):n.createElement(f,o({ref:e},p))}));function _(t,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:i,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},77465:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(87462),i=(r(67294),r(3905));const a={title:"Install Veracode Static for IntelliJ Behind a Proxy",slug:"/r/Install_Veracode_Static_for_IntelliJ_Behind_a_Proxy"},o=void 0,l={unversionedId:"guides/ides/static_ide/static_for_intellij_android_studio/install_static_intellij_android/install_static_intellij_proxy",id:"guides/ides/static_ide/static_for_intellij_android_studio/install_static_intellij_android/install_static_intellij_proxy",title:"Install Veracode Static for IntelliJ Behind a Proxy",description:"You can install Veracode Static for IntelliJ behind a proxy.",source:"@site/docs/guides/05_ides/01_static_ide/04_static_for_intellij_android_studio/01_install_static_intellij_android/02_install_static_intellij_proxy.md",sourceDirName:"guides/05_ides/01_static_ide/04_static_for_intellij_android_studio/01_install_static_intellij_android",slug:"/r/Install_Veracode_Static_for_IntelliJ_Behind_a_Proxy",permalink:"/km-docusaurus-test/r/Install_Veracode_Static_for_IntelliJ_Behind_a_Proxy",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Install Veracode Static for IntelliJ Behind a Proxy",slug:"/r/Install_Veracode_Static_for_IntelliJ_Behind_a_Proxy"},sidebar:"tutorialSidebar",previous:{title:"Video: Install Veracode Static for IntelliJ",permalink:"/km-docusaurus-test/r/c_video_installing_intellij"},next:{title:"Uninstall Veracode Static for IntelliJ",permalink:"/km-docusaurus-test/r/Uninstall_Veracode_Static_for_IntelliJ"}},s={},c=[],p={toc:c};function u(t){let{components:e,...r}=t;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can install Veracode Static for IntelliJ behind a proxy."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Before you begin:")),(0,i.kt)("p",null,"Ensure you can configure the Veracode Static Plugin for your IDE to use the correct HTTPS proxy settings for accessing Veracode. If you are unsure about your proxy settings, contact your network IT team."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"To complete this task:")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In your IDE, select ",(0,i.kt)("strong",{parentName:"p"},"Veracode")," ",">"," ",(0,i.kt)("strong",{parentName:"p"},"Options")," ",">"," ",(0,i.kt)("strong",{parentName:"p"},"Tools")," ",">"," ",(0,i.kt)("strong",{parentName:"p"},"Veracode")," ",">"," ",(0,i.kt)("strong",{parentName:"p"},"Proxy"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select ",(0,i.kt)("strong",{parentName:"p"},"Connect using the default HTTPS proxy settings")," if you want to use the HTTPS proxy settings that you previously configured within your IDE. If you want to specify different proxy settings, complete these steps.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select ",(0,i.kt)("strong",{parentName:"p"},"Connect using the following proxy settings"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Edit"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Enter the proxy settings. Optionally, select the ",(0,i.kt)("strong",{parentName:"p"},"Requires Authentication")," option.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"OK"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the Preferences window, click ",(0,i.kt)("strong",{parentName:"p"},"OK"),"."))))}u.isMDXComponent=!0}}]);