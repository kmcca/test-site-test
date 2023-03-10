"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[30784],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>d});var r=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=c(i),d=n,g=f["".concat(l,".").concat(d)]||f[d]||p[d]||o;return i?r.createElement(g,a(a({ref:t},u),{},{components:i})):r.createElement(g,a({ref:t},u))}));function d(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,a=new Array(o);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var c=2;c<o;c++)a[c]=i[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,i)}f.displayName="MDXCreateElement"},16730:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=i(87462),n=(i(67294),i(3905));const o={title:"Importing Findings into Jira",slug:"/r/c_jira_import_findings"},a=void 0,s={unversionedId:"guides/integrations/ticketing/jira_integration/jira_import_findings/README",id:"guides/integrations/ticketing/jira_integration/jira_import_findings/README",title:"Importing Findings into Jira",description:"You can use the Veracode Integration for Jira to automate imports of findings into Jira. You can also perform one-time imports and selective imports of specific findings.",source:"@site/docs/guides/04_integrations/07_ticketing/04_jira_integration/07_jira_import_findings/README.md",sourceDirName:"guides/04_integrations/07_ticketing/04_jira_integration/07_jira_import_findings",slug:"/r/c_jira_import_findings",permalink:"/km-docusaurus-test/r/c_jira_import_findings",draft:!1,tags:[],version:"current",frontMatter:{title:"Importing Findings into Jira",slug:"/r/c_jira_import_findings"},sidebar:"tutorialSidebar",previous:{title:"Set the Mitigations Field to Read-Only in Jira",permalink:"/km-docusaurus-test/r/t_jira_mitigate_readonly"},next:{title:"Schedule Automated Finding Import in Jira",permalink:"/km-docusaurus-test/r/t_jira_auto_finding_import"}},l={},c=[],u={toc:c};function p(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"You can use the Veracode Integration for Jira to automate imports of findings into Jira. You can also perform one-time imports and selective imports of specific findings."),(0,n.kt)("p",null,"The Veracode Integration for Jira automatically sets the Priority field of an imported finding if that field is available and has default values. The integration uses this formula to set the priority based on the severity of the finding in the Veracode scan ",(0,n.kt)("strong",{parentName:"p"},"Results:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If Severity = 5, the bug priority is set to Highest"),(0,n.kt)("li",{parentName:"ul"},"If Severity = 4, the bug priority is set to High"),(0,n.kt)("li",{parentName:"ul"},"If Severity = 3, the bug priority is set to Medium"),(0,n.kt)("li",{parentName:"ul"},"If Severity <= 2, the bug priority is set to Lowest")),(0,n.kt)("p",null,"After importing findings to Jira, you can see them assigned to the user."),(0,n.kt)("p",null,"The title and description of all imported sandbox findings are prefixed with the word Sandbox to differentiate them from regular policy scan findings."),(0,n.kt)("p",null,"When the integration creates a Jira issue for each finding, it also adds a comment to the finding in the Veracode Platform."))}p.isMDXComponent=!0}}]);