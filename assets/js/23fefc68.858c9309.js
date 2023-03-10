"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[41588],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,h=u["".concat(p,".").concat(m)]||u[m]||c[m]||s;return r?a.createElement(h,o(o({ref:t},d),{},{components:r})):a.createElement(h,o({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var l=2;l<s;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},56243:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const s={title:"getsharedreportlist.do",slug:"/r/r_getsharedreportlist"},o=void 0,i={unversionedId:"guides/apis/xml_apis/vast_xml_apis/getsharedreportlist_do",id:"guides/apis/xml_apis/vast_xml_apis/getsharedreportlist_do",title:"getsharedreportlist.do",description:"The getsharedreportlist.do call returns a list of published shared reports that are linked to the application.",source:"@site/docs/guides/15_apis/05_xml_apis/09_vast_xml_apis/05_getsharedreportlist_do.md",sourceDirName:"guides/15_apis/05_xml_apis/09_vast_xml_apis",slug:"/r/r_getsharedreportlist",permalink:"/km-docusaurus-test/r/r_getsharedreportlist",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"getsharedreportlist.do",slug:"/r/r_getsharedreportlist"},sidebar:"tutorialSidebar",previous:{title:"getsharedreportinfo.do",permalink:"/km-docusaurus-test/r/r_getsharedreportinfo"},next:{title:"API Wrappers",permalink:"/km-docusaurus-test/r/c_about_wrappers"}},p={},l=[{value:"Resource URL",id:"resource-url",level:2},{value:"Parameters",id:"parameters",level:2},{value:"HTTPie Example",id:"httpie-example",level:2},{value:"HTTPie Results",id:"httpie-results",level:2}],d={toc:l};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"getsharedreportlist.do")," call returns a list of published shared reports that are linked to the application."),(0,n.kt)("p",null,"Before using this API, Veracode strongly recommends that you read ",(0,n.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_API_usage_guidelines"},"API Usage and Access Guidelines"),". Ensure you access the APIs with the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs"},"domain for your region"),"."),(0,n.kt)("h2",{id:"resource-url"},"Resource URL"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"https://analysiscenter.veracode.com/api/4.0/getsharedreportlist.do\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"app_id"),(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Integer"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Application ID.")))),(0,n.kt)("h2",{id:"httpie-example"},"HTTPie Example"),(0,n.kt)("p",null,"Examples use the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_httpie_tool"},"HTTPie command-line tool"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'http --auth-type=veracode_hmac "https://analysiscenter.veracode.com/api/4.0/getsharedreportlist.do" "app_id==<app id>"\n')),(0,n.kt)("h2",{id:"httpie-results"},"HTTPie Results"),(0,n.kt)("p",null,"Examples use the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_httpie_tool"},"HTTPie command-line tool"),"."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"getsharedreportlist.do")," call returns the ",(0,n.kt)("inlineCode",{parentName:"p"},"sharedreportlist")," XML document, which references the ",(0,n.kt)("a",{parentName:"p",href:"https://analysiscenter.veracode.com/resource/3.0/sharedreportlist.xsd"},"sharedreportlist.xsd")," schema file. You can use the XSD schema file to validate the XML data."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n\n<sharedreportlist xmlns:xsi="http&#x3a;&#x2f;&#x2f;www.w3.org&#x2f;2001&#x2f;XMLSchema-instance" \n         xmlns="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;3.0&#x2f;sharedreportlist" \n         xsi:schemaLocation="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;3.0&#x2f;sharedreportlist \n         https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;resource&#x2f;3.0&#x2f;sharedreportlist.xsd" \n         account_id="<account id>" app_id="<app id>" app_name="<app name>" vendor_name="<vendor name>">\n   <sharedreport shared_report_id="13391" report_name="Vendor A\'s static scan" \n      shared_date="2019-07-22T09&#x3a;06&#x3a;19-05&#x3a;00"/>\n   <sharedreport shared_report_id="13288" report_name="Vendor A\'s static scan" \n      shared_date="2019-05-02T22&#x3a;20&#x3a;41-05&#x3a;00"/>\n   <sharedreport shared_report_id="13007" report_name="Vendor A\'s static scan" \n      shared_date="2019-04-18T18&#x3a;40&#x3a;57-05&#x3a;00"/>\n</sharedreportlist>\n')))}c.isMDXComponent=!0}}]);