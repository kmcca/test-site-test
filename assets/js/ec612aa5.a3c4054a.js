"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[94150],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>k});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=p(t),k=r,m=g["".concat(s,".").concat(k)]||g[k]||c[k]||i;return t?a.createElement(m,o(o({ref:n},u),{},{components:t})):a.createElement(m,o({ref:n},u))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},35080:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const i={title:"Install the Veracode Jenkins Plugin",slug:"/r/t_install_jenkins"},o=void 0,l={unversionedId:"guides/integrations/build_systems/jenkins_integration/jenkins_installation/README",id:"guides/integrations/build_systems/jenkins_integration/jenkins_installation/README",title:"Install the Veracode Jenkins Plugin",description:"You can download and install or upgrade the Veracode Jenkins Plugin using the Plugin Manager from within Jenkins. You can also download the plugin from the Jenkins Marketplace and, then, install it using the Plugin Manager.",source:"@site/docs/guides/04_integrations/06_build_systems/07_jenkins_integration/02_jenkins_installation/README.md",sourceDirName:"guides/04_integrations/06_build_systems/07_jenkins_integration/02_jenkins_installation",slug:"/r/t_install_jenkins",permalink:"/km-docusaurus-test/r/t_install_jenkins",draft:!1,tags:[],version:"current",frontMatter:{title:"Install the Veracode Jenkins Plugin",slug:"/r/t_install_jenkins"},sidebar:"tutorialSidebar",previous:{title:"Veracode Jenkins Plugin Prerequisites",permalink:"/km-docusaurus-test/r/c_using_jenkins"},next:{title:"Configure the Veracode Jenkins Plugin",permalink:"/km-docusaurus-test/r/c_jenkins_config_plugin"}},s={},p=[],u={toc:p};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can download and install or upgrade the Veracode Jenkins Plugin using the Plugin Manager from within Jenkins. You can also download the plugin from the Jenkins Marketplace and, then, install it using the Plugin Manager."),(0,r.kt)("p",null,"Starting with version 20.6.10.0 of the Veracode Jenkins Plugin, Veracode distributes the plugin as open source under an MIT license. You can download the plugin source code from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jenkinsci"},"GitHub"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"}," If you are currently running a Veracode Jenkins Plugin that is earlier than version 20.6.10.0, do not uninstall or disable the plugin before installing the new plugin. The installation imports the configuration settings from the existing plugin to the new plugin. After completing the installation and restarting Jenkins, you must uninstall the earlier plugin version and restart Jenkins a second time.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Before you begin:")),(0,r.kt)("p",null,"You meet the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_using_jenkins"},"prerequisites"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"To complete this task:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open a browser and log in to Jenkins.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Manage Jenkins")," > ",(0,r.kt)("strong",{parentName:"p"},"Manage Plugins")," > ",(0,r.kt)("strong",{parentName:"p"},"Available")," tab.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the Filter field, enter ",(0,r.kt)("inlineCode",{parentName:"p"},"veracode")," to show only the available Veracode plugins.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the ",(0,r.kt)("strong",{parentName:"p"},"Veracode Scan")," checkbox. On the ",(0,r.kt)("a",{parentName:"p",href:"https://plugins.jenkins.io/"},"Jenkins Marketplace")," and in the Jenkins Plugin Manager, the plugin name is Veracode Scans.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"At the bottom of the page, click ",(0,r.kt)("strong",{parentName:"p"},"Download now and install after restart"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the Installing Plugins/Upgrades page, select the ",(0,r.kt)("strong",{parentName:"p"},"Restart Jenkins when installation is complete and no jobs are running")," checkbox.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Manage Jenkins")," ",">"," ",(0,r.kt)("strong",{parentName:"p"},"Manage Plugins")," > ",(0,r.kt)("strong",{parentName:"p"},"Installed")," tab.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Confirm that the Veracode Scan plugin appears in the list of installed plugins."),(0,r.kt)("p",{parentName:"li"},"If a plugin earlier than version 20.6.10.0 is installed, the earlier version, which has the name Veracode Jenkins Plugin, is also listed on the ",(0,r.kt)("strong",{parentName:"p"},"Installed")," tab.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Optionally, right-click the ",(0,r.kt)("strong",{parentName:"p"},"Veracode Scan")," link and select to open it in a new tab or window."),(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("a",{parentName:"p",href:"http://www.veracode.com"},"https://www.veracode.com")," site opens in the new tab or window, which confirms that you are running the official Veracode plugin.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Uninstall any Veracode Jenkins Plugin earlier than version 20.6.10.0. Then, restart Jenkins."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Next steps:")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_jenkins_config_plugin"},"Configure the Veracode Jenkins Plugin"),"."))}c.isMDXComponent=!0}}]);