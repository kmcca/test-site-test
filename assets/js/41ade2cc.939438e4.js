"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[38732],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(a),d=n,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return a?r.createElement(h,o(o({ref:t},p),{},{components:a})):r.createElement(h,o({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},29323:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const i={title:"View the User Activity Log",slug:"/r/t_activity_log"},o=void 0,l={unversionedId:"guides/admin/managing_users/view_activity_log",id:"guides/admin/managing_users/view_activity_log",title:"View the User Activity Log",description:"As an administrator, you can view a log of user activity for the users that you manage.",source:"@site/docs/guides/14_admin/02_managing_users/08_view_activity_log.md",sourceDirName:"guides/14_admin/02_managing_users",slug:"/r/t_activity_log",permalink:"/km-docusaurus-test/r/t_activity_log",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"View the User Activity Log",slug:"/r/t_activity_log"},sidebar:"tutorialSidebar",previous:{title:"Request User Email Verification in the Veracode Platform",permalink:"/km-docusaurus-test/r/Request_User_Email_Verification"},next:{title:"Restrict a User to an IP Range",permalink:"/km-docusaurus-test/r/admin_ip"}},s={},c=[],p={toc:c};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"As an administrator, you can view a log of user activity for the users that you manage."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"}," The activity log refreshes every four hours. Depending on when you generate the activity log, you may not retrieve the most recent login attempt information.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Before you begin:")),(0,n.kt)("p",null,"You must have the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_role_permissions"},"Administrator role"),"."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"}," The activity log does not display any user activity information if the user has never logged in to the Veracode Platform.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"To complete this task:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On the Administration page, click the ",(0,n.kt)("strong",{parentName:"p"},"Users")," tab to view activity information for all users that you manage."),(0,n.kt)("p",{parentName:"li"},"The All Users page shows this information:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"User: first and last name associated with the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_about_veracode_accounts"},"user account"),". Click the pencil icon to edit the user information.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Last Login: date and time when the user last logged in to the Veracode Platform"),(0,n.kt)("p",{parentName:"li"},"  If the user has not logged in to the Veracode Platform, the All Users page shows one of these statuses:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Active: the user clicked the activation link sent by the administrator, but has not logged in to the Veracode Platform yet."),(0,n.kt)("li",{parentName:"ul"},"Failed: the user could not sign in to the user account."),(0,n.kt)("li",{parentName:"ul"},"Locked: the most recent attempts by the user to log in failed and Veracode temporarily locked the user account."),(0,n.kt)("li",{parentName:"ul"},"Never: the user has never attempted to log in."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Email: email address of the user")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Login Enabled: checkbox that controls whether login is enabled for the user")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click the name of a user in the User column."),(0,n.kt)("p",{parentName:"li"},"The Login Settings page opens for the selected user.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"View Activity Log"),"."),(0,n.kt)("p",{parentName:"li"},"The Activity Log page opens.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Generate CSV"),"."),(0,n.kt)("p",{parentName:"li"},"Veracode creates a CSV file.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"When the CSV file is available, click ",(0,n.kt)("strong",{parentName:"p"},"Download CSV"),"."),(0,n.kt)("p",{parentName:"li"},"Specify a location on your computer to save the CSV download."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Results:")),(0,n.kt)("p",null,"The activity log CSV file shows this information:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"User: first and last name associated with the user account"),(0,n.kt)("li",{parentName:"ul"},"Details: login activity for the user, including the IP address where the user attempted the login"),(0,n.kt)("li",{parentName:"ul"},"Activity: login status of the user account"),(0,n.kt)("li",{parentName:"ul"},"Date/Time: date and time in EST format")))}u.isMDXComponent=!0}}]);