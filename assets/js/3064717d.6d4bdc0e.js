"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[95996],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,g=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},62321:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={title:"List eLearning Courses with the REST API",slug:"/r/r_available_courses"},l=void 0,o={unversionedId:"guides/apis/rest_apis/elearning_rest_apis/elearning_api_available_courses",id:"guides/apis/rest_apis/elearning_rest_apis/elearning_api_available_courses",title:"List eLearning Courses with the REST API",description:"Use the eLearning API to get a collection of eLearning courses, in JSON format, available to your organization.",source:"@site/docs/guides/15_apis/04_rest_apis/06_elearning_rest_apis/01_elearning_api_available_courses.md",sourceDirName:"guides/15_apis/04_rest_apis/06_elearning_rest_apis",slug:"/r/r_available_courses",permalink:"/km-docusaurus-test/r/r_available_courses",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"List eLearning Courses with the REST API",slug:"/r/r_available_courses"},sidebar:"tutorialSidebar",previous:{title:"eLearning REST API",permalink:"/km-docusaurus-test/r/c_about_eLearning_API"},next:{title:"Get an eLearning Course by ID with the REST API",permalink:"/km-docusaurus-test/r/r_course_by_ID_API"}},p={},s=[{value:"Resource URL",id:"resource-url",level:2},{value:"Parameters",id:"parameters",level:2},{value:"HTTP Codes",id:"http-codes",level:2},{value:"Example Request",id:"example-request",level:2},{value:"Example Response",id:"example-response",level:2}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Use the eLearning API to get a collection of eLearning courses, in JSON format, available to your organization."),(0,a.kt)("h2",{id:"resource-url"},"Resource URL"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"https://api.veracode.com/elearning/v1/courses\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Query or Path Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"course_id")),(0,a.kt)("td",{parentName:"tr",align:null},"Query"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Optional. Course identifiers. Repeat the query parameters to specify multiple values.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"page")),(0,a.kt)("td",{parentName:"tr",align:null},"Query"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"Optional. Page number. Default is ",(0,a.kt)("inlineCode",{parentName:"td"},"0"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"size")),(0,a.kt)("td",{parentName:"tr",align:null},"Query"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"Optional. Page size. Default is ",(0,a.kt)("inlineCode",{parentName:"td"},"50")," courses per page, maximum is ",(0,a.kt)("inlineCode",{parentName:"td"},"500")," courses per page.")))),(0,a.kt)("h2",{id:"http-codes"},"HTTP Codes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"HTTP Code"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"200")),(0,a.kt)("td",{parentName:"tr",align:null},"Success. Returns an array of Veracode eLearning courses."),(0,a.kt)("td",{parentName:"tr",align:null},"Object")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"400")),(0,a.kt)("td",{parentName:"tr",align:null},"Invalid request."),(0,a.kt)("td",{parentName:"tr",align:null},"Null")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"403")),(0,a.kt)("td",{parentName:"tr",align:null},"Access denied."),(0,a.kt)("td",{parentName:"tr",align:null},"Null")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"404")),(0,a.kt)("td",{parentName:"tr",align:null},"Not found."),(0,a.kt)("td",{parentName:"tr",align:null},"Null")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"500")),(0,a.kt)("td",{parentName:"tr",align:null},"Server-side error."),(0,a.kt)("td",{parentName:"tr",align:null},"Null")))),(0,a.kt)("h2",{id:"example-request"},"Example Request"),(0,a.kt)("p",null,"This example assumes you have correctly configured your credentials and configured any required HMAC authentication libraries."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import java.net.URI;\n        \nimport org.apache.http.HttpEntity;\nimport org.apache.http.client.methods.CloseableHttpResponse;\nimport org.apache.http.client.methods.HttpGet;\nimport org.apache.http.impl.client.HttpClients;\nimport org.apache.http.util.EntityUtils;\nimport org.json.JSONObject;\n        \nimport com.veracode.security.apisigning.ClientCryptoLib;\n        \npublic class GetCoursesClient {\n        \n    // An API Id for authentication\n    private final static String API_KEY = "API_KEY_GOES_HERE";\n        \n    // The secret key corresponding to the API Id\n    private final static String API_SECRET = "API_SECRET_GOES_HERE";\n        \n    public static void main(String[] args) throws Exception {\n        \n        URI uri = URI.create("https://api.veracode.com/elearning/v1/courses");\n        String authHeader = ClientCryptoLib.calculateAuthorizationHeader(ClientCryptoLib.VERACODE_HMAC_SHA_256, API_KEY,\n            API_SECRET, uri.getHost(), uri.getPath(), HttpGet.METHOD_NAME);\n        \n        HttpGet request = new HttpGet(uri);\n        request.addHeader("Authorization", authHeader);\n        \n        CloseableHttpResponse response = HttpClients.createDefault().execute(request);\n        HttpEntity entity = response.getEntity();\n        JSONObject json = new JSONObject(EntityUtils.toString(entity, "UTF-8"));\n        \n        System.out.println(json.toString(4));\n    }\n}\n')),(0,a.kt)("h2",{id:"example-response"},"Example Response"),(0,a.kt)("p",null,"This example response conforms to the Hypertext Application Language (HAL) content type (",(0,a.kt)("inlineCode",{parentName:"p"},"application/hal+json"),"), which includes a link to the ",(0,a.kt)("inlineCode",{parentName:"p"},"reportcards")," endpoint for the courses."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"HTTP/1.1 200 OK\nContent-Type: application/json\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "_embedded": {"courses": [\n        {\n            "_links": {\n                "reportcards": {\n                    "templated": true,\n                    "href": "https://api.veracode.com/elearning/v1/reportcards?course_id=CRLF{&user_id,page,size}"\n                },\n                "self": {"href": "https://api.veracode.com/elearning/v1/courses/CRLF"}\n            },\n            "name": "AppSec Tutorials - CRLF Injection",\n            "courseId": "CRLF"\n        },\n        { ... }\n    ]},\n    "_links": {\n        "next": {"href": "https://api.veracode.com/elearning/v1/courses?page=1&size=50"},\n        "last": {"href": "https://api.veracode.com/elearning/v1/courses?page=1&size=50"},\n        "self": {\n            "templated": true,\n            "href": "https://api.veracode.com/elearning/v1/courses?page=0&size=50{&course_id}"\n        },\n        "first": {"href": "https://api.veracode.com/elearning/v1/courses?page=0&size=50"}\n    },\n    "page": {\n        "number": 0,\n        "size": 50,\n        "totalPages": 2,\n        "totalElements": 54\n    }\n}\n')))}c.isMDXComponent=!0}}]);