"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53779],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),g=a,d=m["".concat(l,".").concat(g)]||m[g]||p[g]||s;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<s;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},44773:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const s={title:"Unignore an Issue in SCA",slug:"/r/Unignore_an_Issue_in_SCA"},o=void 0,i={unversionedId:"guides/sca/using_agent_based_scans/issue_management/unignore_issue_sca",id:"guides/sca/using_agent_based_scans/issue_management/unignore_issue_sca",title:"Unignore an Issue in SCA",description:"If you mistakenly ignored an issue or decide that an issue should now be tracked, you can unignore it.",source:"@site/docs/guides/07_sca/04_using_agent_based_scans/19_issue_management/03_unignore_issue_sca.md",sourceDirName:"guides/07_sca/04_using_agent_based_scans/19_issue_management",slug:"/r/Unignore_an_Issue_in_SCA",permalink:"/km-docusaurus-test/r/Unignore_an_Issue_in_SCA",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Unignore an Issue in SCA",slug:"/r/Unignore_an_Issue_in_SCA"},sidebar:"tutorialSidebar",previous:{title:"Ignore an Issue in SCA",permalink:"/km-docusaurus-test/r/Ignored_Issues"},next:{title:"Add Comment to Issue in SCA",permalink:"/km-docusaurus-test/r/Add_Comment_to_Issue_in_SCA"}},l={},u=[],c={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If you mistakenly ignored an issue or decide that an issue should now be tracked, you can unignore it."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"To complete this task:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the Veracode Platform, select ",(0,a.kt)("strong",{parentName:"li"},"Scans & Analysis")," > ",(0,a.kt)("strong",{parentName:"li"},"Software Composition Analysis"),"."),(0,a.kt)("li",{parentName:"ol"},"Click the ",(0,a.kt)("strong",{parentName:"li"},"Agent-Based Scan")," tab."),(0,a.kt)("li",{parentName:"ol"},"Select a workspace."),(0,a.kt)("li",{parentName:"ol"},"If you want to view issues for an individual project, click ",(0,a.kt)("strong",{parentName:"li"},"Projects")," and select a project."),(0,a.kt)("li",{parentName:"ol"},"Under the Issues tab or under to the Issues List heading, select ",(0,a.kt)("strong",{parentName:"li"},"Ignored")," to view the list of ignored issues."),(0,a.kt)("li",{parentName:"ol"},"Select the ignored issues."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Actions")," ",">"," ",(0,a.kt)("strong",{parentName:"li"},"Unignore"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Confirm unignore issue"),"."),(0,a.kt)("li",{parentName:"ol"},"Enter a comment explaining why you are ignoring the issues."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Finish"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Results:")),(0,a.kt)("p",null,"Anyone who has access to the workspace can view the comment."))}p.isMDXComponent=!0}}]);