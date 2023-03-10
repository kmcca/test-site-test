"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[52750],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(a),m=n,f=c["".concat(s,".").concat(m)]||c[m]||u[m]||l;return a?r.createElement(f,i(i({ref:t},d),{},{components:a})):r.createElement(f,i({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},29122:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const l={title:"uploadlargefile.do",slug:"/r/r_uploadlargefile"},i=void 0,o={unversionedId:"guides/apis/xml_apis/upload_xml_apis/uploadlargefile_do",id:"guides/apis/xml_apis/upload_xml_apis/uploadlargefile_do",title:"uploadlargefile.do",description:"The uploadlargefile.do call uploads a single file as a set of parts to an existing build or creates a build. Uploading the file in parts avoids timeout errors, which can occur when uploading a large file using the uploadfile.do call.",source:"@site/docs/guides/15_apis/05_xml_apis/02_upload_xml_apis/21_uploadlargefile_do.md",sourceDirName:"guides/15_apis/05_xml_apis/02_upload_xml_apis",slug:"/r/r_uploadlargefile",permalink:"/km-docusaurus-test/r/r_uploadlargefile",draft:!1,tags:[],version:"current",sidebarPosition:21,frontMatter:{title:"uploadlargefile.do",slug:"/r/r_uploadlargefile"},sidebar:"tutorialSidebar",previous:{title:"uploadfile.do",permalink:"/km-docusaurus-test/r/r_uploadfile"},next:{title:"XML API Prescan Status",permalink:"/km-docusaurus-test/r/c_prescan_table"}},s={},p=[{value:"Resource URL",id:"resource-url",level:2},{value:"Header Requirements",id:"header-requirements",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Java Example",id:"java-example",level:2},{value:"Java Results",id:"java-results",level:2},{value:"Python Example",id:"python-example",level:2}],d={toc:p};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"uploadlargefile.do")," call uploads a single file as a set of parts to an existing build or creates a build. Uploading the file in parts avoids timeout errors, which can occur when uploading a large file using the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/r_uploadfile"},(0,n.kt)("inlineCode",{parentName:"a"},"uploadfile.do"))," call."),(0,n.kt)("p",null,"Veracode recommends using this call as an alternative to the ",(0,n.kt)("inlineCode",{parentName:"p"},"uploadfile.do")," call. Before using this API, Veracode strongly recommends that you read ",(0,n.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_API_usage_guidelines"},"API Usage and Access Guidelines"),". Ensure you access the APIs with the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs"},"domain for your region"),"."),(0,n.kt)("p",null,"Before uploading additional files, ensure that:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"An upload or prescan is not in progress."),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/r_beginscan"},(0,n.kt)("inlineCode",{parentName:"a"},"beginscan.do"))," call is not in progress."),(0,n.kt)("li",{parentName:"ul"},"If you recently ran the ",(0,n.kt)("inlineCode",{parentName:"li"},"beginscan.do")," call, you did not set ",(0,n.kt)("inlineCode",{parentName:"li"},"auto_scan")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"true"),".")),(0,n.kt)("p",null,"Because the ",(0,n.kt)("inlineCode",{parentName:"p"},"uploadlargefile.do")," call creates a build, if one does not already exist or if the most recent build has a published static scan, you do not need to call ",(0,n.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/r_createbuild"},(0,n.kt)("inlineCode",{parentName:"a"},"createbuild.do")),". If the call creates a build, the build name is the date of the build with the scan type. For example, ",(0,n.kt)("inlineCode",{parentName:"p"},"03 Mar 2019 Static"),"."),(0,n.kt)("p",null,"If you want to upload a file that does not have the same name as a previous file, you can use the filename parameter to change the name, enabling flaw-matching with previously scanned files."),(0,n.kt)("h2",{id:"resource-url"},"Resource URL"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"https://analysiscenter.veracode.com/api/5.0/uploadlargefile.do\n")),(0,n.kt)("h2",{id:"header-requirements"},"Header Requirements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Set ",(0,n.kt)("inlineCode",{parentName:"li"},"Content-Length: <number of bytes in the file>")),(0,n.kt)("li",{parentName:"ul"},"Set ",(0,n.kt)("inlineCode",{parentName:"li"},"Content-Type: binary/octet-stream"))),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"appid"),(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Integer"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Application ID.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"file"),(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required")),(0,n.kt)("td",{parentName:"tr",align:"left"},"String"),(0,n.kt)("td",{parentName:"tr",align:"left"},"File to upload. The maximum file size is 2GB.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"NOTE:")," ",(0,n.kt)("br",null),"You must enter the ",(0,n.kt)("code",null,"@")," symbol before the entire pathname, including the specific filename.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"filename")),(0,n.kt)("td",{parentName:"tr",align:"left"},"String"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Enter a new, unique filename for the uploaded file. The filename cannot begin or end with slashes or periods.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"sandbox_id")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Integer"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Enter the ID of the target sandbox for the upload file.")))),(0,n.kt)("h2",{id:"java-example"},"Java Example"),(0,n.kt)("p",null,"This call supports the HTTP POST method. Because HTTPie does not support streaming uploads, you can use this Java example as an alternative to HTTPie."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"java -jar vosp-api-wrappers-java-<version>.jar -vid <Veracode API ID> -vkey <Veracode API key> -action uploadfile -appid <Veracode application ID> -filepath c:\\Users\\<username>\\<filename>\n")),(0,n.kt)("h2",{id:"java-results"},"Java Results"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"uploadlargefile.do")," call returns the ",(0,n.kt)("inlineCode",{parentName:"p"},"filelist")," XML document, which references the ",(0,n.kt)("a",{parentName:"p",href:"https://analysiscenter.veracode.com/resource/2.0/filelist.xsd"},"filelist.xsd")," schema file. You can use the XSD schema file to validate the XML data."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n\n<filelist xmlns="https://analysiscenter.veracode.com/schema/2.0/filelist" \n      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" \n      account_id=<account ID> app_id=<application ID> build_id=<build ID> filelist_version="1.1" \n      xsi:schemaLocation="https://analysiscenter.veracode.com/schema/2.0/filelist \n      https://analysiscenter.veracode.com/resource/2.0/filelist.xsd">\n   <file file_id=<file ID> file_name="<filename>" file_status="Uploaded"/>\n</filelist>\n')),(0,n.kt)("h2",{id:"python-example"},"Python Example"),(0,n.kt)("p",null,"This call supports the HTTP POST method. Because HTTPie does not support streaming uploads, you can use this Python script example as an alternative to HTTPie."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"import requests\nimport sys\nfrom veracode_api_signing.plugin_requests import RequestsAuthPluginVeracodeHMAC\n\napp_id = 123456 #insert <Veracode application id> here\nfilename = 'verademo.war' #insert <filename> here\nvid = 123456 #insert veracode api key id here\nvkey = 1234567890 #insert veracode api key secret here\n\ntry:\n    with open(filename, 'rb') as file:\n        resp = requests.post('https://analysiscenter.veracode.com/api/5.0/uploadlargefile.do',\n                headers={'Content-Type': 'binary/octet-stream'},params={'app_id': app_id, 'filename': filename},\n                data=file,auth=RequestsAuthPluginVeracodeHMAC(vid,vkey))\nexcept Exception as err:\n    print(f'Error occurred: {err}')\n    sys.exit(1)\nelse:\n    print(f'Req Headers: {resp.request.headers}')\n    print(f'Resp Code: {resp.status_code}\\nResp Text: {resp.text}')\n")))}u.isMDXComponent=!0}}]);