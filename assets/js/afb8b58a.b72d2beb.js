"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[80184],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(r),d=i,m=u["".concat(p,".").concat(d)]||u[d]||g[d]||l;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=r.length,a=new Array(l);a[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var s=2;s<l;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},24359:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=r(87462),i=(r(67294),r(3905));const l={title:"Install Veracode Greenlight for Eclipse from Within the IDE",slug:"/r/t_install_greenlight_ide"},a=void 0,o={unversionedId:"guides/ides/greenlight/greenlight_eclipse/install_greenlight_eclipse/install_greenlight_eclipse_ide",id:"guides/ides/greenlight/greenlight_eclipse/install_greenlight_eclipse/install_greenlight_eclipse_ide",title:"Install Veracode Greenlight for Eclipse from Within the IDE",description:"You can install Greenlight for Eclipse as a plugin from within the IDE.",source:"@site/docs/guides/05_ides/02_greenlight/04_greenlight_eclipse/01_install_greenlight_eclipse/02_install_greenlight_eclipse_ide.md",sourceDirName:"guides/05_ides/02_greenlight/04_greenlight_eclipse/01_install_greenlight_eclipse",slug:"/r/t_install_greenlight_ide",permalink:"/km-docusaurus-test/r/t_install_greenlight_ide",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Install Veracode Greenlight for Eclipse from Within the IDE",slug:"/r/t_install_greenlight_ide"},sidebar:"tutorialSidebar",previous:{title:"Video: Install Veracode Greenlight from the Eclipse Marketplace",permalink:"/km-docusaurus-test/r/c_greenlight_eclipse_install_video"},next:{title:"Add Credentials to Veracode Greenlight for Eclipse",permalink:"/km-docusaurus-test/r/t_configure_greenlight"}},p={},s=[],c={toc:s};function g(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can install Greenlight for Eclipse as a plugin from within the IDE."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Before you begin:")),(0,i.kt)("p",null,"You meet the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Meet_Veracode_Greenlight_Prerequisites"},"Greenlight prerequisites"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"To complete this task:")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In Eclipse, select ",(0,i.kt)("strong",{parentName:"p"},"Help")," > ",(0,i.kt)("strong",{parentName:"p"},"Install New Software"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the Install window, click ",(0,i.kt)("strong",{parentName:"p"},"Add"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the Add Repository window, enter ",(0,i.kt)("inlineCode",{parentName:"p"},"Veracode Greenlight")," in the Name field.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the Location field, enter URL: ",(0,i.kt)("inlineCode",{parentName:"p"},"https://downloads.veracode.com/securityscan/eclipse"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"OK"),"."),(0,i.kt)("p",{parentName:"li"},"Greenlight appears in the list of available software.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Next"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Finish"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If prompted, click ",(0,i.kt)("strong",{parentName:"p"},"Yes")," to restart."),(0,i.kt)("p",{parentName:"li"},"After your IDE restarts, you see the Veracode Greenlight menu."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Next steps:")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/t_configure_greenlight"},"Add your Veracode credentials to Veracode Greenlight for Eclipse"),"."))}g.isMDXComponent=!0}}]);