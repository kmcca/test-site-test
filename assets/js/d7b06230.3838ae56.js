"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[76011],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>y});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=a.createContext({}),c=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},u=function(t){var e=c(t.components);return a.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,l=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),d=c(n),y=r,m=d["".concat(l,".").concat(y)]||d[y]||p[y]||i;return n?a.createElement(m,s(s({ref:e},u),{},{components:n})):a.createElement(m,s({ref:e},u))}));function y(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o.mdxType="string"==typeof t?t:r,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},94047:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={title:"About Dynamic Analysis Notifications",slug:"/r/Dynamic_Analysis_Notifications"},s=void 0,o={unversionedId:"guides/dynamic_analysis/about_da_status/about_da_notifications",id:"guides/dynamic_analysis/about_da_status/about_da_notifications",title:"About Dynamic Analysis Notifications",description:"Veracode sends email notifications at significant points during the Dynamic Analysis lifecycle.",source:"@site/docs/guides/10_dynamic_analysis/05_about_da_status/01_about_da_notifications.md",sourceDirName:"guides/10_dynamic_analysis/05_about_da_status",slug:"/r/Dynamic_Analysis_Notifications",permalink:"/km-docusaurus-test/r/Dynamic_Analysis_Notifications",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"About Dynamic Analysis Notifications",slug:"/r/Dynamic_Analysis_Notifications"},sidebar:"tutorialSidebar",previous:{title:"About Dynamic Analysis Statuses",permalink:"/km-docusaurus-test/r/c_was_statuses"},next:{title:"Configuring WAF Rules for Dynamic Analysis",permalink:"/km-docusaurus-test/r/Using_WAF"}},l={},c=[],u={toc:c};function p(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Veracode sends email notifications at significant points during the Dynamic Analysis lifecycle."),(0,r.kt)("p",null,"This table lists the current Dynamic Analysis prescan notifications. Veracode sends the notifications to either the person who created the Dynamic Analysis scans or the last person who modified a schedule."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Event"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"The prescan of a Dynamic Analysis succeeded."),(0,r.kt)("td",{parentName:"tr",align:null},"All URL configurations in your Veracode Dynamic Analysis request passed prescan verification.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"The prescan of a Dynamic Analysis failed."),(0,r.kt)("td",{parentName:"tr",align:null},"The target URL configurations in your Veracode Dynamic Analysis request failed during prescan verification.")))),(0,r.kt)("p",null,"This table lists the current post-scan results notification of full Dynamic Analysis scans that Veracode sends to the security leads in your organization. Veracode also sends these notifications to specified internal Veracode users, such as the solution architect, customer success manager, and sales associate."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Event"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"The results of a Dynamic Analysis are published."),(0,r.kt)("td",{parentName:"tr",align:null},"The results of a Dynamic Analysis are published and now available.")))))}p.isMDXComponent=!0}}]);