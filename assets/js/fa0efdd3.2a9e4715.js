"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3802],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||s;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<s;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19847:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const s={title:"Agent-Based Scanning Custom Rule Examples",slug:"/r/Agent_Based_Scanning_Custom_Rule_Examples"},o=void 0,i={unversionedId:"guides/sca/using_agent_based_scans/custom_rules_agent/agent_custom_rule_examples",id:"guides/sca/using_agent_based_scans/custom_rules_agent/agent_custom_rule_examples",title:"Agent-Based Scanning Custom Rule Examples",description:"This section provides some examples of custom rules you can apply to a workspace.",source:"@site/docs/guides/07_sca/04_using_agent_based_scans/12_custom_rules_agent/10_agent_custom_rule_examples.md",sourceDirName:"guides/07_sca/04_using_agent_based_scans/12_custom_rules_agent",slug:"/r/Agent_Based_Scanning_Custom_Rule_Examples",permalink:"/km-docusaurus-test/r/Agent_Based_Scanning_Custom_Rule_Examples",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Agent-Based Scanning Custom Rule Examples",slug:"/r/Agent_Based_Scanning_Custom_Rule_Examples"},sidebar:"tutorialSidebar",previous:{title:"View Rules for Agent-Based Scanning",permalink:"/km-docusaurus-test/r/View_Rules_for_Agent_Based_Scanning"},next:{title:"About Organization Rules for Agent-Based Scanning",permalink:"/km-docusaurus-test/r/About_Organization_Rules_for_Agent_Based_Scanning"}},l={},u=[],c={toc:u};function p(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This section provides some examples of custom rules you can apply to a workspace."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"High-Risk Vulnerabilities with Vulnerable Methods")),(0,a.kt)("p",null,"There should be no CVSS v2 high-risk vulnerabilities where vulnerable methods are found. If there are, assign a severity of 10, break the build, and create a Veracode SCA issue."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(42115).Z,width:"1974",height:"742"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Medium-Risk Vulnerabilities Without Vulnerable Methods")),(0,a.kt)("p",null,"There should be no CVSS v3 medium-risk vulnerabilities where vulnerable methods are not found. If there are, use the CVSS score of the vulnerabilities as the control severity, do not break the build, but do create a Veracode SCA issue."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(50596).Z,width:"1962",height:"738"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Allow Low-Risk Vulnerabilities Without Vulnerable Methods")),(0,a.kt)("p",null,"If you are not interested in tracking low-risk vulnerabilities where no vulnerable methods are found, you can delete any controls where ",(0,a.kt)("inlineCode",{parentName:"p"},"Descriptor = vulnerability"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Severity = low risk"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"Vulnerable Method = no"),". Then at scan time, Veracode does not create SCA issues for this kind of vulnerability."),(0,a.kt)("p",null,"Alternatively, you can clear the ",(0,a.kt)("strong",{parentName:"p"},"Create Issue")," checkbox in a control where ",(0,a.kt)("inlineCode",{parentName:"p"},"Descriptor = vulnerability"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Severity = low risk"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"Vulnerable Method = no"),". You might prefer this method if you may want to create Veracode SCA issues for this control in the future."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"High-Risk Licenses with Exceptions")),(0,a.kt)("p",null,"If your condition rejects libraries that contain high-risk licenses, you can select one or more specific high-risk licenses to allow. In this example, you allow one exception for Open Software License 1.0."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(65308).Z,width:"1127",height:"588"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Out-of-Date Libraries")),(0,a.kt)("p",null,"All direct libraries should be up-to-date. If any are not, do not break the build, but do create a Veracode SCA issue with ",(0,a.kt)("inlineCode",{parentName:"p"},"severity = 1"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(1401).Z,width:"980",height:"370"})))}p.isMDXComponent=!0},42115:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/doc05-07ccfb08735f30929b3a76e4dda8722c.png"},50596:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/doc06-b53414578dd7f6c1575aa8e46bc3d13d.png"},65308:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/doc07-26ea611958b3de431792c88ad4082bfc.png"},1401:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/doc08-25a503e46cb07ac8dc4173c92980c2da.png"}}]);