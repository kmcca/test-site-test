"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[32701],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>d});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),m=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=m(a),d=o,b=u["".concat(l,".").concat(d)]||u[d]||c[d]||r;return a?n.createElement(b,i(i({ref:t},s),{},{components:a})):n.createElement(b,i({ref:t},s))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var m=2;m<r;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},73573:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>m});var n=a(87462),o=(a(67294),a(3905));const r={title:"Submit an Application to Veracode from Bamboo",slug:"/r/t_bamboo_app_submission"},i=void 0,p={unversionedId:"guides/integrations/build_systems/bamboo_integration/bamboo_submit_app",id:"guides/integrations/build_systems/bamboo_integration/bamboo_submit_app",title:"Submit an Application to Veracode from Bamboo",description:"The Veracode Bamboo Integration enables you to submit applications from your Bamboo environment to Veracode using the Veracode Java API wrapper.",source:"@site/docs/guides/04_integrations/06_build_systems/05_bamboo_integration/04_bamboo_submit_app.md",sourceDirName:"guides/04_integrations/06_build_systems/05_bamboo_integration",slug:"/r/t_bamboo_app_submission",permalink:"/km-docusaurus-test/r/t_bamboo_app_submission",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Submit an Application to Veracode from Bamboo",slug:"/r/t_bamboo_app_submission"},sidebar:"tutorialSidebar",previous:{title:"Build a Maven Project with Bamboo",permalink:"/km-docusaurus-test/r/Build_a_Maven_Project_with_Bamboo"},next:{title:"Veracode for GitHub",permalink:"/km-docusaurus-test/r/c_about_github"}},l={},m=[],s={toc:m};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Veracode Bamboo Integration enables you to submit applications from your Bamboo environment to Veracode using the Veracode Java API wrapper."),(0,o.kt)("p",null,"This procedure demonstrates using the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/t_working_with_java_wrapper"},"Veracode Java API wrapper")," to submit an application. After you successfully create and run your plan in Bamboo, you can submit your application to Veracode for scanning."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Before you begin:")),(0,o.kt)("p",null,"You meet the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_integration_bamboo"},"prerequisites"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"To complete this task:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open Bamboo and navigate to the plan you created for your application.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the plan configuration, select a job and click the ",(0,o.kt)("strong",{parentName:"p"},"Tasks")," tab.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the Tasks page, click ",(0,o.kt)("strong",{parentName:"p"},"Add task"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the Task description field, explain that this command uploads the application to Veracode.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the Executable dropdown menu, select ",(0,o.kt)("strong",{parentName:"p"},"Java"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the Argument field, enter an argument with these parameters:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"vid"),": Veracode API ID."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"vkey"),": Veracode API key."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"action"),": Name of the action to perform. Enter ",(0,o.kt)("inlineCode",{parentName:"li"},"uploadandscan"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"appname"),": Name of the application."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"createprofile"),": Specify the API to create an application profile if one does not exist for the indicated application name."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"createsandbox"),": Optional. Create a sandbox for this application."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"sandboxname"),": Optional. Name of the sandbox in which you want the scan to build."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"filepath"),": Filepath of the files you want to upload to the Veracode Platform for scanning. By default, Veracode uploads all the subdirectories and files of this filepath."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"version"),": Name or version of the build you want to scan.")),(0,o.kt)("p",{parentName:"li"},"Example command with parameters added to the Argument field:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},"-jar C:\\{JavaWrapper_HomeFolder}\\vosp-api-wrapper-java{version}.jar -vid ${bamboo.vid} -vkey ${bamboo.vkey} -action uploadandscan\n-appname {Your_Application_Name} -createprofile true -createsandbox true -sandboxname ${bamboo.shortPlanName} -filepath\n${bamboo.build.working.directory}/*.{FileExtensionForCompiledApplication} -version ${bamboo.buildNumber}\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Review the configuration, then click ",(0,o.kt)("strong",{parentName:"p"},"Save"),"."))))}c.isMDXComponent=!0}}]);