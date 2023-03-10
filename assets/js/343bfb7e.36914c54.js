"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[13426],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),f=i,d=p["".concat(s,".").concat(f)]||p[f]||m[f]||r;return n?a.createElement(d,l(l({ref:t},u),{},{components:n})):a.createElement(d,l({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},83630:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const r={title:"Matching Filenames in Static Scans",slug:"/r/Matching_Filenames_in_Static_Scans"},l=void 0,o={unversionedId:"guides/findings/review_static_flaw_viewer/matching_filenames_scans",id:"guides/findings/review_static_flaw_viewer/matching_filenames_scans",title:"Matching Filenames in Static Scans",description:"The Veracode Platform attempts to match uploaded application files that appear to be related to a source file, but may have different build or version numbers. By matching these files, Veracode can track flaws across different builds without falsely reporting any new flaws because the name of the container changes between scans.",source:"@site/docs/guides/11_findings/04_review_static_flaw_viewer/06_matching_filenames_scans.md",sourceDirName:"guides/11_findings/04_review_static_flaw_viewer",slug:"/r/Matching_Filenames_in_Static_Scans",permalink:"/km-docusaurus-test/r/Matching_Filenames_in_Static_Scans",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Matching Filenames in Static Scans",slug:"/r/Matching_Filenames_in_Static_Scans"},sidebar:"tutorialSidebar",previous:{title:"View Flaws Found in Non-Debug Code",permalink:"/km-docusaurus-test/r/View_Flaws_Found_in_Non_Debug_Code"},next:{title:"Using the TSRV Format in Mitigation Proposals",permalink:"/km-docusaurus-test/r/c_review_TSRV"}},s={},c=[],u={toc:c};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Veracode Platform attempts to match uploaded application files that appear to be related to a source file, but may have different build or version numbers. By matching these files, Veracode can track flaws across different builds without falsely reporting any new flaws because the name of the container changes between scans."),(0,i.kt)("p",null,"The matching scheme examines only the last characters of the filename preceding the file extension. Consider these sample files:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"myapp-123.dll")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"myapp-124.dll"))),(0,i.kt)("p",null,"Veracode recognizes these files as different versions of the same file because they contain the same base name, ",(0,i.kt)("inlineCode",{parentName:"p"},"myapp"),". Only the trailing numbers ",(0,i.kt)("inlineCode",{parentName:"p"},"123")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"124")," at the end of the filename are different."),(0,i.kt)("p",null,"These filenames do not match the previous filenames because the final part of the names contain alphabetic characters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"myapp-123-test.dll")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"myapp-124-test.dll"))),(0,i.kt)("p",null,"In some circumstances, this filename matching scheme may encounter problems. You might upload files that appear to match and Veracode does not match them. Consider an application that has multiple, similar files in the build, such as:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"function-1.dll")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"function-2.dll")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"function-3.dll"))),(0,i.kt)("p",null,"In this scenario, flaw matching can encounter problems between scans when Veracode matches them as versions of the same file although they are unrelated. Depending on which file the Veracode Platform finds first, the module listing for the scan identifies code added or removed because these files contain different code."),(0,i.kt)("p",null,"Veracode recommends that you append alphabetic characters to the end of the filename to avoid ending the filename with numerals."))}m.isMDXComponent=!0}}]);