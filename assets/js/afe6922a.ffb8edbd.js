"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[97782],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=i.createContext({}),l=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return i.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),g=r,m=d["".concat(u,".").concat(g)]||d[g]||c[g]||o;return n?i.createElement(m,a(a({ref:t},p),{},{components:n})):i.createElement(m,a({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78006:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var i=n(87462),r=(n(67294),n(3905));const o={author:["Kevin McCarthy"],title:"About Migrating to JIT Provisioning",slug:"/r/About_Migrating_to_Just_In_Time_Provisioning"},a=void 0,s={unversionedId:"guides/admin/signing_on/jit_provisioning_migration/README",id:"guides/admin/signing_on/jit_provisioning_migration/README",title:"About Migrating to JIT Provisioning",description:"In July 2022, Veracode introduced the Single Sign-on and Just-In-Time (JIT) Provisioning feature. Because of changes in the SSO settings, there are steps you must perform to migrate to the new feature. Some benefits of the new feature include:",source:"@site/docs/guides/14_admin/01_signing_on/03_jit_provisioning_migration/README.md",sourceDirName:"guides/14_admin/01_signing_on/03_jit_provisioning_migration",slug:"/r/About_Migrating_to_Just_In_Time_Provisioning",permalink:"/km-docusaurus-test/r/About_Migrating_to_Just_In_Time_Provisioning",draft:!1,tags:[],version:"current",frontMatter:{author:["Kevin McCarthy"],title:"About Migrating to JIT Provisioning",slug:"/r/About_Migrating_to_Just_In_Time_Provisioning"},sidebar:"tutorialSidebar",previous:{title:"Configure JIT Provisioning",permalink:"/km-docusaurus-test/r/Configure_SAML_Self_Registration"},next:{title:"Migrate to JIT Provisioning for SSO",permalink:"/km-docusaurus-test/r/Migrate_to_JIT_Provisioning_for_SSO"}},u={},l=[],p={toc:l};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In July 2022, Veracode introduced the Single Sign-on and Just-In-Time (JIT) Provisioning feature. Because of changes in the SSO settings, there are steps you must perform to migrate to the new feature. Some benefits of the new feature include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Wider compatibility with identity providers: Veracode built the new feature on an industry-leading identity provider capability that works out-of-the box with a wider variety of identity providers (IdPs).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Better management of SSO and JIT settings: the updated user interface provides useful content, including highlighting the expiration date of SAML certificates, and makes it harder to misconfigure single sign-on and JIT settings, which avoids support issues.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Wider variety of user roles supported: the new capability allows for JIT user provisioning with the Security Labs ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_role_permissions"},"role"),", enabling a faster roll-out of your developer learning program."))),(0,r.kt)("p",null,"These items are important to consider before migrating to the new workflow:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_about_admin_API_intro"},"Admin XML API deprecation"),": the Admin XML API is deprecated in the new workflow. Use the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_identity_intro"},"Identity API")," to manage users, teams, and business units with the new workflow.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Pending user activation deprecation: Veracode no longer supports the option for specifying that newly provisioned users are pending activation, which required an administrator to activate each user. If you wish to continue using this workflow, Veracode recommends you configure newly provisioned users into a role with minimal access, such as Reviewer, and ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/t_create_users"},"assign them to a team")," that is not associated with application profiles. The Administrator can then review the list of users associated with this team and provide any additional permissions.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When IdP Data is preferred, you cannot update users with the Identity API or in the Veracode Platform: in the previous workflow, an administrator could attempt to change values in a user configuration that would be overridden the next time a user logged in. To prevent this confusion, when IdP data is preferred, updating user settings with the Identity API or the UI is no longer supported.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Team Admin not supported as a JIT default: you cannot set Team Admin as a JIT default assigned to all newly provisioned users. If you had this role set in your Self-Registration default settings, Veracode removes this role from the JIT default settings when your organization migrates. This change does not affect existing users with the Team Admin role. If you set the User Data Updates to Prefer Organization Identity Provider Data option, you can still use JIT to provision a user with the Team Admin role by ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/about_saml_selfregister"},"passing the role and the list of teams to be managed in the SAML assertion"),"."))))}c.isMDXComponent=!0}}]);