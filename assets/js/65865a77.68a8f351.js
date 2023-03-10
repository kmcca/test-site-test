"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[39812],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=m(n),u=i,f=p["".concat(l,".").concat(u)]||p[u]||c[u]||o;return n?a.createElement(f,r(r({ref:t},d),{},{components:n})):a.createElement(f,r({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var m=2;m<o;m++)r[m]=n[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},89435:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var a=n(87462),i=(n(67294),n(3905));const o={title:"updatemitigationinfo.do",slug:"/r/r_updatemitigationinfo"},r=void 0,s={unversionedId:"guides/apis/xml_apis/mitigation_xml_apis/updatemitigationinfo_do",id:"guides/apis/xml_apis/mitigation_xml_apis/updatemitigationinfo_do",title:"updatemitigationinfo.do",description:"The updatemitigationinfo.do call enables you to perform several actions on a list of one or more flaws in the specified build. These actions include commenting on a flaw, proposing a mitigation action, and rejecting or accepting a mitigation action.",source:"@site/docs/guides/15_apis/05_xml_apis/05_mitigation_xml_apis/03_updatemitigationinfo_do.md",sourceDirName:"guides/15_apis/05_xml_apis/05_mitigation_xml_apis",slug:"/r/r_updatemitigationinfo",permalink:"/km-docusaurus-test/r/r_updatemitigationinfo",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"updatemitigationinfo.do",slug:"/r/r_updatemitigationinfo"},sidebar:"tutorialSidebar",previous:{title:"getmitigationinfo.do",permalink:"/km-docusaurus-test/r/r_getmitigationinfo"},next:{title:"XML API Tutorial: How to Use the Mitigation Calls",permalink:"/km-docusaurus-test/r/c_TUTOR_mitigate"}},l={},m=[{value:"REST API Equivalent",id:"rest-api-equivalent",level:2},{value:"Resource URL",id:"resource-url",level:2},{value:"Parameters",id:"parameters",level:2},{value:"HTTPie Examples",id:"httpie-examples",level:3},{value:"HTTPie Results",id:"httpie-results",level:3}],d={toc:m};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"updatemitigationinfo.do")," call enables you to perform several actions on a list of one or more flaws in the specified build. These actions include commenting on a flaw, proposing a mitigation action, and rejecting or accepting a mitigation action."),(0,i.kt)("p",null,"Before using this API, Veracode strongly recommends that you read ",(0,i.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_API_usage_guidelines"},"API Usage and Access Guidelines"),". Ensure you access the APIs with the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs"},"domain for your region"),"."),(0,i.kt)("h2",{id:"rest-api-equivalent"},"REST API Equivalent"),(0,i.kt)("p",null,"The REST API equivalent of this call is a ",(0,i.kt)("inlineCode",{parentName:"p"},"POST")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"/appsec/v2/applications/{application_guid}/annotations")," using the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_rest_annotations_intro"},"Annotations API"),". For new integrations, always use the REST APIs."),(0,i.kt)("h2",{id:"resource-url"},"Resource URL"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"https://analysiscenter.veracode.com/api/updatemitigationinfo.do\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"build_id"),(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Required")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Integer"),(0,i.kt)("td",{parentName:"tr",align:"left"},"ID of the latest build, otherwise the call fails.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"action"),(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Required")),(0,i.kt)("td",{parentName:"tr",align:"left"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://docs.veracode.com/r/improve_mitigation"},"Mitigation action")," for the selected findings: ",(0,i.kt)("inlineCode",{parentName:"td"},"comment"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"fp")," (false positive), ",(0,i.kt)("inlineCode",{parentName:"td"},"appdesign"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"osenv"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"netenv"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"library"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"rejected"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"accepted"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"acceptrisk"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"comment"),(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Required")),(0,i.kt)("td",{parentName:"tr",align:"left"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Comment string to associate with the action. Limit of 2048 characters.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"flaw_id_list"),(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Required")),(0,i.kt)("td",{parentName:"tr",align:"left"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Comma-separated list of flaw IDs. Find flaw IDs on the ",(0,i.kt)("a",{parentName:"td",href:"https://docs.veracode.com/r/improve_mitigation"},"Triage Flaws page")," in the Veracode Platform or in the ",(0,i.kt)("inlineCode",{parentName:"td"},"issueid")," fields returned by the ",(0,i.kt)("a",{parentName:"td",href:"/km-docusaurus-test/r/r_detailedreport"},"Detailed Report API"),".")))),(0,i.kt)("h3",{id:"httpie-examples"},"HTTPie Examples"),(0,i.kt)("p",null,"Examples use the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_httpie_tool"},"HTTPie command-line tool"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'http --auth-type=veracode_hmac "https://analysiscenter.veracode.com/api/updatemitigationinfo.do" "build_id==<build id>" "action==comment" "comment==Test comment." "flaw_id_list==5,7,49"\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'http --auth-type=veracode_hmac "https://analysiscenter.veracode.com/api/updatemitigationinfo.do" "build_id==<build id>" "action==appdesign" "comment==Test mitigation details." "flaw_id_list==7"\n')),(0,i.kt)("h3",{id:"httpie-results"},"HTTPie Results"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"updatemitigationinfo.do")," call returns the ",(0,i.kt)("inlineCode",{parentName:"p"},"mitigationinfo")," XML document, which references the ",(0,i.kt)("a",{parentName:"p",href:"https://analysiscenter.veracode.com/resource/mitigationinfo.xsd"},"mitigationinfo.xsd")," schema file. You can use the XSD schema file to validate the XML data."),(0,i.kt)("p",null,"In this comment-only example, note that this API handles non-existent flaw IDs in an ",(0,i.kt)("inlineCode",{parentName:"p"},"error")," element at the end of the XML."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n            \n<mitigationinfo xmlns:xsi="http&#x3a;&#x2f;&#x2f;www.w3.org&#x2f;2001&#x2f;XMLSchema-instance" \n      xmlns="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;mitigationinfo&#x2f;1.0" \n      xsi:schemaLocation="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;mitigationinfo&#x2f;1.0 \n      https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;resource&#x2f;mitigationinfo.xsd" mitigationinfo_version="1.1" \n      build_id="<build id>">\n   <issue flaw_id="7" category="Authorization Bypass Through User-Controlled Key">\n      <mitigation_action action="comment" desc="Add Comment" reviewer="<Veracodeusername>" date="2019-09-16 10&#x3a;33&#x3a;00" \n         comment="Test comment."/>\n   </issue>\n   <issue flaw_id="5" category="Unchecked Error Condition">\n      <mitigation_action action="comment" desc="Add Comment" reviewer="<Veracodeusername>" date="2019-09-16 10&#x3a;33&#x3a;00" \n         comment="Test comment."/>\n   </issue>\n   <error type="not_found" flaw_id_list="49"/>\n</mitigationinfo>\n')),(0,i.kt)("p",null,"In the mitigated-by-design example, note that the API returns the complete list of actions for the flaw ID with the new action added to the end."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n\n<mitigationinfo xmlns:xsi="http&#x3a;&#x2f;&#x2f;www.w3.org&#x2f;2001&#x2f;XMLSchema-instance" \n      xmlns="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;mitigationinfo&#x2f;1.0" \n      xsi:schemaLocation="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;mitigationinfo&#x2f;1.0 \n      https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;resource&#x2f;mitigationinfo.xsd" mitigationinfo_version="1.1" \n      build_id="<build id>">\n   <issue flaw_id="7" category="Authorization Bypass Through User-Controlled Key">\n      <mitigation_action action="comment" desc="Add Comment" reviewer="<Veracodeuserid>" date="2019-09-16 10&#x3a;33&#x3a;41" \n         comment="Test comment."/>\n      <mitigation_action action="appdesign" desc="Mitigate by Design" reviewer="<Veracodeuserid>" date="2019-09-17 12&#x3a;16&#x3a;48" \n         comment="Test mitigation details."/>\n   </issue>\n</mitigationinfo>\n')))}c.isMDXComponent=!0}}]);