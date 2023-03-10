"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2547],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=u(n),g=r,f=p["".concat(l,".").concat(g)]||p[g]||d[g]||o;return n?i.createElement(f,s(s({ref:t},c),{},{components:n})):i.createElement(f,s({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var u=2;u<o;u++)s[u]=n[u];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},52672:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var i=n(87462),r=(n(67294),n(3905));const o={title:"Understanding the Finding Life Cycle in Jira",slug:"/r/c_jira_finding_cycle"},s=void 0,a={unversionedId:"guides/integrations/ticketing/jira_cloud_integration/jira_finding_life_cycle",id:"guides/integrations/ticketing/jira_cloud_integration/jira_finding_life_cycle",title:"Understanding the Finding Life Cycle in Jira",description:"The Veracode Integration for Jira and the Veracode Integration for Jira Cloud import findings to Jira or Jira Cloud as issues and maintain the status of those issues. The status is based on the configuration settings on the Administration page in Jira or Jira Cloud. The integration sometimes changes the status of issues and, consequently, adds a comment to the issue describing the reason for the action.",source:"@site/docs/guides/04_integrations/07_ticketing/05_jira_cloud_integration/01_jira_finding_life_cycle.md",sourceDirName:"guides/04_integrations/07_ticketing/05_jira_cloud_integration",slug:"/r/c_jira_finding_cycle",permalink:"/km-docusaurus-test/r/c_jira_finding_cycle",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Understanding the Finding Life Cycle in Jira",slug:"/r/c_jira_finding_cycle"},sidebar:"tutorialSidebar",previous:{title:"Veracode Integration for Jira Cloud",permalink:"/km-docusaurus-test/r/c_jira_cloud_about"},next:{title:"Install the Veracode Integration for Jira Cloud",permalink:"/km-docusaurus-test/r/t_jira_cloud_install"}},l={},u=[],c={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Veracode Integration for Jira and the Veracode Integration for Jira Cloud import findings to Jira or Jira Cloud as issues and maintain the status of those issues. The status is based on the configuration settings on the Administration page in Jira or Jira Cloud. The integration sometimes changes the status of issues and, consequently, adds a comment to the issue describing the reason for the action."),(0,r.kt)("p",null,"The integration considers each issue to be in one of three status types:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Resolved: considered to be done, but not verified or closed. The Jira status names are Resolved or In Review."),(0,r.kt)("li",{parentName:"ul"},"Closed: someone has verified the issue. The Jira status names are Closed, Done, or Complete."),(0,r.kt)("li",{parentName:"ul"},"Open: every other status.")),(0,r.kt)("p",null,"If an issue is not resolved, the integration tries to transition it to Resolve, Resolve Issue, Complete Work, Close Issue, or Done. If someone reopens an issue, the integration tries to transition the status to Reopen, Reopen Issue, To Do, Queued for Action, Restart Progress, Start Progress, or Start Review."),(0,r.kt)("p",null,"In addition, the integration tries to change the status of issues in these situations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The integration does not find a previously imported finding during a new scan and the corresponding issue is not Resolved or Closed. The integration resolves the issue as Cannot Reproduce."),(0,r.kt)("li",{parentName:"ul"},"The finding still exists, but, based on the import settings, the integration does not re-import it. You could manually resolve the corresponding issue as Won't Fix or Closed, for example."),(0,r.kt)("li",{parentName:"ul"},"The finding still exists and the integration re-imports it, but the corresponding issue is Resolved or Closed. The integration changes the corresponding issue to Reopen or Open.")),(0,r.kt)("p",null,"To change the status of an issue, in Jira, you can search for and execute status transitions for the project of the issue. For each transition there is a list of transition names. To resolve an issue, you can select the Jira transition that matches one of the names on the list. Jira orders the list, searches transitions in the order shown, and uses the first allowed transition. Veracode recommends transitioning an issue to an imperfect status instead of not changing its status."),(0,r.kt)("p",null,"The reopen transitions comprise:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Reopen"),(0,r.kt)("li",{parentName:"ul"},"Reopen Issue"),(0,r.kt)("li",{parentName:"ul"},"Open"),(0,r.kt)("li",{parentName:"ul"},"To Do"),(0,r.kt)("li",{parentName:"ul"},"Queued for Action"),(0,r.kt)("li",{parentName:"ul"},"Restart Progress"),(0,r.kt)("li",{parentName:"ul"},"Start Progress"),(0,r.kt)("li",{parentName:"ul"},"Start Review")),(0,r.kt)("p",null,"The resolve transitions comprise:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Resolve"),(0,r.kt)("li",{parentName:"ul"},"Resolve Issue"),(0,r.kt)("li",{parentName:"ul"},"Complete Work"),(0,r.kt)("li",{parentName:"ul"},"Close"),(0,r.kt)("li",{parentName:"ul"},"Close Issue"),(0,r.kt)("li",{parentName:"ul"},"Done")))}d.isMDXComponent=!0}}]);