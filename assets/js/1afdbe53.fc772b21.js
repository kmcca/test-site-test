"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[21930],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>d});var i=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,i,a=function(t,e){if(null==t)return{};var n,i,a={},o=Object.keys(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=i.createContext({}),p=function(t){var e=i.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},c=function(t){var e=p(t.components);return i.createElement(l.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},u=i.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),u=p(n),d=a,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?i.createElement(h,r(r({ref:e},c),{},{components:n})):i.createElement(h,r({ref:e},c))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:a,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},11539:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const o={title:"Proposing a Mitigation with the Annotations API",slug:"/r/c_annotations_propose_mitigation_rest"},r=void 0,s={unversionedId:"guides/apis/rest_apis/annotations_rest_api/annotations_api_propose_mitigation",id:"guides/apis/rest_apis/annotations_rest_api/annotations_api_propose_mitigation",title:"Proposing a Mitigation with the Annotations API",description:"Use this command to propose a mitigation, based on an environmental control in the network, with a comment, for an application with two findings:",source:"@site/docs/guides/15_apis/04_rest_apis/01_annotations_rest_api/02_annotations_api_propose_mitigation.md",sourceDirName:"guides/15_apis/04_rest_apis/01_annotations_rest_api",slug:"/r/c_annotations_propose_mitigation_rest",permalink:"/km-docusaurus-test/r/c_annotations_propose_mitigation_rest",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Proposing a Mitigation with the Annotations API",slug:"/r/c_annotations_propose_mitigation_rest"},sidebar:"tutorialSidebar",previous:{title:"Commenting on Findings with the Annotations API",permalink:"/km-docusaurus-test/r/c_annotations_add_comment_rest"},next:{title:"Approving a Mitigation with the Annotations API",permalink:"/km-docusaurus-test/r/c_annotations_approve_mitigation_rest"}},l={},p=[{value:"Proposing a Mitigation in TSRV Format",id:"proposing-a-mitigation-in-tsrv-format",level:2},{value:"Properties",id:"properties",level:2}],c={toc:p};function m(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Use this command to propose a mitigation, based on an environmental control in the network, with a comment, for an application with two findings:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'http --auth-type=veracode_hmac POST "https://api.veracode.com/appsec/v2/applications/{application_guid}/annotations" < input.json\n')),(0,a.kt)("p",null,"You can use the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_apps_intro"},"Applications API")," to get the GUID for an ",(0,a.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/r_applications_info"},"application"),"."),(0,a.kt)("p",null,"The API passes the JSON file that you populate with the necessary values as shown in this example payload:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "issue_list": "1,2",\n  "comment": "This is my comment",\n  "action": "NETENV"\n}\n')),(0,a.kt)("h2",{id:"proposing-a-mitigation-in-tsrv-format"},"Proposing a Mitigation in TSRV Format"),(0,a.kt)("p",null,"If you want to propose a mitigation with a comment in ",(0,a.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_review_TSRV"},"TSRV format"),": "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Provide each Technique, Specifics, Remaining Risk, and Verification component in the comment as a single string"),(0,a.kt)("li",{parentName:"ul"},"Separate each component with a carriage return and the line feed ",(0,a.kt)("inlineCode",{parentName:"li"},"\\r\\n"))),(0,a.kt)("p",null,"For example, for a mitigation proposal with these TSRV components:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Technique : M1 : Establish and maintain control over all of your inputs."),(0,a.kt)("li",{parentName:"ul"},"Specifics : We are using an encoder for our input."),(0,a.kt)("li",{parentName:"ul"},"Remaining Risk : None."),(0,a.kt)("li",{parentName:"ul"},"Verification : We must decline, for secret reasons.")),(0,a.kt)("p",null,"Add this value to the ",(0,a.kt)("inlineCode",{parentName:"p"},"comment")," property in your payload:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "issue_list": "1,2",\n  "comment": "\\rTechnique : M1 : Establish and maintain control over all of your inputs\\r\\nSpecifics : We are using an encoder for our input.\\r\\nRemaining Risk : None.\\r\\nVerification : We must decline, for secret reasons.",\n  "action": "NETENV"\n}\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"These comments are only examples. Veracode does not recommend offering any of these comments in your mitigations.")),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"issue_list")," ",(0,a.kt)("br",null)," ",(0,a.kt)("strong",{parentName:"td"},"Required")),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Comma-separated list of finding IDs. You can use the ",(0,a.kt)("a",{parentName:"td",href:"https://docs.veracode.com/r/c_findings_v2_intro"},"Findings API")," to get a list of finding IDs for an application.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"comment")," ",(0,a.kt)("br",null)," ",(0,a.kt)("strong",{parentName:"td"},"Required")),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Enter a brief comment about the findings for ",(0,a.kt)("inlineCode",{parentName:"td"},"issue_list"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"action")," ",(0,a.kt)("br",null)," ",(0,a.kt)("strong",{parentName:"td"},"Required")),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Enter one of these mitigation actions:",(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"APPDESIGN")," states that custom business logic within the body of the application has addressed the finding. An automated process may not be able to fully identify this business logic."),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"NETENV")," states that the network in which the application is running has provided an environmental control that has addressed the finding."),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"OSENV")," states that the operating system on which the application is running has provided an environmental control that has addressed the finding."),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"FP"),", which stands for false positive, states that Veracode has incorrectly identified a finding in your application. If you identify a finding as a potential false positive, Veracode does not exclude the potential false positive from your published report. Your organization can approve a potential false positive to exclude it from the published report. If your organization approves a finding as a false positive, your organization is accepting the risk that the finding might be valid."),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"LIBRARY")," states that the current team does not maintain the library containing the finding. You referred the vulnerability to the library maintainer."),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"ACCEPTRISK")," states that your business is willing to accept the risk associated with a finding. Your organization evaluated the potential risk and effort required to address the finding.")))))))}m.isMDXComponent=!0}}]);