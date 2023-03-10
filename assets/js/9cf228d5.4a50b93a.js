"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[86784],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=c(n),f=o,d=g["".concat(u,".").concat(f)]||g[f]||l[f]||i;return n?r.createElement(d,a(a({ref:t},p),{},{components:n})):r.createElement(d,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=g;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},23720:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const i={title:"Configuring Your Organization Account for SAML",slug:"/r/Configuring_Your_Organization_Account_for_SAML"},a=void 0,s={unversionedId:"guides/admin/signing_on/using_sso_saml/configuring_organization_account_saml",id:"guides/admin/signing_on/using_sso_saml/configuring_organization_account_saml",title:"Configuring Your Organization Account for SAML",description:"Contact Veracode Technical Support to enable your organization account to use SAML for single sign-on. After enabling SAML for your organization, users with the Administrator role for your organization see a SAML tab on the Administration page.",source:"@site/docs/guides/14_admin/01_signing_on/01_using_sso_saml/02_configuring_organization_account_saml.md",sourceDirName:"guides/14_admin/01_signing_on/01_using_sso_saml",slug:"/r/Configuring_Your_Organization_Account_for_SAML",permalink:"/km-docusaurus-test/r/Configuring_Your_Organization_Account_for_SAML",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Configuring Your Organization Account for SAML",slug:"/r/Configuring_Your_Organization_Account_for_SAML"},sidebar:"tutorialSidebar",previous:{title:"Configuring Your Organization Identity Provider for SAML",permalink:"/km-docusaurus-test/r/Configuring_Your_Organization_Identity_Provider_for_SAML"},next:{title:"Configure a User for SAML Access",permalink:"/km-docusaurus-test/r/Configure_a_User_for_SAML_Access"}},u={},c=[],p={toc:c};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Contact Veracode Technical Support to enable your organization account to use SAML for single sign-on. After enabling SAML for your organization, users with the Administrator ",(0,o.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_role_permissions"},"role")," for your organization see a ",(0,o.kt)("strong",{parentName:"p"},"SAML")," tab on the Administration page."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"}," When you change your SAML settings, make sure you delete the existing certificate and upload a new one before saving your changes.")),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"SAML")," tab contains four parameters, two of which are required:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Issuer (required)")),(0,o.kt)("p",null,"Unique identifier of the identity provider that is passed in the assertion in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Issuer")," element of the assertion. The issuer in the assertion must match the value in the Veracode Platform to be valid for your organization."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"}," The issuer automatically populates when your organization is activated for SAML. You cannot edit it after it is set.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"IdP Server URL (optional)")),(0,o.kt)("p",null,"URL of the identity provider server for your organization. The Veracode Platform attempts to redirect a SAML user to this URL upon timeout, if the URL is provided."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Custom Error Page URL (optional)")),(0,o.kt)("p",null,"Enter a URL here to redirect your users to a custom error page in the event of an authentication error."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Assertion Signing Certificate (required)")),(0,o.kt)("p",null,"Browse to and upload the certificate with which assertions are signed. You see the expiration date for the certificate after you upload it. Users cannot sign in after the certificate expires."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"}," When you change your SAML settings, make sure you delete the existing certificate and upload a new one before saving your changes.")),(0,o.kt)("p",null,"Click ",(0,o.kt)("strong",{parentName:"p"},"Save"),"."))}l.isMDXComponent=!0}}]);