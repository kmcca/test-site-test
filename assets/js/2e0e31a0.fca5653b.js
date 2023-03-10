"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2670],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(a),f=i,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||r;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function f(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},55295:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var n=a(87462),i=(a(67294),a(3905));const r={title:"Manage API Specifications in the Veracode Platform",slug:"/r/Manage_API_Specifications_in_the_Veracode_Platform"},o=void 0,s={unversionedId:"guides/dynamic_analysis/da_scan_apis/apiscan_manage_specs",id:"guides/dynamic_analysis/da_scan_apis/apiscan_manage_specs",title:"Manage API Specifications in the Veracode Platform",description:"You can use the API Specification Management tab in the Veracode Platform to upload, update, and permanently delete your API specifications.",source:"@site/docs/guides/10_dynamic_analysis/02_da_scan_apis/05_apiscan_manage_specs.md",sourceDirName:"guides/10_dynamic_analysis/02_da_scan_apis",slug:"/r/Manage_API_Specifications_in_the_Veracode_Platform",permalink:"/km-docusaurus-test/r/Manage_API_Specifications_in_the_Veracode_Platform",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Manage API Specifications in the Veracode Platform",slug:"/r/Manage_API_Specifications_in_the_Veracode_Platform"},sidebar:"tutorialSidebar",previous:{title:"Example SRM Script for OAuth Token Authorization",permalink:"/km-docusaurus-test/r/Example_SRM_Script_for_OAuth_Token_Authorization"},next:{title:"Remove an API Specification from an Analysis",permalink:"/km-docusaurus-test/r/Remove_an_API_Specification_from_an_Analysis"}},c={},l=[],p={toc:l};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can use the ",(0,i.kt)("strong",{parentName:"p"},"API Specification Management")," tab in the Veracode Platform to upload, update, and permanently delete your API specifications."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Before you begin:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You have a ",(0,i.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/c_about_veracode_accounts"},"Veracode account")," with the Creator, Submitter, or Security Lead ",(0,i.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/c_role_permissions"},"role"),". Any member of the team associated with the Dynamic Analysis is able to view the analysis and its results."),(0,i.kt)("li",{parentName:"ul"},"You have ",(0,i.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/Remove_an_API_Specification_from_an_Analysis"},"removed any API specification")," you want to update or delete from the associated analyses.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"To complete this task:")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Log in to the Veracode Platform."),(0,i.kt)("li",{parentName:"ol"},"Select ",(0,i.kt)("strong",{parentName:"li"},"Scans and Analysis")," > ",(0,i.kt)("strong",{parentName:"li"},"Dynamic Analysis"),"."),(0,i.kt)("li",{parentName:"ol"},"Click the ",(0,i.kt)("strong",{parentName:"li"},"API Specification Management")," tab."),(0,i.kt)("li",{parentName:"ol"},"To upload a new API specification, click ",(0,i.kt)("strong",{parentName:"li"},"Upload API Specification"),". To manage an existing specification, locate it in the API Specification Management table and select from the following actions in the Actions column.")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Action"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"View API Specification Details")," (eye icon)"),(0,i.kt)("td",{parentName:"tr",align:null},"Opens a read-only window with detailed information about the API scanning configuration for the selected specification. The Associated Analysis field provides a list of analyses to which this specification is associated. You can click an analysis to view additional information, including options for reconfiguring and rerunning an analysis.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Update")," (pencil icon)"),(0,i.kt)("td",{parentName:"tr",align:null},"Update the following configuration settings for the selected specification.",(0,i.kt)("ul",null,(0,i.kt)("li",null,"Rename the specification. If you do not enter a name for the API specification, by default, the Veracode Platform uses the filename of the uploaded specification."),(0,i.kt)("li",null,"Delete the specification file attached to the configuration and replace it with a different file. Depending on the size of your specification file, the upload might take several seconds to complete. Also, the Veracode Platform shows messages about any issues with the specification, such as unsupported file format, invalid syntax, or an ",(0,i.kt)("a",{parentName:"td",href:"https://docs.veracode.com/r/Fixing_Relative_URLs_for_API_Scanning"},"issue with the relative URL"),"."),(0,i.kt)("li",null,"For JSON and YAML files, you can add or update a custom base URL, which Veracode uses to identify the server to use during analysis. OpenAPI 2.0 only supports a single server, while OpenAPI 3.0 and HAR files support multiple servers. You typically use these servers to select different environments, such as a production instance and a staging environment, or multiple production instances located in different regions."),(0,i.kt)("li",null,"Change the visibility of the specification to either ",(0,i.kt)("a",{parentName:"td",href:"https://docs.veracode.com/r/c_role_permissions"},"Security Leads")," only or both Security Leads and specific teams. After ",(0,i.kt)("a",{parentName:"td",href:"https://docs.veracode.com/r/Create_an_API_Specification_Scan"},"adding the specification to an analysis"),", you cannot change its visibility.")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Delete")," (trash can icon)"),(0,i.kt)("td",{parentName:"tr",align:null},"Delete the API specification and its configuration settings from Veracode. You cannot undo this action or recover the deleted specification file or its configuration settings.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Next steps:")),(0,i.kt)("p",null,"Associate the API specification to a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Create_an_API_Specification_Scan"},"new")," or ",(0,i.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Configure_and_Run_an_API_Specification_Scan"},"existing")," analysis."))}d.isMDXComponent=!0}}]);