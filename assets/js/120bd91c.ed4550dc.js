"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[95045],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return r?n.createElement(g,l(l({ref:t},u),{},{components:r})):n.createElement(g,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},16222:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={title:"Get an eLearning Course by ID with the REST API",slug:"/r/r_course_by_ID_API"},l=void 0,o={unversionedId:"guides/apis/rest_apis/elearning_rest_apis/elearning_api_course_by_id",id:"guides/apis/rest_apis/elearning_rest_apis/elearning_api_course_by_id",title:"Get an eLearning Course by ID with the REST API",description:"Use the eLearning API to return the name of a course, in JSON format, for the specified course ID. For a list of course IDs available to your organization, use the courses endpoint.",source:"@site/docs/guides/15_apis/04_rest_apis/06_elearning_rest_apis/02_elearning_api_course_by_id.md",sourceDirName:"guides/15_apis/04_rest_apis/06_elearning_rest_apis",slug:"/r/r_course_by_ID_API",permalink:"/km-docusaurus-test/r/r_course_by_ID_API",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Get an eLearning Course by ID with the REST API",slug:"/r/r_course_by_ID_API"},sidebar:"tutorialSidebar",previous:{title:"List eLearning Courses with the REST API",permalink:"/km-docusaurus-test/r/r_available_courses"},next:{title:"List eLearning Users with the REST API",permalink:"/km-docusaurus-test/r/r_elearning_users_API"}},s={},p=[{value:"Resource URL",id:"resource-url",level:2},{value:"Parameters",id:"parameters",level:2},{value:"HTTP Codes",id:"http-codes",level:2},{value:"Example Request",id:"example-request",level:2},{value:"Example Response",id:"example-response",level:2}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Use the eLearning API to return the name of a course, in JSON format, for the specified course ID. For a list of course IDs available to your organization, use the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/r_available_courses"},(0,a.kt)("inlineCode",{parentName:"a"},"courses"))," endpoint."),(0,a.kt)("h2",{id:"resource-url"},"Resource URL"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"https://api.veracode.com/elearning/v1/courses/{course_id}\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Query or Path Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"course_id *"),(0,a.kt)("br",null)," ",(0,a.kt)("strong",{parentName:"td"},"Required")),(0,a.kt)("td",{parentName:"tr",align:null},"Path"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Course unique identifier.")))),(0,a.kt)("h2",{id:"http-codes"},"HTTP Codes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"HTTP Code"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"200")),(0,a.kt)("td",{parentName:"tr",align:null},"Success. Returns a course for the specified ID."),(0,a.kt)("td",{parentName:"tr",align:null},"Course")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"400")),(0,a.kt)("td",{parentName:"tr",align:null},"Invalid request."),(0,a.kt)("td",{parentName:"tr",align:null},"Null")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"404")),(0,a.kt)("td",{parentName:"tr",align:null},"Not found."),(0,a.kt)("td",{parentName:"tr",align:null},"Null")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"403")),(0,a.kt)("td",{parentName:"tr",align:null},"Access denied."),(0,a.kt)("td",{parentName:"tr",align:null},"Null")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"500")),(0,a.kt)("td",{parentName:"tr",align:null},"Server-side error."),(0,a.kt)("td",{parentName:"tr",align:null},"Null")))),(0,a.kt)("h2",{id:"example-request"},"Example Request"),(0,a.kt)("p",null,"This example assumes you have correctly configured your credentials and configured any required HMAC authentication libraries."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import java.net.URI;\n        \nimport org.apache.http.HttpEntity;\nimport org.apache.http.client.methods.CloseableHttpResponse;\nimport org.apache.http.client.methods.HttpGet;\nimport org.apache.http.impl.client.HttpClients;\nimport org.apache.http.util.EntityUtils;\nimport org.json.JSONObject;\n        \nimport com.veracode.security.apisigning.ClientCryptoLib;\n        \npublic class GetCourseClient {\n        \n    // An API Id for authentication\n    private final static String API_KEY = "API_KEY_GOES_HERE";\n        \n    // The secret key corresponding to the API Id\n    private final static String API_SECRET = "API_SECRET_GOES_HERE";\n        \n    public static void main(String[] args) throws Exception {\n        \n        URI uri = URI.create("https://api.veracode.com/elearning/v1/courses/CRLF");\n        String authHeader = ClientCryptoLib.calculateAuthorizationHeader(ClientCryptoLib.VERACODE_HMAC_SHA_256, API_KEY,\n          API_SECRET, uri.getHost(), uri.getPath(), HttpGet.METHOD_NAME);\n        \n        HttpGet request = new HttpGet(uri);\n        request.addHeader("Authorization", authHeader);\n        \n        CloseableHttpResponse response = HttpClients.createDefault().execute(request);\n        HttpEntity entity = response.getEntity();\n        JSONObject json = new JSONObject(EntityUtils.toString(entity, "UTF-8"));\n        \n        System.out.println(json.toString(4));\n    }\n}\n')),(0,a.kt)("h2",{id:"example-response"},"Example Response"),(0,a.kt)("p",null,"This example response conforms to the Hypertext Application Language content type ",(0,a.kt)("inlineCode",{parentName:"p"},"application/hal+json"),", which includes a link to the ",(0,a.kt)("inlineCode",{parentName:"p"},"reportcards")," endpoint for the given course."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"HTTP/1.1 200 OK\nContent-Type: application/json\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "_links": {\n    "reportcards": {\n      "templated": true,\n      "href": "https://api.veracode.com/elearning/v1/reportcards?course_id=CRLF{user_id,page,size}"\n    },\n    "self": {\n      "href": "https://api.veracode.com/elearning/v1/courses/CRLF"\n    }\n  },\n  "name": "AppSec Tutorials - CRLF Injection",\n  "courseId": "CRLF"\n}\n')))}c.isMDXComponent=!0}}]);