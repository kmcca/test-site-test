"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[68417],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(a),u=n,f=c["".concat(s,".").concat(u)]||c[u]||m[u]||i;return a?r.createElement(f,l(l({ref:t},p),{},{components:a})):r.createElement(f,l({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},99341:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const i={title:"getuserlist.do (Deprecated)",slug:"/r/r_getuserlist"},l=void 0,o={unversionedId:"guides/apis/xml_apis/admin_xml_apis/getuserlist_do",id:"guides/apis/xml_apis/admin_xml_apis/getuserlist_do",title:"getuserlist.do (Deprecated)",description:"The getuserlist.do call returns a list of the Veracode accounts in your organization.",source:"@site/docs/guides/15_apis/05_xml_apis/04_admin_xml_apis/05_getuserlist_do.md",sourceDirName:"guides/15_apis/05_xml_apis/04_admin_xml_apis",slug:"/r/r_getuserlist",permalink:"/km-docusaurus-test/r/r_getuserlist",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"getuserlist.do (Deprecated)",slug:"/r/r_getuserlist"},sidebar:"tutorialSidebar",previous:{title:"getuserinfo.do (Deprecated)",permalink:"/km-docusaurus-test/r/r_getuserinfo"},next:{title:"updateuser.do (Deprecated)",permalink:"/km-docusaurus-test/r/r_updateuser"}},s={},d=[{value:"REST API Equivalent",id:"rest-api-equivalent",level:2},{value:"Resource URL",id:"resource-url",level:2},{value:"Permissions",id:"permissions",level:2},{value:"Parameters",id:"parameters",level:2},{value:"HTTPie Example",id:"httpie-example",level:2},{value:"HTTPie Results",id:"httpie-results",level:2}],p={toc:d};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"getuserlist.do")," call returns a list of the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_about_veracode_accounts"},"Veracode accounts")," in your organization."),(0,n.kt)("p",null,"Before using this API, Veracode strongly recommends that you read ",(0,n.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_API_usage_guidelines"},"API Usage and Access Guidelines"),". Ensure you access the APIs with the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs"},"domain for your region"),"."),(0,n.kt)("h2",{id:"rest-api-equivalent"},"REST API Equivalent"),(0,n.kt)("p",null,"The REST API equivalent of this call is a ",(0,n.kt)("inlineCode",{parentName:"p"},"GET")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"/api/authn/v2/users")," using the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_identity_intro"},"Identity API"),". Veracode strongly recommends that you use the REST API for this action. For new integrations, always use the REST APIs."),(0,n.kt)("h2",{id:"resource-url"},"Resource URL"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"https://analysiscenter.veracode.com/api/3.0/getuserlist.do\n")),(0,n.kt)("h2",{id:"permissions"},"Permissions"),(0,n.kt)("p",null,"An ",(0,n.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_about_veracode_accounts"},"API service account")," requires the Admin API role to use this call. A ",(0,n.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_role_permissions"},"user account")," requires the Administrator role to use this call."),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("p",null,"There are no required parameters. Use the following parameters to filter the list:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"first_name")),(0,n.kt)("td",{parentName:"tr",align:"left"},"String"),(0,n.kt)("td",{parentName:"tr",align:"left"},"First name of the user.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"last_name")),(0,n.kt)("td",{parentName:"tr",align:"left"},"String"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Last name of the user.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"custom_id")),(0,n.kt)("td",{parentName:"tr",align:"left"},"String"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Required for SAML users. The SAML Subject field value from the user account.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"email_address")),(0,n.kt)("td",{parentName:"tr",align:"left"},"String"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Email address for the user.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"login_account_type")),(0,n.kt)("td",{parentName:"tr",align:"left"},"String"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Specify ",(0,n.kt)("inlineCode",{parentName:"td"},"user")," or ",(0,n.kt)("inlineCode",{parentName:"td"},"api"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"phone")),(0,n.kt)("td",{parentName:"tr",align:"left"},"String"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Contact phone number for the user.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"teams")),(0,n.kt)("td",{parentName:"tr",align:"left"},"String"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Comma-separated list of teams. This filter returns users matching all the listed team names.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"roles")),(0,n.kt)("td",{parentName:"tr",align:"left"},"String (case-sensitive)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Comma-separated list of roles. You can filter on these user account roles: ",(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)("inlineCode",{parentName:"td"},"Administrator")),(0,n.kt)("li",null,(0,n.kt)("inlineCode",{parentName:"td"},"Creator")),(0,n.kt)("li",null,(0,n.kt)("inlineCode",{parentName:"td"},"eLearning")),(0,n.kt)("li",null,(0,n.kt)("inlineCode",{parentName:"td"},"Executive")),(0,n.kt)("li",null,(0,n.kt)("inlineCode",{parentName:"td"},"Mitigation Approver")),(0,n.kt)("li",null,(0,n.kt)("inlineCode",{parentName:"td"},"Policy Administrator")),(0,n.kt)("li",null,(0,n.kt)("inlineCode",{parentName:"td"},"Reviewer")),(0,n.kt)("li",null,(0,n.kt)("inlineCode",{parentName:"td"},"Security Insights")),(0,n.kt)("li",null,(0,n.kt)("inlineCode",{parentName:"td"},"Security Lead")),(0,n.kt)("li",null,(0,n.kt)("inlineCode",{parentName:"td"},"Submitter"))),"This filter only returns users that match all the listed roles. You can apply scan permissions to these types of scans: Static Analysis, Dynamic Analysis, Discovery, manual, and Dynamic Analysis.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"is_saml_user")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Boolean"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Specifies if the user has a SAML login.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"login_enabled")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Boolean"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Specifies if the user can log in.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"requires_token")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Boolean"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Specifies whether a user must provide a two-factor authentication token.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"is_elearning_manager")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Boolean"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Specifies if the user is an Veracode eLearning manager.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"elearning_manager")),(0,n.kt)("td",{parentName:"tr",align:"left"},"String"),(0,n.kt)("td",{parentName:"tr",align:"left"},"First and last name (not the username) of the Veracode eLearning manager. For example, ",(0,n.kt)("inlineCode",{parentName:"td"},"Mary Doe"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"elearning_track")),(0,n.kt)("td",{parentName:"tr",align:"left"},"String"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Veracode eLearning track name.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"elearning_curriculum")),(0,n.kt)("td",{parentName:"tr",align:"left"},"String"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Veracode eLearning curriculum name.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keep_elearning_active")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Boolean"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Specifies whether the Veracode eLearning subscription rolls over at renewal.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"custom_one")),(0,n.kt)("td",{parentName:"tr",align:"left"},"String"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Custom field.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"custom_two")),(0,n.kt)("td",{parentName:"tr",align:"left"},"String"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Custom field.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"custom_three")),(0,n.kt)("td",{parentName:"tr",align:"left"},"String"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Custom field.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"custom_four")),(0,n.kt)("td",{parentName:"tr",align:"left"},"String"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Custom field.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"custom_five")),(0,n.kt)("td",{parentName:"tr",align:"left"},"String"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Custom field.")))),(0,n.kt)("h2",{id:"httpie-example"},"HTTPie Example"),(0,n.kt)("p",null,"Examples use the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_httpie_tool"},"HTTPie command-line tool"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'http --auth-type=veracode_hmac -o userlist.xml "https://analysiscenter.veracode.com/api/3.0/getuserlist.do" "login_enabled==true" "roles==Creator,Submitter"\n')),(0,n.kt)("h2",{id:"httpie-results"},"HTTPie Results"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"getuserlist.do")," call returns a comma-separated list of usernames in the ",(0,n.kt)("inlineCode",{parentName:"p"},"userlist")," XML document, which references the ",(0,n.kt)("a",{parentName:"p",href:"https://analysiscenter.veracode.com/resource/3.0/userlist.xsd"},"userlist.xsd")," schema file. You can use the XSD schema file to validate the XML data."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n\n<userlist xmlns:xsi="http&#x3a;&#x2f;&#x2f;www.w3.org&#x2f;2001&#x2f;XMLSchema-instance" \n      xmlns="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;userlist&#x2f;3.0" \n      xsi:schemaLocation="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;userlist&#x2f;3.0 \n      https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;resource&#x2f;3.0&#x2f;userlist.xsd" userlist_version="3.0" \n      account_id="<account id"><filters/>\n   <users usernames="aswallowtail&#x40;example.com,lpieris&#x40;example.com,sviceroy&#x40;example.com,\n      tmonarch&#x40;example.com,wbuckeye&#x40;example.com"/>\n</userlist>\n')))}m.isMDXComponent=!0}}]);