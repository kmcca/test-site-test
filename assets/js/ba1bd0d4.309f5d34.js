"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[66026],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(r),m=a,g=c["".concat(p,".").concat(m)]||c[m]||d[m]||i;return r?n.createElement(g,l(l({ref:t},u),{},{components:r})):n.createElement(g,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},43852:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const i={title:"Get eLearning Progress Reports with the REST API",slug:"/r/r_elearning_progress_API"},l=void 0,o={unversionedId:"guides/apis/rest_apis/elearning_rest_apis/elearning_api_progress_reports",id:"guides/apis/rest_apis/elearning_rest_apis/elearning_api_progress_reports",title:"Get eLearning Progress Reports with the REST API",description:"Use the eLearning API to return a collection of progress status report cards, in JSON format, for the eLearning users you manage. The response includes report cards of all eLearning users in your organization.",source:"@site/docs/guides/15_apis/04_rest_apis/06_elearning_rest_apis/05_elearning_api_progress_reports.md",sourceDirName:"guides/15_apis/04_rest_apis/06_elearning_rest_apis",slug:"/r/r_elearning_progress_API",permalink:"/km-docusaurus-test/r/r_elearning_progress_API",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Get eLearning Progress Reports with the REST API",slug:"/r/r_elearning_progress_API"},sidebar:"tutorialSidebar",previous:{title:"Get eLearning Learner Details with the REST API",permalink:"/km-docusaurus-test/r/r_course_by_ID_API"},next:{title:"Findings REST API",permalink:"/km-docusaurus-test/r/c_findings_v2_intro"}},p={},s=[{value:"Resource URL",id:"resource-url",level:2},{value:"Parameters",id:"parameters",level:2},{value:"HTTP Codes",id:"http-codes",level:2},{value:"Example Request",id:"example-request",level:2},{value:"Example Response",id:"example-response",level:2}],u={toc:s};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Use the eLearning API to return a collection of progress status report cards, in JSON format, for the eLearning users you manage. The response includes report cards of all eLearning users in your organization."),(0,a.kt)("h2",{id:"resource-url"},"Resource URL"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"https://api.veracode.com/elearning/v1/reportcards\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Query or Path Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"user_id ")),(0,a.kt)("td",{parentName:"tr",align:null},"Query"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Optional. User identifier.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"course_id")),(0,a.kt)("td",{parentName:"tr",align:null},"Query"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Optional. Course identifier.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"page")),(0,a.kt)("td",{parentName:"tr",align:null},"Query"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"Optional. Page number. Default is ",(0,a.kt)("inlineCode",{parentName:"td"},"0"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"size")),(0,a.kt)("td",{parentName:"tr",align:null},"Query"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"Optional. Page size. Default is ",(0,a.kt)("inlineCode",{parentName:"td"},"50")," users per page, maximum is ",(0,a.kt)("inlineCode",{parentName:"td"},"500")," users per page.")))),(0,a.kt)("h2",{id:"http-codes"},"HTTP Codes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"HTTP Code"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"200")),(0,a.kt)("td",{parentName:"tr",align:null},"Success. Array of progress status report cards."),(0,a.kt)("td",{parentName:"tr",align:null},"Object")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"400")),(0,a.kt)("td",{parentName:"tr",align:null},"Invalid request."),(0,a.kt)("td",{parentName:"tr",align:null},"Null")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"403")),(0,a.kt)("td",{parentName:"tr",align:null},"Access denied."),(0,a.kt)("td",{parentName:"tr",align:null},"Null")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"404")),(0,a.kt)("td",{parentName:"tr",align:null},"Not found."),(0,a.kt)("td",{parentName:"tr",align:null},"Null")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"500")),(0,a.kt)("td",{parentName:"tr",align:null},"Server-side error."),(0,a.kt)("td",{parentName:"tr",align:null},"Null")))),(0,a.kt)("h2",{id:"example-request"},"Example Request"),(0,a.kt)("p",null,"This example assumes you have correctly configured your credentials and configured any required HMAC authentication libraries."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import java.net.URI;\n        \nimport org.apache.http.HttpEntity;\nimport org.apache.http.client.methods.CloseableHttpResponse;\nimport org.apache.http.client.methods.HttpGet;\nimport org.apache.http.impl.client.HttpClients;\nimport org.apache.http.util.EntityUtils;\nimport org.json.JSONObject;\n        \nimport com.veracode.security.apisigning.ClientCryptoLib;\n        \npublic class GetReportCardsClient {\n        \n    // An API Id for authentication\n    private final static String API_KEY = "API_KEY_GOES_HERE";\n        \n    // The secret key corresponding to the API Id\n    private final static String API_SECRET = "API_SECRET_GOES_HERE";\n        \n    public static void main(String[] args) throws Exception {\n        \n        URI uri = URI.create(\n          "https://api.veracode.com/elearning/v1/reportcards?course_id=CRLF&user_id=jsmith");\n        String authHeader = ClientCryptoLib.calculateAuthorizationHeader(ClientCryptoLib.VERACODE_HMAC_SHA_256, API_KEY,\n          API_SECRET, uri.getHost(), uri.getPath().concat("?"+uri.getQuery()), HttpGet.METHOD_NAME);\n        \n        HttpGet request = new HttpGet(uri);\n        request.addHeader("Authorization", authHeader);\n        \n        CloseableHttpResponse response = HttpClients.createDefault().execute(request);\n        HttpEntity entity = response.getEntity();\n        JSONObject json = new JSONObject(EntityUtils.toString(entity, "UTF-8"));\n        \n        System.out.println(json.toString(4));\n     }\n}\n')),(0,a.kt)("h2",{id:"example-response"},"Example Response"),(0,a.kt)("p",null,"This example response conforms to the Hypertext Application Language content type ",(0,a.kt)("inlineCode",{parentName:"p"},"application/hal+json"),", which includes a link to the ",(0,a.kt)("inlineCode",{parentName:"p"},"learner")," endpoint and ",(0,a.kt)("inlineCode",{parentName:"p"},"course")," endpoint."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"HTTP/1.1 200 OK\nContent-Type: application/json\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "_embedded": {"reportcards": [{\n    "timeSpentOnCourse": 0.24,\n    "_links": {\n        "learner": {"href": "https://api.veracode.com/elearning/v1/learners/jsmith"},\n        "course": {"href": "https://api.veracode.com/elearning/v1/courses/CRLF"}\n     },\n     "courseStartedDate": "2018-05-11T00:00:00.000Z",\n     "courseStatus": "Passed",\n     "progressPercent": 100,\n     "numberOfAttempts": 1,\n     "courseCompletedDate": "2018-05-11T00:00:00.000Z"\n   }]},\n   "_links": {"self": {"href": "https://api.veracode.com/elearning/v1/reportcards?user_id=jsmith&course_id=CRLF&page=0&size=50"}},\n   "page": {\n      "number": 0,\n      "size": 50,\n      "totalPages": 1,\n      "totalElements": 1\n   }\n } \n')))}d.isMDXComponent=!0}}]);