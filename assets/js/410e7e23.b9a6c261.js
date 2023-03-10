"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[97574],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80987:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"Veracode Jenkins Plugin Prerequisites",slug:"/r/c_using_jenkins"},o=void 0,s={unversionedId:"guides/integrations/build_systems/jenkins_integration/jenkins_prereqs",id:"guides/integrations/build_systems/jenkins_integration/jenkins_prereqs",title:"Veracode Jenkins Plugin Prerequisites",description:"Before you can install and use the Veracode Jenkins Plugin, you must meet these prerequisites and have a Veracode account with the required roles.",source:"@site/docs/guides/04_integrations/06_build_systems/07_jenkins_integration/01_jenkins_prereqs.md",sourceDirName:"guides/04_integrations/06_build_systems/07_jenkins_integration",slug:"/r/c_using_jenkins",permalink:"/km-docusaurus-test/r/c_using_jenkins",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Veracode Jenkins Plugin Prerequisites",slug:"/r/c_using_jenkins"},sidebar:"tutorialSidebar",previous:{title:"Veracode Jenkins Plugin",permalink:"/km-docusaurus-test/r/c_about_jenkins"},next:{title:"Install the Veracode Jenkins Plugin",permalink:"/km-docusaurus-test/r/t_install_jenkins"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Permissions",id:"permissions",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Before you can install and use the Veracode Jenkins Plugin, you must meet these prerequisites and have a ",(0,a.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_about_veracode_accounts"},"Veracode account")," with the required roles."),(0,a.kt)("p",null,"Starting with version 20.6.10.0 of the Veracode Jenkins Plugin, Veracode distributes the plugin as open source under an MIT license. You can download the plugin source code from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/jenkinsci"},"GitHub"),". On the ",(0,a.kt)("a",{parentName:"p",href:"https://plugins.jenkins.io/"},"Jenkins Marketplace")," and in the Jenkins Plugin Manager, the plugin name is Veracode Scans."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Installed a supported version of Jenkins and Java listed in the ",(0,a.kt)("a",{parentName:"li",href:"https://community.veracode.com/s/article/Support-Matrix"},"Veracode-Authored Integrations page"),". Although there are additional Veracode Jenkins plugins available from the Jenkins server list of available plugins, Veracode only supports the Veracode-developed plugin available here. "),(0,a.kt)("li",{parentName:"ul"},"Installed any dependencies on the Jenkins server. The Veracode Jenkins Plugin has a dependency on numerous plugins including the Jenkins Structs plugin and Jenkins Symbol Annotation plugin, as do most default installations of Jenkins. Newer versions of Jenkins automatically resolve these dependencies at the time of installation. If this fails, you must manually install the dependencies."),(0,a.kt)("li",{parentName:"ul"},"Jenkins server has Internet connectivity."),(0,a.kt)("li",{parentName:"ul"},"You have packaged the application code you plan to upload to Veracode for scanning to include the required debug symbols, as described in the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/compilation_packaging"},"Packaging Guidance"),". If you have a .NET application, you can use the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/c_title_VS"},"Veracode Visual Studio Extension")," to prepare your application. You can also automate the preparation of a .NET application by ",(0,a.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/c_title_VS"},"precompiling it with MSBUILD"),"."),(0,a.kt)("li",{parentName:"ul"},"Generated ",(0,a.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/c_api_credentials3"},"Veracode API credentials"),".")),(0,a.kt)("h2",{id:"permissions"},"Permissions"),(0,a.kt)("p",null,"You must have one of these Veracode accounts:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/c_role_permissions"},"user account")," with these roles: ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Creator or Security Lead role to be able to create application profiles, and upload and scan applications"),(0,a.kt)("li",{parentName:"ul"},"Submitter role to create a new scan for an existing application and upload and scan these applications"),(0,a.kt)("li",{parentName:"ul"},"Reviewer role to check scan completion"))),(0,a.kt)("li",{parentName:"ul"},"An ",(0,a.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/c_API_roles_details"},"API service account")," with these API roles:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Upload API to create application profiles, create sandboxes, and upload and scan applications"),(0,a.kt)("li",{parentName:"ul"},"Upload API - Submit only to submit scans"),(0,a.kt)("li",{parentName:"ul"},"Results API to check scan completion")))))}p.isMDXComponent=!0}}]);