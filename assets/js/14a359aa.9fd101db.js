"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[13710],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var o=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(a),d=r,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||n;return a?o.createElement(h,i(i({ref:t},p),{},{components:a})):o.createElement(h,i({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<n;c++)i[c]=a[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},52958:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var o=a(87462),r=(a(67294),a(3905));const n={title:"Static Analysis Quickstart",slug:"/r/Static_Analysis_Quickstart"},i=void 0,s={unversionedId:"guides/getting_started/platform_static_analysis_quickstart",id:"guides/getting_started/platform_static_analysis_quickstart",title:"Static Analysis Quickstart",description:"This quickstart steps you through a Veracode Static Analysis of a demo application using the Veracode Platform. The Veracode Platform is a web console for managing your entire application security program. Scanning and running a Static Analysis of a Veracode demo application helps you understand the core concepts of performing a Static Analysis and how you can quickly get results.",source:"@site/docs/guides/02_getting_started/03_platform_static_analysis_quickstart.md",sourceDirName:"guides/02_getting_started",slug:"/r/Static_Analysis_Quickstart",permalink:"/km-docusaurus-test/r/Static_Analysis_Quickstart",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Static Analysis Quickstart",slug:"/r/Static_Analysis_Quickstart"},sidebar:"tutorialSidebar",previous:{title:"Selecting a Veracode Product",permalink:"/km-docusaurus-test/r/Getting_Started_with_Veracode_Products"},next:{title:"SCA Agent-Based Scan Quickstart",permalink:"/km-docusaurus-test/r/SCA_Agent_Based_Scan_Quickstart"}},l={},c=[{value:"Video: Static Analysis Quickstart",id:"video-static-analysis-quickstart",level:2},{value:"Obtain a Veracode Account",id:"obtain-a-veracode-account",level:2},{value:"Download a Demo Application",id:"download-a-demo-application",level:2},{value:"Sign In to the Veracode Platform",id:"sign-in-to-the-veracode-platform",level:2},{value:"Create Your First Application Profile",id:"create-your-first-application-profile",level:2},{value:"Submit Your First Scan Request",id:"submit-your-first-scan-request",level:2},{value:"Review Example Scan Results",id:"review-example-scan-results",level:2},{value:"Next Steps",id:"next-steps",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This quickstart steps you through a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_static_overview"},"Veracode Static Analysis")," of a demo application using the Veracode Platform. The Veracode Platform is a web console for managing your entire application security program. Scanning and running a Static Analysis of a Veracode demo application helps you understand the core concepts of performing a Static Analysis and how you can quickly get results."),(0,r.kt)("h2",{id:"video-static-analysis-quickstart"},"Video: Static Analysis Quickstart"),(0,r.kt)("iframe",{width:"500",height:"250",src:"https://www.youtube.com/embed/cZoVd-8_4k8",title:"Static Analysis Quickstart",frameborder:"0",allow:"accelerometer;\nautoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/embed/cZoVd-8_4k8"},"Watch this video on YouTube"),"."),(0,r.kt)("p",null,"In this quickstart, you will:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Obtain a Veracode account with the required permissions."),(0,r.kt)("li",{parentName:"ul"},"Download a demo application for your first Static Analysis scan."),(0,r.kt)("li",{parentName:"ul"},"Sign in to the Veracode Platform."),(0,r.kt)("li",{parentName:"ul"},"Use the Veracode Platform to create an application profile, submit your first scan, and review the results.")),(0,r.kt)("h2",{id:"obtain-a-veracode-account"},"Obtain a Veracode Account"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To access the Veracode Platform, you must have a Veracode ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_about_veracode_accounts"},"human user account")," and your account must be a member of a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/admin_team"},"team"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To configure scans, submit scans, and review scan results, your account must have the Creator, Submitter, and Reviewer ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_role_permissions"},"roles"),". "),(0,r.kt)("p",{parentName:"li"},"  Check with the Veracode Administrator for your organization to confirm that you have an account with the required roles and team membership. If you are a Veracode Administrator, your account likely has the required roles. If it does not, you can ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/t_manage_user"},"add roles to your account in the Veracode Platform"),"."))),(0,r.kt)("h2",{id:"download-a-demo-application"},"Download a Demo Application"),(0,r.kt)("p",null,"To complete this quickstart, download the pre-packaged demo application ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/veracode/verademo/releases"},(0,r.kt)("inlineCode",{parentName:"a"},"verademo.war"))," and save it to your desktop. This demo application is compiled Java code in a WAR file that meets ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/compilation_packaging"},"Veracode compilation and packaging requirements"),". It includes flaws that you can review in the scan results."),(0,r.kt)("h2",{id:"sign-in-to-the-veracode-platform"},"Sign In to the Veracode Platform"),(0,r.kt)("p",null,"Sign in to the Veracode Platform ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs"},"domain for your region")," using one of the following methods. Each region has a unique URL. This quickstart uses the Commercial Region domain: ",(0,r.kt)("inlineCode",{parentName:"p"},"https://analysiscenter.veracode.com/"),". Your account might be in a different domain, such as the European Region: ",(0,r.kt)("inlineCode",{parentName:"p"},"https://analysiscenter.veracode.eu/")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If you have a new Veracode account, you received a welcome email that provides a link for ",(0,r.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/t_activate_account"},"activating your account")," in the Veracode Platform. If you did not receive the welcome email, contact your Veracode Administrator."),(0,r.kt)("li",{parentName:"ul"},"If you have an active Veracode account, you can sign in to the Veracode Platform using the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs"},"domain for your region"),". If your organization uses a Single-Sign-On (SSO) portal such as Okta, you can also access the Veracode Platform with SSO.")),(0,r.kt)("h2",{id:"create-your-first-application-profile"},"Create Your First Application Profile"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/request_profile"},"Application profiles")," define the importance of the application to your organization, the security policy to apply during Static Analysis, who can view the results, and metadata you can use with Veracode integrations."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"For this quickstart, you create a new application profile. When you use this application profile to run a scan, it consumes a Veracode license. Also, the scan results from ",(0,r.kt)("inlineCode",{parentName:"p"},"verademo.war")," can affect the results of future scans. To restore the consumed license and to completely remove both ",(0,r.kt)("inlineCode",{parentName:"p"},"verademo.war")," and the scan results from your account, contact Veracode Technical Support.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"To complete this task:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the Platform Home page, select ",(0,r.kt)("strong",{parentName:"p"},"My Portfolio > Applications"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the All Applications page, select ",(0,r.kt)("strong",{parentName:"p"},"Add New Application"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the Add New Application page, enter values for the following required fields."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Application Name: enter a unique name for this application profile. For example, ",(0,r.kt)("inlineCode",{parentName:"li"},"Verademo-{your-initials}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/review_assurancelevels"},"Business Criticality"),": select ",(0,r.kt)("strong",{parentName:"li"},"Very Low"),". Business criticality specifies the importance of securing the application and the negative impact to your organization if an attacker compromises this application."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/c_appsec_policies"},"Policy"),": after you set Business Criticality to ",(0,r.kt)("strong",{parentName:"li"},"Very Low"),", this setting defaults to ",(0,r.kt)("strong",{parentName:"li"},"Veracode Recommended Very Low"),". A security policy determines whether the flaws that Veracode found in your application meet specific security standards. In the scan results, flaws that do not comply with the selected policy are highlighted. Before your application can pass policy, you must fix all highlighted flaws. For this quickstart, because the lowest policy setting is selected, you do not see highlighted flaws in the scan results for ",(0,r.kt)("inlineCode",{parentName:"li"},"verademo.war"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/Assign_an_Application_to_Teams"},"Access"),": select ",(0,r.kt)("strong",{parentName:"li"},"Edit"),". Under Available Teams, select your team. You must be a member of the selected team to access this new application profile. If you do not see any teams, contact your Veracode Administrator. Select ",(0,r.kt)("strong",{parentName:"li"},"Add")," to add the team to Selected Teams, then select ",(0,r.kt)("strong",{parentName:"li"},"Save"),".")),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"These are example values for this quickstart to ensure a successful scan. Veracode does not recommend using these values in production application profiles."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Submit")," to create the application profile."))),(0,r.kt)("h2",{id:"submit-your-first-scan-request"},"Submit Your First Scan Request"),(0,r.kt)("p",null,"You can now use the Veracode Platform to scan the application and run a Static Analysis using the selected security policy."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"To complete this task:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the All Applications page, select the name of your new application profile.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the Application page, select ",(0,r.kt)("strong",{parentName:"p"},"Start a Scan > Start a Static Scan"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter a unique name for the scan or accept the default, which is the current date followed by ",(0,r.kt)("inlineCode",{parentName:"p"},"Static"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Under Auto-Scan, set Auto-Scan after Prescan to ",(0,r.kt)("strong",{parentName:"p"},"Off"),"."),(0,r.kt)("p",{parentName:"li"},"For Static Analysis, a prescan evaluates your uploaded application to ensure you compiled and packaged it correctly prior to scanning. It also identifies the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/About_Top_Level_Modules"},"top-level modules"),", or components, in your application, including any third-party dependencies or supporting files that these modules call. Top-level modules are components your organization created. If this option is set to ",(0,r.kt)("strong",{parentName:"p"},"On")," and your application passes prescan, Veracode automatically selects the top-level modules and starts the scan. With this option set to ",(0,r.kt)("strong",{parentName:"p"},"Off"),", scanning does not start automatically after prescan and you can manually select the modules to include or exclude in the scan."),(0,r.kt)("p",{parentName:"li"},"If your account is on the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs"},"European Region or US Federal Region domain"),", on the Package Application step of the wizard, select ",(0,r.kt)("strong",{parentName:"p"},"Continue")," to skip the packaging step, as ",(0,r.kt)("inlineCode",{parentName:"p"},"verademo.war")," is already packaged.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Save and Continue"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the Upload Files page, select ",(0,r.kt)("strong",{parentName:"p"},"Select Files"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Locate and select ",(0,r.kt)("inlineCode",{parentName:"p"},"verademo.war"),". Then, select ",(0,r.kt)("strong",{parentName:"p"},"Open")," to upload the file.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After the upload is complete, select ",(0,r.kt)("strong",{parentName:"p"},"Next"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"For this quickstart, on the Reviewing Modules page, wait for the prescan to complete. The spinning wheel under Validate Upload indicates when prescan is actively running."),(0,r.kt)("p",{parentName:"li"},"After prescan is complete, the spinning wheel stops and you receive an email stating that you can now start the policy scan.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Review the Prescan Status column for any packaging errors for your application."),(0,r.kt)("p",{parentName:"li"},"Because ",(0,r.kt)("inlineCode",{parentName:"p"},"verademo.war")," meets the Veracode compilation and packaging requirements, you should not see any prescan status errors.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the Select Modules to Scan page, select the ",(0,r.kt)("strong",{parentName:"p"},"Advanced Mode")," tab.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the ",(0,r.kt)("strong",{parentName:"p"},"Modules")," tab, select the ",(0,r.kt)("strong",{parentName:"p"},"Entry Point?")," checkbox to select all ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/About_Top_Level_Modules"},"top-level modules")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"verademo.war"),"."),(0,r.kt)("p",{parentName:"li"},"The top-level modules in your application are the entry points that Veracode uses to determine which components, including third-party dependencies, to scan."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(94827).Z,width:"709",height:"543"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Start Scan"),". If your account is on the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs"},"European Region or US Federal domain"),", on the Review and Submit step of the wizard, select ",(0,r.kt)("strong",{parentName:"p"},"Submit Scan"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Wait for the scan to complete, as indicated by the Scan in Progress bar. You receive three emails: after you submit the scan, when partial scan results are available, and when the scan is complete. You can review the partial results while you wait for the complete scan results."),(0,r.kt)("p",{parentName:"li"},"If the Scan in Progress bar appears stuck, refresh your browser to see if it updates."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(77790).Z,width:"694",height:"480"})))),(0,r.kt)("h2",{id:"review-example-scan-results"},"Review Example Scan Results"),(0,r.kt)("p",null,"After running a Static Analysis of the application, review the complete results to identify flaws. Access the results directly in the Veracode Platform or from a link in one of the scan results emails."),(0,r.kt)("p",null,"This task assumes you are on the Application page for ",(0,r.kt)("inlineCode",{parentName:"p"},"verademo.war"),": select ",(0,r.kt)("strong",{parentName:"p"},"My Portfolio > Applications > ",(0,r.kt)("em",{parentName:"strong"},"Verademo")),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"To complete this task:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the left pane, select ",(0,r.kt)("strong",{parentName:"p"},"Triage Flaws")," to see a table of discovered flaws.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Optionally, to hide the Source Code View window, in the top-right corner, set Show to ",(0,r.kt)("strong",{parentName:"p"},"None"),". Next to this option, you can also select ",(0,r.kt)("strong",{parentName:"p"},"Max")," to hide the navigation bar.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ID column, select the right arrow next to a flaw ID to access detailed information and remediation guidance for that flaw."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(43632).Z,width:"706",height:"503"})))),(0,r.kt)("h2",{id:"next-steps"},"Next Steps"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/review_static_flaw_viewer"},"Learn more about reviewing static flaws"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/c_ide_intro"},"Run a Static Analysis and review flaws in your IDE"),".")))}u.isMDXComponent=!0},94827:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/module_selection-969af46b0c2290562cb7d994553950fe.png"},77790:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/static_scan_progress-9a8ba11166d796d9338057a152361b2a.png"},43632:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/triage_flaws_detail-815afbbdfec375866ec3dbdda88b8f31.png"}}]);