"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1501],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),g=u(r),m=a,f=g["".concat(c,".").concat(m)]||g[m]||p[m]||o;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},78848:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={title:"Configure a User for SAML Access (Legacy)",slug:"/r/Configure_a_User_for_SAML_Access_Legacy"},i=void 0,s={unversionedId:"guides/admin/signing_on/using_sso_saml_legacy/configuring_user_saml_access_legacy",id:"guides/admin/signing_on/using_sso_saml_legacy/configuring_user_saml_access_legacy",title:"Configure a User for SAML Access (Legacy)",description:"Veracode recommends the new Single Sign-on and Just-In-Time Provisioning feature for new accounts. If you are using the new feature, see Configure a User for SAML Access.",source:"@site/docs/guides/14_admin/01_signing_on/04_using_sso_saml_legacy/03_configuring_user_saml_access_legacy.md",sourceDirName:"guides/14_admin/01_signing_on/04_using_sso_saml_legacy",slug:"/r/Configure_a_User_for_SAML_Access_Legacy",permalink:"/km-docusaurus-test/r/Configure_a_User_for_SAML_Access_Legacy",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Configure a User for SAML Access (Legacy)",slug:"/r/Configure_a_User_for_SAML_Access_Legacy"},sidebar:"tutorialSidebar",previous:{title:"Configuring Your Organization Account for SAML (Legacy)",permalink:"/km-docusaurus-test/r/Configuring_Your_Organization_Account_for_SAML_Legacy"},next:{title:"Using SAML for Self-Registration (Legacy)",permalink:"/km-docusaurus-test/r/about_saml_selfregister_Legacy"}},c={},u=[],l={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"  Veracode recommends the new Single Sign-on and Just-In-Time Provisioning feature for new accounts. If you are using the new feature, see ",(0,a.kt)("a",{href:"https://docs.veracode.com/r/Configure_a_User_for_SAML_Access"},"Configure a User for SAML Access"),".")),(0,a.kt)("p",null,"Using SAML authentication requires that a user account has a user record in the Veracode Platform."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"  When you set the login type in the Veracode Platform to SAML, you cannot change it back to the password login type.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"To complete this task:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/admin_user"},"Create a new user")," or ",(0,a.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/t_manage_user"},"update an existing user")," using the Administration page in the Veracode Platform, or the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/c_identity_intro"},"Identity API"),"."),(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("strong",{parentName:"li"},"SAML")," in the Login Type field, or set the ",(0,a.kt)("inlineCode",{parentName:"li"},"saml_user")," property to ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," for the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/c_identity_create_human"},"Identity API"),"."),(0,a.kt)("li",{parentName:"ol"},"Set the SAML Subject field (",(0,a.kt)("inlineCode",{parentName:"li"},"saml_subject")," in the Identity API) to the value that the SAML assertion passed in to identify the user. This value is usually the user email address or corporate login ID."),(0,a.kt)("li",{parentName:"ol"},"When creating a new user, you can also set the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/c_role_permissions"},"user roles")," and allowed scan types.")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"}," If you set a SAML assertion for a user who has the Team Admin role, you must also set the ",(0,a.kt)("a",{href:"https://docs.veracode.com/r/about_saml_selfregister"},(0,a.kt)("code",null,"teamsmanaged")," attribute"),".")))}p.isMDXComponent=!0}}]);