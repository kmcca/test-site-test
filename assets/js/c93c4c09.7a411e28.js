"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[66165],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>c});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=u(r),c=a,g=m["".concat(l,".").concat(c)]||m[c]||p[c]||i;return r?n.createElement(g,o(o({ref:t},d),{},{components:r})):n.createElement(g,o({ref:t},d))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},81413:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const i={author:["Kevin McCarthy"],title:"Using SAML for JIT Provisioning",slug:"/r/about_saml_selfregister"},o=void 0,s={unversionedId:"guides/admin/signing_on/using_saml_self_registration/README",id:"guides/admin/signing_on/using_saml_self_registration/README",title:"Using SAML for JIT Provisioning",description:"You can use Just-In-Time (JIT) provisioning to provision new users or update existing user records.",source:"@site/docs/guides/14_admin/01_signing_on/02_using_saml_self_registration/README.md",sourceDirName:"guides/14_admin/01_signing_on/02_using_saml_self_registration",slug:"/r/about_saml_selfregister",permalink:"/km-docusaurus-test/r/about_saml_selfregister",draft:!1,tags:[],version:"current",frontMatter:{author:["Kevin McCarthy"],title:"Using SAML for JIT Provisioning",slug:"/r/about_saml_selfregister"},sidebar:"tutorialSidebar",previous:{title:"Configure a User for SAML Access",permalink:"/km-docusaurus-test/r/Configure_a_User_for_SAML_Access"},next:{title:"Configure JIT Provisioning",permalink:"/km-docusaurus-test/r/Configure_SAML_Self_Registration"}},l={},u=[{value:"Required and Optional SAML Attributes",id:"required-and-optional-saml-attributes",level:2}],d={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can use Just-In-Time (JIT) provisioning to provision new users or update existing user records."),(0,a.kt)("p",null,"By using JIT provisioning, you can use a SAML assertion to provision a new user in the Veracode Platform. JIT provisioning allows you to create Veracode users automatically the first time they attempt to access the Veracode Platform. If JIT provisioning is available, you can sign in to the Veracode Platform using SAML and have a login automatically created with default roles and privileges."),(0,a.kt)("p",null,"JIT provisioning also allows you to update existing user records with fresh information from your identity provider. If there are changes to the first or last name of a user, phone number, or email address, your identity provider automatically propagates these values to Veracode without requiring administrator intervention."),(0,a.kt)("p",null,"JIT provisioning takes advantage of the SAML specification support for optional attributes in the SAML XML document. Veracode requires specific attributes for using JIT provisioning. You can add other attributes to populate additional data for new or existing records."),(0,a.kt)("h2",{id:"required-and-optional-saml-attributes"},"Required and Optional SAML Attributes"),(0,a.kt)("p",null,"Veracode recognizes these SAML attributes as containing information for SAML self-registration. You provide these attributes to supply additional information about the user to Veracode. Veracode requires that you either specify the default Veracode user role in the SAML attributes, or you ",(0,a.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Configure_SAML_Self_Registration"},"choose to use SAML assertion data"),", in which you must specify the Veracode user role."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"firstname")," ",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"Required")),(0,a.kt)("td",{parentName:"tr",align:null},"First name of the user.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"lastname"),"  ",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"Required")),(0,a.kt)("td",{parentName:"tr",align:null},"Last name of the user.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"email"),"      ",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"Required")),(0,a.kt)("td",{parentName:"tr",align:null},"Email address of the user.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"subjectConfirmationRecipient"),"     ",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"Required")),(0,a.kt)("td",{parentName:"tr",align:null},"The ",(0,a.kt)("a",{parentName:"td",href:"https://docs.veracode.com/r/Configuring_Your_Organization_Identity_Provider_for_SAML"},"target URL"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"roles")),(0,a.kt)("td",{parentName:"tr",align:null},"Comma-separated list of valid ",(0,a.kt)("a",{parentName:"td",href:"https://docs.veracode.com/r/c_role_permissions"},"Veracode roles"),". If not provided here, you must specify the default user roles using ",(0,a.kt)("a",{parentName:"td",href:"https://docs.veracode.com/r/Configure_SAML_Self_Registration"},"SAML assertion data"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"teams")),(0,a.kt)("td",{parentName:"tr",align:null},"Comma-separated list of teams to which the newly registered users are assigned. If you do not provide this information using the ",(0,a.kt)("inlineCode",{parentName:"td"},"teams")," attribute, you must specify the default teams using ",(0,a.kt)("a",{parentName:"td",href:"https://docs.veracode.com/r/Configure_SAML_Self_Registration"},"SAML assertion data"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"teamsmanaged")),(0,a.kt)("td",{parentName:"tr",align:null},"Comma-separated list of teams managed by the ",(0,a.kt)("a",{parentName:"td",href:"https://docs.veracode.com/r/c_role_permissions"},"team administrator"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"hasiprestriction")),(0,a.kt)("td",{parentName:"tr",align:null},"Set to ",(0,a.kt)("inlineCode",{parentName:"td"},"TRUE")," if the user is ",(0,a.kt)("a",{parentName:"td",href:"https://docs.veracode.com/r/admin_ip"},"restricted to a certain IP range"),". Requires that you enter a value for ",(0,a.kt)("inlineCode",{parentName:"td"},"ipaddresslist"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"ipaddresslist")),(0,a.kt)("td",{parentName:"tr",align:null},"The IP range to which the user is restricted for login.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"customone")),(0,a.kt)("td",{parentName:"tr",align:null},"Custom field one.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"customtwo")),(0,a.kt)("td",{parentName:"tr",align:null},"Custom field two.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"customthree")),(0,a.kt)("td",{parentName:"tr",align:null},"Custom field three.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"customfour")),(0,a.kt)("td",{parentName:"tr",align:null},"Custom field four.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"customfive")),(0,a.kt)("td",{parentName:"tr",align:null},"Custom field five.")))))}p.isMDXComponent=!0}}]);