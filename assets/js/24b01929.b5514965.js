"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[10636],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>f});var r=o(67294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,r,i=function(e,t){if(null==e)return{};var o,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var s=r.createContext({}),d=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},l=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(o),f=i,h=u["".concat(s,".").concat(f)]||u[f]||p[f]||n;return o?r.createElement(h,a(a({ref:t},l),{},{components:o})):r.createElement(h,a({ref:t},l))}));function f(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=o.length,a=new Array(n);a[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var d=2;d<n;d++)a[d]=o[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},54293:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>n,metadata:()=>c,toc:()=>d});var r=o(87462),i=(o(67294),o(3905));const n={title:"Configure Project Settings for Veracode Static for Visual Studio",slug:"/r/Configure_Project_Settings_for_Veracode_Static_for_Visual_Studio"},a=void 0,c={unversionedId:"guides/ides/static_ide/static_for_visual_studio_new/config_project_vs_2019_2022_new",id:"guides/ides/static_ide/static_for_visual_studio_new/config_project_vs_2019_2022_new",title:"Configure Project Settings for Veracode Static for Visual Studio",description:"This topic is for the new Veracode Static for Visual Studio released April 2022. For the legacy versions of Veracode Static for Visual Studio, see Veracode Static for Visual Studio (Legacy).",source:"@site/docs/guides/05_ides/01_static_ide/05_static_for_visual_studio_new/05_config_project_vs_2019_2022_new.md",sourceDirName:"guides/05_ides/01_static_ide/05_static_for_visual_studio_new",slug:"/r/Configure_Project_Settings_for_Veracode_Static_for_Visual_Studio",permalink:"/km-docusaurus-test/r/Configure_Project_Settings_for_Veracode_Static_for_Visual_Studio",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Configure Project Settings for Veracode Static for Visual Studio",slug:"/r/Configure_Project_Settings_for_Veracode_Static_for_Visual_Studio"},sidebar:"tutorialSidebar",previous:{title:"One-Time Setup of Veracode Static for Visual Studio",permalink:"/km-docusaurus-test/r/One_Time_Setup_of_Veracode_Static_for_Visual_Studio"},next:{title:"Custom Workflow Tool Window in Veracode Static for Visual Studio",permalink:"/km-docusaurus-test/r/Custom_Workflow_Tool_Window_in_Veracode_Static_for_Visual_Studio"}},s={},d=[{value:"The Wizard",id:"the-wizard",level:2},{value:"Application Selection",id:"application-selection",level:2},{value:"Sandbox Selection",id:"sandbox-selection",level:2},{value:"<code>veracode-project.json</code>",id:"veracode-projectjson",level:2},{value:"<code>veracode-project-user.json</code>",id:"veracode-project-userjson",level:2},{value:"Wizard Completion",id:"wizard-completion",level:2},{value:"Create an Application or a Sandbox",id:"create-an-application-or-a-sandbox",level:2}],l={toc:d};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This topic is for the new Veracode Static for Visual Studio released April 2022. For the legacy versions of Veracode Static for Visual Studio, see ",(0,i.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_title_VS"},"Veracode Static for Visual Studio (Legacy)"),".")),(0,i.kt)("h2",{id:"the-wizard"},"The Wizard"),(0,i.kt)("p",null,"You use the Veracode Project Settings Wizard to connect the Veracode application with the currently open solution and to configure these required files:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"veracode-project.json"),", which is in the root of the solution directory and checked into source")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"veracode-project-user.json"),", which is in the same directory as the Veracode API credentials file:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"C:\\Users\\{UserName}\\.veracode\\veracode-project-user.json\n")))),(0,i.kt)("p",null,"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"veracode-project.json")," file does not exist when you start a scan, the wizard below opens to automatically create the project settings files for you."),(0,i.kt)("p",null,(0,i.kt)("img",{src:o(22040).Z,width:"684",height:"442"})),(0,i.kt)("h2",{id:"application-selection"},"Application Selection"),(0,i.kt)("p",null,"The first step in the wizard is to select the Veracode application to connect to this solution. Just type any part of the Veracode application name into the entry field and click on the name of the application."),(0,i.kt)("p",null,(0,i.kt)("img",{src:o(30898).Z,width:"684",height:"440"})),(0,i.kt)("h2",{id:"sandbox-selection"},"Sandbox Selection"),(0,i.kt)("p",null,"If you intend to run most of your scans in a sandbox, you can select the ",(0,i.kt)("strong",{parentName:"p"},"I want to scan in a development sandbox")," option, and then select the sandbox for your default scan. You can select a different sandbox or a policy scan at any time through the Custom Workflow window, so you are not locked into any scan type with your choice here."),(0,i.kt)("p",null,(0,i.kt)("img",{src:o(88226).Z,width:"686",height:"443"})),(0,i.kt)("h2",{id:"veracode-projectjson"},(0,i.kt)("inlineCode",{parentName:"h2"},"veracode-project.json")),(0,i.kt)("p",null,"After you select your Veracode application and optional sandbox, you see an example of the ",(0,i.kt)("inlineCode",{parentName:"p"},"veracode-project.json")," file you are about to create. By default, all build output is stored in a ",(0,i.kt)("inlineCode",{parentName:"p"},".veracode/build")," directory in the solution directory."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},".veracode")," directory in your solution folder is intended to be added to your ",(0,i.kt)("inlineCode",{parentName:"p"},".gitignore")," file, so that you do not check it in to source control.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:o(14026).Z,width:"684",height:"440"})),(0,i.kt)("h2",{id:"veracode-project-userjson"},(0,i.kt)("inlineCode",{parentName:"h2"},"veracode-project-user.json")),(0,i.kt)("p",null,"As mentioned elsewhere, the ",(0,i.kt)("inlineCode",{parentName:"p"},"veracode-project-user.json")," file is created in the same directory as the Veracode API credentials:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"C:\\Users\\{UserName}\\.veracode\\veracode-project-user.json\n")),(0,i.kt)("p",null,"For full control of these settings, if they are only relevant to your scans, you can make additional entries in this file. These entries override the settings in the ",(0,i.kt)("inlineCode",{parentName:"p"},"veracode-project.json")," file."),(0,i.kt)("p",null,(0,i.kt)("img",{src:o(81899).Z,width:"684",height:"442"})),(0,i.kt)("h2",{id:"wizard-completion"},"Wizard Completion"),(0,i.kt)("p",null,"Depending on your selection, after the wizard closes, either the scan starts or the Custom Workflow tool window opens."),(0,i.kt)("h2",{id:"create-an-application-or-a-sandbox"},"Create an Application or a Sandbox"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/veracode/static-for-vs-build-scripts/tree/dhabolt/add-veracode-app-sandbox"},"Add a New Application and Sandbox From the Extension"),"."))}p.isMDXComponent=!0},30898:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/wizard-application-selection-a782667915390c45bad0b31a528d05f6.png"},22040:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/wizard-landing-screen-fc4f2af1b5faa5292e6a151c44db8b15.png"},88226:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/wizard-sandbox-selection-c2cfbdd59895df5622187b71dcd02ab4.png"},14026:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/wizard-veracode-project-json-ed0bcea1131fc3b2ff10bb19d74e7612.png"},81899:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/wizard-veracode-project-user-json-a7fa875254d6f62c23bd0f9f4679b793.png"}}]);