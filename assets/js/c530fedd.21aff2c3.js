"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[62816],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=o,A=u["".concat(c,".").concat(m)]||u[m]||d[m]||r;return a?n.createElement(A,i(i({ref:t},s),{},{components:a})):n.createElement(A,i({ref:t},s))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},52537:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(87462),o=(a(67294),a(3905));const r={title:"Upload Binaries from Within IntelliJ or Android Studio",slug:"/r/c_intellij_upload"},i=void 0,l={unversionedId:"guides/ides/static_ide/static_for_intellij_android_studio/scan_static_intellij_android/README",id:"guides/ides/static_ide/static_for_intellij_android_studio/scan_static_intellij_android/README",title:"Upload Binaries from Within IntelliJ or Android Studio",description:"You can upload binaries of your applications in the Veracode Static Plugin for your IDE.",source:"@site/docs/guides/05_ides/01_static_ide/04_static_for_intellij_android_studio/03_scan_static_intellij_android/README.md",sourceDirName:"guides/05_ides/01_static_ide/04_static_for_intellij_android_studio/03_scan_static_intellij_android",slug:"/r/c_intellij_upload",permalink:"/km-docusaurus-test/r/c_intellij_upload",draft:!1,tags:[],version:"current",frontMatter:{title:"Upload Binaries from Within IntelliJ or Android Studio",slug:"/r/c_intellij_upload"},sidebar:"tutorialSidebar",previous:{title:"Reset a Password in Veracode Static for IntelliJ",permalink:"/km-docusaurus-test/r/Reset_a_Password_in_Veracode_Static_for_IntelliJ"},next:{title:"Video: Upload Binaries to Scan Using Veracode Static for IntelliJ",permalink:"/km-docusaurus-test/r/c_video_upload_intellij"}},c={},p=[],s={toc:p};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can upload binaries of your applications in the Veracode Static Plugin for your IDE."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Before you begin:")),(0,o.kt)("p",null,"You must have the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_API_roles"},"Upload and Scan API role")," or ",(0,o.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_role_permissions"},"Submitter role"),". To obtain detailed findings information in your scan results, the builder you use to package your code must generate debug symbol information."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"To complete this task:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In your IDE, select ",(0,o.kt)("strong",{parentName:"p"},"Veracode")," ",">"," ",(0,o.kt)("strong",{parentName:"p"},"Upload and Scan"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If prompted, enter your ",(0,o.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_api_credentials3"},"Veracode API ID and key"),". Select the checkbox to store your credentials so that you only have to enter them once.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the Upload and Scan window, from the Application dropdown menu, select the application for which you want to upload binaries. To add an application, click ",(0,o.kt)("strong",{parentName:"p"},"Add Application")," and enter the required information such as policy control and organization information.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After adding an application, go to the Upload and Scan window, and, for Scan Type, select ",(0,o.kt)("strong",{parentName:"p"},"Policy Scan"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Create Scan"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the Create Scan window, enter the name for the new scan and, optionally, the lifecycle stage.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Create"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the Workspace Files table, use the browse icon ",(0,o.kt)("img",{src:a(71746).Z,width:"16",height:"16"})," to select the files you want to upload from your current projects.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Add")," to select any files not associated with a current project.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("strong",{parentName:"p"},"Upload"),"."),(0,o.kt)("admonition",{parentName:"li",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"You cannot upload binaries if Veracode is currently scanning an application. After the scan results are available, you can add more files.")),(0,o.kt)("p",{parentName:"li"},"Veracode expects the name of the uploaded file to be the same between scans of the same application. However, because filenames can change between builds of the same code, you can change the filename before uploading to keep the name consistent. If Veracode indicates that the filenames are not the same, click the New Filename column to rename the file, so that it matches the previous name for the same file.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"When prompted to confirm, click ",(0,o.kt)("strong",{parentName:"p"},"Yes")," to continue the upload.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Yes")," to go directly to the Veracode prescan process after the upload completes. If you do not want the full scan to continue automatically, click ",(0,o.kt)("strong",{parentName:"p"},"No"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Begin Prescan")," at the top of the Upload Files table."),(0,o.kt)("p",{parentName:"li"},"Files you have previously uploaded to the selected scan already appear in the Uploaded Files section.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To delete previously uploaded files, select the specific files and click ",(0,o.kt)("strong",{parentName:"p"},"Delete"),". You cannot delete files that Veracode is currently scanning until the scan results are available. The status of a scan always appears in the top bar of the window.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"When the prescan is complete, click ",(0,o.kt)("strong",{parentName:"p"},"View Prescan Results")," at the top of the Upload Files table."),(0,o.kt)("p",{parentName:"li"},"Veracode notifies you when your scan is complete and results are available."))))}d.isMDXComponent=!0},71746:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH5AEcETIoo48HbwAAAAd0RVh0QXV0aG9yAKmuzEgAAAAMdEVYdERlc2NyaXB0aW9uABMJISMAAAAKdEVYdENvcHlyaWdodACsD8w6AAAADnRFWHRDcmVhdGlvbiB0aW1lADX3DwkAAAAJdEVYdFNvZnR3YXJlAF1w/zoAAAALdEVYdERpc2NsYWltZXIAt8C0jwAAAAh0RVh0V2FybmluZwDAG+aHAAAAB3RFWHRTb3VyY2UA9f+D6wAAAAh0RVh0Q29tbWVudAD2zJa/AAAABnRFWHRUaXRsZQCo7tInAAAAP0lEQVQokWNcu3YtAymAhYGBwcTEhEjVZ86cYSLJeAYGhlENg0/D/kr5oHkPsDIosIFx7dq1tE1LLBB9xGsAAJeeFgqJny4dAAAAAElFTkSuQmCC"}}]);