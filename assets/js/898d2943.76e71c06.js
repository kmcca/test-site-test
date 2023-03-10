"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[44905],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(b,i(i({ref:t},p),{},{components:n})):r.createElement(b,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},96667:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"Using Development Sandbox with the IntelliJ Plugin",slug:"/r/c_intelliJ_sandbox"},i=void 0,l={unversionedId:"guides/static/sandbox/using_dev_sandboxes_ides/c_intelliJ_sandbox",id:"guides/static/sandbox/using_dev_sandboxes_ides/c_intelliJ_sandbox",title:"Using Development Sandbox with the IntelliJ Plugin",description:"Within IntelliJ, you create a development sandbox into which you upload your files and, then, you can run a scan from the sandbox.",source:"@site/docs/guides/06_static/20_sandbox/10_using_dev_sandboxes_ides/02_c_intelliJ_sandbox.md",sourceDirName:"guides/06_static/20_sandbox/10_using_dev_sandboxes_ides",slug:"/r/c_intelliJ_sandbox",permalink:"/km-docusaurus-test/r/c_intelliJ_sandbox",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Using Development Sandbox with the IntelliJ Plugin",slug:"/r/c_intelliJ_sandbox"},sidebar:"tutorialSidebar",previous:{title:"Using Development Sandboxes with the Eclipse Plugin",permalink:"/km-docusaurus-test/r/t_eclipse_sandbox"},next:{title:"Mobile Behavioral Analysis",permalink:"/km-docusaurus-test/r/c_understanding_mobile"}},s={},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Within IntelliJ, you create a development sandbox into which you upload your files and, then, you can run a scan from the sandbox."),(0,a.kt)("p",null,"You can also manage development sandboxes with the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_rest_sandbox_intro"},"Sandboxes REST API"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"To complete this task:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select ",(0,a.kt)("strong",{parentName:"p"},"Veracode")," ",">"," ",(0,a.kt)("strong",{parentName:"p"},"Upload and Scan"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If prompted, enter your Veracode API username and password, and select ",(0,a.kt)("strong",{parentName:"p"},"Store username and password")," so that you only have to enter your credentials one time.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the Application field, select the application from the dropdown menu and in the Scan Type row, select Sandbox Scan.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Create Sandbox")," and enter a name for the sandbox. If you do not see this button, contact Veracode Technical Support to enable this feature for your account.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the Workspace Files table, use the browse icon to select the files you want to upload from your current projects. Click ",(0,a.kt)("strong",{parentName:"p"},"Add")," to select any files not associated with a current project.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select ",(0,a.kt)("strong",{parentName:"p"},"Upload")," and, when prompted to confirm, click ",(0,a.kt)("strong",{parentName:"p"},"Yes")," to continue the upload.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Yes")," to go directly to the Veracode prescan process after the upload. If you do not want the full scan to continue automatically, click ",(0,a.kt)("strong",{parentName:"p"},"No")," and, when ready, click ",(0,a.kt)("strong",{parentName:"p"},"Begin Prescan")," at the top of the Upload Files table."))),(0,a.kt)("p",null,"When the prescan is finished, click View Prescan Results at the top of the Upload Files table."))}u.isMDXComponent=!0}}]);