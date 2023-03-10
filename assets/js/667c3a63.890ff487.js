"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[80159],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),y=a,d=m["".concat(s,".").concat(y)]||m[y]||p[y]||i;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4949:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"Install the Veracode TeamCity Plugin",slug:"/r/Install_the_Veracode_TeamCity_Plugin"},o=void 0,l={unversionedId:"guides/integrations/build_systems/teamcity_integration/install_teamcity_plugin",id:"guides/integrations/build_systems/teamcity_integration/install_teamcity_plugin",title:"Install the Veracode TeamCity Plugin",description:"You can download the Veracode TeamCity Plugin ZIP file from the JetBrains Marketplace.",source:"@site/docs/guides/04_integrations/06_build_systems/09_teamcity_integration/01_install_teamcity_plugin.md",sourceDirName:"guides/04_integrations/06_build_systems/09_teamcity_integration",slug:"/r/Install_the_Veracode_TeamCity_Plugin",permalink:"/km-docusaurus-test/r/Install_the_Veracode_TeamCity_Plugin",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Install the Veracode TeamCity Plugin",slug:"/r/Install_the_Veracode_TeamCity_Plugin"},sidebar:"tutorialSidebar",previous:{title:"Veracode TeamCity Plugin",permalink:"/km-docusaurus-test/r/c_about_teamcity"},next:{title:"Configure TeamCity Global Settings",permalink:"/km-docusaurus-test/r/c_config_teamcity"}},s={},c=[],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can download the Veracode TeamCity Plugin ZIP file from the JetBrains Marketplace."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Before you begin:")),(0,a.kt)("p",null,"You meet the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_about_teamcity"},"prerequisites"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"To complete this task:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Download the TeamCity plugin ZIP file from ",(0,a.kt)("a",{parentName:"p",href:"https://plugins.jetbrains.com/plugin/10279-veracode-integration"},"https://plugins.jetbrains.com/plugin/10279-veracode-integration"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Copy the plugin ZIP file to the directory ",(0,a.kt)("inlineCode",{parentName:"p"},"{TeamCity_data_directory}/plugins"),"."),(0,a.kt)("admonition",{parentName:"li",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Do not rename the plugin ZIP file."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Restart the TeamCity server.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select ",(0,a.kt)("strong",{parentName:"p"},"Administration")," > ",(0,a.kt)("strong",{parentName:"p"},"Plugins List")," to ensure you successfully installed the plugin."))))}p.isMDXComponent=!0}}]);