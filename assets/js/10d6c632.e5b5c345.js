"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[33468],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(a),m=n,y=u["".concat(l,".").concat(m)]||u[m]||d[m]||s;return a?r.createElement(y,o(o({ref:t},p),{},{components:a})):r.createElement(y,o({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var c=2;c<s;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},96064:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const s={title:"sharedreport.do",slug:"/r/r_sharedreport"},o=void 0,i={unversionedId:"guides/apis/xml_apis/vast_xml_apis/sharedreport_do",id:"guides/apis/xml_apis/vast_xml_apis/sharedreport_do",title:"sharedreport.do",description:"The sharedreport.do call returns the details of a shared report.",source:"@site/docs/guides/15_apis/05_xml_apis/09_vast_xml_apis/02_sharedreport_do.md",sourceDirName:"guides/15_apis/05_xml_apis/09_vast_xml_apis",slug:"/r/r_sharedreport",permalink:"/km-docusaurus-test/r/r_sharedreport",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"sharedreport.do",slug:"/r/r_sharedreport"},sidebar:"tutorialSidebar",previous:{title:"VAST XML APIs Quick Reference",permalink:"/km-docusaurus-test/r/VAST_XML_APIs_Quick_Reference"},next:{title:"sharedreportpdf.do",permalink:"/km-docusaurus-test/r/r_sharedreportpdf"}},l={},c=[{value:"Resource URL",id:"resource-url",level:2},{value:"Parameters",id:"parameters",level:2},{value:"HTTPie Example",id:"httpie-example",level:2},{value:"HTTPie Results",id:"httpie-results",level:2}],p={toc:c};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"sharedreport.do")," call returns the details of a shared report."),(0,n.kt)("p",null,"Before using this API, Veracode strongly recommends that you read ",(0,n.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_API_usage_guidelines"},"API Usage and Access Guidelines"),". Ensure you access the APIs with the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs"},"domain for your region"),"."),(0,n.kt)("h2",{id:"resource-url"},"Resource URL"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"https://analysiscenter.veracode.com/api/4.0/sharedreport.do\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"app_id"),(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Integer"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Application ID.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"shared_report_id"),(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Integer"),(0,n.kt)("td",{parentName:"tr",align:"left"},"You can get the shared report ID from the ",(0,n.kt)("inlineCode",{parentName:"td"},"sharedreportlist.xml")," file returned by the ",(0,n.kt)("a",{parentName:"td",href:"/km-docusaurus-test/r/r_getsharedreportlist"},"getsharedreportlist.do call"),".")))),(0,n.kt)("h2",{id:"httpie-example"},"HTTPie Example"),(0,n.kt)("p",null,"Examples use the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_httpie_tool"},"HTTPie command-line tool"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'http --auth-type=veracode_hmac "https://analysiscenter.veracode.com/api/4.0/sharedreport.do" "app_id==<app id>" "shared_report_id==10651"\n')),(0,n.kt)("h2",{id:"httpie-results"},"HTTPie Results"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"sharedreport.do")," call returns the ",(0,n.kt)("inlineCode",{parentName:"p"},"summaryreport")," XML document, which references the ",(0,n.kt)("a",{parentName:"p",href:"https://analysiscenter.veracode.com/resource/summaryreport.xsd"},"summaryreport.xsd")," schema file. You can use the XSD schema file to validate the XML data."),(0,n.kt)("p",null,"A partial XML example. Veracode has deprecated ",(0,n.kt)("inlineCode",{parentName:"p"},"assurance_level")," and replaced it with ",(0,n.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/review_assurancelevels"},(0,n.kt)("inlineCode",{parentName:"a"},"business_criticality")),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n\n<summaryreport xmlns:xsi="http&#x3a;&#x2f;&#x2f;www.w3.org&#x2f;2001&#x2f;XMLSchema-instance" \n         xmlns="https&#x3a;&#x2f;&#x2f;www.veracode.com&#x2f;schema&#x2f;reports&#x2f;export&#x2f;1.0" \n         xsi:schemaLocation="https&#x3a;&#x2f;&#x2f;www.veracode.com&#x2f;schema&#x2f;reports&#x2f;export&#x2f;1.0 \n         https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;resource&#x2f;summaryreport.xsd" \n         report_format_version="1.3" account_id="<account id>" app_name="<app name>" app_id="<app id>" \n         analysis_id="674675" static_analysis_unit_id="690423" sandbox_id="<sandbox id>" \n         first_build_submitted_date="2015-12-22 15&#x3a;47&#x3a;59 UTC" version="22 July 2019 Static" \n         build_id="<build id>" submitter="<vendor name>" platform="Not Specified" assurance_level="3" \n         business_criticality="3" generation_date="2019-10-03 18&#x3a;03&#x3a;20 UTC" veracode_level="VL1" \n         total_flaws="366" flaws_not_mitigated="365" teams="" life_cycle_stage="Not Specified" \n         planned_deployment_date="2019-12-22 15&#x3a;27&#x3a;13 UTC" last_update_time="2019-07-22 16&#x3a;05&#x3a;52 UTC" \n         is_latest_build="true" policy_name="3rd Party" policy_version="2" policy_compliance_status="Did Not Pass" \n         policy_rules_status="Did Not Pass" grace_period_expired="false" scan_overdue="false" business_owner="" \n         business_unit="Not Specified" tags="" legacy_scan_engine="false">\n   <static-analysis rating="C" score="53" submitted_date="2015-12-22 15&#x3a;47&#x3a;47 UTC" \n         published_date="2015-12-22 16&#x3a;05&#x3a;49 UTC" version="22 July 2019 Static" mitigated_rating="C" \n         mitigated_score="53" next_scan_due="2019-12-01 15&#x3a;05&#x3a;49 UTC" analysis_size_bytes="5696667" \n         engine_version="88693">\n      <modules>\n         <module name="<module name>" compiler="JAVAC_7" os="Java J2SE 7" architecture="JVM" loc="77543" score="52" \n            numflawssev0="1" numflawssev1="0" numflawssev2="22" numflawssev3="321" numflawssev4="20" numflawssev5="2"/>\n      </modules>\n   </static-analysis>\n   <severity level="5">\n      <category categoryname="Command or Argument Injection" severity="Very High" count="2"/>\n   </severity>\n   <severity level="4">\n      <category categoryname="SQL Injection" severity="High" count="20"/>\n   </severity>\n   <severity level="3">\n      <category categoryname="Cross-Site Scripting &#x28;XSS&#x29;" severity="Medium" count="252"/>\n      <category categoryname="Credentials Management" severity="Medium" count="44"/>\n      <category categoryname="CRLF Injection" severity="Medium" count="8"/>\n      <category categoryname="Cryptographic Issues" severity="Medium" count="5"/>\n      <category categoryname="Insufficient Input Validation" severity="Medium" count="4"/>\n      <category categoryname="Code Quality" severity="Medium" count="3"/>\n      <category categoryname="Directory Traversal" severity="Medium" count="3"/>\n      <category categoryname="Encapsulation" severity="Medium" count="2"/>\n   </severity>\n   <severity level="2">\n      <category categoryname="Information Leakage" severity="Low" count="10"/>\n      <category categoryname="Cryptographic Issues" severity="Low" count="5"/>\n      <category categoryname="Code Quality" severity="Low" count="5"/>\n      <category categoryname="API Abuse" severity="Low" count="2"/>\n   </severity>\n   <severity level="1"/>\n   <severity level="0">\n      <category categoryname="Potential Backdoor" severity="Informational" count="1"/>\n   </severity>\n   <flaw-status new="366" reopen="0" open="0" cannot-reproduce="0" fixed="0" total="366" not_mitigated="365" \n       sev-1-change="0" sev-2-change="22" sev-3-change="321" sev-4-change="20" sev-5-change="2"/>\n   <customfields>\n      <customfield name="JIRA" value=""/>\n      <customfield name="JenkinsID" value=""/>\n      <customfield name="SDLC Stage" value=""/>\n      <customfield name="Custom 4" value=""/>\n      <customfield name="Custom 5" value=""/>\n      <customfield name="Custom 6" value=""/>\n      <customfield name="Custom 7" value=""/>\n      <customfield name="Custom 8" value=""/>\n      <customfield name="Custom 9" value=""/>\n      <customfield name="Custom 10" value=""/>\n   </customfields>\n   <software_composition_analysis third_party_components="0" violate_policy="false" components_violated_policy="0" \n         sca_service_available="false">\n      <vulnerable_components/>\n   </software_composition_analysis>\n</summaryreport>\n')))}d.isMDXComponent=!0}}]);