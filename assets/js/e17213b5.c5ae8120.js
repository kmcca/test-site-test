"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[35982],{3905:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},g=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,g=u(e,["components","mdxType","originalType","parentName"]),p=s(n),d=o,m=p["".concat(l,".").concat(d)]||p[d]||c[d]||i;return n?r.createElement(m,a(a({ref:t},g),{},{components:n})):r.createElement(m,a({ref:t},g))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},53659:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>u,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const i={title:"Configuring Your Organization Identity Provider for SAML (Legacy)",slug:"/r/Configuring_Your_Organization_Identity_Provider_for_SAML_Legacy"},a=void 0,u={unversionedId:"guides/admin/signing_on/using_sso_saml_legacy/configuring_organization_idp_saml_legacy",id:"guides/admin/signing_on/using_sso_saml_legacy/configuring_organization_idp_saml_legacy",title:"Configuring Your Organization Identity Provider for SAML (Legacy)",description:"Veracode recommends the new Single Sign-on and Just-In-Time Provisioning feature for new accounts. If you are using the new feature, see Configuring Your Organization Identity Provider for SAML.",source:"@site/docs/guides/14_admin/01_signing_on/04_using_sso_saml_legacy/01_configuring_organization_idp_saml_legacy.md",sourceDirName:"guides/14_admin/01_signing_on/04_using_sso_saml_legacy",slug:"/r/Configuring_Your_Organization_Identity_Provider_for_SAML_Legacy",permalink:"/km-docusaurus-test/r/Configuring_Your_Organization_Identity_Provider_for_SAML_Legacy",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Configuring Your Organization Identity Provider for SAML (Legacy)",slug:"/r/Configuring_Your_Organization_Identity_Provider_for_SAML_Legacy"},sidebar:"tutorialSidebar",previous:{title:"Using Single Sign-On with SAML (Legacy)",permalink:"/km-docusaurus-test/r/about_saml_legacy"},next:{title:"Configuring Your Organization Account for SAML (Legacy)",permalink:"/km-docusaurus-test/r/Configuring_Your_Organization_Account_for_SAML_Legacy"}},l={},s=[],g={toc:s};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"  Veracode recommends the new Single Sign-on and Just-In-Time Provisioning feature for new accounts. If you are using the new feature, see ",(0,o.kt)("a",{href:"https://docs.veracode.com/r/Configuring_Your_Organization_Identity_Provider_for_SAML"},"Configuring Your Organization Identity Provider for SAML"),".")),(0,o.kt)("p",null,"While identity provider technologies vary, most require some information about the Veracode Platform to know how to properly construct and forward the SAML assertion. This information may be required by your identity provider:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"SAML Assertion Consumer Service (ACS) URL")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs"},"SAML ACS domain for your region")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"EntityID")),(0,o.kt)("p",null,"Unique identifier for the service provider. Veracode recommends using the SAML entity ID URL for your region:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"SAML Entity ID URL"),(0,o.kt)("th",{parentName:"tr",align:null},"Region"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"https://analysiscenter.veracode.com/saml")),(0,o.kt)("td",{parentName:"tr",align:null},"Commercial Region. The default.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"https://analysiscenter.veracode.eu/saml")),(0,o.kt)("td",{parentName:"tr",align:null},"European Region")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"https://analysiscenter.veracode.us/saml")),(0,o.kt)("td",{parentName:"tr",align:null},"United States Federal Region")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"SAML version supported")),(0,o.kt)("p",null,"2.0"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"SAML binding supported")),(0,o.kt)("p",null,"HTTP Post"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"SAML profile supported")),(0,o.kt)("p",null,"IdP initiated SSO"))}c.isMDXComponent=!0}}]);