"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4106],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},22708:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={title:"Create Veracode SCA Agents",slug:"/r/Create_Veracode_SCA_Agents"},i=void 0,l={unversionedId:"guides/sca/using_agent_based_scans/sca_agent_management/create_sca_agents",id:"guides/sca/using_agent_based_scans/sca_agent_management/create_sca_agents",title:"Create Veracode SCA Agents",description:"For information on creating agents with the SCA Agent REST API, see Using the Veracode SCA Agent REST API.",source:"@site/docs/guides/07_sca/04_using_agent_based_scans/08_sca_agent_management/03_create_sca_agents.md",sourceDirName:"guides/07_sca/04_using_agent_based_scans/08_sca_agent_management",slug:"/r/Create_Veracode_SCA_Agents",permalink:"/km-docusaurus-test/r/Create_Veracode_SCA_Agents",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Create Veracode SCA Agents",slug:"/r/Create_Veracode_SCA_Agents"},sidebar:"tutorialSidebar",previous:{title:"View Organization-Level Agents",permalink:"/km-docusaurus-test/r/View_Organization_Level_Agents"},next:{title:"Rename Veracode SCA Agents",permalink:"/km-docusaurus-test/r/Rename_Veracode_SCA_Agents"}},s={},c=[],p={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"For information on creating agents with the SCA Agent REST API, see ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_sourceclear_intro"},"Using the Veracode SCA Agent REST API"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Before you begin:")),(0,r.kt)("p",null,"To create an organization-level agent, you must have the Security Lead ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_role_permissions"},"role"),"."),(0,r.kt)("p",null,"To create a workspace agent, you must have the Security Lead, Workspace Administrator, Workspace Editor, or Submitter role."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"To complete this task:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the Veracode Platform, navigate to the Agents page at either the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/View_Workspace_Agents"},"workspace")," or ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/View_Organization_Level_Agents"},"organization level"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Actions")," > ",(0,r.kt)("strong",{parentName:"p"},"Create"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Choose your desktop operating system or CI.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"For CI projects, follow the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Integrate_Veracode_SCA_Agent_Based_Scanning_with_Your_CI_Projects"},"instructions for your CI integration"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"For desktop operating systems."),(0,r.kt)("p",{parentName:"li"},"a.  Choose the tab showing your preferred method of installation for your OS type ","(","curl, apt-get, yum, homebrew",")","."),(0,r.kt)("p",{parentName:"li"},"b.  Open a terminal window and follow the instructions to install the agent."),(0,r.kt)("p",{parentName:"li"},"c.  Copy the command to activate the agent and paste it in your terminal."),(0,r.kt)("p",{parentName:"li"},"d.  Copy the activation token and paste it in your terminal. After entering your activation token, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Create")," action creates the ",(0,r.kt)("inlineCode",{parentName:"p"},"agent.yml")," configuration file and adds it to the ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.srcclr")," folder. If this file already exists. you are prompted to enter a profile name. This profile name allows you to choose which token to use when scanning."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For workspace agents, Veracode recommends using the name of the workspace associated with the token."),(0,r.kt)("li",{parentName:"ul"},"For organization-level agents, Veracode recommends that, if you plan on creating more than agent one to use with different teams or workspaces, you indicate that in the profile name.  ")),(0,r.kt)("p",{parentName:"li"},"f. Verify the agent by running one of these commands to see if you can scan a specific package manager:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Ant: ",(0,r.kt)("inlineCode",{parentName:"li"},"srcclr test --ant")),(0,r.kt)("li",{parentName:"ul"},"Bower: ",(0,r.kt)("inlineCode",{parentName:"li"},"srcclr test --bower")),(0,r.kt)("li",{parentName:"ul"},"Cocoapods: ",(0,r.kt)("inlineCode",{parentName:"li"},"srcclr test --cocoapods")),(0,r.kt)("li",{parentName:"ul"},"Composer: ",(0,r.kt)("inlineCode",{parentName:"li"},"srcclr test --composer")),(0,r.kt)("li",{parentName:"ul"},"Glide: ",(0,r.kt)("inlineCode",{parentName:"li"},"srcclr test --glide")),(0,r.kt)("li",{parentName:"ul"},"Go Get: ",(0,r.kt)("inlineCode",{parentName:"li"},"srcclr test --go")),(0,r.kt)("li",{parentName:"ul"},"Godep: ",(0,r.kt)("inlineCode",{parentName:"li"},"srcclr test --godep")),(0,r.kt)("li",{parentName:"ul"},"Govendor: ",(0,r.kt)("inlineCode",{parentName:"li"},"srcclr test --govendor")),(0,r.kt)("li",{parentName:"ul"},"Gradle: ",(0,r.kt)("inlineCode",{parentName:"li"},"srcclr test --gradle")),(0,r.kt)("li",{parentName:"ul"},"Ivy: ",(0,r.kt)("inlineCode",{parentName:"li"},"srcclr test --ivy")),(0,r.kt)("li",{parentName:"ul"},"Maven: ",(0,r.kt)("inlineCode",{parentName:"li"},"srcclr test --maven")),(0,r.kt)("li",{parentName:"ul"},"NPM: ",(0,r.kt)("inlineCode",{parentName:"li"},"srcclr test --npm")),(0,r.kt)("li",{parentName:"ul"},"Python: ",(0,r.kt)("inlineCode",{parentName:"li"},"srcclr test --pip")),(0,r.kt)("li",{parentName:"ul"},"Ruby Gems: ",(0,r.kt)("inlineCode",{parentName:"li"},"srcclr test --gem")),(0,r.kt)("li",{parentName:"ul"},"SBT: ",(0,r.kt)("inlineCode",{parentName:"li"},"srcclr test --sbt")),(0,r.kt)("li",{parentName:"ul"},"Trash: ",(0,r.kt)("inlineCode",{parentName:"li"},"srcclr test --trash")),(0,r.kt)("li",{parentName:"ul"},"Yarn: ",(0,r.kt)("inlineCode",{parentName:"li"},"srcclr test --yarn")),(0,r.kt)("li",{parentName:"ul"},"Nuget: ",(0,r.kt)("inlineCode",{parentName:"li"},"srcclr test --nuget"))))))}m.isMDXComponent=!0}}]);