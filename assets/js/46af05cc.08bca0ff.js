"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[75241],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>_});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(t),_=a,m=f["".concat(s,".").concat(_)]||f[_]||u[_]||i;return t?n.createElement(m,o(o({ref:r},p),{},{components:t})):n.createElement(m,o({ref:r},p))}));function _(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},30030:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=t(87462),a=(t(67294),t(3905));const i={title:"Fix Example Direct Vulnerability for Bower",slug:"/r/Fix_Example_Direct_Vulnerability_for_Bower"},o=void 0,l={unversionedId:"guides/sca/using_agent_based_scans/finding_and_fixing_vulnerabilities/javascript_sca_agent/fix_example_bower_direct",id:"guides/sca/using_agent_based_scans/finding_and_fixing_vulnerabilities/javascript_sca_agent/fix_example_bower_direct",title:"Fix Example Direct Vulnerability for Bower",description:"When your configuration file specifically references a library, Veracode SCA refers to the library as a direct dependency.",source:"@site/docs/guides/07_sca/04_using_agent_based_scans/18_finding_and_fixing_vulnerabilities/03_javascript_sca_agent/11_fix_example_bower_direct.md",sourceDirName:"guides/07_sca/04_using_agent_based_scans/18_finding_and_fixing_vulnerabilities/03_javascript_sca_agent",slug:"/r/Fix_Example_Direct_Vulnerability_for_Bower",permalink:"/km-docusaurus-test/r/Fix_Example_Direct_Vulnerability_for_Bower",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"Fix Example Direct Vulnerability for Bower",slug:"/r/Fix_Example_Direct_Vulnerability_for_Bower"},sidebar:"tutorialSidebar",previous:{title:"Run an Agent-Based Scan for Bower",permalink:"/km-docusaurus-test/r/Run_an_Agent_Based_Scan_for_Bower"},next:{title:"Fix Example Transitive Vulnerability for Bower",permalink:"/km-docusaurus-test/r/Fix_Example_Transitive_Vulnerability_for_Bower"}},s={},c=[],p={toc:c};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When your configuration file specifically references a library, Veracode SCA refers to the library as a direct dependency."),(0,a.kt)("p",null,"These example steps provide a fix for a  ",(0,a.kt)("a",{parentName:"p",href:"https://www.sourceclear.com/registry/vulnerabilities/1935"},"Cross-site Scripting ","(","XSS",")"," Through link-to Title Attribute")," vulnerability in ",(0,a.kt)("a",{parentName:"p",href:"https://www.sourceclear.com/registry/libraries/603747?version=1.2.0"},"Ember, version 1.2.0")," in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/srcclr/example-javascript-bower"},"example-javascript-bower")," repository."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"To complete this task:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add this line to the ",(0,a.kt)("inlineCode",{parentName:"p"},"bower.json")," file in the root of the project:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'"ember": "1.2.2"\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run this command to install Ember version 1.2.2:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"bower update ember\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Validating_Fixed_Agent_Based_Scan_Results"},"Validate the fix"),"."))))}u.isMDXComponent=!0}}]);