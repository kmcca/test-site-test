"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[80540],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(f,i(i({ref:t},s),{},{components:a})):n.createElement(f,i({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},12157:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={title:"Upload Binaries from Within Eclipse",slug:"/r/c_Eclipse_upload"},i=void 0,l={unversionedId:"guides/ides/static_ide/static_for_eclipse/scan_static_eclipse/README",id:"guides/ides/static_ide/static_for_eclipse/scan_static_eclipse/README",title:"Upload Binaries from Within Eclipse",description:"You can upload binaries of your applications to Veracode from within Eclipse.",source:"@site/docs/guides/05_ides/01_static_ide/03_static_for_eclipse/03_scan_static_eclipse/README.md",sourceDirName:"guides/05_ides/01_static_ide/03_static_for_eclipse/03_scan_static_eclipse",slug:"/r/c_Eclipse_upload",permalink:"/km-docusaurus-test/r/c_Eclipse_upload",draft:!1,tags:[],version:"current",frontMatter:{title:"Upload Binaries from Within Eclipse",slug:"/r/c_Eclipse_upload"},sidebar:"tutorialSidebar",previous:{title:"Reset a Password in Veracode Static for Eclipse",permalink:"/km-docusaurus-test/r/Reset_a_Password_in_Veracode_Static_for_Eclipse"},next:{title:"Use Sandboxes with Veracode Static for Eclipse",permalink:"/km-docusaurus-test/r/c_Eclipse_sandbox"}},c={},p=[],s={toc:p};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can upload binaries of your applications to Veracode from within Eclipse."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Before you begin:")),(0,r.kt)("p",null,"You must have the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_API_roles"},"Upload and Scan API role")," or ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_role_permissions"},"Submitter role"),". To obtain detailed findings information in your scan results, the builder you use to package your code must generate debug symbol information."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"To complete this task:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In Eclipse, select ",(0,r.kt)("strong",{parentName:"p"},"Veracode")," ",">"," ",(0,r.kt)("strong",{parentName:"p"},"Upload and Scan"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If prompted, enter your ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_api_credentials3"},"Veracode API ID and key"),". Select the checkbox to store your credentials so that you only have to enter them once.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the Upload and Scan window, from the Application dropdown menu, select the application for which you want to upload binaries. To add an application, click ",(0,r.kt)("strong",{parentName:"p"},"Add Application")," and enter the required information such as policy control and organization information.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After adding an application, go to the Upload and Scan window and select ",(0,r.kt)("strong",{parentName:"p"},"Policy Scan")," for Scan Type.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Create Scan"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the Create Scan window, enter the name for the new scan and, optionally, the lifecycle stage.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Create"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the Workspace Files table, use the browse icon ",(0,r.kt)("img",{src:a(71746).Z,width:"16",height:"16"})," to select the files you want to upload from your current projects.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Add")," to select any files not associated with a current project.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Upload"),"."),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You cannot upload binaries if Veracode is currently scanning an application. After the scan results are available, you can add more files.")),(0,r.kt)("p",{parentName:"li"},"Veracode expects the name of the uploaded file to be the same between scans of the same application. However, because filenames can change between builds of the same code, you can change the filename before uploading to keep the name consistent. If Veracode indicates that the filenames are not the same, click the New Filename column to rename the file, so that it matches the previous name for the same file.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"When prompted to confirm, click ",(0,r.kt)("strong",{parentName:"p"},"Yes")," to continue the upload.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Yes")," to go directly to the Veracode prescan process after the upload completes. If you do not want the full scan to continue automatically, click ",(0,r.kt)("strong",{parentName:"p"},"No"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Begin Prescan")," at the top of the Upload Files table."),(0,r.kt)("p",{parentName:"li"},"Files you have previously uploaded to the selected scan already appear in the Uploaded Files section.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To delete previously uploaded files, select the specific files and click ",(0,r.kt)("strong",{parentName:"p"},"Delete"),". You cannot delete files that Veracode is currently scanning until the scan results are available. The status of a scan always appears in the top bar of the window.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"When the prescan is complete, click ",(0,r.kt)("strong",{parentName:"p"},"View Prescan Results")," at the top of the Upload Files table."),(0,r.kt)("p",{parentName:"li"},"Veracode notifies you when your scan is complete and results are available."))))}d.isMDXComponent=!0},71746:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH5AEcETIoo48HbwAAAAd0RVh0QXV0aG9yAKmuzEgAAAAMdEVYdERlc2NyaXB0aW9uABMJISMAAAAKdEVYdENvcHlyaWdodACsD8w6AAAADnRFWHRDcmVhdGlvbiB0aW1lADX3DwkAAAAJdEVYdFNvZnR3YXJlAF1w/zoAAAALdEVYdERpc2NsYWltZXIAt8C0jwAAAAh0RVh0V2FybmluZwDAG+aHAAAAB3RFWHRTb3VyY2UA9f+D6wAAAAh0RVh0Q29tbWVudAD2zJa/AAAABnRFWHRUaXRsZQCo7tInAAAAP0lEQVQokWNcu3YtAymAhYGBwcTEhEjVZ86cYSLJeAYGhlENg0/D/kr5oHkPsDIosIFx7dq1tE1LLBB9xGsAAJeeFgqJny4dAAAAAElFTkSuQmCC"}}]);