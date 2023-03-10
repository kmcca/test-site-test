"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[74566],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?a.createElement(f,l(l({ref:t},c),{},{components:r})):a.createElement(f,l({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},93058:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={title:"generateflawreport.do",slug:"/r/r_generateflawreport"},l=void 0,i={unversionedId:"guides/apis/xml_apis/flaw_report_xml_apis/generateflawreport_do",id:"guides/apis/xml_apis/flaw_report_xml_apis/generateflawreport_do",title:"generateflawreport.do",description:"The generateflawreport.do creates a report listing all fixed and unfixed flaws for the specified applications, scan types, or both. The return contains the token needed for downloading the flaw report.",source:"@site/docs/guides/15_apis/05_xml_apis/07_flaw_report_xml_apis/02_generateflawreport_do.md",sourceDirName:"guides/15_apis/05_xml_apis/07_flaw_report_xml_apis",slug:"/r/r_generateflawreport",permalink:"/km-docusaurus-test/r/r_generateflawreport",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"generateflawreport.do",slug:"/r/r_generateflawreport"},sidebar:"tutorialSidebar",previous:{title:"Flaw Report XML APIs Quick Reference",permalink:"/km-docusaurus-test/r/Flaw_Report_XML_APIs_Quick_Reference"},next:{title:"downloadflawreport.do",permalink:"/km-docusaurus-test/r/r_downloadflawreport"}},s={},p=[{value:"Resource URL",id:"resource-url",level:2},{value:"Permissions",id:"permissions",level:2},{value:"Parameters",id:"parameters",level:2},{value:"HTTPie Example",id:"httpie-example",level:2},{value:"HTTPie Results",id:"httpie-results",level:2}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"generateflawreport.do")," creates a report listing all fixed and unfixed flaws for the specified applications, scan types, or both. The return contains the token needed for downloading the flaw report."),(0,n.kt)("p",null,"Before using this API, Veracode strongly recommends that you read ",(0,n.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_API_usage_guidelines"},"API Usage and Access Guidelines"),". Ensure you access the APIs with the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs"},"domain for your region"),"."),(0,n.kt)("h2",{id:"resource-url"},"Resource URL"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"https://analysiscenter.veracode.com/api/3.0/generateflawreport.do\n")),(0,n.kt)("h2",{id:"permissions"},"Permissions"),(0,n.kt)("p",null,"You need the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_API_roles_details"},"Archer API role")," to use this call."),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"app_id_list"),(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Integer"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Comma-separated list of the IDs for the applications you want included in the report. This parameter does not support wildcards.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"scan_type")),(0,n.kt)("td",{parentName:"tr",align:"left"},"String"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Values are: ",(0,n.kt)("inlineCode",{parentName:"td"},"static"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"dynamic"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"manual"))))),(0,n.kt)("h2",{id:"httpie-example"},"HTTPie Example"),(0,n.kt)("p",null,"Examples use the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_httpie_tool"},"HTTPie command-line tool"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'http --auth-type=veracode_hmac -o reporttoken.xml "https://analysiscenter.veracode.com/api/3.0/generateflawreport.do" "app_id_list==<app1 id>,<app2 id>,<app3 id>" "scan_type==static"\n')),(0,n.kt)("h2",{id:"httpie-results"},"HTTPie Results"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"generateflawreport.do")," call initiates the process of creating the ",(0,n.kt)("inlineCode",{parentName:"p"},"generateflawreport")," XML document, which references the ",(0,n.kt)("a",{parentName:"p",href:"https://analysiscenter.veracode.com/resource/1.0/archerreportrequest.xsd"},"archerreportrequest.xsd")," schema file. You can use the XSD schema file to validate the XML data."),(0,n.kt)("p",null,"The XML return contains the token string you need to retrieve the report, when it is available, using the ",(0,n.kt)("a",{parentName:"p",href:"/km-docusaurus-test/r/r_downloadflawreport#"},(0,n.kt)("inlineCode",{parentName:"a"},"downloadflawreport.do"))," call."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n\n<archerreport xmlns:xsi="http&#x3a;&#x2f;&#x2f;www.w3.org&#x2f;2001&#x2f;XMLSchema-instance" \n      xmlns="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;1.0&#x2f;archerapi" \n      xsi:schemaLocation="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;1.0&#x2f;archerapi \n      https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;resource&#x2f;1.0&#x2f;archerreportrequest.xsd" \n      token="4aaa2b4e-c42a-44c3-a696-c650a82d9c78" archer_report_version="3.0">\n</archerreport>\n')))}d.isMDXComponent=!0}}]);