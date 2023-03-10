"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[13138],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=l(r),g=o,f=d["".concat(s,".").concat(g)]||d[g]||c[g]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},13325:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>u,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const i={title:"Configuring Your Organization Identity Provider for SAML",slug:"/r/Configuring_Your_Organization_Identity_Provider_for_SAML"},a=void 0,u={unversionedId:"guides/admin/signing_on/using_sso_saml/configuring_organization_idp_saml",id:"guides/admin/signing_on/using_sso_saml/configuring_organization_idp_saml",title:"Configuring Your Organization Identity Provider for SAML",description:"While identity provider technologies vary, most require some information about the Veracode Platform to know how to properly construct and forward the SAML assertion. This information should be configured in your identity provider (IdP):",source:"@site/docs/guides/14_admin/01_signing_on/01_using_sso_saml/01_configuring_organization_idp_saml.md",sourceDirName:"guides/14_admin/01_signing_on/01_using_sso_saml",slug:"/r/Configuring_Your_Organization_Identity_Provider_for_SAML",permalink:"/km-docusaurus-test/r/Configuring_Your_Organization_Identity_Provider_for_SAML",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Configuring Your Organization Identity Provider for SAML",slug:"/r/Configuring_Your_Organization_Identity_Provider_for_SAML"},sidebar:"tutorialSidebar",previous:{title:"Using Single Sign-On with SAML",permalink:"/km-docusaurus-test/r/about_saml"},next:{title:"Configuring Your Organization Account for SAML",permalink:"/km-docusaurus-test/r/Configuring_Your_Organization_Account_for_SAML"}},s={},l=[],p={toc:l};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"While identity provider technologies vary, most require some information about the Veracode Platform to know how to properly construct and forward the SAML assertion. This information should be configured in your identity provider (IdP):"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Relaystate URL")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"https://web.analysiscenter.veracode.com/login/#/saml")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Audience  URL")),(0,o.kt)("p",null,"Provided on the SAML tab of the Administration screen on the Veracode Platform"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Target URL")),(0,o.kt)("p",null,"Provided on the SAML tab of the Administration screen on the Veracode Platform"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"SAML version supported")),(0,o.kt)("p",null,"2.0"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"SAML binding supported")),(0,o.kt)("p",null,"HTTP Post"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"SAML profile supported")),(0,o.kt)("p",null,"IdP-initiated SSO"))}c.isMDXComponent=!0}}]);