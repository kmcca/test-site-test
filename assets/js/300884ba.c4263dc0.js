"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[13150],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7054:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={title:"Configure TeamCity Global Settings",slug:"/r/c_config_teamcity"},o=void 0,l={unversionedId:"guides/integrations/build_systems/teamcity_integration/config_teamcity_plugin",id:"guides/integrations/build_systems/teamcity_integration/config_teamcity_plugin",title:"Configure TeamCity Global Settings",description:"You can configure TeamCity to customize the integration of the Veracode TeamCity Plugin.",source:"@site/docs/guides/04_integrations/06_build_systems/09_teamcity_integration/02_config_teamcity_plugin.md",sourceDirName:"guides/04_integrations/06_build_systems/09_teamcity_integration",slug:"/r/c_config_teamcity",permalink:"/km-docusaurus-test/r/c_config_teamcity",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Configure TeamCity Global Settings",slug:"/r/c_config_teamcity"},sidebar:"tutorialSidebar",previous:{title:"Install the Veracode TeamCity Plugin",permalink:"/km-docusaurus-test/r/Install_the_Veracode_TeamCity_Plugin"},next:{title:"Configure a TeamCity Project for Veracode Scans",permalink:"/km-docusaurus-test/r/c_config_teamcity_scan"}},c={},s=[],p={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can configure TeamCity to customize the integration of the Veracode TeamCity Plugin."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Before you begin:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You meet the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/c_about_teamcity"},"prerequisites"),"."),(0,r.kt)("li",{parentName:"ul"},"You have ",(0,r.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/Install_the_Veracode_TeamCity_Plugin"},"installed the TeamCity plugin"),"."),(0,r.kt)("li",{parentName:"ul"},"You are logged in to TeamCity as administrator.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"To complete this task:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the Integrations section of the Administration page, select ",(0,r.kt)("strong",{parentName:"p"},"Veracode")," to display the global configuration settings.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the Fail Build section, ensure the checkbox is selected to cause TeamCity to fail the build if the Veracode upload and scan task fails.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the Veracode Credentials section, enter your ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_api_credentials3"},"Veracode API credentials"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the Default Values section, select the checkbox to apply defaults to all applications for all TeamCity jobs for these settings:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Use the TeamCity project name as the default name for new applications. You can override this setting for individual projects."),(0,r.kt)("li",{parentName:"ul"},"Use the TeamCity server workspace path and IP address as the default application description. For example: ",(0,r.kt)("inlineCode",{parentName:"li"},"TeamCity-URL: http://localhost:8080/ Host-Name: user-1234 Workspace-Path:C:\\TeamCity\\buildAgent\\work\\8948ef41a3f17e4e (Auto-generated by Veracode Teamcity Plugin)")),(0,r.kt)("li",{parentName:"ul"},"Use the TeamCity project build number as the default scan name. You can override this setting for individual projects."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the Debug section, select the ",(0,r.kt)("strong",{parentName:"p"},"Run in debug mode")," checkbox to run in debug mode. If you select this option, TeamCity collects detailed information about Veracode scans and stores the information in the console log of each TeamCity project.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you intend to connect using a proxy, in the Proxy Settings section, select the ",(0,r.kt)("strong",{parentName:"p"},"Use Proxy")," checkbox. Then, provide the specific host, port, username, and password settings for global use in TeamCity.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Optionally, click ",(0,r.kt)("strong",{parentName:"p"},"Test connection")," to confirm that you can connect to the Veracode Platform using the Veracode credentials you provided.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Save"),"."))))}u.isMDXComponent=!0}}]);