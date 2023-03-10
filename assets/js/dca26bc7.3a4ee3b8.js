"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[50968],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),g=i,m=d["".concat(s,".").concat(g)]||d[g]||u[g]||a;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},33706:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const a={title:"Veracode Greenlight for IntelliJ",slug:"/r/c_technical_requirements_intellij"},o=void 0,l={unversionedId:"guides/ides/greenlight/greenlight_intellij_android_studio/README",id:"guides/ides/greenlight/greenlight_intellij_android_studio/README",title:"Veracode Greenlight for IntelliJ",description:"Veracode Greenlight for IntelliJ is a plugin for running Greenlight scans in IntelliJ IDEA or Android Studio. The plugin supports all Java platforms and frameworks listed in Packaging Java Applications.",source:"@site/docs/guides/05_ides/02_greenlight/05_greenlight_intellij_android_studio/README.md",sourceDirName:"guides/05_ides/02_greenlight/05_greenlight_intellij_android_studio",slug:"/r/c_technical_requirements_intellij",permalink:"/km-docusaurus-test/r/c_technical_requirements_intellij",draft:!1,tags:[],version:"current",frontMatter:{title:"Veracode Greenlight for IntelliJ",slug:"/r/c_technical_requirements_intellij"},sidebar:"tutorialSidebar",previous:{title:"Enable Debug Logs for Greenlight for Eclipse",permalink:"/km-docusaurus-test/r/Enable_Debug_Logs_for_Greenlight_for_Eclipse"},next:{title:"Install Veracode Greenlight for IntelliJ",permalink:"/km-docusaurus-test/r/t_install_GL_intellij"}},s={},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Veracode Greenlight for IntelliJ is a plugin for running Greenlight scans in IntelliJ IDEA or Android Studio. The plugin supports all Java platforms and frameworks listed in ",(0,i.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/compilation_java"},"Packaging Java Applications"),"."),(0,i.kt)("p",null,"Veracode Greenlight is designed to scan a file or small package. For this reason, initiating a scan at the project level is restricted. For project-level scans, use ",(0,i.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_static_overview"},"Veracode Static Analysis"),"."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Kotlin is not supported.")),(0,i.kt)("p",null,"Greenlight for IntelliJ can only scan Java classes that compile correctly and ignores all other files. It can also scan top-level packages that contain other packages, as well as non-minified JavaScript files. Non-minified code has not had unnecessary characters such as white space, new lines, comments, and block delimiters removed."),(0,i.kt)("p",null,"It is only possible to scan JavaScript embedded in these file types: ASP, CSS, EHTML, ES, ES6, HANDLEBARS, HBS, HJS, HTM, HTML, JS, JSON, JSP (IntelliJ only), JSX, MAP, MUSTACHE, PHP, TS, TSX, and XHTML."),(0,i.kt)("p",null,"The Greenlight plugin uses these two certificates that are signed by a certificate authority: ",(0,i.kt)("inlineCode",{parentName:"p"},"downloads.veracode.com")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"api.veracode.com"),"."),(0,i.kt)("p",null,"In addition to using Greenlight for IntelliJ, Veracode recommends that you perform a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Requesting_a_Static_Scan"},"full static analysis scan")," using the Veracode Platform or the Greenlight for IntelliJ to achieve comprehensive coverage, actionable results, and policy-level reporting to determine application production readiness."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The Veracode Greenlight plugin has minimal impact to your local system. If your environment is outside the above requirements, and you are interested in using the Veracode Greenlight plugin, email ",(0,i.kt)("a",{href:"mailto: support@veracode.com"},(0,i.kt)("a",{parentName:"p",href:"mailto:support@veracode.com"},"support@veracode.com"))," regarding your interest, your IDE tools, IDE version, and programming languages you use in your job.")))}u.isMDXComponent=!0}}]);