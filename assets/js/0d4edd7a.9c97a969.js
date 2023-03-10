"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[99668],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,y=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(y,s(s({ref:t},u),{},{components:n})):r.createElement(y,s({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},46845:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const a={title:"Configure Global Credentials for Dynamic Analysis in Freestyle Builds",slug:"/r/t_jenkins_configure_global_credentials_freestyle"},s=void 0,o={unversionedId:"guides/integrations/build_systems/jenkins_integration/jenkins_using_dynamic_analysis/jenkins_configure_global_credentials_freestyle",id:"guides/integrations/build_systems/jenkins_integration/jenkins_using_dynamic_analysis/jenkins_configure_global_credentials_freestyle",title:"Configure Global Credentials for Dynamic Analysis in Freestyle Builds",description:"You can configure the Veracode Jenkins Plugin to use global Veracode API credentials when running a Dynamic Analysis as a post-build action in freestyle builds.",source:"@site/docs/guides/04_integrations/06_build_systems/07_jenkins_integration/08_jenkins_using_dynamic_analysis/01_jenkins_configure_global_credentials_freestyle.md",sourceDirName:"guides/04_integrations/06_build_systems/07_jenkins_integration/08_jenkins_using_dynamic_analysis",slug:"/r/t_jenkins_configure_global_credentials_freestyle",permalink:"/km-docusaurus-test/r/t_jenkins_configure_global_credentials_freestyle",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Configure Global Credentials for Dynamic Analysis in Freestyle Builds",slug:"/r/t_jenkins_configure_global_credentials_freestyle"},sidebar:"tutorialSidebar",previous:{title:"Using Veracode Dynamic Analysis with Jenkins",permalink:"/km-docusaurus-test/r/c_jenkins_rescan_da"},next:{title:"Configure a Post-Build Action to Resubmit Dynamic Analysis with Freestyle Builds",permalink:"/km-docusaurus-test/r/t_jenkins_configure_da_resubmit_freestyle"}},l={},c=[],u={toc:c};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can configure the Veracode Jenkins Plugin to use global Veracode API credentials when running a Dynamic Analysis as a post-build action in freestyle builds."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Before you begin:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You meet the ",(0,i.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/c_using_jenkins"},"prerequisites"),"."),(0,i.kt)("li",{parentName:"ul"},"You have ",(0,i.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/t_install_jenkins"},"installed the Jenkins plugin"),".")),(0,i.kt)("p",null,"If you are not using global credentials, you can proceed to ",(0,i.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/t_jenkins_configure_da_resubmit_freestyle"},"Configure a Post-Build Action to Resubmit Dynamic Analysis with Freestyle Builds")," and enter your credentials in a post-build action."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"To complete this task:")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In Jenkins, select ",(0,i.kt)("strong",{parentName:"p"},"Manage Jenkins")," ",">"," ",(0,i.kt)("strong",{parentName:"p"},"Configure System"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Scroll down to the Veracode Jenkins Plugin section.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Enter your Veracode API credentials.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If you are using a proxy host to connect to the Veracode Platform, select ",(0,i.kt)("strong",{parentName:"p"},"Connect using proxy")," and enter the proxy host information.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select ",(0,i.kt)("strong",{parentName:"p"},"Run in debug mode")," to collect detailed information about the analysis. The plugin stores the information in the console log of each Jenkins project.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Apply")," to save your changes."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Next steps:")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/t_jenkins_configure_da_resubmit_freestyle"},"Configure a Post-Build Action to Resubmit Dynamic Analysis with Freestyle Builds"),"."))}p.isMDXComponent=!0}}]);