"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[40740],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=c(r),f=a,b=p["".concat(u,".").concat(f)]||p[f]||d[f]||o;return r?n.createElement(b,s(s({ref:t},l),{},{components:r})):n.createElement(b,s({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},91229:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={title:"Using Auto-Extend for Learner Courses",slug:"/r/c_about_auto_extend"},s=void 0,i={unversionedId:"guides/training/eLearning/elearningAdministrators/tracks/about_auto_extend",id:"guides/training/eLearning/elearningAdministrators/tracks/about_auto_extend",title:"Using Auto-Extend for Learner Courses",description:"By default, auto-extend enables when you add new learners and assign course tracks to them. When you enable auto-extend for a course track, you automatically assign that learner seat to that track when the current subscription period ends. As subscription end-dates approach, learners receive notifications when they log in to the Veracode Platform. If auto-extend is enabled, learner track assignments automatically extend into the subsequent subscription period.",source:"@site/docs/guides/13_training/02_eLearning/02_elearningAdministrators/05_tracks/03_about_auto_extend.md",sourceDirName:"guides/13_training/02_eLearning/02_elearningAdministrators/05_tracks",slug:"/r/c_about_auto_extend",permalink:"/km-docusaurus-test/r/c_about_auto_extend",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Using Auto-Extend for Learner Courses",slug:"/r/c_about_auto_extend"},sidebar:"tutorialSidebar",previous:{title:"Apply Actions to Multiple Learners",permalink:"/km-docusaurus-test/r/t_assign_track_bulk"},next:{title:"Auto-Extend Learner Courses",permalink:"/km-docusaurus-test/r/Auto_Extend_Learner_Courses"}},u={},c=[],l={toc:c};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"By default, auto-extend enables when you add new learners and assign course tracks to them. When you enable auto-extend for a course track, you automatically assign that learner seat to that track when the current subscription period ends. As subscription end-dates approach, learners receive notifications when they log in to the Veracode Platform. If auto-extend is enabled, learner track assignments automatically extend into the subsequent subscription period."),(0,a.kt)("p",null,"If you do not enable auto-extend and the subscription period ends, Veracode eLearning removes course track access for all existing learners until you reassign a track to each learner."),(0,a.kt)("p",null,"A problem occurs if an organization reduces the number of learner seats between the time one subscription period ends and the next period starts. The organization then has more learners in a track set to auto-extend than the number of seats purchased for that track in the new subscription. In this case, Veracode eLearning locks course tracks for all learners. The learners cannot access course content until you reduce the number of auto-extend learners to equal the available seat count."))}d.isMDXComponent=!0}}]);