"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[85333],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(t),m=i,k=u["".concat(l,".").concat(m)]||u[m]||c[m]||a;return t?r.createElement(k,s(s({ref:n},d),{},{components:t})):r.createElement(k,s({ref:n},d))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,s=new Array(a);s[0]=u;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var p=2;p<a;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9551:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=t(87462),i=(t(67294),t(3905));const a={title:"Binding Veracode Credentials in Jenkins Pipeline Builds",slug:"/r/t_binding_creds"},s=void 0,o={unversionedId:"guides/integrations/build_systems/jenkins_integration/jenkins_installation/jenkins_configure_creds_binding_plugin",id:"guides/integrations/build_systems/jenkins_integration/jenkins_installation/jenkins_configure_creds_binding_plugin",title:"Binding Veracode Credentials in Jenkins Pipeline Builds",description:"You can use the Jenkins Credentials Binding plugin to bind your Veracode API credentials to environment variables in a Jenkins pipeline. You generate a script containing the bound environment variables, then add this script to your Jenkins pipeline script.",source:"@site/docs/guides/04_integrations/06_build_systems/07_jenkins_integration/02_jenkins_installation/03_jenkins_configure_creds_binding_plugin.md",sourceDirName:"guides/04_integrations/06_build_systems/07_jenkins_integration/02_jenkins_installation",slug:"/r/t_binding_creds",permalink:"/km-docusaurus-test/r/t_binding_creds",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Binding Veracode Credentials in Jenkins Pipeline Builds",slug:"/r/t_binding_creds"},sidebar:"tutorialSidebar",previous:{title:"Install the Credentials Binding Plugin for Jenkins",permalink:"/km-docusaurus-test/r/t_jenkins_install_credbinding"},next:{title:"Video: Use the Jenkins Credentials Binding Plugin to Protect Your Veracode Credentials",permalink:"/km-docusaurus-test/r/Use_the_Jenkins_Credentials_Binding_Plugin_to_Protect_Your_Veracode_Credentials"}},l={},p=[],d={toc:p};function c(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can use the Jenkins Credentials Binding plugin to bind your ",(0,i.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_api_credentials3"},"Veracode API credentials")," to environment variables in a Jenkins pipeline. You generate a script containing the bound environment variables, then add this script to your Jenkins pipeline script."),(0,i.kt)("p",null,"After binding your Veracode API credentials to the environment variables, Jenkins secretly uses the credentials saved in its credentials store. Only the bound environment variables appear in the Jenkins interface and logs instead of your Veracode API credentials."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Before you begin:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You have ",(0,i.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/t_install_jenkins"},"installed and configured the Jenkins plugin"),"."),(0,i.kt)("li",{parentName:"ul"},"You have ",(0,i.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/t_jenkins_install_credbinding"},"installed the latest Credentials Binding plugin")," from the ",(0,i.kt)("a",{parentName:"li",href:"https://plugins.jenkins.io"},"Jenkins Plugin Index"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"To complete this task:")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In Jenkins, go to your pipeline project.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Pipeline Syntax")," to open the Snippet Generator.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"From the Sample Step dropdown menu, select ",(0,i.kt)("strong",{parentName:"p"},"withCredentials: Bind credentials to variables"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the Bindings section, select ",(0,i.kt)("strong",{parentName:"p"},"Add")," > ",(0,i.kt)("strong",{parentName:"p"},"Username and password (separated)"),"."),(0,i.kt)("p",{parentName:"li"},"The Username and password (separated) section opens.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the Username Variable and Password Variable fields, enter username and password variables. Your Veracode API credentials bind to these variables at runtime.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Do one of the following:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If the Veracode API credentials to which you want to bind the specified username and password variables are in the Jenkins credentials store, select them from the Credentials dropdown menu. Then, continue to Step 7.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If the Veracode API credentials to which you want to bind the specified username and password variables are not in the Jenkins credentials store, you must add the credentials:"),(0,i.kt)("p",{parentName:"li"},"  a. To the right of the Credentials dropdown menu, select ",(0,i.kt)("strong",{parentName:"p"},"Add")," > ",(0,i.kt)("strong",{parentName:"p"},"Jenkins")," to open the Jenkins Credentials Provider window."),(0,i.kt)("p",{parentName:"li"},"  b. In the Username field, enter your API ID. In the Password field, enter your API key."),(0,i.kt)("p",{parentName:"li"},"  c. Optionally, enter values for the ID and Description fields."),(0,i.kt)("p",{parentName:"li"},"  d. Click ",(0,i.kt)("strong",{parentName:"p"},"Add")," to add the credentials to the Jenkins credentials store."),(0,i.kt)("p",{parentName:"li"},"  e. From the Credentials dropdown menu, select the credentials you added.")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Generate Pipeline Script"),"."),(0,i.kt)("p",{parentName:"li"},"In the generated script, which is Apache Groovy code, the ",(0,i.kt)("inlineCode",{parentName:"p"},"withCredentials")," step contains the username variable, password variable, and, if specified, the credentials ID."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Next steps:")),(0,i.kt)("p",null,"Copy the entire ",(0,i.kt)("inlineCode",{parentName:"p"},"withCredentials")," step and add it to your ",(0,i.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/t_jenkins_pipe"},"Jenkins pipeline script for Veracode scans"),"."))}c.isMDXComponent=!0}}]);