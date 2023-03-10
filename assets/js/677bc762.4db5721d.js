"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[44696],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},_=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),_=c(n),d=i,y=_["".concat(l,".").concat(d)]||_[d]||u[d]||a;return n?r.createElement(y,o(o({ref:t},p),{},{components:n})):r.createElement(y,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=_;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}_.displayName="MDXCreateElement"},4997:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const a={title:"Listing All Roles in an Organization with the Identity API",slug:"/r/Listing_All_Roles_in_an_Organization_with_the_Identity_API"},o=void 0,s={unversionedId:"guides/apis/rest_apis/identity_rest_api/identity_api_list_all_roles_organization",id:"guides/apis/rest_apis/identity_rest_api/identity_api_list_all_roles_organization",title:"Listing All Roles in an Organization with the Identity API",description:"This use case scenario provides the Identity REST API commands for listing all the roles in an organization. These commands apply to both user accounts and API service accounts.",source:"@site/docs/guides/15_apis/04_rest_apis/11_identity_rest_api/03_identity_api_list_all_roles_organization.md",sourceDirName:"guides/15_apis/04_rest_apis/11_identity_rest_api",slug:"/r/Listing_All_Roles_in_an_Organization_with_the_Identity_API",permalink:"/km-docusaurus-test/r/Listing_All_Roles_in_an_Organization_with_the_Identity_API",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Listing All Roles in an Organization with the Identity API",slug:"/r/Listing_All_Roles_in_an_Organization_with_the_Identity_API"},sidebar:"tutorialSidebar",previous:{title:"Video: Create and Manage API Service Accounts with the Identity API",permalink:"/km-docusaurus-test/r/Create_and_Manage_API_Service_Accounts_with_the_Identity_API"},next:{title:"Listing Users with the Identity API",permalink:"/km-docusaurus-test/r/c_identity_list_users"}},l={},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This use case scenario provides the Identity REST API commands for listing all the roles in an organization. These commands apply to both ",(0,i.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_about_veracode_accounts"},"user accounts and API service accounts"),"."),(0,i.kt)("p",null,"Use this command to list all ",(0,i.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_role_permissions"},"roles")," in an organization:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'http --auth-type=veracode_hmac GET "https://api.veracode.com/api/authn/v2/roles/search?role_id={role_id}"\n')))}u.isMDXComponent=!0}}]);