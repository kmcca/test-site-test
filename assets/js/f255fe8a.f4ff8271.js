"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[19063],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},66144:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={title:"Fix Example Vulnerable Method for Python",slug:"/r/Fix_Example_Vulnerable_Method_for_Python"},o=void 0,l={unversionedId:"guides/sca/using_agent_based_scans/finding_and_fixing_vulnerabilities/python_sca_agent/fix_example_python_vulnerable_method",id:"guides/sca/using_agent_based_scans/finding_and_fixing_vulnerabilities/python_sca_agent/fix_example_python_vulnerable_method",title:"Fix Example Vulnerable Method for Python",description:"These example steps provide a fix for a BERserk attack vulnerable method in rsa, which is included in the example-python repository.",source:"@site/docs/guides/07_sca/04_using_agent_based_scans/18_finding_and_fixing_vulnerabilities/06_python_sca_agent/03_fix_example_python_vulnerable_method.md",sourceDirName:"guides/07_sca/04_using_agent_based_scans/18_finding_and_fixing_vulnerabilities/06_python_sca_agent",slug:"/r/Fix_Example_Vulnerable_Method_for_Python",permalink:"/km-docusaurus-test/r/Fix_Example_Vulnerable_Method_for_Python",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Fix Example Vulnerable Method for Python",slug:"/r/Fix_Example_Vulnerable_Method_for_Python"},sidebar:"tutorialSidebar",previous:{title:"Fix Example Transitive Vulnerability for Python",permalink:"/km-docusaurus-test/r/Fix_Example_Transitive_Vulnerability_for_Python"},next:{title:"Ruby SCA Agent-Based Scanning",permalink:"/km-docusaurus-test/r/c_sc_ruby"}},s={},p=[],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"These example steps provide a fix for a ",(0,a.kt)("a",{parentName:"p",href:"https://www.sourceclear.com/registry/vulnerabilities/1963"},"BERserk attack")," vulnerable method in ",(0,a.kt)("a",{parentName:"p",href:"https://www.sourceclear.com/registry/libraries/167149?version=3.0"},"rsa"),", which is included in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/srcclr/example-python"},"example-python")," repository."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"To complete this task:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the Veracode Platform, select ",(0,a.kt)("strong",{parentName:"p"},"Scans & Analysis")," > ",(0,a.kt)("strong",{parentName:"p"},"Software Composition Analysis"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click the ",(0,a.kt)("strong",{parentName:"p"},"Agent-Based Scan")," tab.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select your workspace.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Projects"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click the ",(0,a.kt)("strong",{parentName:"p"},"srcclr/example-python")," project.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"BERserk Attack Vulnerability in the rsa library")," in the Vulnerabilities table."),(0,a.kt)("p",{parentName:"li"},"The Vulnerable Methods section shows that the ",(0,a.kt)("inlineCode",{parentName:"p"},"verify")," method is the vulnerable part of the library. ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"To address the identified vulnerable method, do one of these tasks:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Change your code to perform in the same manner without relying on this particular method."),(0,a.kt)("li",{parentName:"ul"},"Follow the provided instructions to update the library to a safe version. "))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Validating_Fixed_Agent_Based_Scan_Results"},"Validate the fix"),"."))))}u.isMDXComponent=!0}}]);