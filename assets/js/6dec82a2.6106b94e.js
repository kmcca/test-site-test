"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[66044],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(a),c=r,k=u["".concat(s,".").concat(c)]||u[c]||m[c]||i;return a?n.createElement(k,l(l({ref:t},p),{},{components:a})):n.createElement(k,l({ref:t},p))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},27784:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const i={title:"updateuser.do (Deprecated)",slug:"/r/r_updateuser"},l=void 0,o={unversionedId:"guides/apis/xml_apis/admin_xml_apis/updateuser_do",id:"guides/apis/xml_apis/admin_xml_apis/updateuser_do",title:"updateuser.do (Deprecated)",description:"The updateuser.do call updates the information for the specified Veracode account.",source:"@site/docs/guides/15_apis/05_xml_apis/04_admin_xml_apis/06_updateuser_do.md",sourceDirName:"guides/15_apis/05_xml_apis/04_admin_xml_apis",slug:"/r/r_updateuser",permalink:"/km-docusaurus-test/r/r_updateuser",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"updateuser.do (Deprecated)",slug:"/r/r_updateuser"},sidebar:"tutorialSidebar",previous:{title:"getuserlist.do (Deprecated)",permalink:"/km-docusaurus-test/r/r_getuserlist"},next:{title:"createteam.do (Deprecated)",permalink:"/km-docusaurus-test/r/r_createteam"}},s={},d=[{value:"REST API Equivalent",id:"rest-api-equivalent",level:2},{value:"Resource URL",id:"resource-url",level:2},{value:"Permissions",id:"permissions",level:2},{value:"Parameters",id:"parameters",level:2},{value:"HTTPie Example",id:"httpie-example",level:2},{value:"HTTPie Results",id:"httpie-results",level:2}],p={toc:d};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"updateuser.do")," call updates the information for the specified ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_about_veracode_accounts"},"Veracode account"),"."),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"updateuser.do")," to change any of the parameters that you can change in the Veracode Platform, except for ",(0,r.kt)("inlineCode",{parentName:"p"},"login_account_type"),"."),(0,r.kt)("p",null,"Before using this API, Veracode strongly recommends that you read ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_API_usage_guidelines"},"API Usage and Access Guidelines"),". Ensure you access the APIs with the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs"},"domain for your region"),"."),(0,r.kt)("h2",{id:"rest-api-equivalent"},"REST API Equivalent"),(0,r.kt)("p",null,"The REST API equivalent of this call is a ",(0,r.kt)("inlineCode",{parentName:"p"},"PUT")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/authn/v2/users/{userId}")," using the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_identity_intro"},"Identity API"),". Veracode strongly recommends that you use the REST API for this action. For new integrations, always use the REST APIs."),(0,r.kt)("h2",{id:"resource-url"},"Resource URL"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://analysiscenter.veracode.com/api/3.0/updateuser.do\n")),(0,r.kt)("h2",{id:"permissions"},"Permissions"),(0,r.kt)("p",null,"An ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_about_veracode_accounts"},"API service account")," requires the Admin API role to use this call. A ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_role_permissions"},"user account")," requires the Administrator role to use this call."),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"username"),(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Required")),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Required for non-SAML users only.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"custom_id"),(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Required")),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Required for SAML users only. The SAML Subject field value from the user account. The ",(0,r.kt)("inlineCode",{parentName:"td"},"custom_id")," is an identifier to inform the system which user it is updating. If you want to change the ",(0,r.kt)("inlineCode",{parentName:"td"},"custom_id"),", use the ",(0,r.kt)("inlineCode",{parentName:"td"},"new_custom_id")," parameter with the new ID.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"first_name")),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"First name of the user.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"last_name")),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Last name of the user.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"email_address")),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Valid email address. To change the username, send a new value in the ",(0,r.kt)("inlineCode",{parentName:"td"},"email_address")," parameter.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"phone")),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Contact phone number for the user.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"teams")),(0,r.kt)("td",{parentName:"tr",align:"left"},"String (case-sensitive)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Comma-separated list of team names.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"roles")),(0,r.kt)("td",{parentName:"tr",align:"left"},"String (case-sensitive)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Comma-separated list of these user account roles: ",(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"Administrator")),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"Creator")),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"Delete Scans")),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"eLearning")),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"Executive")),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"Greenlight IDE User")),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"Mitigation Approver")),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"Policy Administrator")),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"Reviewer")),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"Sandbox Administrator")),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"Sandbox User")),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"Security Insights")),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"Security Lead")),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"Submitter")),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"Vendor Manager"))),"You cannot pass any of the API user roles for ",(0,r.kt)("a",{parentName:"td",href:"https://docs.veracode.com/r/c_API_roles_details"},"API service accounts"),". If you use either the ",(0,r.kt)("inlineCode",{parentName:"td"},"Creator"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Security Lead"),", or ",(0,r.kt)("inlineCode",{parentName:"td"},"Submitter")," role, Veracode automatically applies the Any Scan permission to the scans. You can apply scan permissions to these types of scans: Static Analysis, Dynamic Analysis, Discovery, manual, and Dynamic Analysis.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"new_custom_id")),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"For SAML users to change the identifier of the user account.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"has_ip_restrictions")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Specifies whether the administrator has placed IP restrictions on the user.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"is_saml_user")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"You can only update this parameter if your account is SAML-enabled. If your call incorrectly sets ",(0,r.kt)("inlineCode",{parentName:"td"},"is_saml_user")," to true, you receive an error. The login account must have SAML enabled and have a ",(0,r.kt)("inlineCode",{parentName:"td"},"custom_id"),". If the account does have SAML enabled but lacks a ",(0,r.kt)("inlineCode",{parentName:"td"},"custom_id"),", you can set ",(0,r.kt)("inlineCode",{parentName:"td"},"is_saml_user")," to ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," and provide the missing ",(0,r.kt)("inlineCode",{parentName:"td"},"custom_id"),". You cannot set ",(0,r.kt)("inlineCode",{parentName:"td"},"is_saml_user")," to ",(0,r.kt)("inlineCode",{parentName:"td"},"false"),", because SAML users cannot be converted to non-SAML users.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"login_enabled")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Specifies whether the user can login.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"requires_token")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Specifies whether a user must provide a two-factor authentication token.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"is_elearning_manager")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"You can only update this parameter if your account has an active Veracode eLearning subscription.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"elearning_manager")),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The first and last name (not the username) of the Veracode eLearning manager. For example, Mary Doe. You can only update this parameter if your account has an active Veracode eLearning subscription.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"elearning_track")),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The Veracode eLearning track name. You can only update this parameter if your account has an active Veracode eLearning subscription.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"elearning_curriculum")),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The Veracode eLearning curriculum name. You can only update this parameter if your account has an active Veracode eLearning subscription.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"keep_elearning_active")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"You can only update this parameter if your account has an active Veracode eLearning subscription.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"custom_one")),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Custom field.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"custom_two")),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Custom field.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"custom_three")),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Custom field.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"custom_four")),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Custom field.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"custom_five")),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Custom field.")))),(0,r.kt)("h2",{id:"httpie-example"},"HTTPie Example"),(0,r.kt)("p",null,"Examples use the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_httpie_tool"},"HTTPie command-line tool"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'http --auth-type=veracode_hmac -o updateduserinfo.xml "https://analysiscenter.veracode.com/api/3.0/updateuser.do" "username==tmonarch@example.com" "phone==111-222-3333"\n')),(0,r.kt)("h2",{id:"httpie-results"},"HTTPie Results"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"updateuser.do")," call returns the ",(0,r.kt)("inlineCode",{parentName:"p"},"output")," XML document, which references the ",(0,r.kt)("a",{parentName:"p",href:"https://analysiscenter.veracode.com/resource/3.0/userinfo.xsd"},"userinfo.xsd")," schema file. You can use the XSD schema file to validate the XML data."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n\n<userinfo xmlns:xsi="http&#x3a;&#x2f;&#x2f;www.w3.org&#x2f;2001&#x2f;XMLSchema-instance" \n      xmlns="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;userinfo&#x2f;3.0" \n      xsi:schemaLocation="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;userinfo&#x2f;3.0 \n      https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;resource&#x2f;3.0&#x2f;userinfo.xsd" userinfo_version="3.0" \n      username="tmonarch&#x40;example.com">\n   <login_account first_name="Ted" last_name="Monarch" login_account_type="user" email_address="tmonarch&#x40;example.com" \n      phone="111-222-3333" login_enabled="true" requires_token="false" teams="Demo Team" \n      roles="Creator,eLearning,Submitter,Any Scan" is_elearning_manager="false" elearning_manager="No Manager" \n      elearning_track="No Track Assigned" elearning_curriculum="No Curriculum Assigned" keep_elearning_active="false"/>\n</userinfo>\n')))}m.isMDXComponent=!0}}]);