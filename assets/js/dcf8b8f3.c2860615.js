"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[93170],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=i,y=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(y,s(s({ref:t},c),{},{components:n})):r.createElement(y,s({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2090:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var r=n(87462),i=(n(67294),n(3905));const a={title:"Configure a Post-Build Action to Resubmit Dynamic Analysis with Freestyle Builds",slug:"/r/t_jenkins_configure_da_resubmit_freestyle"},s=void 0,o={unversionedId:"guides/integrations/build_systems/jenkins_integration/jenkins_using_dynamic_analysis/jenkins_configure_da_resubmit_freestyle",id:"guides/integrations/build_systems/jenkins_integration/jenkins_using_dynamic_analysis/jenkins_configure_da_resubmit_freestyle",title:"Configure a Post-Build Action to Resubmit Dynamic Analysis with Freestyle Builds",description:"You can add a post-build action to your Jenkins freestyle project that submits your application for Dynamic Analysis.",source:"@site/docs/guides/04_integrations/06_build_systems/07_jenkins_integration/08_jenkins_using_dynamic_analysis/02_jenkins_configure_da_resubmit_freestyle.md",sourceDirName:"guides/04_integrations/06_build_systems/07_jenkins_integration/08_jenkins_using_dynamic_analysis",slug:"/r/t_jenkins_configure_da_resubmit_freestyle",permalink:"/km-docusaurus-test/r/t_jenkins_configure_da_resubmit_freestyle",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Configure a Post-Build Action to Resubmit Dynamic Analysis with Freestyle Builds",slug:"/r/t_jenkins_configure_da_resubmit_freestyle"},sidebar:"tutorialSidebar",previous:{title:"Configure Global Credentials for Dynamic Analysis in Freestyle Builds",permalink:"/km-docusaurus-test/r/t_jenkins_configure_global_credentials_freestyle"},next:{title:"Configure a Post-Build Action to Review Dynamic Analysis Results with Freestyle Builds",permalink:"/km-docusaurus-test/r/t_jenkins_configure_da_review_freestyle"}},l={},u=[],c={toc:u};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can add a post-build action to your Jenkins freestyle project that submits your application for ",(0,i.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_was_intro"},"Dynamic Analysis"),". "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Before you begin:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You meet the ",(0,i.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/c_using_jenkins"},"prerequisites"),"."),(0,i.kt)("li",{parentName:"ul"},"You have ",(0,i.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/t_install_jenkins"},"installed the Jenkins plugin"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"To complete this task:")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In your Jenkins freestyle project, go to the Post-build Actions section.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"From the ",(0,i.kt)("strong",{parentName:"p"},"Add post-build action")," dropdown menu, select ",(0,i.kt)("strong",{parentName:"p"},"Resubmit Veracode Dynamic Analysis"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the Analysis Name field enter the name of a Dynamic Analysis that already exists in the Veracode Platform.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Enter the maximum duration, in hours, that you want the analysis to run.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select whether to fail the Jenkins build if the analysis fails.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select whether to use global credentials using your Veracode API credentials. If you select to use global credentials, continue to step 8."),(0,i.kt)("admonition",{parentName:"li",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If you select to use global credentials, but have not configured them using the API service account credentials, the build fails. See ",(0,i.kt)("a",{href:"https://docs.veracode.com/r/t_jenkins_configure_global_credentials_freestyle"},"Configure Global Credentials with Freestyle Builds"),"."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the Veracode Credentials section, enter your Veracode API credentials.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Apply")," to save your changes."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Next steps:")),(0,i.kt)("p",null,"Continue to ",(0,i.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/t_jenkins_configure_da_review_freestyle"},"Configure a Post-Build Action to Review Dynamic Analysis Results with Freestyle Builds"),"."))}p.isMDXComponent=!0}}]);