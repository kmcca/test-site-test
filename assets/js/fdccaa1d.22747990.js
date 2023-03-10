"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[73557],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>b});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(a),b=r,_=m["".concat(l,".").concat(b)]||m[b]||u[b]||o;return a?n.createElement(_,i(i({ref:t},p),{},{components:a})):n.createElement(_,i({ref:t},p))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},47160:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={title:"Create Your Agent-Based Scanning Authentication Token for Atlassian Bamboo",slug:"/r/t_sc_bamboo_token"},i=void 0,s={unversionedId:"guides/sca/setting_up_agent_based_scans/continuous_integration/bamboo/create_agent_token_atlassian_bamboo",id:"guides/sca/setting_up_agent_based_scans/continuous_integration/bamboo/create_agent_token_atlassian_bamboo",title:"Create Your Agent-Based Scanning Authentication Token for Atlassian Bamboo",description:"By default, the agent you create is only visible to members of the workspace in which you created the agent. To allow visibility, invite teams to your workspace.",source:"@site/docs/guides/07_sca/03_setting_up_agent_based_scans/01_continuous_integration/02_bamboo/01_create_agent_token_atlassian_bamboo.md",sourceDirName:"guides/07_sca/03_setting_up_agent_based_scans/01_continuous_integration/02_bamboo",slug:"/r/t_sc_bamboo_token",permalink:"/km-docusaurus-test/r/t_sc_bamboo_token",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Create Your Agent-Based Scanning Authentication Token for Atlassian Bamboo",slug:"/r/t_sc_bamboo_token"},sidebar:"tutorialSidebar",previous:{title:"Integrating Agent-Based Scanning with Atlassian Bamboo",permalink:"/km-docusaurus-test/r/Integrating_Veracode_SCA_with_Atlassian_Bamboo"},next:{title:"Set a Global Variable for Atlassian Bamboo",permalink:"/km-docusaurus-test/r/Set_a_Global_Variable_for_Atlassian_Bamboo"}},l={},c=[],p={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"By default, the agent you create is only visible to members of the workspace in which you created the agent. To allow visibility, ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Add_Teams_to_Your_Veracode_SCA_Workspace"},"invite teams to your workspace"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"To complete this task:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the Veracode Platform, select ",(0,r.kt)("strong",{parentName:"p"},"Scans & Analysis")," > ",(0,r.kt)("strong",{parentName:"p"},"Software Composition Analysis"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click the ",(0,r.kt)("strong",{parentName:"p"},"Agent-Based Scan")," tab.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select a workspace.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Agents")," > ",(0,r.kt)("strong",{parentName:"p"},"Actions")," > ",(0,r.kt)("strong",{parentName:"p"},"Create")," > ",(0,r.kt)("strong",{parentName:"p"},"Atlassian Bamboo"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Create Agent & Generate Token"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the value in the token field."),(0,r.kt)("p",{parentName:"li"},"You use the token to authenticate with Veracode SCA during scans."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Next steps:")),(0,r.kt)("p",null,"Set up ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Set_a_Global_Variable_for_Atlassian_Bamboo"},"a global variable"),"."))}u.isMDXComponent=!0}}]);