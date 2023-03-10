"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[39846],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),u=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,h=p["".concat(i,".").concat(m)]||p[m]||d[m]||s;return r?a.createElement(h,l(l({ref:t},c),{},{components:r})):a.createElement(h,l({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,l=new Array(s);l[0]=p;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var u=2;u<s;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},57825:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const s={title:"deleteuser.do (Deprecated)",slug:"/r/r_deleteuser"},l=void 0,o={unversionedId:"guides/apis/xml_apis/admin_xml_apis/deleteuser_do",id:"guides/apis/xml_apis/admin_xml_apis/deleteuser_do",title:"deleteuser.do (Deprecated)",description:"The deleteuser.do call deletes a user account. To delete a API service account, you must use the Veracode Platform or the Identity REST API.",source:"@site/docs/guides/15_apis/05_xml_apis/04_admin_xml_apis/03_deleteuser_do.md",sourceDirName:"guides/15_apis/05_xml_apis/04_admin_xml_apis",slug:"/r/r_deleteuser",permalink:"/km-docusaurus-test/r/r_deleteuser",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"deleteuser.do (Deprecated)",slug:"/r/r_deleteuser"},sidebar:"tutorialSidebar",previous:{title:"createuser.do (Deprecated)",permalink:"/km-docusaurus-test/r/r_createuser"},next:{title:"getuserinfo.do (Deprecated)",permalink:"/km-docusaurus-test/r/r_getuserinfo"}},i={},u=[{value:"REST API Equivalent",id:"rest-api-equivalent",level:2},{value:"Resource URL",id:"resource-url",level:2},{value:"Permissions",id:"permissions",level:2},{value:"Parameters",id:"parameters",level:2},{value:"HTTPie Example",id:"httpie-example",level:2},{value:"HTTPie Results",id:"httpie-results",level:2}],c={toc:u};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"deleteuser.do")," call deletes a ",(0,n.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_about_veracode_accounts"},"user account"),". To delete a API service account, you must use the Veracode Platform or the Identity REST API."),(0,n.kt)("p",null,"Before using this API, Veracode strongly recommends that you read ",(0,n.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_API_usage_guidelines"},"API Usage and Access Guidelines"),". Ensure you access the APIs with the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs"},"domain for your region"),"."),(0,n.kt)("h2",{id:"rest-api-equivalent"},"REST API Equivalent"),(0,n.kt)("p",null,"The REST API equivalent of this call is a ",(0,n.kt)("inlineCode",{parentName:"p"},"DELETE")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"/api/authn/v2/users/{userId}")," using the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_identity_intro"},"Identity API"),". Veracode strongly recommends that you use the REST API for this action. For new integrations, always use the REST APIs."),(0,n.kt)("h2",{id:"resource-url"},"Resource URL"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"https://analysiscenter.veracode.com/api/3.0/deleteuser.do\n")),(0,n.kt)("h2",{id:"permissions"},"Permissions"),(0,n.kt)("p",null,"An ",(0,n.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_about_veracode_accounts"},"API service account")," requires the Admin API role to use this call. A ",(0,n.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_role_permissions"},"user account")," requires the Administrator role to use this call."),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"username"),(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required")),(0,n.kt)("td",{parentName:"tr",align:"left"},"String"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Required for non-SAML users. Usually the email address of the user.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"custom_id"),(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required")),(0,n.kt)("td",{parentName:"tr",align:"left"},"String"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Required for SAML users. The SAML Subject field value from the user account.")))),(0,n.kt)("h2",{id:"httpie-example"},"HTTPie Example"),(0,n.kt)("p",null,"Examples use the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_httpie_tool"},"HTTPie command-line tool"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'http --auth-type=veracode_hmac -o deleteduserinfo.xml "https://analysiscenter.veracode.com/api/3.0/deleteuser.do" "username==rmonarch@example.com"\n')),(0,n.kt)("h2",{id:"httpie-results"},"HTTPie Results"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"deleteuser.do")," call returns the ",(0,n.kt)("inlineCode",{parentName:"p"},"deleteuserresult")," XML document, which references the ",(0,n.kt)("a",{parentName:"p",href:"https://analysiscenter.veracode.com/resource/deleteuserresult.xsd"},"deleteuserresult.xsd")," schema file. You can use the XSD schema file to validate the XML data."),(0,n.kt)("p",null,"In the return, the ",(0,n.kt)("inlineCode",{parentName:"p"},"<filters .../>")," element lists the deleted usernames, while the ",(0,n.kt)("inlineCode",{parentName:"p"},"<users .../>")," element lists the remaining users."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n\n<deleteuserresult xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" \nxmlns="https://analysiscenter.veracode.com/schema/deleteuserresult" \nxsi:schemaLocation="https://analysiscenter.veracode.com/schema/deleteuserresult \nhttps://analysiscenter.veracode.com/resource/deleteuserresult.xsd" userlist_version="3.0" username="username-99-1596061905076">\n  <result>success</result>\n</deleteuserresult>\n')))}d.isMDXComponent=!0}}]);