"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53012],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(h,o(o({ref:t},u),{},{components:r})):n.createElement(h,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3902:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const i={title:"Greenlight Prerequisites",slug:"/r/Meet_Veracode_Greenlight_Prerequisites"},o=void 0,l={unversionedId:"guides/ides/greenlight/greenlight_prereqs",id:"guides/ides/greenlight/greenlight_prereqs",title:"Greenlight Prerequisites",description:"Before you can use Veracode Greenlight, you must have:",source:"@site/docs/guides/05_ides/02_greenlight/03_greenlight_prereqs.md",sourceDirName:"guides/05_ides/02_greenlight",slug:"/r/Meet_Veracode_Greenlight_Prerequisites",permalink:"/km-docusaurus-test/r/Meet_Veracode_Greenlight_Prerequisites",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Greenlight Prerequisites",slug:"/r/Meet_Veracode_Greenlight_Prerequisites"},sidebar:"tutorialSidebar",previous:{title:"Greenlight Best Practices",permalink:"/km-docusaurus-test/r/c_best_practices"},next:{title:"Veracode Greenlight for Eclipse",permalink:"/km-docusaurus-test/r/c_technical_reqs_gl_eclipse"}},c={},s=[],u={toc:s};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Before you can use Veracode Greenlight, you must have:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Enabled the Veracode Greenlight feature. Contact Veracode Technical Support to enable this feature.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Installed a supported IDE and any dependencies, such as Java, listed on the ",(0,a.kt)("a",{parentName:"p",href:"https://community.veracode.com/s/article/Support-Matrix"},"Veracode-Authored Integrations page"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Installed the Greenlight plugin for your IDE:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/t_install_greenlight"},"Eclipse")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/t_install_GL_intellij"},"IntelliJ or Android Studio")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/t_install_visualstudio"},"Visual Studio")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/t_green_vs_code_install"},"VS Code")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"A ",(0,a.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_about_veracode_accounts"},"user account")," with the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_role_permissions"},"Greenlight IDE User role"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Generated ",(0,a.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_api_credentials3"},"Veracode API credentials"),". Veracode recommends creating an ",(0,a.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_configure_api_cred_file"},"API credentials file")," for storing your credentials outside the IDE. If you have an API credentials file, and your file and credentials are valid, the Greenlight plugin detects the file automatically and you can authenticate with Veracode.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Connected your IDE to the public internet.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If using a proxy, configured the required proxy settings for your IDE.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Access to the source code you want to scan, the module containing the source code, and any dependency modules compile successfully. Non-minified code has not had unnecessary characters, such as white space, new lines, comments, and block delimiters removed.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Confirmed your scan submissions are 1MB or smaller."))))}p.isMDXComponent=!0}}]);