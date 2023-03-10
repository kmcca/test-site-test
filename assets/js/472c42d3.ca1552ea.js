"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[87816],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=d(a),c=r,g=m["".concat(p,".").concat(c)]||m[c]||u[c]||l;return a?n.createElement(g,i(i({ref:t},s),{},{components:a})):n.createElement(g,i({ref:t},s))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},66925:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const l={title:"Mapping Upload API Tasks",slug:"/r/c_mapping_Upload"},i=void 0,o={unversionedId:"guides/apis/xml_apis/upload_xml_apis/upload_api_mapping_tasks",id:"guides/apis/xml_apis/upload_xml_apis/upload_api_mapping_tasks",title:"Mapping Upload API Tasks",description:"To understand how the Upload API works and in which order you use the Upload API calls, this table maps the API calls to the manual steps in the Veracode Platform.",source:"@site/docs/guides/15_apis/05_xml_apis/02_upload_xml_apis/02_upload_api_mapping_tasks.md",sourceDirName:"guides/15_apis/05_xml_apis/02_upload_xml_apis",slug:"/r/c_mapping_Upload",permalink:"/km-docusaurus-test/r/c_mapping_Upload",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Mapping Upload API Tasks",slug:"/r/c_mapping_Upload"},sidebar:"tutorialSidebar",previous:{title:"Upload XML APIs Quick Reference",permalink:"/km-docusaurus-test/r/c_UploadAPI_calls"},next:{title:"beginprescan.do",permalink:"/km-docusaurus-test/r/r_beginprescan"}},p={},d=[],s={toc:d};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To understand how the Upload API works and in which order you use the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_UploadAPI_calls"},"Upload API calls"),", this table maps the API calls to the manual steps in the Veracode Platform."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Step"),(0,r.kt)("th",{parentName:"tr",align:null},"Using the Veracode Platform"),(0,r.kt)("th",{parentName:"tr",align:null},"Using the Upload API"),(0,r.kt)("th",{parentName:"tr",align:null},"Returns XML File"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Create an application profile."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"createapp.do")," ",(0,r.kt)("br",null)," Optionally, if you want to name a scan, use createbuild.do."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"appinfo.xml"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"Select and upload binaries."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"uploadfile.do")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"uploadlargefile.do"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"beginprescan.do")," ",(0,r.kt)("br",null)," Use ",(0,r.kt)("inlineCode",{parentName:"td"},"uploadfile.do")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"uploadlargefile.do")," in a programmatic loop to iterate through a directory in the local file system."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"filelist.xml"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"buildinfo.xml"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"Wait for the prescan to complete."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"getprescanresults.do")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"getbuildinfo.do")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"prescanresults.xml"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"Select and upload binary modules. Submit scan."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"beginscan.do")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"buildinfo.xml"))))))}u.isMDXComponent=!0}}]);