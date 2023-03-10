"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[28446],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),u=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(a),c=r,h=m["".concat(p,".").concat(c)]||m[c]||d[c]||i;return a?n.createElement(h,o(o({ref:t},s),{},{components:a})):n.createElement(h,o({ref:t},s))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4405:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const i={title:"Precompiling ASP.NET WebForms and MVC Views with MSBuild",slug:"/r/c_precomp_MS"},o=void 0,l={unversionedId:"guides/packaging/net/asp_net_web_apps/c_precomp_MS",id:"guides/packaging/net/asp_net_web_apps/c_precomp_MS",title:"Precompiling ASP.NET WebForms and MVC Views with MSBuild",description:"You can precompile ASP.NET WebForms and MVC Views using the Publish feature in Visual Studio. You automate the precompilation using the MSBuild command-line tool.",source:"@site/docs/guides/03_packaging/19_net/01_asp_net_web_apps/04_c_precomp_MS.md",sourceDirName:"guides/03_packaging/19_net/01_asp_net_web_apps",slug:"/r/c_precomp_MS",permalink:"/km-docusaurus-test/r/c_precomp_MS",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Precompiling ASP.NET WebForms and MVC Views with MSBuild",slug:"/r/c_precomp_MS"},sidebar:"tutorialSidebar",previous:{title:"Publish ASP.NET Applications with Visual Studio 2019 or Later",permalink:"/km-docusaurus-test/r/Publish_ASP.NET_Applications_with_Visual_Studio_2019_or_Later"},next:{title:"Troubleshooting Precompilation Errors",permalink:"/km-docusaurus-test/r/c_comp_troubleshoot"}},p={},u=[{value:"Using a VS Project File to Precompile Without a PUBXML Configuration File",id:"using-a-vs-project-file-to-precompile-without-a-pubxml-configuration-file",level:2},{value:"Using a Solution File to Precompile Without a PUBXML Configuration File",id:"using-a-solution-file-to-precompile-without-a-pubxml-configuration-file",level:2},{value:"Using the Veracode API Wrappers from the Command Line",id:"using-the-veracode-api-wrappers-from-the-command-line",level:2}],s={toc:u};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can precompile ASP.NET WebForms and MVC Views using the Publish feature in Visual Studio. You automate the precompilation using the MSBuild command-line tool."),(0,r.kt)("p",null,"To automate with MSBuild, use Visual Studio to precompile your ASP.NET application and generate the PUBXML file, which is created in your ",(0,r.kt)("strong",{parentName:"p"},"Properties")," ",">"," ",(0,r.kt)("strong",{parentName:"p"},"PublishProfiles")," folder in your ASP.NET Web project."),(0,r.kt)("p",null,"This is an example PUBXML file. You can download this copy: ",(0,r.kt)("a",{parentName:"p",href:"https://tools.veracode.com/integrations/Microsoft/VisualStudio/update/VeracodePrecompileProfile.zip"},"https://tools.veracode.com/integrations/Microsoft/VisualStudio/update/VeracodePrecompileProfile.zip")),(0,r.kt)("p",null,"This table describes the PUBXML file values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Element"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"WebPublishMethod")),(0,r.kt)("td",{parentName:"tr",align:null},"Set to ",(0,r.kt)("inlineCode",{parentName:"td"},"FileSystem")," to specify that the precompiled files are written to the local filesystem.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PublishProvider")),(0,r.kt)("td",{parentName:"tr",align:null},"Required. Set to ",(0,r.kt)("inlineCode",{parentName:"td"},"FileSystem")," so that the precompiled files are written to the local filesystem.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"LastUsedBuildConfiguration")),(0,r.kt)("td",{parentName:"tr",align:null},"Set to ",(0,r.kt)("inlineCode",{parentName:"td"},"Debug"),". This value is set by the Publish option in Visual Studio to track the last Build Configuration that the Veracode Platform used last time. You should set this value to the Build Configuration you need to target.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"LastUsedPlatform")),(0,r.kt)("td",{parentName:"tr",align:null},"Set to ",(0,r.kt)("inlineCode",{parentName:"td"},"Any CPU"),". This value is set by the Publish option in Visual Studio to track the last used platform. This value should be set to the platform the user needs to target.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SiteUrlToLaunchAfterPublish")),(0,r.kt)("td",{parentName:"tr",align:null},"N/A")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"LaunchSiteAfterPublish")),(0,r.kt)("td",{parentName:"tr",align:null},"N/A")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ExcludeApp_Data")),(0,r.kt)("td",{parentName:"tr",align:null},"Set this value to the requirements for your project.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"publishUrl")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Required")," This value is the filepath where Veracode writes the precompiled assemblies. This value is the location where you pick up the files to zip up and upload to the Veracode Platform.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PrecompileBeforePublish")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Required")," Set to ",(0,r.kt)("inlineCode",{parentName:"td"},"True")," to precompile the ASPX WebForms or the CSHTML views.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DeleteExistingFiles")),(0,r.kt)("td",{parentName:"tr",align:null},"If set to ",(0,r.kt)("inlineCode",{parentName:"td"},"True"),", the output directory publishUrl is purged before Veracode writes output to it. Veracode recommends that you purge the output directory.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"EnableUpdateable")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Required")," Set to ",(0,r.kt)("inlineCode",{parentName:"td"},"False"),", otherwise the CSHTML View/ASPX WebForm is still editable, which results in new compilation and use of the View or WebForm.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DebugSymbols")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Required")," You must set this to ",(0,r.kt)("inlineCode",{parentName:"td"},"True")," to retain the debug symbols.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"WDPMergeOption")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Required")," You must set this to ",(0,r.kt)("inlineCode",{parentName:"td"},"CreateSeparateAssembly"),", which instructs the compiler to create an assembly for each page or view.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"UseFixedNames")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Required")," You must set this to ",(0,r.kt)("inlineCode",{parentName:"td"},"True"),", which instructs the compiler to allow all the separately created assemblies to start with the same name.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"UseMerge")),(0,r.kt)("td",{parentName:"tr",align:null},"If present, you must set this value to ",(0,r.kt)("inlineCode",{parentName:"td"},"False"),", you do not want to merge any of the output.")))),(0,r.kt)("p",null,"Run MSBuild, providing the appropriate arguments for the CSPROJECT file and these properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"OutPutPath"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"DeployOnBuild"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"PublishProfile")),(0,r.kt)("p",{parentName:"li"},"You can also specify the ",(0,r.kt)("inlineCode",{parentName:"p"},"PublishProfile")," property as a name instead of a path to a file. Other switches may be needed, depending on your environment and/or requirements."))),(0,r.kt)("h2",{id:"using-a-vs-project-file-to-precompile-without-a-pubxml-configuration-file"},"Using a VS Project File to Precompile Without a PUBXML Configuration File"),(0,r.kt)("p",null,"There is a way to precompile and package ASP.NET WebForms and MVC Views without the PUBXML file."),(0,r.kt)("p",null,"The following example uses a CSPROJ file to precompile, merge, and then package it in a deployment ZIP file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'msbuild ContosoUniversity.csproj /p:OutputPath=bin /p:DeployOnBuild=true\n/p:PublishProvider="FileSystem" /p:PrecompileBeforePublish=true /p:EnableUpdateable=false\n/p:DebugSymbols=true /p:WDPMergeOption="CreateSeparateAssembly"\n/p:UseFixedNames=true\n')),(0,r.kt)("p",null,"You can use the above example to build a web project if you substitute the ",(0,r.kt)("inlineCode",{parentName:"p"},".csproj")," name and use these specific parameters and values from the command line:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'msbuild ContosoUniversity.csproj /p:OutputPath=bin /p:DeployOnBuild=true\n/p:PrecompileBeforePublish=true /p:EnableUpdateable=false /p:DebugSymbols=true\n/p:WDPMergeOption="CreateSeparateAssembly" /p:WebPublishMethod="FileSystem"\n/p:UseMerge=false\n')),(0,r.kt)("p",null,"The ZIP file contains all the assemblies needed to deploy the web application. You can also upload this ZIP file to the Veracode Platform. Based on the command line in the example above, the deployment package is in a subfolder under the output path: ",(0,r.kt)("inlineCode",{parentName:"p"},"bin\\_PublishedWebsites\\ContosoUniversity_Package\\ContosoUniversity.zip"),"."),(0,r.kt)("h2",{id:"using-a-solution-file-to-precompile-without-a-pubxml-configuration-file"},"Using a Solution File to Precompile Without a PUBXML Configuration File"),(0,r.kt)("p",null,"To use MSBuild directly on a Visual Studio solution file that has multiple projects, you must precompile with debug, as required by Veracode. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"msbuild ContosoUniversity.sln /t:Rebuild /tv:14.0\n/p:OutputPath=bin /p:DeployOnBuild=true /p:WebPublishMethod=FileSystem\n/p:PrecompileBeforePublish=true /p:EnableUpdateable=false /p:DebugSymbols=true\n/p:UseMerge=false /p:DeleteAppCodeCompiledFiles=True /p:DeleteExistingFiles=True\n/p:WDPMergeOption=CreateSeparateAssembly /p:UseFixedNames=true\n")),(0,r.kt)("p",null,"Change the ",(0,r.kt)("inlineCode",{parentName:"p"},"/t:")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"/tv:")," parameters to specify the required targets and the version of Visual Studio you are using. For example,",(0,r.kt)("inlineCode",{parentName:"p"},"/tv:14.0")," is Visual Studio 2015 and ",(0,r.kt)("inlineCode",{parentName:"p"},"/tv:12.0")," is Visual Studio 2013. The target version parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"/tv:")," is not required for Visual Studio 2017 or later."),(0,r.kt)("h2",{id:"using-the-veracode-api-wrappers-from-the-command-line"},"Using the Veracode API Wrappers from the Command Line"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_wrapper_composite_actions"},"uploadandscan")," action from the API wrapper to help automate uploading the .NET application to Veracode."))}d.isMDXComponent=!0}}]);