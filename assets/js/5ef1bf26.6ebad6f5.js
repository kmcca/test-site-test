"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[85087],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>p});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function A(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,s=A(e,["components","mdxType","originalType","parentName"]),u=c(r),p=n,g=u["".concat(l,".").concat(p)]||u[p]||m[p]||o;return r?a.createElement(g,i(i({ref:t},s),{},{components:r})):a.createElement(g,i({ref:t},s))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var A={};for(var l in t)hasOwnProperty.call(t,l)&&(A[l]=t[l]);A.originalType=e,A.mdxType="string"==typeof e?e:n,i[1]=A;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5672:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>A,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={title:"Perform Multiple Changes from the Triage Flaws Page",slug:"/r/Perform_Multiple_Changes_from_the_Triage_Flaws_Page"},i=void 0,A={unversionedId:"guides/findings/improve/improve_mitigation/perform_multiple_changes_triage",id:"guides/findings/improve/improve_mitigation/perform_multiple_changes_triage",title:"Perform Multiple Changes from the Triage Flaws Page",description:"You can change more than one flaw at once from the Triage Flaws page.",source:"@site/docs/guides/11_findings/07_improve/01_improve_mitigation/09_perform_multiple_changes_triage.md",sourceDirName:"guides/11_findings/07_improve/01_improve_mitigation",slug:"/r/Perform_Multiple_Changes_from_the_Triage_Flaws_Page",permalink:"/km-docusaurus-test/r/Perform_Multiple_Changes_from_the_Triage_Flaws_Page",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Perform Multiple Changes from the Triage Flaws Page",slug:"/r/Perform_Multiple_Changes_from_the_Triage_Flaws_Page"},sidebar:"tutorialSidebar",previous:{title:"Managing Mitigations for Several Flaws at the Same Time",permalink:"/km-docusaurus-test/r/Managing_Mitigations_for_Several_Flaws_at_the_Same_Time"},next:{title:"Perform Multiple Changes from the Mitigated Flaws Page",permalink:"/km-docusaurus-test/r/Perform_Multiple_Changes_from_the_Mitigated_Flaws_Page"}},l={},c=[],s={toc:c};function m(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"You can change more than one flaw at once from the Triage Flaws page."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"To complete this task:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/improve_search"},"Search")," for the flaws you want to change."),(0,n.kt)("li",{parentName:"ol"},"Check out the flaws, either one at a time or by using the checkout button ",(0,n.kt)("img",{src:r(53725).Z,width:"16",height:"16"})," in the header row to check them all out with one click."),(0,n.kt)("li",{parentName:"ol"},"From ",(0,n.kt)("strong",{parentName:"li"},"Select Action")," dropdown menu at the top of the pane, select the action to perform on the selected flaws."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Go"),". Veracode confirms the number of flaws you are changing and prompts you for a description of the change."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Continue"),". The Veracode Platform applies the change to the checked-out flaws."),(0,n.kt)("li",{parentName:"ol"},"Clear the flaws one-by-one to check in all files, or use the check-in button ",(0,n.kt)("img",{src:r(70435).Z,width:"16",height:"16"})," in the header row to check in all files with one click."),(0,n.kt)("li",{parentName:"ol"},"To perform a multiple change, select the flaws to change and select an action from the ",(0,n.kt)("strong",{parentName:"li"},"Select Action")," dropdown menu. You must provide a comment to explain the multiple change.")))}m.isMDXComponent=!0},70435:(e,t,r)=>{r.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH3AQMDRgSbwQVzgAAAAd0RVh0QXV0aG9yAKmuzEgAAAAMdEVYdERlc2NyaXB0aW9uABMJISMAAAAKdEVYdENvcHlyaWdodACsD8w6AAAADnRFWHRDcmVhdGlvbiB0aW1lADX3DwkAAAAJdEVYdFNvZnR3YXJlAF1w/zoAAAALdEVYdERpc2NsYWltZXIAt8C0jwAAAAh0RVh0V2FybmluZwDAG+aHAAAAB3RFWHRTb3VyY2UA9f+D6wAAAAh0RVh0Q29tbWVudAD2zJa/AAAABnRFWHRUaXRsZQCo7tInAAABsElEQVQokZVSQUtUURg959znME2GPiQaJnWcdiMNGMOgA7VLpkWNP2CglbtoqxK5CdFV0IQY1DC0EAS3ESQFtoyhlpHDpAu1hdoTQVwoKC3unfeSNnkXl8vHPec753wf13dPg4ND/N/p6b7iBQeHlen5TLILAAiC0YMk7AWSre1g8dkjD0Am2bXw+K6tSiL1Zb8h6c6128YYuWMqM8sAvLAdSVKkVvc+P2++IDGJiXu9JUtBCmAEsCQkV3Y+vV5/c3R6BKC69vJMZ2PpMinJkAAgAKSl58rOx9pGPTjZtyy/j4OFtVfvtt6TsnYcwIonTb4n35/oe5Kb8mO+H/Onh56mO9OFqwVLZ1k8m4lkJKUSqbn8bGfscq1VJ1DufzB6fdSP+w7ANoCgMWZp9buRHpZuSbJBxjvil2KJtx++kRy/P8zItEuTdNaV7c62QyPbHv/uAM/zJNGZYbVYNcaESiiEJrxwXqK+Nn+xHZkoO+3Gj61iLi39M4dCtlfGahAIByCLuYGRwQH7O/JA6mYmmbuRcmbIUJLlPhfrz+2gMrPstuzc8iGqAM3NXQC86Hr/AZReXNhu0g9CAAAAAElFTkSuQmCC"},53725:(e,t,r)=>{r.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH2wcdEwcI+4QWwgAAAAd0RVh0QXV0aG9yAKmuzEgAAAAMdEVYdERlc2NyaXB0aW9uABMJISMAAAAKdEVYdENvcHlyaWdodACsD8w6AAAADnRFWHRDcmVhdGlvbiB0aW1lADX3DwkAAAAJdEVYdFNvZnR3YXJlAF1w/zoAAAALdEVYdERpc2NsYWltZXIAt8C0jwAAAAh0RVh0V2FybmluZwDAG+aHAAAAB3RFWHRTb3VyY2UA9f+D6wAAAAh0RVh0Q29tbWVudAD2zJa/AAAABnRFWHRUaXRsZQCo7tInAAABAElEQVR4nJVSv2uTURQ957zPQIeCP9IILY3UQaijJf2qRaeCXToU6V+hixQcHTqJg47VWDs4WyEtosVdsBTq1FJKUyqkdekgSfgMmFyH+xINuHiXx7v33XvOueex0+ngfyIBULy3NDiQiwn+ffZd6s3W8drjBMDgQG5jaR4ASUmSDhqHlK6fHw8hKEaYflAGkJhZnEJKIiWFxa+PQPs0s+kNngRhZom/JxlCICkFSSAA9sY7MAEDBBiIXrZSWz/9+d0xT7KTt8drXUoCALPEa556f/phpbr6rlZp/moCeLi1eNY6OxdyC1cXyLgAuQYySGF25O7ExYmjxlHb2m1rH9arpaHJgHxMJAAAALNJREFUuStzJL3BYPKlSdrcrr75uPu09CTNTxIkOFWYen7z2ev1nY3Pe5IAwiJCVx8l6cX0cjqUpoV05c4rkiB7CH80eAMYnSjffikpLhqg6KINFn0IIUjc3q8tV7ZIwueCJL/sfhsbzpO+JSTuPMkb10akQJIUQCmSGRvOl8aLTsSAxBARRgsXipcvOZGu69F7dzY2wFBvtm7dL4O9v9b/Dbvxo5HBjFmWAe76P6K/QMB+Aymqh94wmhZLAAAAAElFTkSuQmCC"}}]);