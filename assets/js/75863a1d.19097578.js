"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[31769],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(r),f=i,g=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(g,o(o({ref:t},l),{},{components:r})):n.createElement(g,o({ref:t},l))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},21752:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=r(87462),i=(r(67294),r(3905));const a={title:"Veracode Integration for Jira",slug:"/r/c_jira_about"},o=void 0,s={unversionedId:"guides/integrations/ticketing/jira_integration/README",id:"guides/integrations/ticketing/jira_integration/README",title:"Veracode Integration for Jira",description:"You can use the Veracode Integration for Jira to import to Jira Server and to Jira Data Center security flaws that Veracode identifies in your application.",source:"@site/docs/guides/04_integrations/07_ticketing/04_jira_integration/README.md",sourceDirName:"guides/04_integrations/07_ticketing/04_jira_integration",slug:"/r/c_jira_about",permalink:"/km-docusaurus-test/r/c_jira_about",draft:!1,tags:[],version:"current",frontMatter:{title:"Veracode Integration for Jira",slug:"/r/c_jira_about"},sidebar:"tutorialSidebar",previous:{title:"Test Veracode for Bugzilla",permalink:"/km-docusaurus-test/r/Test_the_Bugzilla_Integration"},next:{title:"Understanding the Finding Life Cycle in Jira",permalink:"/km-docusaurus-test/r/c_jira_finding_cycle"}},c={},u=[{value:"Jira Users",id:"jira-users",level:2}],l={toc:u};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can use the Veracode Integration for Jira to import to Jira Server and to Jira Data Center security flaws that Veracode identifies in your application."),(0,i.kt)("p",null,"Veracode Integration for Jira manages the import of security findings from Veracode and creates issues in Jira for each imported findings. Veracode also provides the ",(0,i.kt)("a",{parentName:"p",href:"/km-docusaurus-test/r/c_jira_cloud_about"},"Veracode Integration for Jira Cloud"),", which provides the same functionality for Jira Cloud."),(0,i.kt)("p",null,"The Jira integration assigns each unique application finding to a unique Jira issue, created in the designated Jira project. Import criteria can include all open findings from all scans, all findings that affect policy, all unmitigated findings from the most recent scan, or other criteria."),(0,i.kt)("p",null,"You can choose to import findings on a one-time basis or selectively choose which findings to import. You can also schedule findings imports on an hourly, daily, or weekly basis. You can import findings from a specific application scan or from all your application scans. The integration can also update findings comments on the Veracode Platform, but cannot mitigate findings from within the Jira integration."),(0,i.kt)("h2",{id:"jira-users"},"Jira Users"),(0,i.kt)("p",null,"There are two types of Jira users that interact with the Jira integration. You need to be aware of these user types when installing and using the integration."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Jira User: this user is an account inside of Jira with permissions to create and modify all Jira issues for all projects to which you are importing flaws."),(0,i.kt)("li",{parentName:"ul"},"Veracode User: this user has access to the Veracode Platform. The integration can only import findings for applications that this user can access. Veracode recommends that this user is an ",(0,i.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/c_about_veracode_accounts"},"API service account"),".")))}p.isMDXComponent=!0}}]);