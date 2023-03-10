"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[99565],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(a),m=i,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return a?n.createElement(h,s(s({ref:t},p),{},{components:a})):n.createElement(h,s({ref:t},p))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<r;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},80316:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=a(87462),i=(a(67294),a(3905));const r={title:"About Veracode Email Notifications",slug:"/r/c_email_notifications"},s=void 0,o={unversionedId:"guides/admin/manage_notifications/about_email_notifications",id:"guides/admin/manage_notifications/about_email_notifications",title:"About Veracode Email Notifications",description:"Veracode sends email notifications about your scans and other important information.",source:"@site/docs/guides/14_admin/06_manage_notifications/01_about_email_notifications.md",sourceDirName:"guides/14_admin/06_manage_notifications",slug:"/r/c_email_notifications",permalink:"/km-docusaurus-test/r/c_email_notifications",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"About Veracode Email Notifications",slug:"/r/c_email_notifications"},sidebar:"tutorialSidebar",previous:{title:"Managing Notifications",permalink:"/km-docusaurus-test/r/t_configure_emails"},next:{title:"Optional Policy Notifications",permalink:"/km-docusaurus-test/r/c_optional_policy_emails"}},l={},c=[{value:"Account Emails",id:"account-emails",level:2},{value:"Discovery Scanning Emails",id:"discovery-scanning-emails",level:2},{value:"Static Analysis Emails",id:"static-analysis-emails",level:2},{value:"Dynamic Analysis Emails",id:"dynamic-analysis-emails",level:2},{value:"Policy Emails",id:"policy-emails",level:2},{value:"Report Emails",id:"report-emails",level:2},{value:"Third-Party Application Security Testing Emails",id:"third-party-application-security-testing-emails",level:2},{value:"eLearning Emails",id:"elearning-emails",level:2}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Veracode sends email notifications about your scans and other important information."),(0,i.kt)("h2",{id:"account-emails"},"Account Emails"),(0,i.kt)("p",null,"Veracode sends email notifications when the following scenarios occur:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"New User Provisioned")),(0,i.kt)("p",null,"Veracode sends you an email when your account is provisioned."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Password Changed")),(0,i.kt)("p",null,"Veracode sends you an email any time you change your password. New users are required to change their password when they log in for the first time."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Forgot Password")),(0,i.kt)("p",null,"Veracode sends you an email when you click the forgot password link to help reset your password."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Email Address Changed")),(0,i.kt)("p",null,"Veracode sends you an email when you change your email address associated with your account."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"API Credentials Expiring")),(0,i.kt)("p",null,"Veracode sends you an email one week before your ",(0,i.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_api_credentials3"},"Veracode API credentials")," expire and another email one day before they expire. The emails explain how to generate new credentials."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"User Account Locked")),(0,i.kt)("p",null,"Veracode sends an email to alert you that you are temporarily locked out of your account because of too many incorrect password attempts."),(0,i.kt)("h2",{id:"discovery-scanning-emails"},"Discovery Scanning Emails"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Discovery Scan is Complete")),(0,i.kt)("p",null,"Veracode sends an email stating discovery results import is complete and how to review the results."),(0,i.kt)("h2",{id:"static-analysis-emails"},"Static Analysis Emails"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Static Scan Submitted")),(0,i.kt)("p",null,"Veracode sends an email to inform users that the static scan is submitted successfully, and reminding them that you still have to submit the full scan after the prescan is successful."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Static Scan Complete")),(0,i.kt)("p",null,"Veracode sends an email stating that the results from the scan are available. The email is sent to the users in the team assigned to an application who have one or more of the following roles: Executive, Reviewer, Security Lead, Archer Reports, Results API."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Scan Results Delayed")),(0,i.kt)("p",null,"Veracode sends an email to the team assigned to the application if Veracode encounters a technical issue with the scan."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Partial Scan Results Available")),(0,i.kt)("p",null,"Veracode sends an email to the submitter of the scan stating that partial results for the scan are available and they can begin viewing a portion of their results."),(0,i.kt)("h2",{id:"dynamic-analysis-emails"},"Dynamic Analysis Emails"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Prescan Successful")),(0,i.kt)("p",null,"Veracode sends an email to the creator of the Dynamic Analysis scans or the last person who modified the schedule stating that the prescan passed verification."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Prescan Failed")),(0,i.kt)("p",null,"Veracode sends an email to the creator of the Dynamic Analysis scans or the last person who modified the schedule stating that the target URL configurations in the Dynamic Analysis request failed during prescan verification."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Dynamic Analysis Failed")),(0,i.kt)("p",null,"Veracode sends an email to the creator of the Dynamic Analysis scans or the last person who modified the schedule stating that the Dynamic Analysis has failed."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Results Published")),(0,i.kt)("p",null,"Veracode sends an email to the creator of the dynamic analysis scans or the last person who modified the schedule stating that the results of theDynamic Analysis are published and now available."),(0,i.kt)("h2",{id:"policy-emails"},"Policy Emails"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Application Policy Is Changed")),(0,i.kt)("p",null,"Veracode sends an email to all ",(0,i.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_about_veracode_accounts"},"user accounts")," associated with the account when the application policy is changed."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Grace Period Expires")),(0,i.kt)("p",null,"Veracode sends an email to all user accounts associated with the account when the grace period is about to expire and there are flaws to be fixed."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"New Scan for Policy Due")),(0,i.kt)("p",null,"Veracode sends an email to all user accounts associated with the application affected, including the business owner to remind users to perform the specified scans by a certain date according to the policy requirements from your organization."),(0,i.kt)("h2",{id:"report-emails"},"Report Emails"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Shared Report Available")),(0,i.kt)("p",null,"Veracode sends an email to all accounts associated with the application to notify them that the results are available."),(0,i.kt)("h2",{id:"third-party-application-security-testing-emails"},"Third-Party Application Security Testing Emails"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Enterprise Requests Scan of Vendor Application")),(0,i.kt)("p",null,"Veracode sends an email to all users associated with the enterprise organization account, and the primary vendor contact stating that the enterprise requested a scan of their application."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Vendor Accepts Enterprise Request")),(0,i.kt)("p",null,"Veracode sends an email stating that the vendor has accepted the request to scan their application."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Vendor Submits Scan in Response to Enterprise Request")),(0,i.kt)("p",null,"Veracode sends an email stating that the vendor has submitted the scan for analysis."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Vendor Has Access to Results")),(0,i.kt)("p",null,"Veracode sends an email to the vendor owner of the application stating that scan results are available."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Scan Results Vendor Application Available to Enterprise")),(0,i.kt)("p",null,"Veracode sends an email to the vendor owner of the application stating that scan results are available for review before publishing them to the enterprise user."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Enterprise Completes Mitigation Review for Vendor")),(0,i.kt)("p",null,"Veracode sends an email stating the enterprise has completed its review of the mitigations and no additional mitigations are required."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Enterprise Requests Additional Mitigations from Vendor")),(0,i.kt)("p",null,"Veracode sends an email stating the enterprise has completed its review of the mitigations and additional mitigations are required."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Enterprise Requests Remediation Plan from Vendor")),(0,i.kt)("p",null,"Veracode sends an email stating the enterprise has completed its review of the mitigations and would like to discuss a remediation plan in preparation for a rescan."),(0,i.kt)("h2",{id:"elearning-emails"},"eLearning Emails"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Thank you for using Veracode. You are assigned the completion of {Curriculum_Name}")),(0,i.kt)("p",null,"Veracode sends an email to eLearning students informing them when they have assigned curriculum to complete."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Users who you manage have recently been assigned the following curriculum: {Curriculum_Name}")),(0,i.kt)("p",null,"Veracode sends an email to eLearning managers confirming that they have assigned specific curriculum to students on their team."))}u.isMDXComponent=!0}}]);