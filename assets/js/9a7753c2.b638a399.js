"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[65874],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>g});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=c(i),g=a,h=p["".concat(l,".").concat(g)]||p[g]||u[g]||o;return i?n.createElement(h,s(s({ref:t},d),{},{components:i})):n.createElement(h,s({ref:t},d))}));function g(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=i.length,s=new Array(o);s[0]=p;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,s[1]=r;for(var c=2;c<o;c++)s[c]=i[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,i)}p.displayName="MDXCreateElement"},13183:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var n=i(87462),a=(i(67294),i(3905));const o={title:"Run a Scan and View Results Using Veracode Static for Visual Studio",slug:"/r/Run_a_Scan_and_View_Results_Using_Veracode_Static_for_Visual_Studio"},s=void 0,r={unversionedId:"guides/ides/static_ide/static_for_visual_studio_new/scan_view_results_vs_2019_2022_new/README",id:"guides/ides/static_ide/static_for_visual_studio_new/scan_view_results_vs_2019_2022_new/README",title:"Run a Scan and View Results Using Veracode Static for Visual Studio",description:"This topic is for the new Veracode Static for Visual Studio released April 2022. For the legacy versions of Veracode Static for Visual Studio, see Veracode Static for Visual Studio (Legacy).",source:"@site/docs/guides/05_ides/01_static_ide/05_static_for_visual_studio_new/03_scan_view_results_vs_2019_2022_new/README.md",sourceDirName:"guides/05_ides/01_static_ide/05_static_for_visual_studio_new/03_scan_view_results_vs_2019_2022_new",slug:"/r/Run_a_Scan_and_View_Results_Using_Veracode_Static_for_Visual_Studio",permalink:"/km-docusaurus-test/r/Run_a_Scan_and_View_Results_Using_Veracode_Static_for_Visual_Studio",draft:!1,tags:[],version:"current",frontMatter:{title:"Run a Scan and View Results Using Veracode Static for Visual Studio",slug:"/r/Run_a_Scan_and_View_Results_Using_Veracode_Static_for_Visual_Studio"},sidebar:"tutorialSidebar",previous:{title:"Install Veracode Static for Visual Studio",permalink:"/km-docusaurus-test/r/Install_Veracode_Static_for_Visual_Studio_New"},next:{title:"Import Scan Results Into Visual Studio",permalink:"/km-docusaurus-test/r/Import_Scan_Results_Into_Visual_Studio_New"}},l={},c=[{value:"Run Scan",id:"run-scan",level:2},{value:"View Results",id:"view-results",level:2},{value:"Details",id:"details",level:3},{value:"History",id:"history",level:3},{value:"Datapaths",id:"datapaths",level:3},{value:"Remediation Guidance",id:"remediation-guidance",level:3},{value:"Go to Line",id:"go-to-line",level:3},{value:"Actions",id:"actions",level:2},{value:"Windows Menu",id:"windows-menu",level:2}],d={toc:c};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This topic is for the new Veracode Static for Visual Studio released April 2022. For the legacy versions of Veracode Static for Visual Studio, see ",(0,a.kt)("a",{href:"https://docs.veracode.com/r/c_title_VS"},"Veracode Static for Visual Studio (Legacy)"),".")),(0,a.kt)("h2",{id:"run-scan"},"Run Scan"),(0,a.kt)("p",null,"If this is your first scan for an application using this extension, please see the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/One_Time_Setup_of_Veracode_Static_for_Visual_Studio"},"One-Time Setup section")," to ensure your scan is properly built and packaged for uploading to Veracode."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("strong",{parentName:"p"},"Run Scan")," button is disabled if a scan is in a failed state. You must resolve the failed scan to re-enable this button.")),(0,a.kt)("p",null,"To start a scan, select ",(0,a.kt)("strong",{parentName:"p"},"Run Scan"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(29333).Z,width:"406",height:"159"})),(0,a.kt)("p",null,"After selecting ",(0,a.kt)("strong",{parentName:"p"},"Run Scan"),", the application builds the solution with Veracode settings, packages the application, such as zipping the binaries and JavaScript, and begins the scan. The message panel displays the progress:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(8353).Z,width:"1034",height:"740"})),(0,a.kt)("p",null,"The messaging panel indicates when it is safe to open new solutions and work on other applications. When the scan completes, the Summary Report displays in the message panel to let you know the results of the scan. In this case, there are multiple findings in both the binaries and the JavaScript."),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(28208).Z,width:"762",height:"734"})),(0,a.kt)("p",null,"You can now click ",(0,a.kt)("strong",{parentName:"p"},"View Results")," to view full details on the findings."),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(39458).Z,width:"352",height:"93"})),(0,a.kt)("h2",{id:"view-results"},"View Results"),(0,a.kt)("p",null,"The View Results grid opens with details about the findings."),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(34905).Z,width:"1534",height:"750"})),(0,a.kt)("p",null,"Right-click on any finding in the grid and select from these options:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Details")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"History")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Datapaths")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Remediation Guidance")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Go to Line")," to go directly to the line of code containing the finding. You can also double-click the grid row to go directly to the source code.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(17765).Z,width:"564",height:"232"})),(0,a.kt)("h3",{id:"details"},"Details"),(0,a.kt)("p",null,"The details window shows all details for the findings. Some of these details show in the grid, by default, and the details window enables you to see all details, including the Issue Description, which gives specific guidance about the finding."),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(91275).Z,width:"1530",height:"742"})),(0,a.kt)("h3",{id:"history"},"History"),(0,a.kt)("p",null,"The History window shows the history of any actions that have been applied to a finding, such as any mitigations, or as below, comments applied to a finding."),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(77327).Z,width:"868",height:"106"})),(0,a.kt)("h3",{id:"datapaths"},"Datapaths"),(0,a.kt)("p",null,"The Datapaths window shows the flow of the finding through the code. In this example, there can be a number of different entry points a finding can take through the code."),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(8685).Z,width:"1534",height:"296"})),(0,a.kt)("h3",{id:"remediation-guidance"},"Remediation Guidance"),(0,a.kt)("p",null,"The Remediation Guidance window shows detailed information about a finding and examples of how it might be fixed. There are also links to other common websites with additional information on the finding, such as OWASP, WASC, and ",(0,a.kt)("inlineCode",{parentName:"p"},"cwe.mitre.org"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(12572).Z,width:"1526",height:"740"})),(0,a.kt)("h3",{id:"go-to-line"},"Go to Line"),(0,a.kt)("p",null,"You can go directly to the finding in your source code by either selecting ",(0,a.kt)("strong",{parentName:"p"},"Go to Line"),", or by double-clicking the grid row corresponding to the finding in your source code."),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(3126).Z,width:"512",height:"64"})),(0,a.kt)("h2",{id:"actions"},"Actions"),(0,a.kt)("p",null,"Actions allow you to apply a number of different options for each row you select in the grid. In the example below, only one row is selected, but you can select multiple rows to which to apply the action. The actions include adding comments to the findings, adding mitigation requests, such as Mitigate by Design, Mitigate by Network Environment, etc., and with the correct account permissions, the ability to approve or reject mitigations."),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(98728).Z,width:"1120",height:"512"})),(0,a.kt)("p",null,"Below is an example of adding a comment to a single finding using the selected row as shown in the example above."),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(16275).Z,width:"436",height:"363"})),(0,a.kt)("h2",{id:"windows-menu"},"Windows Menu"),(0,a.kt)("p",null,"Select ",(0,a.kt)("strong",{parentName:"p"},"Extensions")," > ",(0,a.kt)("strong",{parentName:"p"},"Veracode Static Analysis")," > ",(0,a.kt)("strong",{parentName:"p"},"View Results")," > ",(0,a.kt)("strong",{parentName:"p"},"Windows"),". You can open a window for each of these menu items: ",(0,a.kt)("strong",{parentName:"p"},"View Results"),", ",(0,a.kt)("strong",{parentName:"p"},"Finding History"),", ",(0,a.kt)("strong",{parentName:"p"},"Finding Details"),", ",(0,a.kt)("strong",{parentName:"p"},"Finding Datapaths"),", and ",(0,a.kt)("strong",{parentName:"p"},"Remediation Guidance"),"."),(0,a.kt)("p",null,"These windows are populated with data you viewed during the current Visual Studio session. If you exit and restart Visual Studio, you clear the data from all windows. If you have not viewed data in a window during the current session, the window is empty."))}u.isMDXComponent=!0},8353:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/happy-start-scan-8e23f9e9d80101478fd2d9373cba1008.png"},28208:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/happy-summary-report-f984be7c1bbe0a28d901bc00f2d30042.png"},29333:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/main-menu-run-scan-9494af068dfd71f1f4f5d34815ffd4bd.png"},98728:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/view-apply-action-e4069708f1c777c5472e526f702bdda8.png"},16275:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/view-apply-comment-90b17e95211c7993f1de3b364aad965c.png"},39458:(e,t,i)=>{i.d(t,{Z:()=>n});const n="data:image/png;base64,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"},8685:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/view-data-paths-f9b636bf47c50129a34ac89156f43b20.png"},91275:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/view-details-2a69505e02b79882913d26c02070e0ea.png"},3126:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/view-go-to-line-6d2c82cac7fbb16952de8fa4441fdc71.png"},77327:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/view-history-25d1726f60d0017a255b89f9ad5477f5.png"},12572:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/view-remediation-guidance-f9b9ba3115914fd90eac49a9ea15ffac.png"},34905:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/view-results-grid-765835d2b3fe69142647684eea86edc6.png"},17765:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/view-right-click-options-8ac4f9e619f62820226b4b3b8d558c13.png"}}]);