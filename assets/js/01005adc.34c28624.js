"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[18723],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>m});var r=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,r,a=function(e,t){if(null==e)return{};var i,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var i=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(i),m=a,g=d["".concat(l,".").concat(m)]||d[m]||c[m]||n;return i?r.createElement(g,o(o({ref:t},u),{},{components:i})):r.createElement(g,o({ref:t},u))}));function m(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=i.length,o=new Array(n);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<n;p++)o[p]=i[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}d.displayName="MDXCreateElement"},89004:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var r=i(87462),a=(i(67294),i(3905));const n={title:"Mapping Veracode Severities to Jira Cloud Priorities Example",slug:"/r/c_jira_cloud_sev_mapping_example"},o=void 0,s={unversionedId:"guides/integrations/ticketing/jira_cloud_integration/jira_cloud_mapping_sevs_to_priorities/jira_cloud_sev_mapping_example",id:"guides/integrations/ticketing/jira_cloud_integration/jira_cloud_mapping_sevs_to_priorities/jira_cloud_sev_mapping_example",title:"Mapping Veracode Severities to Jira Cloud Priorities Example",description:"This section provides an example of using the Veracode Integration for Jira Cloud to map Veracode flaw severities in the Veracode Platform to priorities in Jira Cloud.",source:"@site/docs/guides/04_integrations/07_ticketing/05_jira_cloud_integration/05_jira_cloud_mapping_sevs_to_priorities/02_jira_cloud_sev_mapping_example.md",sourceDirName:"guides/04_integrations/07_ticketing/05_jira_cloud_integration/05_jira_cloud_mapping_sevs_to_priorities",slug:"/r/c_jira_cloud_sev_mapping_example",permalink:"/km-docusaurus-test/r/c_jira_cloud_sev_mapping_example",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Mapping Veracode Severities to Jira Cloud Priorities Example",slug:"/r/c_jira_cloud_sev_mapping_example"},sidebar:"tutorialSidebar",previous:{title:"Configure Mappings for Jira Cloud Priorities",permalink:"/km-docusaurus-test/r/t_jira_cloud_config_sev_mapping"},next:{title:"Associate Veracode Fields with Project Screens in Jira Cloud",permalink:"/km-docusaurus-test/r/t_jira_cloud_config_custom_fields"}},l={},p=[],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This section provides an example of using the Veracode Integration for Jira Cloud to map Veracode flaw severities in the Veracode Platform to priorities in Jira Cloud."),(0,a.kt)("p",null,"In this example, the Triage Flaws page in the Veracode Platform lists nine flaws with different severities: Very High, High, Medium, and Low."),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(78186).Z,width:"584",height:"211"})),(0,a.kt)("p",null,"In Jira Cloud, the View Priorities page lists the five default priorities, in order, with default names."),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(10904).Z,width:"832",height:"800"})),(0,a.kt)("p",null,"In Jira Cloud, the Veracode Integration Severity Mappings page shows these mappings:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The Very High severity is mapped to the ",(0,a.kt)("strong",{parentName:"li"},"High")," priority, instead of the default ",(0,a.kt)("strong",{parentName:"li"},"Highest")," priority."),(0,a.kt)("li",{parentName:"ul"},"The High severity is mapped to the ",(0,a.kt)("strong",{parentName:"li"},"Medium")," priority, instead of the default ",(0,a.kt)("strong",{parentName:"li"},"High")," priority."),(0,a.kt)("li",{parentName:"ul"},"The Medium and Very Low severities are mapped to the ",(0,a.kt)("strong",{parentName:"li"},"Low")," priority, instead of the default ",(0,a.kt)("strong",{parentName:"li"},"Medium")," and ",(0,a.kt)("strong",{parentName:"li"},"Lowest")," priorities."),(0,a.kt)("li",{parentName:"ul"},"The Low severity is mapped to the default ",(0,a.kt)("strong",{parentName:"li"},"Low")," priority."),(0,a.kt)("li",{parentName:"ul"},"The Informational severity is mapped to the ",(0,a.kt)("strong",{parentName:"li"},"Lowest")," priority.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(46179).Z,width:"598",height:"220"})),(0,a.kt)("p",null,"After you import the flaws from the Veracode Platform to Jira Cloud as issues, the issues show these assigned priorities:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The Very High severity flaw has a High priority."),(0,a.kt)("li",{parentName:"ul"},"The High severity flaw has a Medium priority."),(0,a.kt)("li",{parentName:"ul"},"All Medium severity flaws have a Low priority."),(0,a.kt)("li",{parentName:"ul"},"The Informational severity flaw has a Lowest priority.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(49913).Z,width:"759",height:"380"})),(0,a.kt)("p",null,"Clicking an issue ID link in Jira Cloud opens the Details view showing the priority value. In this example, issue SEV-123 for flaw ID 6, which has a High severity in the Veracode Platform, has a Medium priority in Jira Cloud."),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(82822).Z,width:"1220",height:"679"})))}c.isMDXComponent=!0},49913:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/jira_cloud_sev_map_flaws_ex-5cb0a039f6d37891ded61e4ab5d871ad.png"},82822:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/jira_cloud_sev_map_issue_details_ex-6e8e5aede0477eea98b6af8d90fbe395.png"},46179:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/jira_cloud_sev_map_page_example-4899f0101bd92addab12523afecc4c4f.png"},10904:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/jira_cloud_sev_map_priorities-dc18241811a9613ab8e9fced3b2c017f.png"},78186:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/jira_sev_map_flaws_example-d2569fb95f23486283cd2fa1afb6a712.png"}}]);