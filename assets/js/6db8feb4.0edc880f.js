"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[94969],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(n),g=a,_=m["".concat(u,".").concat(g)]||m[g]||p[g]||o;return n?r.createElement(_,s(s({ref:t},c),{},{components:n})):r.createElement(_,s({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2052:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={title:"Create Custom Rules for Agent-Based Scanning",slug:"/r/Create_Custom_Rules_for_Agent_Based_Scanning"},s=void 0,i={unversionedId:"guides/sca/using_agent_based_scans/custom_rules_agent/create_custom_rule_agent",id:"guides/sca/using_agent_based_scans/custom_rules_agent/create_custom_rule_agent",title:"Create Custom Rules for Agent-Based Scanning",description:"Creating custom rules lets you define unique security requirements for your workspace.",source:"@site/docs/guides/07_sca/04_using_agent_based_scans/12_custom_rules_agent/05_create_custom_rule_agent.md",sourceDirName:"guides/07_sca/04_using_agent_based_scans/12_custom_rules_agent",slug:"/r/Create_Custom_Rules_for_Agent_Based_Scanning",permalink:"/km-docusaurus-test/r/Create_Custom_Rules_for_Agent_Based_Scanning",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Create Custom Rules for Agent-Based Scanning",slug:"/r/Create_Custom_Rules_for_Agent_Based_Scanning"},sidebar:"tutorialSidebar",previous:{title:"Actions of Controls in Agent-Based Scanning Rules",permalink:"/km-docusaurus-test/r/Actions_of_Controls_in_Agent_Based_Scanning_Rules"},next:{title:"Edit Custom Rules for Agent-Based Scanning",permalink:"/km-docusaurus-test/r/Edit_Custom_Rules_for_Agent_Based_Scanning"}},u={},l=[],c={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Creating custom rules lets you define unique security requirements for your workspace."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Before you begin:")),(0,a.kt)("p",null,"You must have the Security Lead, Workspace Administrator, or Workspace Editor ",(0,a.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_role_permissions"},"role"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"To complete this task:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the Veracode Platform, select ",(0,a.kt)("strong",{parentName:"p"},"Scans & Analysis")," > ",(0,a.kt)("strong",{parentName:"p"},"Software Composition Analysis"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click the ",(0,a.kt)("strong",{parentName:"p"},"Agent-Based Scan")," tab.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Either select a workspace to view workspace rules or click ",(0,a.kt)("strong",{parentName:"p"},"Agent-Based Scan Settings")," to view organization rules.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Rules"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click the ",(0,a.kt)("strong",{parentName:"p"},"Custom Rules")," tab."),(0,a.kt)("p",{parentName:"li"},"A copy of the default rules appears.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Edit")," to enter edit mode.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Make your adjustments, then click ",(0,a.kt)("strong",{parentName:"p"},"Save"),"."))),(0,a.kt)("p",null,"For instructions on how to define a control, see ",(0,a.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Structure_of_Controls_in_Agent_Based_Scanning_Rules"},"Structure of a Rule")," and ",(0,a.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Adding_Removing_and_Rearranging_Controls_in_Agent_Based_Scanning_Custom_Rules"},"Adding, Removing, and Rearranging Controls"),"."))}p.isMDXComponent=!0}}]);