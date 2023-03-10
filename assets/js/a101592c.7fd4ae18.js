"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[16002],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)a=s[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)a=s[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(a),m=n,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||s;return a?o.createElement(f,r(r({ref:t},p),{},{components:a})):o.createElement(f,r({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,r=new Array(s);r[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,r[1]=i;for(var l=2;l<s;l++)r[l]=a[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},83814:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var o=a(87462),n=(a(67294),a(3905));const s={author:["Scott Jordan"],"ft:originID":"about_sandbox","ft:lang":"en-US",title:"Using the Development Sandbox",slug:"c_about_sandbox",media_dir:"images/"},r=void 0,i={unversionedId:"guides/static/sandbox/README",id:"guides/static/sandbox/README",title:"Using the Development Sandbox",description:"Development sandboxes allow individual contributors and teams to scan applications and measure the results against the policy rules. These scans do not affect the policy compliance of the entire application.",source:"@site/docs/guides/06_static/20_sandbox/README.md",sourceDirName:"guides/06_static/20_sandbox",slug:"/guides/static/sandbox/c_about_sandbox",permalink:"/km-docusaurus-test/guides/static/sandbox/c_about_sandbox",draft:!1,tags:[],version:"current",frontMatter:{author:["Scott Jordan"],"ft:originID":"about_sandbox","ft:lang":"en-US",title:"Using the Development Sandbox",slug:"c_about_sandbox",media_dir:"images/"},sidebar:"tutorialSidebar",previous:{title:"Resolving Prescan Warnings and Errors",permalink:"/km-docusaurus-test/r/errors_master"},next:{title:"About Sandbox Data Retention",permalink:"/km-docusaurus-test/r/About_Sandbox_Data_Retention"}},c={},l=[],p={toc:l};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Development sandboxes allow individual contributors and teams to scan applications and measure the results against the policy rules. These scans do not affect the policy compliance of the entire application."),(0,n.kt)("p",null,"As a developer, you can create sandboxes within existing application profiles and submit the code for analysis while still in development. At the same time, you can still run a static policy scan of the same application code. Unlike a Policy scan, after completing a sandbox scan, the value of the ",(0,n.kt)("inlineCode",{parentName:"p"},"policy_compliance_status")," parameter changes to ",(0,n.kt)("inlineCode",{parentName:"p"},"Conditional Pass"),". You can promote that sandbox scan to a policy scan that counts toward your policy compliance score."),(0,n.kt)("p",null,"Using sandbox scans can reduce application security risk by allowing you to obtain feedback about your in-development applications. Sandbox scans do not degrade the policy status and flaw metrics for the production versions of those applications. You can analyze multiple versions of the same application at the same time as part of a branch or trunk-based development strategy."),(0,n.kt)("p",null,"Veracode matches flaws found in sandbox scans with those in policy scans to ensure any mitigations you have previously entered persist across all scans of the same application. Therefore, the code that Veracode scans within a sandbox is similar to the code the policy scan assesses."),(0,n.kt)("p",null,"For applications that comprise several microservices, Veracode recommends that you do not scan these in isolation within separate sandboxes. This method inhibits the ability of your team to promote the sandbox scan to a policy scan, which impacts the effectiveness of progress reporting. Instead, if you must scan microservices in isolation, Veracode recommends you create a separate application profile and use the sandbox and policy scan capabilities. This strategy facilitates the branching of the microservices as development progresses and enables you to perform mitigations as you create new versions of a microservice."),(0,n.kt)("p",null,"You can use metadata to tag application profiles by ",(0,n.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/t_add_application"},"using custom fields in the metadata page")," or using the Veracode Applications API so that you can group applications as one microservice. You can, then, view the collective results in Veracode Analytics to track the security posture of a set of microservices."),(0,n.kt)("p",null,"The development sandbox is a temporary store of your security analysis. Veracode retires this data based on the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/About_Sandbox_Data_Retention"},"data retention setting")," that you apply. The policy scan is the true, audit-compliant record of analysis results."))}u.isMDXComponent=!0}}]);