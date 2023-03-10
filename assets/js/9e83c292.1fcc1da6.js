"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[16977],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,y=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(y,i(i({ref:t},p),{},{components:r})):n.createElement(y,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},96913:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={title:"Install the Veracode CLI",slug:"/r/Install_the_Veracode_CLI"},i=void 0,c={unversionedId:"guides/container_security/install_container_scanning",id:"guides/container_security/install_container_scanning",title:"Install the Veracode CLI",description:"You install the Veracode CLI prior to using Veracode Container Security. You can also use this procedure to upgrade the Veracode CLI.",source:"@site/docs/guides/09_container_security/02_install_container_scanning.md",sourceDirName:"guides/09_container_security",slug:"/r/Install_the_Veracode_CLI",permalink:"/km-docusaurus-test/r/Install_the_Veracode_CLI",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Install the Veracode CLI",slug:"/r/Install_the_Veracode_CLI"},sidebar:"tutorialSidebar",previous:{title:"Container Security Prerequisites",permalink:"/km-docusaurus-test/r/Container_Security_Prerequisites"},next:{title:"Container Security Commands",permalink:"/km-docusaurus-test/r/Container_Security_Commands"}},l={},s=[],p={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You install the Veracode CLI prior to using Veracode Container Security. You can also use this procedure to upgrade the Veracode CLI."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Before you begin:")),(0,a.kt)("p",null,"Meet the ",(0,a.kt)("a",{parentName:"p",href:"/km-docusaurus-test/r/Container_Security_Prerequisites"},"Veracode Container Security prerequisites"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"To complete this task:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run this command to install the Veracode CLI in your current working directory:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"}," curl -fsS https://tools.veracode.com/veracode-cli/install | sh\n")),(0,a.kt)("p",{parentName:"li"}," When the installation completes, this message appears: ",(0,a.kt)("inlineCode",{parentName:"p"},"The Veracode CLI is now installed!"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"To set your credentials as environment variables, set the ",(0,a.kt)("inlineCode",{parentName:"p"},"VERACODE_API_KEY_ID")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"VERACODE_API_KEY_SECRET")," variables to your Veracode API credentials. For example:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"export VERACODE_API_KEY_ID={apiId}\nexport VERACODE_API_KEY_SECRET={apiSecretKey}\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run the following command to configure your Veracode API credentials:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"./veracode configure\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"When prompted, enter the API ID and secret key you generated in the Veracode Platform."),(0,a.kt)("p",{parentName:"li"},"If you set your credentials as environment variables, the Veracode CLI pre-populates these fields.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run a test scan to confirm you have successfully configured Veracode Container Security. For example:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"./veracode scan --source alpine:latest --type image\n")))))}u.isMDXComponent=!0}}]);