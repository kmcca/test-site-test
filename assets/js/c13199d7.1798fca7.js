"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[25464],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(a),d=i,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return a?n.createElement(f,r(r({ref:t},c),{},{components:a})):n.createElement(f,r({ref:t},c))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,r[1]=p;for(var l=2;l<o;l++)r[l]=a[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},75003:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=a(87462),i=(a(67294),a(3905));const o={title:"getappinfo.do",slug:"/r/r_getappinfo"},r=void 0,p={unversionedId:"guides/apis/xml_apis/upload_xml_apis/getappinfo_do",id:"guides/apis/xml_apis/upload_xml_apis/getappinfo_do",title:"getappinfo.do",description:"The getappinfo.do call provides information about the application.",source:"@site/docs/guides/15_apis/05_xml_apis/02_upload_xml_apis/09_getappinfo_do.md",sourceDirName:"guides/15_apis/05_xml_apis/02_upload_xml_apis",slug:"/r/r_getappinfo",permalink:"/km-docusaurus-test/r/r_getappinfo",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"getappinfo.do",slug:"/r/r_getappinfo"},sidebar:"tutorialSidebar",previous:{title:"deletebuild.do",permalink:"/km-docusaurus-test/r/r_deletebuild"},next:{title:"getapplist.do",permalink:"/km-docusaurus-test/r/r_getapplist"}},s={},l=[{value:"REST API Equivalent",id:"rest-api-equivalent",level:2},{value:"Resource URL",id:"resource-url",level:2},{value:"Parameters",id:"parameters",level:2},{value:"HTTPie Example",id:"httpie-example",level:2},{value:"HTTPie Results",id:"httpie-results",level:2},{value:"Java Example",id:"java-example",level:2},{value:"Java Results",id:"java-results",level:2}],c={toc:l};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"getappinfo.do")," call provides information about the application."),(0,i.kt)("p",null,"Before using this API, Veracode strongly recommends that you read ",(0,i.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_API_usage_guidelines"},"API Usage and Access Guidelines"),". Ensure you access the APIs with the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs"},"domain for your region"),"."),(0,i.kt)("h2",{id:"rest-api-equivalent"},"REST API Equivalent"),(0,i.kt)("p",null,"The REST API equivalent of this call is a ",(0,i.kt)("inlineCode",{parentName:"p"},"GET")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"/appsec/v1/applications")," using the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/r_applications_info"},"Applications API"),". Veracode strongly recommends that you use the REST API for this action. For new integrations, always use the REST APIs."),(0,i.kt)("h2",{id:"resource-url"},"Resource URL"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"https://analysiscenter.veracode.com/api/5.0/getappinfo.do\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"app_id"),(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Required")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Integer"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Application ID.")))),(0,i.kt)("h2",{id:"httpie-example"},"HTTPie Example"),(0,i.kt)("p",null,"Examples use the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_httpie_tool"},"HTTPie command-line tool"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'http --auth-type=veracode_hmac "https://analysiscenter.veracode.com/api/5.0/getappinfo.do" "app_id==<app id>"\n')),(0,i.kt)("h2",{id:"httpie-results"},"HTTPie Results"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"getappinfo.do")," call returns the ",(0,i.kt)("inlineCode",{parentName:"p"},"appinfo")," XML document, which references the ",(0,i.kt)("a",{parentName:"p",href:"https://analysiscenter.veracode.com/resource/2.0/appinfo.xsd"},"appinfo.xsd")," schema file. You can use the XSD schema file to validate the XML data."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n\n<appinfo xmlns:xsi="http&#x3a;&#x2f;&#x2f;www.w3.org&#x2f;2001&#x2f;XMLSchema-instance" \n      xmlns="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;2.0&#x2f;appinfo" \n      xsi:schemaLocation="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;2.0&#x2f;appinfo \n      https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;resource&#x2f;2.0&#x2f;appinfo.xsd" appinfo_version="1.1" \n      account_id="<account id>">\n   <application app_id="<app id>" app_name="<app name>" description="<app description>" business_criticality="Very High" \n      policy="Veracode Transitional Very High" policy_updated_date="2019-08-13T14&#x3a;02&#x3a;08-04&#x3a;00" \n      teams="Demo Team" origin="Not Specified" industry_vertical="Other" app_type="Other" deployment_method="Not Specified" \n      is_web_application="false" archer_app_name="<archer app name>" modified_date="2019-08-15T11&#x3a;27&#x3a;47-04&#x3a;00" \n      cots="false" vast="false" business_unit="Not Specified" tags="">\n      <customfield name="Custom 1" value=""/>\n      <customfield name="Custom 2" value=""/>\n      <customfield name="Custom 3" value=""/>\n      <customfield name="Custom 4" value=""/>\n      <customfield name="Custom 5" value=""/>\n      <customfield name="Custom 6" value=""/>\n      <customfield name="Custom 7" value=""/>\n      <customfield name="Custom 8" value=""/>\n      <customfield name="Custom 9" value=""/>\n      <customfield name="Custom 10" value="foo"/>\n   </application>\n</appinfo>\n')),(0,i.kt)("h2",{id:"java-example"},"Java Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"java -jar vosp-api-wrappers-java-<version #>.jar -vid <VeracodeApiId> -vkey <VeracodeApiKey> -action getappinfo \u2013appid <app id>\n")),(0,i.kt)("h2",{id:"java-results"},"Java Results"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"getappinfo.do")," call returns the ",(0,i.kt)("inlineCode",{parentName:"p"},"appinfo")," XML document, which references the ",(0,i.kt)("a",{parentName:"p",href:"https://analysiscenter.veracode.com/resource/2.0/appinfo.xsd"},"appinfo.xsd")," schema file. You can use the XSD schema file to validate the XML data."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n\n<appinfo xmlns="https://analysiscenter.veracode.com/schema/2.0/appinfo" \n      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" \n      account_id="<account info>" appinfo_version="1.1" \n      xsi:schemaLocation="https://analysiscenter.veracode.com/schema/2.0/appinfo \n      https://analysiscenter.veracode.com/resource/2.0/appinfo.xsd">\n   <application app_id="<app id>" app_name="<app name>" app_type="Other" archer_app_name="2501" \n      business_criticality="High" \n      business_unit="Not Specified" cots="false" deployment_method="Not Specified" \n      description="MyApp is a teaching web applications." industry_vertical="Other" \n      is_web_application="false" modified_date="2018-06-18T10:25:40-04:00" origin="Open Source" \n      policy="Scan Policy" policy_updated_date="2018-11-04T23:29:42-05:00" tags="" teams="" vast="false">\n      <customfield name="Custom 1" value=""/>\n      <customfield name="Custom 2" value=""/>\n      <customfield name="Custom 3" value=""/>\n      <customfield name="Custom 4" value=""/>\n      <customfield name="Custom 5" value=""/>\n      <customfield name="Custom 6" value=""/>\n      <customfield name="Custom 7" value=""/>\n      <customfield name="Custom 8" value=""/>\n      <customfield name="Custom 9" value=""/>\n      <customfield name="Custom 10" value=""/>\n   </application> \n</appinfo>\n')))}u.isMDXComponent=!0}}]);