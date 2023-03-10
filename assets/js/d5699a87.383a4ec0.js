"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[72832],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),c=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(r),d=n,g=m["".concat(u,".").concat(d)]||m[d]||p[d]||i;return r?a.createElement(g,l(l({ref:t},s),{},{components:r})):a.createElement(g,l({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},60463:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const i={title:"Create an eLearning Curriculum with a Relative Due Date",slug:"/r/t_elearning_relative_date"},l=void 0,o={unversionedId:"guides/training/eLearning/elearningAdministrators/managing_curricula/t_elearning_relative_date",id:"guides/training/eLearning/elearningAdministrators/managing_curricula/t_elearning_relative_date",title:"Create an eLearning Curriculum with a Relative Due Date",description:"You can create curricula with a set number of days a learner has to complete a curriculum after they join a curriculum.",source:"@site/docs/guides/13_training/02_eLearning/02_elearningAdministrators/03_managing_curricula/04_t_elearning_relative_date.md",sourceDirName:"guides/13_training/02_eLearning/02_elearningAdministrators/03_managing_curricula",slug:"/r/t_elearning_relative_date",permalink:"/km-docusaurus-test/r/t_elearning_relative_date",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Create an eLearning Curriculum with a Relative Due Date",slug:"/r/t_elearning_relative_date"},sidebar:"tutorialSidebar",previous:{title:"Create an eLearning Curriculum with a Fixed Due Date",permalink:"/km-docusaurus-test/r/t_elearning_fixed_date"},next:{title:"Modify an eLearning Curriculum",permalink:"/km-docusaurus-test/r/t_modify_curriculum"}},u={},c=[],s={toc:c};function p(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"You can create curricula with a set number of days a learner has to complete a curriculum after they join a curriculum."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Before you begin:")),(0,n.kt)("p",null,"Only Veracode eLearning administrators can create curricula. You must have the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_role_permissions"},"Administrator and eLearning roles")," to create a curriculum."),(0,n.kt)("p",null,"When you create curriculum using a relative due date, this date changes for learners depending on when they join the curriculum. For example, if you add a new learner to a curriculum with a relative due date of 30 days, the new learner has 30 days to complete the curriculum regardless of when you add them."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"To complete this task:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From the gear icon ",(0,n.kt)("img",{src:r(64616).Z,width:"31",height:"17"})," at the top of the Veracode Platform page, go to ",(0,n.kt)("strong",{parentName:"p"},"Admin")," ",">"," ",(0,n.kt)("strong",{parentName:"p"},"eLearning")," ",">"," ",(0,n.kt)("strong",{parentName:"p"},"Settings and Curricula"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Add New Curriculum"),"."),(0,n.kt)("p",{parentName:"li"},"The Add Curriculum page opens.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enter a name in the Curriculum Name field.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From the Track dropdown menu, select a Veracode eLearning track."),(0,n.kt)("p",{parentName:"li"},"A page opens with a table of all courses included in the selected track.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From the Due Date dropdown menu, select ",(0,n.kt)("strong",{parentName:"p"},"Relative"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select the relative date:"),(0,n.kt)("p",{parentName:"li"},"  a.  Click the dropdown menu to select Days, Weeks, or Months."),(0,n.kt)("p",{parentName:"li"},"  b.  Enter a value in the first input field."),(0,n.kt)("admonition",{parentName:"li",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"The relative due dates apply to required courses only."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select courses to include in the curriculum:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"To select one course at a time, select the checkbox next to a course name."),(0,n.kt)("li",{parentName:"ul"},"To select all courses in a track, select the ",(0,n.kt)("strong",{parentName:"li"},"Course Name")," checkbox in the table heading."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Optionally, make the selected courses required for learners:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"To make a single course required, select the ",(0,n.kt)("strong",{parentName:"li"},"Required")," checkbox next to a course name."),(0,n.kt)("li",{parentName:"ul"},"To make all selected courses required, select the ",(0,n.kt)("strong",{parentName:"li"},"Required")," checkbox in the table heading.")),(0,n.kt)("p",{parentName:"li"},"If you do not make a course required, the course is optional.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"OK"),"."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Results:")),(0,n.kt)("p",null,"After you create the curriculum, the course listing shows courses as not started. Learners can access their course history by selecting ",(0,n.kt)("strong",{parentName:"p"},"Transcript")," on ",(0,n.kt)("strong",{parentName:"p"},"eLearning")," ",">"," ",(0,n.kt)("strong",{parentName:"p"},"My Courses"),"."))}p.isMDXComponent=!0},64616:(e,t,r)=>{r.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAARCAYAAAAlpHdJAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH3goHDxMj+1OAOgAAAAd0RVh0QXV0aG9yAKmuzEgAAAAMdEVYdERlc2NyaXB0aW9uABMJISMAAAAKdEVYdENvcHlyaWdodACsD8w6AAAADnRFWHRDcmVhdGlvbiB0aW1lADX3DwkAAAAJdEVYdFNvZnR3YXJlAF1w/zoAAAALdEVYdERpc2NsYWltZXIAt8C0jwAAAAh0RVh0V2FybmluZwDAG+aHAAAAB3RFWHRTb3VyY2UA9f+D6wAAAAh0RVh0Q29tbWVudAD2zJa/AAAABnRFWHRUaXRsZQCo7tInAAACcElEQVRIicWVTUiTARyHn3ebus35kS6dc0qHvgxZB1nhaaxDQovwCwoSIk8SdPJcx27duhSVrAI7GAjaocIiobLwg/Irlg7dB7qtsU1f9/lubwcv0TTGWvg7/+Hh4feHnyDLsswBRXFQYABVPkdy3M/b8Ze40kbsnR0YtUJR4PuaZ1IizoV5Iok0saCbqan3TE59xLW5g5TcZmnxO5F4+p/gwt6dZ3C+usedZ9OoavRoxBA/xQQZFKi1emork4TCKVq7BxnsNKMsEL6PuZK6kxaMpUm2Nnz4txNQqkZdJpDcCeDbiJJQGWhrMRQMhr06l2UkKUk8IyMkAaGMsxeu09NhRifEWJwYxTH2ATElQCZBPCWhLlEhFPAGOeZSPMKn8SEe3B9mNQUlNafpvXyOIwY9+vpmrD3dtBm0kFpj5PFDhsYmCYqFdZ8Dz6YTeFaX8fijZAHUVZSX/Hag0lCpEYAs20EfyytuYqlMceClFfV0D9zmZv9F6hSQ2Zzm3WcXMQmQ4qzPTPLFkwDFYc73DXDrxhWaD6kLgud2rlCg1uk5dsqMqeoFgXCYsUd3mXltoFyIE/D4CCQlqGqgteU4dRW5YK/Xi8PhQBRFAJRKJe3t7djt9r+b7ybLxtwb5sIgaHQgBnEtzTO/uIJ/K0u5RgHRBSZmvbvV/BGTyYTNZiMSieB2u2lqasJqteZhDoCAvsVG76VqjOYzaANfGR4ZxZ0xYO/pw9IoMfttjROtDez35BaLBUEQcDqddHV1odPpcin5DEt2a53nT57yI9XI1f5rHK0uziTkBSebJhoKEZPV1OqrKS3SHOUH/0850En9BZyF+2auOrZSAAAAAElFTkSuQmCC"}}]);