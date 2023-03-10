"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[24893],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),g=r,d=m["".concat(l,".").concat(g)]||m[g]||u[g]||o;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},43360:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"Create an Agent-Based Scanning Integration for Jira Cloud",slug:"/r/Create_an_Agent_Based_Scanning_Integration_for_Jira_Cloud"},i=void 0,s={unversionedId:"guides/sca/setting_up_agent_based_scans/issues_integration/create_agent_integration_jira_cloud",id:"guides/sca/setting_up_agent_based_scans/issues_integration/create_agent_integration_jira_cloud",title:"Create an Agent-Based Scanning Integration for Jira Cloud",description:"Setting up the Veracode Software Composition Analysis agent-based scanning integration for Jira Cloud allows your organization to create Jira issues from within the Veracode Platform.",source:"@site/docs/guides/07_sca/03_setting_up_agent_based_scans/02_issues_integration/01_create_agent_integration_jira_cloud.md",sourceDirName:"guides/07_sca/03_setting_up_agent_based_scans/02_issues_integration",slug:"/r/Create_an_Agent_Based_Scanning_Integration_for_Jira_Cloud",permalink:"/km-docusaurus-test/r/Create_an_Agent_Based_Scanning_Integration_for_Jira_Cloud",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Create an Agent-Based Scanning Integration for Jira Cloud",slug:"/r/Create_an_Agent_Based_Scanning_Integration_for_Jira_Cloud"},sidebar:"tutorialSidebar",previous:{title:"Issue Tracking Integrations for Agent-Based Scanning",permalink:"/km-docusaurus-test/r/Issues_Integration_for_Agent_Based_Scanning"},next:{title:"Creating Jira Ticket Templates and Issues for Agent-Based Scanning",permalink:"/km-docusaurus-test/r/Creating_Jira_Ticket_Templates_and_Issues_for_Agent_Based_Scanning"}},l={},p=[],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Setting up the Veracode Software Composition Analysis agent-based scanning integration for Jira Cloud allows your organization to create Jira issues from within the Veracode Platform."),(0,r.kt)("p",null,"If you also use Veracode Static Analysis, Veracode recommends you use the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_jira_cloud_about"},"Veracode Integration for Jira Cloud"),", which offers additional features and greater customization. To integrate your agent-based scan findings with Veracode Integration for Jira Cloud, you must  ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Link_SCA_Projects_to_Applications"},"link your project to an application profile")," in the Veracode Platform."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Before you begin:")),(0,r.kt)("p",null,"To set up this integration, you must have the Security Lead ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_role_permissions"},"role")," in the Veracode Platform and be an administrator of your Jira instance."),(0,r.kt)("p",null,"This integration works with both Jira Cloud and Jira Server. For Jira Server, the server must be accessible from outside the internet."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"To complete this task:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the Veracode Platform, select ",(0,r.kt)("strong",{parentName:"p"},"Scans & Analysis")," > ",(0,r.kt)("strong",{parentName:"p"},"Software Composition Analysis"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click the ",(0,r.kt)("strong",{parentName:"p"},"Agent-Based Scan")," tab.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Agent-Based Scan Settings")," > ",(0,r.kt)("strong",{parentName:"p"},"Integrations")," > ",(0,r.kt)("strong",{parentName:"p"},"Actions")," > ",(0,r.kt)("strong",{parentName:"p"},"Create Jira Cloud Integration"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter a name and server URL for your integration and click ",(0,r.kt)("strong",{parentName:"p"},"Next"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click the application link to leave the Veracode Platform and go to your Jira instance.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Inside JIRA application link setting, for ",(0,r.kt)("strong",{parentName:"p"},"URL"),", enter ",(0,r.kt)("inlineCode",{parentName:"p"},"https://sca.analysiscenter.veracode.com"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Create New Link"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you see a warning saying no response was received from the URL you entered, click ",(0,r.kt)("strong",{parentName:"p"},"Continue"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the Application Name field, enter ",(0,r.kt)("inlineCode",{parentName:"p"},"SourceClear"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From the ",(0,r.kt)("strong",{parentName:"p"},"Application Type")," dropdown menu, select ",(0,r.kt)("strong",{parentName:"p"},"Generic Application"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Continue"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click the pencil icon to the right of the newly created application.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Incoming authentication")," and copy the values you see on step 3 into this screen.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Save"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy these values:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Consumer Key"),(0,r.kt)("li",{parentName:"ul"},"Consumer Name"),(0,r.kt)("li",{parentName:"ul"},"Public Key"),(0,r.kt)("li",{parentName:"ul"},"Callback URL"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Save."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the Veracode Platform, click ",(0,r.kt)("strong",{parentName:"p"},"Next"),"."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Results:")),(0,r.kt)("p",null,"When you see the Step 3 window, click on the link and select ",(0,r.kt)("strong",{parentName:"p"},"Allow")," to authorize the OAuth application. You now have the ability to create your first ticket template."))}u.isMDXComponent=!0}}]);