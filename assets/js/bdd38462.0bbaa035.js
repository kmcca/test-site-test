"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5424],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=c(a),m=r,_=l["".concat(i,".").concat(m)]||l[m]||d[m]||o;return a?n.createElement(_,s(s({ref:t},u),{},{components:a})):n.createElement(_,s({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=l;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,s[1]=p;for(var c=2;c<o;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}l.displayName="MDXCreateElement"},48655:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={title:"Updating a Development Sandbox with the REST API",slug:"/r/c_sandbox_update_rest"},s=void 0,p={unversionedId:"guides/apis/rest_apis/dev_sandbox_rest_api/sandbox_api_update",id:"guides/apis/rest_apis/dev_sandbox_rest_api/sandbox_api_update",title:"Updating a Development Sandbox with the REST API",description:"Use this command to update a sandbox:",source:"@site/docs/guides/15_apis/04_rest_apis/04_dev_sandbox_rest_api/03_sandbox_api_update.md",sourceDirName:"guides/15_apis/04_rest_apis/04_dev_sandbox_rest_api",slug:"/r/c_sandbox_update_rest",permalink:"/km-docusaurus-test/r/c_sandbox_update_rest",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Updating a Development Sandbox with the REST API",slug:"/r/c_sandbox_update_rest"},sidebar:"tutorialSidebar",previous:{title:"Promoting a Development Sandbox Scan with the REST API",permalink:"/km-docusaurus-test/r/c_sandbox_create_rest"},next:{title:"Deleting a Development Sandbox with the REST API",permalink:"/km-docusaurus-test/r/c_sandbox_delete_rest"}},i={},c=[],u={toc:c};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Use this command to update a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_about_sandbox"},"sandbox"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'http --auth-type=veracode_hmac PUT "https://api.veracode.com/appsec/v1/applications/{applicationGuid}/sandboxes/{sandboxGuid}" < input.json\n')),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_apps_intro"},"Applications API")," to get the GUID for an ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/r_applications_info"},"application")," or ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/r_applications_sandboxes"},"development sandbox"),"."),(0,r.kt)("p",null,"The API passes the JSON file that you populate with the necessary values as shown in this example payload:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "custom_fields": [\n    {\n      "name": "Custom 1",\n      "value": "test again"\n    }\n  ],\n  "name": "Sandbox 2.5",\n  "auto_create": true\n}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/t_create_custom_metadata"},"custom field")," name must be in the range of ",(0,r.kt)("inlineCode",{parentName:"p"},"Custom 1")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"Custom 5"),"."))}d.isMDXComponent=!0}}]);