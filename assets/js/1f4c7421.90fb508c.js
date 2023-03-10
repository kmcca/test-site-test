"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[59518],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>s});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=c(r),s=i,f=u["".concat(l,".").concat(s)]||u[s]||d[s]||o;return r?n.createElement(f,a(a({ref:t},m),{},{components:r})):n.createElement(f,a({ref:t},m))}));function s(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},25097:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=r(87462),i=(r(67294),r(3905));const o={title:"Perform a One-Time Finding Import in Jira Cloud",slug:"/r/t_jira_cloud_onetime_finding_import"},a=void 0,p={unversionedId:"guides/integrations/ticketing/jira_cloud_integration/jira_cloud_importing_findings/jira_cloud_onetime_findings_import",id:"guides/integrations/ticketing/jira_cloud_integration/jira_cloud_importing_findings/jira_cloud_onetime_findings_import",title:"Perform a One-Time Finding Import in Jira Cloud",description:"You can use the Veracode Integration for Jira Cloud enables you to perform one-time imports of findings from Veracode to Jira Cloud.",source:"@site/docs/guides/04_integrations/07_ticketing/05_jira_cloud_integration/07_jira_cloud_importing_findings/02_jira_cloud_onetime_findings_import.md",sourceDirName:"guides/04_integrations/07_ticketing/05_jira_cloud_integration/07_jira_cloud_importing_findings",slug:"/r/t_jira_cloud_onetime_finding_import",permalink:"/km-docusaurus-test/r/t_jira_cloud_onetime_finding_import",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Perform a One-Time Finding Import in Jira Cloud",slug:"/r/t_jira_cloud_onetime_finding_import"},sidebar:"tutorialSidebar",previous:{title:"Schedule Automated Finding Import in Jira Cloud",permalink:"/km-docusaurus-test/r/t_jira_cloud_auto_finding_import"},next:{title:"Perform a Selective Finding Import in Jira Cloud",permalink:"/km-docusaurus-test/r/t_jira_cloud_select_finding_import"}},l={},c=[],m={toc:c};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can use the Veracode Integration for Jira Cloud enables you to perform one-time imports of findings from Veracode to Jira Cloud."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"To complete this task:")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to ",(0,i.kt)("strong",{parentName:"p"},"Jira settings")," ",">"," ",(0,i.kt)("strong",{parentName:"p"},"Apps")," ",">"," ",(0,i.kt)("strong",{parentName:"p"},"Veracode Integration")," ",">"," ",(0,i.kt)("strong",{parentName:"p"},"One Time Import"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the Import Limit field, enter the maximum number of findings you want to import for any application. If you do not provide an import limit, the integration imports all findings found in Veracode scans."),(0,i.kt)("admonition",{parentName:"li",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The integration imports findings in order of severity, with higher severity taking precedence, then in order of creation date, with earlier findings taking precedence."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If you want to override the general import limit for a particular application, select the ",(0,i.kt)("strong",{parentName:"p"},"Override by Application")," checkbox and select the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/t_add_metadata"},"Veracode custom field")," that determines the import limit for the application."),(0,i.kt)("admonition",{parentName:"li",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If the Veracode custom field configuration is invalid, the integration ignores the override and applies the general import limit."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Import to JIRA"),"."))))}d.isMDXComponent=!0}}]);