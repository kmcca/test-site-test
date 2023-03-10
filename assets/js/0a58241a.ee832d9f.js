"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[93433],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(a),d=r,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return a?n.createElement(f,i(i({ref:t},s),{},{components:a})):n.createElement(f,i({ref:t},s))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},51938:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={title:"Create an Application Profile",slug:"/r/t_add_application"},i=void 0,p={unversionedId:"guides/admin/manage_app_profiles/create_new_application_profile",id:"guides/admin/manage_app_profiles/create_new_application_profile",title:"Create an Application Profile",description:"You must create an application profile before you can submit a scan to Veracode.",source:"@site/docs/guides/14_admin/05_manage_app_profiles/02_create_new_application_profile.md",sourceDirName:"guides/14_admin/05_manage_app_profiles",slug:"/r/t_add_application",permalink:"/km-docusaurus-test/r/t_add_application",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Create an Application Profile",slug:"/r/t_add_application"},sidebar:"tutorialSidebar",previous:{title:"Managing Application Profiles",permalink:"/km-docusaurus-test/r/request_profile"},next:{title:"Character Limits in Application Profile",permalink:"/km-docusaurus-test/r/Character_Limits_in_Application_Profile"}},l={},c=[],s={toc:c};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You must create an application profile before you can submit a scan to Veracode."),(0,r.kt)("p",null,"You can also create an application profile with the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/r_applications_create"},"Applications API"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"}," If a third party submits the scans for your organization, see ",(0,r.kt)("a",{href:"https://docs.veracode.com/r/request_profile_cots"},"Requesting a Third-Party Application Scan")," for instructions on creating an application.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Before you begin:")),(0,r.kt)("p",null,"You must have the Creator or Security Lead ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_role_permissions"},"role"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"To complete this task:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the Veracode Platform, select ",(0,r.kt)("strong",{parentName:"p"},"My Portfolio")," ",">"," ",(0,r.kt)("strong",{parentName:"p"},"Applications"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Add New Application"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter the application name.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Optionally, enter a description.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the business criticality of this application to your organization."),(0,r.kt)("p",{parentName:"li"},"The business criticality determines the default ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/policy_understand"},"policy")," for the application. You can change the business criticality later, if necessary, by ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/t_edit_application_profile"},"editing the profile"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select a policy from the dropdown menu if you do not want to use the default policy.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the business unit that manages this application."),(0,r.kt)("p",{parentName:"li"},"If the business unit does not yet exist on the menu, an ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/t_add_business_unit"},"Administrator must add it"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you belong to any teams, click ",(0,r.kt)("strong",{parentName:"p"},"Edit")," below the list of teams to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Assign_an_Application_to_Teams"},"specify which teams can access the application"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter the name and email address of the business owner."),(0,r.kt)("p",{parentName:"li"},"The business owner is the person responsible for managing the application and who receives all email ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_email_notifications"},"notifications")," about the application.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select your application settings. The available settings vary depending on your ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_role_permissions"},"role"),", account settings, and Veracode subscription."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For Static Scan Dependencies, select whether you can select dependent modules as top-level modules when ",(0,r.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/c_request_modules_scan"},"configuring a static scan"),"."),(0,r.kt)("li",{parentName:"ul"},"For Software Composition Analysis, select whether to enable Veracode Software Composition Analysis scans of this application."),(0,r.kt)("li",{parentName:"ul"},"For Next-Day Consultations, select whether you can schedule ",(0,r.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/t_next_day_consultation"},"next-day consultation calls")," with Veracode for this application."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you want to use tags to organize the application profile, enter comma-separated values in the Tags field.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you want to set a custom name for the application in the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_about_archer"},"Archer data feed"),", enter an Archer application name."),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This field is only available to Security Leads."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter values for up to 25 custom fields to add any other metadata on which you want to track or analyze this application.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Submit"),"."))))}m.isMDXComponent=!0}}]);