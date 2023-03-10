"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[56358],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>A});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),A=a,g=u["".concat(s,".").concat(A)]||u[A]||m[A]||i;return r?n.createElement(g,o(o({ref:t},p),{},{components:r})):n.createElement(g,o({ref:t},p))}));function A(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},89544:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={title:"Perform Multiple Changes from the Mitigated Flaws Page",slug:"/r/Perform_Multiple_Changes_from_the_Mitigated_Flaws_Page"},o=void 0,l={unversionedId:"guides/findings/improve/improve_mitigation/perform_multiples_changes_mitigated_flaws",id:"guides/findings/improve/improve_mitigation/perform_multiples_changes_mitigated_flaws",title:"Perform Multiple Changes from the Mitigated Flaws Page",description:"You can accept, reject, or comment on several flaws from the Mitigated Flaws Page.",source:"@site/docs/guides/11_findings/07_improve/01_improve_mitigation/10_perform_multiples_changes_mitigated_flaws.md",sourceDirName:"guides/11_findings/07_improve/01_improve_mitigation",slug:"/r/Perform_Multiple_Changes_from_the_Mitigated_Flaws_Page",permalink:"/km-docusaurus-test/r/Perform_Multiple_Changes_from_the_Mitigated_Flaws_Page",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Perform Multiple Changes from the Mitigated Flaws Page",slug:"/r/Perform_Multiple_Changes_from_the_Mitigated_Flaws_Page"},sidebar:"tutorialSidebar",previous:{title:"Perform Multiple Changes from the Triage Flaws Page",permalink:"/km-docusaurus-test/r/Perform_Multiple_Changes_from_the_Triage_Flaws_Page"},next:{title:"View Mitigated Flaws in Reports",permalink:"/km-docusaurus-test/r/View_Mitigated_Flaws_in_Reports"}},s={},c=[],p={toc:c};function m(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can accept, reject, or comment on several flaws from the Mitigated Flaws Page."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"To complete this task:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the Mitigated Flaws page of the application, filter the list of flaws to find the ones you want to change."),(0,a.kt)("li",{parentName:"ol"},"Check out the flaws, either one at a time using the checkbox next to the Id column, or by using the checkout button ",(0,a.kt)("img",{src:r(53725).Z,width:"16",height:"16"})," in the header row to check them all out with one click."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Accept"),", ",(0,a.kt)("strong",{parentName:"li"},"Reject"),", or ",(0,a.kt)("strong",{parentName:"li"},"Comment"),"."),(0,a.kt)("li",{parentName:"ol"},"Enter your comments on the action in the Change Multiple Flaws window, then click ",(0,a.kt)("strong",{parentName:"li"},"Continue"),". The screen refreshes, updates the number of accepted and rejected flaws at the top of the page, and the flaws are checked back in.")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"}," A user with the Mitigation Approver role who has access to your application can also check back in a flaw that you have checked out.")),(0,a.kt)("p",null,"You can accept multiple flaws by checking them out and clicking ",(0,a.kt)("strong",{parentName:"p"},"Accept"),"."))}m.isMDXComponent=!0},53725:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH2wcdEwcI+4QWwgAAAAd0RVh0QXV0aG9yAKmuzEgAAAAMdEVYdERlc2NyaXB0aW9uABMJISMAAAAKdEVYdENvcHlyaWdodACsD8w6AAAADnRFWHRDcmVhdGlvbiB0aW1lADX3DwkAAAAJdEVYdFNvZnR3YXJlAF1w/zoAAAALdEVYdERpc2NsYWltZXIAt8C0jwAAAAh0RVh0V2FybmluZwDAG+aHAAAAB3RFWHRTb3VyY2UA9f+D6wAAAAh0RVh0Q29tbWVudAD2zJa/AAAABnRFWHRUaXRsZQCo7tInAAABAElEQVR4nJVSv2uTURQ957zPQIeCP9IILY3UQaijJf2qRaeCXToU6V+hixQcHTqJg47VWDs4WyEtosVdsBTq1FJKUyqkdekgSfgMmFyH+xINuHiXx7v33XvOueex0+ngfyIBULy3NDiQiwn+ffZd6s3W8drjBMDgQG5jaR4ASUmSDhqHlK6fHw8hKEaYflAGkJhZnEJKIiWFxa+PQPs0s+kNngRhZom/JxlCICkFSSAA9sY7MAEDBBiIXrZSWz/9+d0xT7KTt8drXUoCALPEa556f/phpbr6rlZp/moCeLi1eNY6OxdyC1cXyLgAuQYySGF25O7ExYmjxlHb2m1rH9arpaHJgHxMJAAAALNJREFUuStzJL3BYPKlSdrcrr75uPu09CTNTxIkOFWYen7z2ev1nY3Pe5IAwiJCVx8l6cX0cjqUpoV05c4rkiB7CH80eAMYnSjffikpLhqg6KINFn0IIUjc3q8tV7ZIwueCJL/sfhsbzpO+JSTuPMkb10akQJIUQCmSGRvOl8aLTsSAxBARRgsXipcvOZGu69F7dzY2wFBvtm7dL4O9v9b/Dbvxo5HBjFmWAe76P6K/QMB+Aymqh94wmhZLAAAAAElFTkSuQmCC"}}]);