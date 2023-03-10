"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3045],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),u=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(r),d=n,k=c["".concat(i,".").concat(d)]||c[d]||m[d]||o;return r?a.createElement(k,l(l({ref:t},p),{},{components:r})):a.createElement(k,l({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var u=2;u<o;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},66978:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const o={title:"Bulk Upload and Assign the Same User Roles to All New Users",slug:"/r/Bulk_Upload_and_Assign_the_Same_User_Roles_to_All_New_Users"},l=void 0,s={unversionedId:"guides/training/security_labs/create_users/bulk_upload_assign_roles",id:"guides/training/security_labs/create_users/bulk_upload_assign_roles",title:"Bulk Upload and Assign the Same User Roles to All New Users",description:"You can assign all your Security Labs users the same user roles when you bulk upload new users in a CSV file. You can bulk upload a maximum of 100 users per upload.",source:"@site/docs/guides/13_training/01_security_labs/02_create_users/04_bulk_upload_assign_roles.md",sourceDirName:"guides/13_training/01_security_labs/02_create_users",slug:"/r/Bulk_Upload_and_Assign_the_Same_User_Roles_to_All_New_Users",permalink:"/km-docusaurus-test/r/Bulk_Upload_and_Assign_the_Same_User_Roles_to_All_New_Users",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Bulk Upload and Assign the Same User Roles to All New Users",slug:"/r/Bulk_Upload_and_Assign_the_Same_User_Roles_to_All_New_Users"},sidebar:"tutorialSidebar",previous:{title:"Add New Security Labs Users to a Standalone Account",permalink:"/km-docusaurus-test/r/t_seclabs_add_user"},next:{title:"Bulk Upload and Assign Differing Roles to Individual New Users",permalink:"/km-docusaurus-test/r/Bulk_Upload_and_Assign_Differing_Roles_to_Individual_New_Users"}},i={},u=[],p={toc:u};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"You can assign all your Security Labs users the same user roles when you bulk upload new users in a CSV file. You can bulk upload a maximum of 100 users per upload."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Before you begin:")),(0,n.kt)("p",null,"You must be a Security Labs administrator to bulk upload new users."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"To complete this task:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click your username in the top-right corner of the Security Labs page to open the menu.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select ",(0,n.kt)("strong",{parentName:"p"},"All users"),"."),(0,n.kt)("p",{parentName:"li"},"The list of users for your organization opens.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Scroll down to the add new users section, and click ",(0,n.kt)("strong",{parentName:"p"},"Bulk upload via CSV..."),"."),(0,n.kt)("p",{parentName:"li"},"The Bulk Invite New Users window opens.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select ",(0,n.kt)("strong",{parentName:"p"},"Select the roles to apply to all your users"),"."))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"}," You may see a ",(0,n.kt)("strong",{parentName:"p"},"(",(0,n.kt)("em",{parentName:"strong"},"default"),")")," role selected in the roles section. The Veracode Platform always applies this role to all your users whether you include it in your CSV file or not.")),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click the checkbox next to one or more roles you want to assign to all your new users.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Format a CSV with one user per row, and these user details:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Email"),(0,n.kt)("li",{parentName:"ul"},"Name"),(0,n.kt)("li",{parentName:"ul"},"Either ",(0,n.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"false")," to enable or disable admin permissions")),(0,n.kt)("p",{parentName:"li"},"Refer to this example CSV format:"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"mailto:user1@example.com"},"user1@example.com"),", name, true"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"mailto:user2@example.com"},"user2@example.com"),", name, false")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the Veracode Platform, click ",(0,n.kt)("strong",{parentName:"p"},"Upload..."),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Upload your CSV file."))))}m.isMDXComponent=!0}}]);