"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[79604],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(a),d=r,k=m["".concat(o,".").concat(d)]||m[d]||u[d]||i;return a?n.createElement(k,p(p({ref:t},s),{},{components:a})):n.createElement(k,p({ref:t},s))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,p=new Array(i);p[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var c=2;c<i;c++)p[c]=a[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},45675:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const i={title:"Pipeline Scan Prerequisites",slug:"/r/About_Pipeline_Scan_Prerequisites"},p=void 0,l={unversionedId:"guides/pipeline_scan/getstarted_pipeline_scan/c_pipeline_scan_prereqs",id:"guides/pipeline_scan/getstarted_pipeline_scan/c_pipeline_scan_prereqs",title:"Pipeline Scan Prerequisites",description:"Your environment must meet these specific prerequisites before you can successfully upload your packaged application to Veracode and run Pipeline Scans:",source:"@site/docs/guides/08_pipeline_scan/01_getstarted_pipeline_scan/02_c_pipeline_scan_prereqs.md",sourceDirName:"guides/08_pipeline_scan/01_getstarted_pipeline_scan",slug:"/r/About_Pipeline_Scan_Prerequisites",permalink:"/km-docusaurus-test/r/About_Pipeline_Scan_Prerequisites",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Pipeline Scan Prerequisites",slug:"/r/About_Pipeline_Scan_Prerequisites"},sidebar:"tutorialSidebar",previous:{title:"Video: Run a Pipeline Scan in Your CI/CD Environment",permalink:"/km-docusaurus-test/r/c_video_run_a_pipeline_scan"},next:{title:"Obtain the Pipeline Scan Files",permalink:"/km-docusaurus-test/r/t_download_pipeline_scan"}},o={},c=[],s={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Your environment must meet these specific prerequisites before you can successfully upload your packaged application to Veracode and run Pipeline Scans:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"An active Veracode Static Analysis license.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"One of these ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_about_veracode_accounts"},"Veracode accounts"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A user account with these ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_role_permissions"},"user roles"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Creator or Security Lead to create application profiles and upload and scan applications."),(0,r.kt)("li",{parentName:"ul"},"Submitter role to create a new scan for an existing application and upload and scan these applications."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"An API service account with these ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_API_roles_details"},"API roles"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"-   Upload and Scan API to create application profiles and upload and scan applications.\n-   Upload API - Submit Only to submit scans.\n")),(0,r.kt)("p",{parentName:"li"},"A Veracode account is limited to six Pipeline Scans per 60 seconds and each scan is limited to a maximum scan time of 60 minutes.")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You have generated ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_api_credentials3"},"Veracode API credentials"),". You can provide your credentials to the Pipeline Scan with the ",(0,r.kt)("a",{parentName:"p",href:"04_r_pipeline_scan_commands.md"},"command parameters")," or with a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_configure_api_cred_file"},"Veracode API credentials file"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Enable port 443 in the environments you run Pipeline Scans. The Pipeline Scan uses the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_pipe_intro"},"Pipeline Scan REST APIs"),", which use the standard HTTPS port 443.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You have installed Java 8 or later.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You have access to a development or test pipeline to which you can add the Pipeline Scan. If you do not have access to a pipeline, you can ",(0,r.kt)("a",{parentName:"p",href:"/km-docusaurus-test/r/Run_a_Pipeline_Scan_from_the_Command_Line"},"try running the Pipeline Scan from the command line"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The application you want to scan:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Builds successfully.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Does not exceed the total file size limit of 200 MB.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Meets the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_comp_quickref"},"packaging requirements"),". The Pipeline Scan supports applications built on these languages:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},".NET")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Android")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"C")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"C++")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"ColdFusion")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cordova")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Groovy")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"GoLang")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"IONIC")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Java")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"JavaScript")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Kotlin")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"PhoneGap")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"PHP")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Python")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"React Native")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Scala")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Titanium")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Xamarin"),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You cannot use the Pipeline Scan if the source-code language for your application is not supported."))))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you are using authenticated HTTPS proxy connections, you have configured the proxy settings using this format:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"java -Dhttps.proxyHost=<myproxy> -Dhttps.proxyPort=<myport> -Dhttps.proxyUser=<myuser> -Dhttps.proxyPassword=<mypass>\n")))))}u.isMDXComponent=!0}}]);