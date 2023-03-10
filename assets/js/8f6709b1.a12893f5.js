"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5380],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(a),m=l,f=u["".concat(o,".").concat(m)]||u[m]||c[m]||r;return a?n.createElement(f,i(i({ref:t},p),{},{components:a})):n.createElement(f,i({ref:t},p))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:l,i[1]=s;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},62241:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var n=a(87462),l=(a(67294),a(3905));const r={title:"beginscan.do",slug:"/r/r_beginscan"},i=void 0,s={unversionedId:"guides/apis/xml_apis/upload_xml_apis/beginscan_do",id:"guides/apis/xml_apis/upload_xml_apis/beginscan_do",title:"beginscan.do",description:"The beginscan.do call runs a full scan of the application. Specify the application ID and one of the four scan-type parameters.",source:"@site/docs/guides/15_apis/05_xml_apis/02_upload_xml_apis/04_beginscan_do.md",sourceDirName:"guides/15_apis/05_xml_apis/02_upload_xml_apis",slug:"/r/r_beginscan",permalink:"/km-docusaurus-test/r/r_beginscan",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"beginscan.do",slug:"/r/r_beginscan"},sidebar:"tutorialSidebar",previous:{title:"beginprescan.do",permalink:"/km-docusaurus-test/r/r_beginprescan"},next:{title:"createapp.do",permalink:"/km-docusaurus-test/r/r_createapp"}},o={},d=[{value:"Resource URL",id:"resource-url",level:2},{value:"Parameters",id:"parameters",level:2},{value:"HTTPie Examples",id:"httpie-examples",level:2},{value:"HTTPie Results",id:"httpie-results",level:2},{value:"Java Example",id:"java-example",level:2},{value:"Java Results",id:"java-results",level:2}],p={toc:d};function c(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"beginscan.do")," call runs a full scan of the application. Specify the application ID and one of the four scan-type parameters."),(0,l.kt)("p",null,"Before using this API, Veracode strongly recommends that you read ",(0,l.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_API_usage_guidelines"},"API Usage and Access Guidelines"),". Ensure you access the APIs with the ",(0,l.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs"},"domain for your region"),"."),(0,l.kt)("h2",{id:"resource-url"},"Resource URL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"https://analysiscenter.veracode.com/api/5.0/beginscan.do\n")),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"app_id")," ",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Required")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Integer"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Application ID.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"modules")," ",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Required")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Use either this parameter or one of: ",(0,l.kt)("inlineCode",{parentName:"td"},"scan_all_top_level_modules"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"scan_selected_modules"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"scan_previously_selected_modules")," ",(0,l.kt)("br",null),"Comma-separated list of top-level module IDs. Find the module IDs for a specific scan in the results of ",(0,l.kt)("inlineCode",{parentName:"td"},"getprescanresults.do"),". In those results, each module is associated with an ",(0,l.kt)("inlineCode",{parentName:"td"},"is_dependency")," Boolean, where false indicates a top-level module.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"scan_all_top_level_modules")," ",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Required")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Use either this parameter or one of: ",(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"modules")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"scan_selected_modules")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"scan_previously_selected_modules"))),"Veracode recommends that you use the ",(0,l.kt)("inlineCode",{parentName:"td"},"scan_all_top_level_modules")," parameter if you want to ensure the scan completes even if there are non-fatal errors, such as unsupported frameworks. ",(0,l.kt)("br",null),"The top-level modules are the binaries that are the non-third party entrypoints to the application. All the other binaries are either third-party or the dependents of these top-level modules. In Java, the uploaded JARs, WARs, and EARs are almost always the top-level modules. In .NET and C++, the uploaded EXEs and DLLs are almost always the top-level modules. In iOS, Ruby, PHP, and most other languages, the top-level modules are the uploaded files.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"scan_selected_modules")," ",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Required")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Use either this parameter or one of: ",(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"modules")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"scan_all_top_level_modules")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"scan_previously_selected_modules"))),"When this parameter is true, only the modules selected in the Veracode Platform are scanned. This selection may or may not be the same as ",(0,l.kt)("inlineCode",{parentName:"td"},"scan_all_top_level_modules"),", depending on whether any third-party modules are selected and any top-level modules are deselected.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"scan_previously_selected_modules")," ",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Required")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Use either this parameter or one of: ",(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"modules")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"scan_all_top_level_modules")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"scan_selected_modules"))),"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", only the modules selected in the previous scan are scanned. The outcome may or may not be the same as using ",(0,l.kt)("inlineCode",{parentName:"td"},"scan_all_top_level_modules"),", depending on the previous scan module selections.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"sandbox_id")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Integer"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Target sandbox ID.")))),(0,l.kt)("h2",{id:"httpie-examples"},"HTTPie Examples"),(0,l.kt)("p",null,"Examples use the ",(0,l.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_httpie_tool"},"HTTPie command-line tool"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'http --auth-type=veracode_hmac "https://analysiscenter.veracode.com/api/5.0/beginscan.do" "app_id==<app id>" "scan_all_top_level_modules==true"\n\nhttp --auth-type=veracode_hmac "https://analysiscenter.veracode.com/api/5.0/beginscan.do" "app_id==<app id>" "modules==<module id>,<module id>"\n')),(0,l.kt)("h2",{id:"httpie-results"},"HTTPie Results"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"beginscan.do")," call responds with the ",(0,l.kt)("inlineCode",{parentName:"p"},"buildinfo")," XML document, which references the ",(0,l.kt)("a",{parentName:"p",href:"https://analysiscenter.veracode.com/resource/4.0/buildinfo.xsd"},"buildinfo.xsd")," schema file. You can use the XSD schema file to validate the XML data."),(0,l.kt)("p",null,"Response for the ",(0,l.kt)("inlineCode",{parentName:"p"},"scan_all_top_level_modules")," example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n\n<buildinfo xmlns:xsi="http&#x3a;&#x2f;&#x2f;www.w3.org&#x2f;2001&#x2f;XMLSchema-instance" \n      xmlns="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;\n      schema&#x2f;4.0&#x2f;buildinfo"xsi:schemaLocation="https&#x3a;&#x2f;&#x2f;\n      analysiscenter.veracode.com&#x2f;schema&#x2f;4.0&#x2f;buildinfo https&#x3a;&#x2f;\n      &#x2f;analysiscenter.veracode.com&#x2f;resource&#x2f;4.0&#x2f;buildinfo.xsd" \n      buildinfo_version="1.5" account_id="<account id>" app_id="<app id>" build_id="<build id">\n   <build version="<build name>" \n      build_id="<build id>" submitter="<VeracodeUsername>" platform="Not Specified" lifecycle_stage="Not Specified" \n      results_ready="false" policy_name="Veracode Recommended Very High" policy_version="1" \n      policy_compliance_status="Not Assessed" rules_status="Not Assessed" grace_period_expired="false" \n      scan_overdue="false" legacy_scan_engine="false" launch_date="2019-08-22T14&#x3a;27&#x3a;59-04&#x3a;00">\n      <analysis_unit analysis_type="Static" status="Submitted to Engine" engine_version="20190805180615"/>\n   </build>\n</buildinfo>\n')),(0,l.kt)("p",null,"Response for the ",(0,l.kt)("inlineCode",{parentName:"p"},"modules")," example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n\n<buildinfo xmlns:xsi="http&#x3a;&#x2f;&#x2f;www.w3.org&#x2f;2001&#x2f;XMLSchema-instance" \n      xmlns="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;\n      4.0&#x2f;buildinfo"xsi:schemaLocation="https&#x3a;&#x2f;&#x2f;\n      analysiscenter.veracode.com&#x2f;schema&#x2f;4.0&#x2f;buildinfo https&#x3a;\n      &#x2f;&#x2f;analysiscenter.veracode.com&#x2f;resource&#x2f;4.0&#x2f;buildinfo.xsd" \n      buildinfo_version="1.5" account_id="<account id>" app_id="<app id>" build_id="<build id>">\n  <build version="22 Aug 2019 Static" build_id="build id" submitter="<VeracodeUsername>" platform="Not Specified" \n       lifecycle_stage="Not Specified" results_ready="false" policy_name="Veracode Recommended Very High" \n       policy_version="1" policy_compliance_status="Conditional Pass" \n       policy_updated_date="2019-08-22T14&#x3a;42&#x3a;38-04&#x3a;00" rules_status="Pass" grace_period_expired="false" \n       scan_overdue="false" legacy_scan_engine="false" launch_date="2019-08-22T14&#x3a;27&#x3a;59-04&#x3a;00">\n       <analysis_unit analysis_type="Static" status="Submitted to Engine" engine_version="20190805180615"/>\n   </build>\n</buildinfo>\n')),(0,l.kt)("p",null,"If no selected modules exist in the Veracode Platform and the call uses the ",(0,l.kt)("inlineCode",{parentName:"p"},"scan_selected_modules")," parameter, the return contains:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n          <error>No modules parameter specified</error>\n')),(0,l.kt)("h2",{id:"java-example"},"Java Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"java -jar vosp-api-wrappers-java-<version #>.jar -vid <VeracodeApiId> -vkey <VeracodeApiKey> -action beginscan -appid <app id> -toplevel true \n")),(0,l.kt)("h2",{id:"java-results"},"Java Results"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"beginscan.do")," call responds with the ",(0,l.kt)("inlineCode",{parentName:"p"},"buildinfo")," XML document, which references the ",(0,l.kt)("a",{parentName:"p",href:"https://analysiscenter.veracode.com/resource/4.0/buildinfo.xsd"},"buildinfo.xsd")," schema file. You can use the XSD schema file to validate the XML data."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n\n<buildinfo xmlns="https://analysiscenter.veracode.com/schema/4.0/buildinfo" \n      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" \n      account_id="<account id>" app_id=<app id> build_id=<build id> buildinfo_version="1.5" \n      xsi:schemaLocation="https://analysiscenter.veracode.com/schema/4.0/buildinfo \n      https://analysiscenter.veracode.com/resource/4.0/buildinfo.xsd">   \n   <build build_id=<build id> grace_period_expired="false" legacy_scan_engine="false" \n      lifecycle_stage="Not Specified" platform="Not Specified" policy_compliance_status="Not Assessed" \n      policy_name="Veracode Recommended Very High" policy_version="1" results_ready="false" \n      rules_status="Not Assessed" scan_overdue="false" submitter="JoeUser" version="4 Dec 2018 Static">   \n      <analysis_unit analysis_type="Static" engine_version="131771" status="Submitted to Engine"/>\n   </build>      \n</buildinfo>   \n')))}c.isMDXComponent=!0}}]);