"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[46056],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(h,l(l({ref:e},u),{},{components:n})):a.createElement(h,l({ref:e},u))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},46666:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"Editing Security Labs Lessons",slug:"/r/Editing_Security_Labs_Lessons"},l=void 0,o={unversionedId:"guides/training/security_labs/customize/edit_lab_options",id:"guides/training/security_labs/customize/edit_lab_options",title:"Editing Security Labs Lessons",description:"You can choose from Overview, Setup, and Content on the Edit lesson page in Security Labs. These tables define the features in each tab:",source:"@site/docs/guides/13_training/01_security_labs/03_customize/06_edit_lab_options.md",sourceDirName:"guides/13_training/01_security_labs/03_customize",slug:"/r/Editing_Security_Labs_Lessons",permalink:"/km-docusaurus-test/r/Editing_Security_Labs_Lessons",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Editing Security Labs Lessons",slug:"/r/Editing_Security_Labs_Lessons"},sidebar:"tutorialSidebar",previous:{title:"Edit Security Labs Lessons",permalink:"/km-docusaurus-test/r/Edit_Security_Labs"},next:{title:"Choosing Display Types in Security Labs Lessons",permalink:"/km-docusaurus-test/r/Choosing_Display_Types_in_Security_Labs_Lessons"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Setup",id:"setup",level:2},{value:"Content",id:"content",level:2}],u={toc:p};function d(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can choose from ",(0,r.kt)("strong",{parentName:"p"},"Overview"),", ",(0,r.kt)("strong",{parentName:"p"},"Setup"),", and ",(0,r.kt)("strong",{parentName:"p"},"Content")," on the Edit lesson page in Security Labs. These tables define the features in each tab:"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Feature"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Stack"),(0,r.kt)("td",{parentName:"tr",align:null},"The language of your lesson.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Slug"),(0,r.kt)("td",{parentName:"tr",align:null},"The last subdirectory of the URL for your lesson. For example, adding ",(0,r.kt)("inlineCode",{parentName:"td"},"node-sqli")," means the URL of your lesson is ",(0,r.kt)("inlineCode",{parentName:"td"},"http://securitylabs.veracode.com/lesson/node-sqli"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Display type"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.veracode.com/r/Choosing_Display_Types_in_Security_Labs_Lessons"},"More information"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Allow others to view this lesson?"),(0,r.kt)("td",{parentName:"tr",align:null},"Publish or unpublish a lesson. Any team members can still access an unpublished lesson if they have a direct link to the lab URL, but you cannot assign the lesson to users until you publish.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Prevent future edits?"),(0,r.kt)("td",{parentName:"tr",align:null},"Toggle a lesson to ",(0,r.kt)("inlineCode",{parentName:"td"},"Locked")," to prevent further changes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Topic"),(0,r.kt)("td",{parentName:"tr",align:null},"Enter a value to appear in place of the words ",(0,r.kt)("inlineCode",{parentName:"td"},"this topic")," for the modal shown at the beginning and end of the lesson which asks users to ",(0,r.kt)("inlineCode",{parentName:"td"},"Rate your familiarity with this topic."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Points"),(0,r.kt)("td",{parentName:"tr",align:null},"Optionally, assign points for the difficulty of the lab. ",(0,r.kt)("inlineCode",{parentName:"td"},"10")," points is most common for lessons with average difficulty. For more difficult lessons, increase the points a user can earn to ",(0,r.kt)("inlineCode",{parentName:"td"},"20")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"30"),".")))),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Feature"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Is this a lesson or a challenge?"),(0,r.kt)("td",{parentName:"tr",align:null},"Choose ",(0,r.kt)("strong",{parentName:"td"},"Challenge")," or ",(0,r.kt)("strong",{parentName:"td"},"Lesson"),". Challenge labs are meant to be more difficult practice that does not provide step-by-step guidance to users. They list as ",(0,r.kt)("inlineCode",{parentName:"td"},"{Title} Challenge")," and provide a warning to your users that they should be familiar with the topic.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Servers"),(0,r.kt)("td",{parentName:"tr",align:null},"A Docker image based on the applications identified by a language and a security topic.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Additional server setup commands"),(0,r.kt)("td",{parentName:"tr",align:null},"Optionally include additional setup code. This code runs in Bash shell as the root user after a user selects the lab.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Expand Paths"),(0,r.kt)("td",{parentName:"tr",align:null},"Automatically expand any folders in the GUI editor.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Editor Hints"),(0,r.kt)("td",{parentName:"tr",align:null},"Place a red dot next to the name of any file or folder specified in the GUI editor.")))),(0,r.kt)("h2",{id:"content"},"Content"),(0,r.kt)("p",null,"You can write all content in Markdown."),(0,r.kt)("p",null,"Use the escape sequence ",(0,r.kt)("inlineCode",{parentName:"p"},"{$VIRTUAL_HOST}")," in any lesson text to display the current lab URL of the user. For example,  ",(0,r.kt)("inlineCode",{parentName:"p"},"{$VIRTUAL_HOST}/api")," displays as ",(0,r.kt)("inlineCode",{parentName:"p"},"https://xxxxxx.vsl.dev/api"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Feature"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Conclusion"),(0,r.kt)("td",{parentName:"tr",align:null},'Shows as a final step of instruction text in place of the phrase "You have completed this lab!".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Steps"),(0,r.kt)("td",{parentName:"tr",align:null},"Click to add steps.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Summary"),(0,r.kt)("td",{parentName:"tr",align:null},"Summarize the steps the user needs to take.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Hint"),(0,r.kt)("td",{parentName:"tr",align:null},"Displays if the user has been on a step for a long time, or tries to click ",(0,r.kt)("strong",{parentName:"td"},"Next")," before completing a step.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Solution"),(0,r.kt)("td",{parentName:"tr",align:null},"Provide a solution for the step that is visible only to administrators.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Checks"),(0,r.kt)("td",{parentName:"tr",align:null},"Choose to run checks every few seconds on a step to determine if the user can progress to the next step. The check itself is Bash code run as the root user on the container, and the result is the exact terminal output expected from running the check.")))))}d.isMDXComponent=!0}}]);