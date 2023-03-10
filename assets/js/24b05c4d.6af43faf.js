"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[71779],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(r),g=i,f=d["".concat(s,".").concat(g)]||d[g]||u[g]||l;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=r.length,a=new Array(l);a[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var c=2;c<l;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},42060:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=r(87462),i=(r(67294),r(3905));const l={title:"Add Credentials to Veracode Greenlight for Eclipse",slug:"/r/t_configure_greenlight"},a=void 0,o={unversionedId:"guides/ides/greenlight/greenlight_eclipse/install_greenlight_eclipse/add_creds_greenlight_eclipse",id:"guides/ides/greenlight/greenlight_eclipse/install_greenlight_eclipse/add_creds_greenlight_eclipse",title:"Add Credentials to Veracode Greenlight for Eclipse",description:"After installing Greenlight for Eclipse, you must add your Veracode credentials to the plugin before you can start a scan.",source:"@site/docs/guides/05_ides/02_greenlight/04_greenlight_eclipse/01_install_greenlight_eclipse/03_add_creds_greenlight_eclipse.md",sourceDirName:"guides/05_ides/02_greenlight/04_greenlight_eclipse/01_install_greenlight_eclipse",slug:"/r/t_configure_greenlight",permalink:"/km-docusaurus-test/r/t_configure_greenlight",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Add Credentials to Veracode Greenlight for Eclipse",slug:"/r/t_configure_greenlight"},sidebar:"tutorialSidebar",previous:{title:"Install Veracode Greenlight for Eclipse from Within the IDE",permalink:"/km-docusaurus-test/r/t_install_greenlight_ide"},next:{title:"Using the Veracode Greenlight Quick Tutorial",permalink:"/km-docusaurus-test/r/c_green_eclipse_tutorial"}},s={},c=[],p={toc:c};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"After installing Greenlight for Eclipse, you must add your Veracode credentials to the plugin before you can start a scan."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Before you begin:")),(0,i.kt)("p",null,"You meet the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Meet_Veracode_Greenlight_Prerequisites"},"Greenlight prerequisites"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"To complete this task:")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In Eclipse, select ",(0,i.kt)("strong",{parentName:"p"},"Window")," > ",(0,i.kt)("strong",{parentName:"p"},"Preferences"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"From the left navigation, select ",(0,i.kt)("strong",{parentName:"p"},"Veracode Greenlight")," > ",(0,i.kt)("strong",{parentName:"p"},"Credentials"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select an option for storing your Veracode API credentials:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Store credentials in external file"),": use the credentials in your Veracode API credentials file. By default, if your credentials are not currently stored in your IDE, this option is selected."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Store credentials in Eclipse"),": enter and store your credentials in your IDE. By default, if your credentials are currently stored in your IDE, this option is selected."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If you selected to use a Veracode API credentials file, click ",(0,i.kt)("strong",{parentName:"p"},"Test Credentials")," to verify that your credentials are valid.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Apply and Close"),"."))))}u.isMDXComponent=!0}}]);