"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[56351],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var o=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=o.createContext({}),s=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(r),f=i,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||n;return r?o.createElement(m,a(a({ref:t},p),{},{components:r})):o.createElement(m,a({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,a=new Array(n);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<n;s++)a[s]=r[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},54011:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>n,metadata:()=>c,toc:()=>s});var o=r(87462),i=(r(67294),r(3905));const n={title:"Enforcing Application Security Policies",slug:"/r/main_policy"},a=void 0,c={unversionedId:"guides/findings/policies/enforcing_sec",id:"guides/findings/policies/enforcing_sec",title:"Enforcing Application Security Policies",description:"You can use Veracode to enforce consistent application security policies across your entire inventory of applications, both those that you develop and third-party applications. You can use a pre-defined Veracode policy or create your own custom policy to enforce the rules of your organization.",source:"@site/docs/guides/11_findings/10_policies/04_enforcing_sec.md",sourceDirName:"guides/11_findings/10_policies",slug:"/r/main_policy",permalink:"/km-docusaurus-test/r/main_policy",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Enforcing Application Security Policies",slug:"/r/main_policy"},sidebar:"tutorialSidebar",previous:{title:"Reviewing Policy Adherence",permalink:"/km-docusaurus-test/r/policy_control_report"},next:{title:"Create a Policy",permalink:"/km-docusaurus-test/r/t_create_policy"}},l={},s=[{value:"Setting SCA Policies",id:"setting-sca-policies",level:3}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can use Veracode to enforce consistent application security policies across your entire inventory of applications, both those that you develop and third-party applications. You can use a pre-defined Veracode policy or create your own custom policy to enforce the rules of your organization."),(0,i.kt)("p",null,"Before getting started with policies, Veracode recommends that you:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/policy_veracodelevel"},"Understand Veracode Levels")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/policy_understand"},"Understand policies")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/policy_veracodedefault"},"Review the Veracode default policies")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/policy_notifications"},"Understand policy notifications"))),(0,i.kt)("p",null,"These are the tasks for configuring and enforcing policies:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/t_create_policy"},"Create a policy")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/policy_setdefaults"},"Set default policies")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/policy_app"},"Set a policy for an application")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/c_policy_custom_severities"},"Set custom severities")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/policy_control_report"},"Review policy adherence"))),(0,i.kt)("h3",{id:"setting-sca-policies"},"Setting SCA Policies"),(0,i.kt)("p",null,"You can design policies specifically for rules for ",(0,i.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_about_SCA"},"Software Composition Analysis")," ","(","SCA",")",". For more information, see ",(0,i.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/t_sca_policy"},"Include SCA Findings in Policy"),"."))}u.isMDXComponent=!0}}]);