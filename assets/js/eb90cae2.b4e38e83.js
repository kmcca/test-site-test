"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[57106],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=i,g=m["".concat(l,".").concat(u)]||m[u]||d[u]||a;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88231:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const a={title:"Set the Mitigations Field to Read-Only in Jira",slug:"/r/t_jira_mitigate_readonly"},o=void 0,s={unversionedId:"guides/integrations/ticketing/jira_integration/jira_associate_fields_to_screens/jira_mitigate_readonly",id:"guides/integrations/ticketing/jira_integration/jira_associate_fields_to_screens/jira_mitigate_readonly",title:"Set the Mitigations Field to Read-Only in Jira",description:"Veracode recommends that you do not allow the Jira users in your organization to edit the Mitigations Status and Comments field of imported finding issues. To prevent users from changing this field, you can set it to read-only.",source:"@site/docs/guides/04_integrations/07_ticketing/04_jira_integration/06_jira_associate_fields_to_screens/01_jira_mitigate_readonly.md",sourceDirName:"guides/04_integrations/07_ticketing/04_jira_integration/06_jira_associate_fields_to_screens",slug:"/r/t_jira_mitigate_readonly",permalink:"/km-docusaurus-test/r/t_jira_mitigate_readonly",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Set the Mitigations Field to Read-Only in Jira",slug:"/r/t_jira_mitigate_readonly"},sidebar:"tutorialSidebar",previous:{title:"Associate Veracode Fields with Project Screens in Jira",permalink:"/km-docusaurus-test/r/t_jira_display_veracode_fields"},next:{title:"Importing Findings into Jira",permalink:"/km-docusaurus-test/r/c_jira_import_findings"}},l={},p=[],c={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Veracode recommends that you do not allow the Jira users in your organization to edit the Mitigations Status and Comments field of imported finding issues. To prevent users from changing this field, you can set it to read-only."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"To complete this task:")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"On your Jira system, download and install ScriptRunner for Jira from the ",(0,i.kt)("a",{parentName:"p",href:"https://marketplace.atlassian.com"},"Atlassian Marketplace"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In Jira, select ",(0,i.kt)("strong",{parentName:"p"},"Administration")," ",">"," ",(0,i.kt)("strong",{parentName:"p"},"Manage apps")," ",">"," ",(0,i.kt)("strong",{parentName:"p"},"Behaviours"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the Add Behaviour section, in the Name field, enter Make Mitigation Status and Comments read-only.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Add"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Add Mapping")," next to the behaviour you added.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the Fields section, click ",(0,i.kt)("strong",{parentName:"p"},"Readonly"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the Add Field dropdown menu, select ",(0,i.kt)("strong",{parentName:"p"},"Mitigation Status and Comments")," and click ",(0,i.kt)("strong",{parentName:"p"},"Add"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Save"),". In the Jira issues of imported findings, the Mitigation Status and Comments field is shaded to indicate that it is read-only."))))}d.isMDXComponent=!0}}]);