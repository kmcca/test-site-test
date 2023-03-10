"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[35493],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var i=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=i.createContext({}),d=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(r),f=a,m=c["".concat(s,".").concat(f)]||c[f]||p[f]||n;return r?i.createElement(m,o(o({ref:t},u),{},{components:r})):i.createElement(m,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,o=new Array(n);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<n;d++)o[d]=r[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}c.displayName="MDXCreateElement"},88657:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>d});var i=r(87462),a=(r(67294),r(3905));const n={title:"Mapping Veracode Fields to Jira Fields",slug:"/r/c_jira_mapping"},o=void 0,l={unversionedId:"guides/integrations/ticketing/jira_cloud_integration/jira_mapping_fields/README",id:"guides/integrations/ticketing/jira_cloud_integration/jira_mapping_fields/README",title:"Mapping Veracode Fields to Jira Fields",description:"The Veracode Integration for Jira and the Veracode Integration for Jira Cloud can map data from custom fields in the Veracode Platform to fields in Jira or Jira Cloud issues. The integration can also map values from the Veracode Detailed XML Report.",source:"@site/docs/guides/04_integrations/07_ticketing/05_jira_cloud_integration/04_jira_mapping_fields/README.md",sourceDirName:"guides/04_integrations/07_ticketing/05_jira_cloud_integration/04_jira_mapping_fields",slug:"/r/c_jira_mapping",permalink:"/km-docusaurus-test/r/c_jira_mapping",draft:!1,tags:[],version:"current",frontMatter:{title:"Mapping Veracode Fields to Jira Fields",slug:"/r/c_jira_mapping"},sidebar:"tutorialSidebar",previous:{title:"Configure Findings Import Settings for Jira Cloud",permalink:"/km-docusaurus-test/r/t_jira_cloud_findings_import"},next:{title:"Using Default Veracode Fields with Jira and Jira Cloud",permalink:"/km-docusaurus-test/r/Using_Default_Veracode_Fields_with_Jira_and_Jira_Cloud"}},s={},d=[],u={toc:d};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Veracode Integration for Jira and the Veracode Integration for Jira Cloud can map data from custom fields in the Veracode Platform to fields in Jira or Jira Cloud issues. The integration can also map values from the Veracode Detailed XML Report."),(0,a.kt)("p",null,"To improve the import of Veracode findings into your Jira or Jira Cloud issues, you can map Custom Field 1 through Custom Field 10 in the Veracode Platform to standard or custom fields in Jira or Jira Cloud issues."),(0,a.kt)("p",null,"When importing findings to Jira or Jira Cloud, the integration imports the values from the mapped Veracode fields, including data from the Veracode Detailed XML Report, which you can download as ",(0,a.kt)("inlineCode",{parentName:"p"},"detailedreport.xml"),". The integration has specific requirements for ",(0,a.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Mapping_Jira_Data_Types_and_Field_Types"},"data types in Veracode fields and field types in Jira and Jira Cloud"),"."),(0,a.kt)("p",null,"After adding field mappings, during the findings import process, the integration:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Applies the mappings."),(0,a.kt)("li",{parentName:"ul"},"Updates the values in Jira or Jira Cloud fields with any changed values in Veracode fields."),(0,a.kt)("li",{parentName:"ul"},"Overrides any default values in Jira or Jira Cloud fields with the values in Veracode fields."),(0,a.kt)("li",{parentName:"ul"},"Logs a WARN message in the Jira or Jira Cloud logs to warn you about any invalid Veracode field value. The import process omits these values and continues uninterrupted.")))}p.isMDXComponent=!0}}]);