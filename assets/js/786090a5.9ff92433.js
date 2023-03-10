"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[76416],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),c=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=c(r),h=n,m=u["".concat(s,".").concat(h)]||u[h]||l[h]||a;return r?i.createElement(m,o(o({ref:t},d),{},{components:r})):i.createElement(m,o({ref:t},d))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var c=2;c<a;c++)o[c]=r[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}u.displayName="MDXCreateElement"},78737:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>l,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var i=r(87462),n=(r(67294),r(3905));const a={title:"Viewing API Credentials Expiration with the Identity API",slug:"/r/c_identity_creds_expire"},o=void 0,p={unversionedId:"guides/apis/rest_apis/identity_rest_api/identity_api_view_expired_api_creds",id:"guides/apis/rest_apis/identity_rest_api/identity_api_view_expired_api_creds",title:"Viewing API Credentials Expiration with the Identity API",description:"This use case scenario provides the Identity REST API commands for viewing the expiration date for Veracode API credentials.",source:"@site/docs/guides/15_apis/04_rest_apis/11_identity_rest_api/11_identity_api_view_expired_api_creds.md",sourceDirName:"guides/15_apis/04_rest_apis/11_identity_rest_api",slug:"/r/c_identity_creds_expire",permalink:"/km-docusaurus-test/r/c_identity_creds_expire",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"Viewing API Credentials Expiration with the Identity API",slug:"/r/c_identity_creds_expire"},sidebar:"tutorialSidebar",previous:{title:"Generating API Credentials with the Identity API",permalink:"/km-docusaurus-test/r/c_identity_gen_creds"},next:{title:"Revoking API Credentials with the Identity API",permalink:"/km-docusaurus-test/r/c_identity_revoke_creds"}},s={},c=[{value:"View the Expiration Date for Your Account",id:"view-the-expiration-date-for-your-account",level:2},{value:"View the Expiration Date By API ID",id:"view-the-expiration-date-by-api-id",level:2},{value:"View the Expiration Date for an API User",id:"view-the-expiration-date-for-an-api-user",level:2}],d={toc:c};function l(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This use case scenario provides the Identity REST API commands for viewing the expiration date for ",(0,n.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_api_credentials3"},"Veracode API credentials"),"."),(0,n.kt)("h2",{id:"view-the-expiration-date-for-your-account"},"View the Expiration Date for Your Account"),(0,n.kt)("p",null,"Use the following command to view the expiration date and time for your API credentials:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'http --auth-type=veracode_hmac GET "https://api.veracode.com/api/authn/v2/api_credentials"\n')),(0,n.kt)("h2",{id:"view-the-expiration-date-by-api-id"},"View the Expiration Date By API ID"),(0,n.kt)("p",null,"Use the following command to view credentials expiration information for a specific API ID:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'http --auth-type=veracode_hmac GET "https://api.veracode.com/api/authn/v2/api_credentials/{apiCredsId}"\n')),(0,n.kt)("h2",{id:"view-the-expiration-date-for-an-api-user"},"View the Expiration Date for an API User"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"To use this command, you must be the administrator for the specified user.")),(0,n.kt)("p",null,"Use the following command to view the current API credentials and their expiration for the API user you specify for ",(0,n.kt)("inlineCode",{parentName:"p"},"userId"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'http --auth-type=veracode_hmac --json GET "https://api.veracode.com/api/authn/v2/api_credentials/user_id/{userId}"\n')),(0,n.kt)("p",null,"You must include the ",(0,n.kt)("inlineCode",{parentName:"p"},"--json")," parameter to force the command to send the ",(0,n.kt)("inlineCode",{parentName:"p"},"Content-Type: application/json")," in the HTTP header."))}l.isMDXComponent=!0}}]);