"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[67574],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},13452:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"Add the Veracode Azure DevOps Extension to an Azure DevOps or TFS Release Pipeline",slug:"/r/t_TFS_config_release_pipe"},i=void 0,l={unversionedId:"guides/integrations/build_systems/azure_devops_integration/azure_add_static_release_pipeline",id:"guides/integrations/build_systems/azure_devops_integration/azure_add_static_release_pipeline",title:"Add the Veracode Azure DevOps Extension to an Azure DevOps or TFS Release Pipeline",description:"You can configure the Veracode Azure DevOps Extension to add the Veracode Upload and Scan task and the Veracode Flaw Importer task to a release pipeline in Azure DevOps or Team Foundation Server (TFS).",source:"@site/docs/guides/04_integrations/06_build_systems/04_azure_devops_integration/06_azure_add_static_release_pipeline.md",sourceDirName:"guides/04_integrations/06_build_systems/04_azure_devops_integration",slug:"/r/t_TFS_config_release_pipe",permalink:"/km-docusaurus-test/r/t_TFS_config_release_pipe",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Add the Veracode Azure DevOps Extension to an Azure DevOps or TFS Release Pipeline",slug:"/r/t_TFS_config_release_pipe"},sidebar:"tutorialSidebar",previous:{title:"Configure an Azure DevOps Build for ASP.NET Applications",permalink:"/km-docusaurus-test/r/t_vsts_precompilation"},next:{title:"Create a Service Connection in Azure DevOps",permalink:"/km-docusaurus-test/r/Create_a_Service_Connection_in_Azure_DevOps"}},s={},p=[],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can configure the Veracode Azure DevOps Extension to add the Veracode Upload and Scan task and the Veracode Flaw Importer task to a release pipeline in Azure DevOps or Team Foundation Server (TFS)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"To complete this task:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In your Azure DevOps or TFS project, select the ",(0,r.kt)("strong",{parentName:"p"},"Release")," tab.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a new release and enter the definition name.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the Definition page, select the ",(0,r.kt)("strong",{parentName:"p"},"Environment")," tab and configure the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/t_TFS_config_build_pipe"},"Veracode Upload and Scan")," or ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/t_importflaws"},"Veracode Flaw Importer")," tasks. If you want to view a summary report of scan results, you must add the Veracode Upload and Scan task."),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The build object is not available in the release pipeline. Therefore, if you intend to use the Veracode Upload and Scan task in the release pipeline, you must enter the scan name manually. If you do not enter it manually, the scan name variable does not convert to text and the build name appears as ",(0,r.kt)("code",null,"$(build.buildNumber)"),"."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Save the definition and select ",(0,r.kt)("strong",{parentName:"p"},"Release")," > ",(0,r.kt)("strong",{parentName:"p"},"Create Release"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"For the Veracode Flaw Importer task, if you are using TFS, configure these variables:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For TFS 2017 or higher, set ",(0,r.kt)("inlineCode",{parentName:"p"},"enabletfs")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For TFS 2015, configure these variables:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"enabletfs"),": enter ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"isTfs2015"),": enter ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"username"),": enter your Windows username."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"password"),": enter your Windows password."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"domain"),": enter the Windows domain."))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the ",(0,r.kt)("strong",{parentName:"p"},"Release")," tab, select the release you just created.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"For the Veracode Upload and Scan task, in the Environments section, select the environment that contains the task.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From the Actions menu, select ",(0,r.kt)("strong",{parentName:"p"},"Deploy")," to start the build in the release pipeline."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Results:")),(0,r.kt)("p",null,"After the scan is complete, in your build definition, you can select the ",(0,r.kt)("strong",{parentName:"p"},"Veracode Scan Summary")," tab to view the scan results."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"For Azure DevOps and TFS 2018 Update 2 or later, if you do not include the Veracode Upload and Scan task in your build definition, you do not see the ",(0,r.kt)("b",null,"Veracode Scan Summary")," tab in the build summary. For earlier versions of TFS, the ",(0,r.kt)("b",null,"Veracode Scan Summary")," tab shows a status message explaining why there are no results.")))}c.isMDXComponent=!0}}]);