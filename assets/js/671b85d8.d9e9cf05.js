"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[47121],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>_});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=a.createContext({}),d=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=d(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(r),_=o,m=u["".concat(i,".").concat(_)]||u[_]||p[_]||n;return r?a.createElement(m,c(c({ref:t},l),{},{components:r})):a.createElement(m,c({ref:t},l))}));function _(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,c=new Array(n);c[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var d=2;d<n;d++)c[d]=r[d];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},97512:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>d});var a=r(87462),o=(r(67294),r(3905));const n={title:"Veracode SCA Scan for VS Code Prerequisites",slug:"/r/Veracode_SCA_Scan_for_VS_Code_Prerequisites"},c=void 0,s={unversionedId:"guides/ides/static_ide/veracode_sca_for_vs_code/sca_scan_vs_code_prereqs",id:"guides/ides/static_ide/veracode_sca_for_vs_code/sca_scan_vs_code_prereqs",title:"Veracode SCA Scan for VS Code Prerequisites",description:"Before you can install and use Veracode SCA Scan for VS Code, you must have:",source:"@site/docs/guides/05_ides/01_static_ide/02_veracode_sca_for_vs_code/01_sca_scan_vs_code_prereqs.md",sourceDirName:"guides/05_ides/01_static_ide/02_veracode_sca_for_vs_code",slug:"/r/Veracode_SCA_Scan_for_VS_Code_Prerequisites",permalink:"/km-docusaurus-test/r/Veracode_SCA_Scan_for_VS_Code_Prerequisites",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Veracode SCA Scan for VS Code Prerequisites",slug:"/r/Veracode_SCA_Scan_for_VS_Code_Prerequisites"},sidebar:"tutorialSidebar",previous:{title:"Veracode SCA Scan for VS Code",permalink:"/km-docusaurus-test/r/Veracode_SCA_Scan_for_VS_Code"},next:{title:"Install Veracode SCA Scan for VS Code",permalink:"/km-docusaurus-test/r/Install_Veracode_SCA_Scan_for_VS_Code"}},i={},d=[],l={toc:d};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Before you can install and use Veracode SCA Scan for VS Code, you must have:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A ",(0,o.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_about_veracode_accounts"},"human user account")," with the Security Lead, Workspace Administrator, Workspace Editor, or Submitter ",(0,o.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_role_permissions"},"role"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Configured a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_configure_api_cred_file"},"Veracode API credentials file")," with valid API credentials. The extension uses these credentials to authenticate with Veracode, not the SCA agent token.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Obtained a Veracode SCA subscription.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Created a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Create_a_Veracode_SCA_Workspace"},"Veracode SCA workspace"),". If you use ",(0,o.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Using_My_Workspace_for_Veracode_SCA"},"My Workspace"),", it must have an available project slot.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Installed and activated a single SCA workspace agent on your local system. If you have more than one agent installed, you must ",(0,o.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Delete_Veracode_SCA_Agents"},"delete all but one"),". "),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"To ",(0,o.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/Using_the_Veracode_SCA_Command_Line_Agent"},"install a workspace agent"),", Veracode recommends you create and install the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/t_sc_cli_agent"},"Veracode SCA CLI agent")," for your operating system."),(0,o.kt)("li",{parentName:"ul"},"You obtain and activate an activation token when you create an agent in the Veracode Platform. To obtain the token for an existing agent in the Veracode Platform, select ",(0,o.kt)("strong",{parentName:"li"},"Scans & Analysis > Software Composition Analysis > Agent-Based Scan > {workspace} > Agents > {agent name}"),". If you do not see a token for the selected agent, you can generate a new one."),(0,o.kt)("li",{parentName:"ul"},"The SCA agent requires that your project is either in a Git-based repository or you have configured a source code management (SCM) ",(0,o.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/c_sc_scm"},"environment variable"),", such as ",(0,o.kt)("inlineCode",{parentName:"li"},"SRCCLR_NO_GIT=1"),"."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Installed a ",(0,o.kt)("a",{parentName:"p",href:"https://community.veracode.com/s/article/Support-Matrix"},"supported version of VS Code"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Installed a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_sc_supported_lang"},"supported package manager"),"."))))}p.isMDXComponent=!0}}]);