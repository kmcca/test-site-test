"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[74765],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var a=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(r),m=i,f=c["".concat(p,".").concat(m)]||c[m]||u[m]||n;return r?a.createElement(f,o(o({ref:t},d),{},{components:r})):a.createElement(f,o({ref:t},d))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<n;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},66919:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var a=r(87462),i=(r(67294),r(3905));const n={title:"Mapping Jira Data Types and Field Types",slug:"/r/Mapping_Jira_Data_Types_and_Field_Types"},o=void 0,l={unversionedId:"guides/integrations/ticketing/jira_cloud_integration/jira_mapping_fields/mapping_jira_data_types_fields_types",id:"guides/integrations/ticketing/jira_cloud_integration/jira_mapping_fields/mapping_jira_data_types_fields_types",title:"Mapping Jira Data Types and Field Types",description:"The Veracode Integration for Jira and the Veracode Integration for Jira Cloud support importing string, number, and date/time data types from Veracode fields to text, number, and date/time field types in Jira or Jira Cloud.",source:"@site/docs/guides/04_integrations/07_ticketing/05_jira_cloud_integration/04_jira_mapping_fields/03_mapping_jira_data_types_fields_types.md",sourceDirName:"guides/04_integrations/07_ticketing/05_jira_cloud_integration/04_jira_mapping_fields",slug:"/r/Mapping_Jira_Data_Types_and_Field_Types",permalink:"/km-docusaurus-test/r/Mapping_Jira_Data_Types_and_Field_Types",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Mapping Jira Data Types and Field Types",slug:"/r/Mapping_Jira_Data_Types_and_Field_Types"},sidebar:"tutorialSidebar",previous:{title:"Jira Fields That Map to Veracode Fields",permalink:"/km-docusaurus-test/r/Jira_Fields_That_Map_to_Veracode_Fields"},next:{title:"Configure Mappings for Jira Cloud Fields",permalink:"/km-docusaurus-test/r/t_jira_cloud_custom_mapping"}},p={},s=[],d={toc:s};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Veracode Integration for Jira and the Veracode Integration for Jira Cloud support importing string, number, and date/time data types from Veracode fields to text, number, and date/time field types in Jira or Jira Cloud."),(0,i.kt)("p",null,"On the Veracode to Jira Field Mappings page, when you select a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/t_add_metadata"},"Veracode custom field")," or Jira field, you see the supported data type or field type below your selection."),(0,i.kt)("p",null,"When adding a custom field in Jira or Jira Cloud, you select a field type. The integration supports these field types only:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Date Time Picker"),": if the value is in a Veracode custom field, which uses free-form text, the value must be in this format: ",(0,i.kt)("inlineCode",{parentName:"li"},"dd/MMM/yy HH:mm"),". For example, ",(0,i.kt)("inlineCode",{parentName:"li"},"14/Jan/20 11:52")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Number Field"),": if the value is in a Veracode custom field, which uses free-form text, the value must be an integer or decimal."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Select List (multiple choices)")," and ",(0,i.kt)("strong",{parentName:"li"},"Select List (single choice)"),": if the values are in Veracode custom fields, ensure each value is enclosed in square brackets. For example:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Custom 1: ","[value 1]"),(0,i.kt)("li",{parentName:"ul"},"Custom 2: ","[value 1][value 2]","[value 3]"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Text Field (multi-line)")," and ",(0,i.kt)("strong",{parentName:"li"},"Text Field (single line)"))),(0,i.kt)("p",null,"If you select an unsupported field type, Jira and Jira Cloud accept it without error, but you cannot select it from the Veracode Platform dropdown menu on the Veracode to Jira Field Mappings page. For text fields only, if a Veracode custom field has a value of ",(0,i.kt)("inlineCode",{parentName:"p"},"-1"),", the integration imports it as ",(0,i.kt)("inlineCode",{parentName:"p"},"[-1]"),". All other negative values import to text fields without square brackets."))}u.isMDXComponent=!0}}]);