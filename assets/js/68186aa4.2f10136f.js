"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[48603],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||s;return r?n.createElement(f,o(o({ref:t},l),{},{components:r})):n.createElement(f,o({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},34370:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const s={title:"switchtosaml",slug:"/r/r_switchtosaml"},o=void 0,i={unversionedId:"guides/apis/api_wrappers/wrappers_composite_actions/switchtosaml",id:"guides/apis/api_wrappers/wrappers_composite_actions/switchtosaml",title:"switchtosaml",description:"The switchtosaml composite action calls getuserlist.do. It searches users on the list whose issamluser parameter is not set to true and whose loginaccounttype parameter is not api. The action then changes the issamluser parameter to true for those users. The parameter customid or username is required.",source:"@site/docs/guides/15_apis/06_api_wrappers/06_wrappers_composite_actions/05_switchtosaml.md",sourceDirName:"guides/15_apis/06_api_wrappers/06_wrappers_composite_actions",slug:"/r/r_switchtosaml",permalink:"/km-docusaurus-test/r/r_switchtosaml",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"switchtosaml",slug:"/r/r_switchtosaml"},sidebar:"tutorialSidebar",previous:{title:"passfail",permalink:"/km-docusaurus-test/r/r_passfail"},next:{title:"Using the API Wrappers as a Library",permalink:"/km-docusaurus-test/r/c_using_wrappers_AS"}},p={},c=[],l={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"switchtosaml")," composite action calls ",(0,a.kt)("inlineCode",{parentName:"p"},"getuserlist.do"),". It searches users on the list whose ",(0,a.kt)("inlineCode",{parentName:"p"},"is_saml_user")," parameter is not set to true and whose ",(0,a.kt)("inlineCode",{parentName:"p"},"login_account_type")," parameter is not ",(0,a.kt)("inlineCode",{parentName:"p"},"api"),". The action then changes the ",(0,a.kt)("inlineCode",{parentName:"p"},"is_saml_user")," parameter to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," for those users. The parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"customid")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"username")," is required."))}u.isMDXComponent=!0}}]);