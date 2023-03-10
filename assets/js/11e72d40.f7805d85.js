"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[21553],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),m=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),u=m(a),c=r,k=u["".concat(o,".").concat(c)]||u[c]||s[c]||i;return a?n.createElement(k,l(l({ref:t},p),{},{components:a})):n.createElement(k,l({ref:t},p))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:r,l[1]=d;for(var m=2;m<i;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},30056:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>d,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const i={title:"Admin XML APIs Quick Reference (Deprecated)",slug:"/r/c_AdminAPI_calls"},l=void 0,d={unversionedId:"guides/apis/xml_apis/admin_xml_apis/admin_xml_apis_quickref",id:"guides/apis/xml_apis/admin_xml_apis/admin_xml_apis_quickref",title:"Admin XML APIs Quick Reference (Deprecated)",description:"This table lists the XML API calls for managing users, teams, and listing eLearning courses. For more detailed information, see the topic for a specific call.",source:"@site/docs/guides/15_apis/05_xml_apis/04_admin_xml_apis/01_admin_xml_apis_quickref.md",sourceDirName:"guides/15_apis/05_xml_apis/04_admin_xml_apis",slug:"/r/c_AdminAPI_calls",permalink:"/km-docusaurus-test/r/c_AdminAPI_calls",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Admin XML APIs Quick Reference (Deprecated)",slug:"/r/c_AdminAPI_calls"},sidebar:"tutorialSidebar",previous:{title:"Admin XML API (Deprecated)",permalink:"/km-docusaurus-test/r/c_about_admin_API_intro"},next:{title:"createuser.do (Deprecated)",permalink:"/km-docusaurus-test/r/r_createuser"}},o={},m=[],p={toc:m};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This table lists the XML API calls for managing users, teams, and listing ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/elearning_master"},"eLearning")," courses. For more detailed information, see the topic for a specific call."),(0,r.kt)("p",null,"Veracode strongly recommends that you use the REST APIs. For new integrations, always use the REST APIs."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"XML API Call"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required Parameters"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional Parameters"),(0,r.kt)("th",{parentName:"tr",align:null},"Scan Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Equivalent REST API Call"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.veracode.com/r/r_createuser"},(0,r.kt)("inlineCode",{parentName:"a"},"createuser.do"))),(0,r.kt)("td",{parentName:"tr",align:null},"Creates a new user login account. You cannot use this call to create a ",(0,r.kt)("a",{parentName:"td",href:"https://docs.veracode.com/r/c_API_roles"},"API service account"),"."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"first_name"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"last_name"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"email_address"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"roles")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"custom_id"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"is_saml_user"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"login_enabled"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"phone"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"requires_token"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"teams"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"title")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2014"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.veracode.com/r/c_identity_intro"},(0,r.kt)("inlineCode",{parentName:"a"},"POST /api/authn/v2/users")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.veracode.com/r/r_deleteuser"},(0,r.kt)("inlineCode",{parentName:"a"},"deleteuser.do"))),(0,r.kt)("td",{parentName:"tr",align:null},"Deletes the specified user account."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"username")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"custom_id")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2014"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.veracode.com/r/c_identity_intro"},(0,r.kt)("inlineCode",{parentName:"a"},"DELETE /api/authn/v2/users/{userId}")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.veracode.com/r/r_getuserinfo"},(0,r.kt)("inlineCode",{parentName:"a"},"getuserinfo.do"))),(0,r.kt)("td",{parentName:"tr",align:null},"Returns information about the specified user account."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"username")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"custom_id")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2014"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.veracode.com/r/c_identity_intro"},(0,r.kt)("inlineCode",{parentName:"a"},"GET /api/authn/v2/users/{userId}")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.veracode.com/r/r_getuserlist"},(0,r.kt)("inlineCode",{parentName:"a"},"getuserlist.do"))),(0,r.kt)("td",{parentName:"tr",align:null},"Returns a list of all user accounts for your organization."),(0,r.kt)("td",{parentName:"tr",align:null},"\xa0"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"first_name"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"last_name"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"custom_id"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"email_address"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"login_account_type"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"phone"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"teams"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"roles"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"is_saml_user"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"login_enabled"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"requires_token"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"is_elearning_manager"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"elearning_track"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"elearning_curriculum"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"keep_elearning_active"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"custom_one"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"custom_two"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"custom_three"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"custom_four"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"custom_five")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2014"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.veracode.com/r/c_identity_intro"},(0,r.kt)("inlineCode",{parentName:"a"},"GET /api/authn/v2/users")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.veracode.com/r/r_updateuser"},(0,r.kt)("inlineCode",{parentName:"a"},"updateuser.do"))),(0,r.kt)("td",{parentName:"tr",align:null},"Changes or updates the information for the specified user account."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"username"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"custom_id")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"first_name"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"last_name"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"email_address"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"login_account_type"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"phone"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"teams"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"roles"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"is_saml_user"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"login_enabled"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"requires_token"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"has_ip_restrictions"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"allowed_ip_addresses"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"is_elearning_manager"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"elearning_track"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"elearning_curriculum"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"keep_elearning_active"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"custom_one"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"custom_two"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"custom_three"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"custom_four"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"custom_five")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2014"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.veracode.com/r/c_identity_intro"},(0,r.kt)("inlineCode",{parentName:"a"},"PUT /api/authn/v2/users/{userId}")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.veracode.com/r/r_createteam"},(0,r.kt)("inlineCode",{parentName:"a"},"createteam.do"))),(0,r.kt)("td",{parentName:"tr",align:null},"Creates a new team of users."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"team_name")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"members")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2014"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.veracode.com/r/c_identity_intro"},(0,r.kt)("inlineCode",{parentName:"a"},"POST /api/authn/v2/teams")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.veracode.com/r/r_deleteteam"},(0,r.kt)("inlineCode",{parentName:"a"},"deleteteam.do"))),(0,r.kt)("td",{parentName:"tr",align:null},"Deletes the specified team of users."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"team_id")),(0,r.kt)("td",{parentName:"tr",align:null},"\xa0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2014"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.veracode.com/r/c_identity_intro"},(0,r.kt)("inlineCode",{parentName:"a"},"DELETE /api/authn/v2/teams/{teamId}")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.veracode.com/r/r_getteaminfo"},(0,r.kt)("inlineCode",{parentName:"a"},"getteaminfo.do"))),(0,r.kt)("td",{parentName:"tr",align:null},"Returns detailed parameters of a specific team."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"team_id")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"include_users"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"include_applications")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2014"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.veracode.com/r/c_identity_intro"},(0,r.kt)("inlineCode",{parentName:"a"},"GET /api/authn/v2/teams/{teamId}")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.veracode.com/r/r_getteamlist"},(0,r.kt)("inlineCode",{parentName:"a"},"getteamlist.do"))),(0,r.kt)("td",{parentName:"tr",align:null},"Returns a list of the user teams for your organization."),(0,r.kt)("td",{parentName:"tr",align:null},"\xa0"),(0,r.kt)("td",{parentName:"tr",align:null},"\xa0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2014"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.veracode.com/r/c_identity_intro"},(0,r.kt)("inlineCode",{parentName:"a"},"GET /api/authn/v2/teams")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.veracode.com/r/r_updateteam"},(0,r.kt)("inlineCode",{parentName:"a"},"updateteam.do"))),(0,r.kt)("td",{parentName:"tr",align:null},"Changes or updates the information of the specified user team."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"team_id")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"members"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"team_name")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2014"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.veracode.com/r/c_identity_intro"},(0,r.kt)("inlineCode",{parentName:"a"},"PUT /api/authn/v2/teams/{teamId}")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.veracode.com/r/r_getcurriculumlist"},(0,r.kt)("inlineCode",{parentName:"a"},"getcurriculumlist.do"))),(0,r.kt)("td",{parentName:"tr",align:null},"Provides a list of the Veracode eLearning curricula defined for your organization."),(0,r.kt)("td",{parentName:"tr",align:null},"\xa0"),(0,r.kt)("td",{parentName:"tr",align:null},"\xa0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2014"),(0,r.kt)("td",{parentName:"tr",align:null},"\xa0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.veracode.com/r/r_gettracklist"},(0,r.kt)("inlineCode",{parentName:"a"},"gettracklist.do"))),(0,r.kt)("td",{parentName:"tr",align:null},"Provides a list of the Veracode eLearning tracks available for your organization."),(0,r.kt)("td",{parentName:"tr",align:null},"\xa0"),(0,r.kt)("td",{parentName:"tr",align:null},"\xa0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2014"),(0,r.kt)("td",{parentName:"tr",align:null},"\xa0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.veracode.com/r/r_getmaintenancescheduleinfo"},(0,r.kt)("inlineCode",{parentName:"a"},"getmaintenancescheduleinfo.do"))),(0,r.kt)("td",{parentName:"tr",align:null},"Returns the upcoming Veracode Platform maintenance schedule."),(0,r.kt)("td",{parentName:"tr",align:null},"\xa0"),(0,r.kt)("td",{parentName:"tr",align:null},"\xa0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2014"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"GET https://api.status.veracode.com/status"))))))}s.isMDXComponent=!0}}]);