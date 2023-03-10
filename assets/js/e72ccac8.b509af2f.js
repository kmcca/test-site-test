"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3268],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},A={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),g=a,h=d["".concat(l,".").concat(g)]||d[g]||A[g]||i;return r?n.createElement(h,o(o({ref:t},u),{},{components:r})):n.createElement(h,o({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},63897:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>A,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={title:"About Greenlight Scan Usage Reports",slug:"/r/c_greenlight_reports"},o=void 0,s={unversionedId:"guides/ides/greenlight/greenlight_scan_usage_reports",id:"guides/ides/greenlight/greenlight_scan_usage_reports",title:"About Greenlight Scan Usage Reports",description:"In the Veracode Platform, you can access two reports for reviewing summaries of Greenlight scan usage. You must have the necessary role to access these reports.",source:"@site/docs/guides/05_ides/02_greenlight/08_greenlight_scan_usage_reports.md",sourceDirName:"guides/05_ides/02_greenlight",slug:"/r/c_greenlight_reports",permalink:"/km-docusaurus-test/r/c_greenlight_reports",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"About Greenlight Scan Usage Reports",slug:"/r/c_greenlight_reports"},sidebar:"tutorialSidebar",previous:{title:"View Debug Logs in Veracode Greenlight for Visual Studio and Veracode Greenlight for VS Code",permalink:"/km-docusaurus-test/r/View_Debug_Logs_in_Veracode_Greenlight_for_Visual_Studio_and_Veracode_for_VS_Code"},next:{title:"Scan Your Code",permalink:"/km-docusaurus-test/guides/static/c_static_overview"}},l={},c=[{value:"Veracode Greenlight Daily Scan Usage Summary",id:"veracode-greenlight-daily-scan-usage-summary",level:2},{value:"Veracode Greenlight Technology Usage Summary",id:"veracode-greenlight-technology-usage-summary",level:2}],u={toc:c};function A(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In the Veracode Platform, you can access two reports for reviewing summaries of Greenlight scan usage. You must have the necessary ",(0,a.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_API_roles_details"},"role to access these reports"),"."),(0,a.kt)("p",null,"Go to ",(0,a.kt)("strong",{parentName:"p"},"Reports")," > ",(0,a.kt)("strong",{parentName:"p"},"Export Data"),". Click ",(0,a.kt)("img",{src:r(64612).Z,width:"13",height:"13"})," to initiate the report and then click ",(0,a.kt)("img",{src:r(12769).Z,width:"16",height:"13"})," when it is available, indicating that the report has finished generating."),(0,a.kt)("h2",{id:"veracode-greenlight-daily-scan-usage-summary"},"Veracode Greenlight Daily Scan Usage Summary"),(0,a.kt)("p",null,"This summary logs a row for the scan activity of each user that scanned with Veracode Greenlight on each day. If the user did not scan on a particular day, there is no entry in the report. The fields reported are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Email Address: email of the user who performed the scan."),(0,a.kt)("li",{parentName:"ul"},"Created Day: date the scan occurred."),(0,a.kt)("li",{parentName:"ul"},"Successful Active Scans: number of successful scans the users initiated from their IDE."),(0,a.kt)("li",{parentName:"ul"},"Successful Auto-Scans: number of successful scans automatically initiated when the IDE saved the file."),(0,a.kt)("li",{parentName:"ul"},"Successful API Scans: number of scans initiated by the Veracode Greenlight API in the build/CI workflow."),(0,a.kt)("li",{parentName:"ul"},"Total Unsuccessful Scans: number of unsuccessful active, auto-scan, or API scans."),(0,a.kt)("li",{parentName:"ul"},"Total Successful Scans: number of successful and unsuccessful, active, auto-scan, or API scans.")),(0,a.kt)("h2",{id:"veracode-greenlight-technology-usage-summary"},"Veracode Greenlight Technology Usage Summary"),(0,a.kt)("p",null,"This summary logs the information about the IDE and plugin used during the Greenlight scan. The fields in the report are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Email Address: email address of the user who performed the scan."),(0,a.kt)("li",{parentName:"ul"},"IDE: IDE used, either Eclipse, IntelliJ or Visual Studio."),(0,a.kt)("li",{parentName:"ul"},"IDE Version: version of the IDE use when the scan was submitted."),(0,a.kt)("li",{parentName:"ul"},"Plugin Version: Veracode Greenlight plugin version when the scan was submitted."),(0,a.kt)("li",{parentName:"ul"},"Language: language of the code scanned, either:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"net: C#, VB.NET, ASP.NET"),(0,a.kt)("li",{parentName:"ul"},"js: JavaScript"),(0,a.kt)("li",{parentName:"ul"},"java: Java"))),(0,a.kt)("li",{parentName:"ul"},"Scan Count: total number of scans submitted plus the information for the IDE, IDE version, plugin version, and language.")),(0,a.kt)("p",null,"If you perform Veracode Greenlight scans using the API, the IDE, IDE version, and plugin version columns are blank in the Veracode Greenlight Technology Usage Summary report."))}A.isMDXComponent=!0},12769:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAANCAYAAACgu+4kAAAACXBIWXMAABJ0AAASdAHeZh94AAAAB3RJTUUH4wsOESoLLlZZSQAAAAd0RVh0QXV0aG9yAKmuzEgAAAAMdEVYdERlc2NyaXB0aW9uABMJISMAAAAKdEVYdENvcHlyaWdodACsD8w6AAAADnRFWHRDcmVhdGlvbiB0aW1lADX3DwkAAAAJdEVYdFNvZnR3YXJlAF1w/zoAAAALdEVYdERpc2NsYWltZXIAt8C0jwAAAAh0RVh0V2FybmluZwDAG+aHAAAAB3RFWHRTb3VyY2UA9f+D6wAAAAh0RVh0Q29tbWVudAD2zJa/AAAABnRFWHRUaXRsZQCo7tInAAAB50lEQVQokXWSMUsrQQCEv91s9ogEi2AfRQQ7sY8SUITUwT8g/gP/iIWdYm9rK6YR0gkiSZFAbARRhEvA4HnmsvMKyfnMe065OzM7zKxJ01TMwTlHp9Ph+vqa8XjM8vIyjUaDSqVClmU/ufNiYwzWWvr9PmdnZ7y8vLC9vc3W1hZLS0vzdOw/J7MLa/HeE0UR3nuMMf/n/WYwS2Kt/VX8w0ASxhiKxSJA/qoknHOUSiX+5s6Qd+CcI01TOp0Oo9GIfr+PMYYoinh7e+Pm5oaNjQ2q1SrWWkIIX0lnK3jvmUwmXFxccHp6ShzHRFEEQJIkVKtVjo6O2NnZIYSQr2FnEQGKxSKNRoNms4n3no+PD9I0ZTQasbq6yubmZl5woVD4iv75+anX11fd3d3p+flZkpRlmU5OTrS+vq6VlRUdHBzo/v5ekpQkiR4fHzUcDjWZTIQktVot7e3t6fz8XNPpVJLU7Xa1v7+vw8NDPTw8aIZer6fj42Pd3t5KkhxAlmU8PT1xeXnJ+/s7IQRCCCwuLlIul7m6uiJJErz3DAYD4jimXq9/r+Ccw1pLq9Wi3W4TQqBQKFAqlQghkCQJkrDWEscxtVqNhYWFb4NKpcLu7m7evKRcYIxhOp1ijMEYw3g8Zm1tLf8XfwB9pwiRkbG0VgAAAABJRU5ErkJggg=="},64612:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAB3RJTUUH4wsOESk6VKUKsAAAAAd0RVh0QXV0aG9yAKmuzEgAAAAMdEVYdERlc2NyaXB0aW9uABMJISMAAAAKdEVYdENvcHlyaWdodACsD8w6AAAADnRFWHRDcmVhdGlvbiB0aW1lADX3DwkAAAAJdEVYdFNvZnR3YXJlAF1w/zoAAAALdEVYdERpc2NsYWltZXIAt8C0jwAAAAh0RVh0V2FybmluZwDAG+aHAAAAB3RFWHRTb3VyY2UA9f+D6wAAAAh0RVh0Q29tbWVudAD2zJa/AAAABnRFWHRUaXRsZQCo7tInAAACEUlEQVQokY2STUiTARzGf9O35dfUZB8apaFvZrjRhyAFjsoKIrCDh4hSL4EFXhqdLMw+KAgkDx06CEKJlB1MpCLClcw+jMCi5qJ0KqJz5hYzXufnu38HUdRTv+vDjwceHmQVXbTQb/F2t8n1Sodk2mxir6iXtm6fhP/OSHTaL+0d72V4LCoGERFkHq/nKY13HvB5EgpLnOzOSmYm+JOPn4ZJLSjGbtIYSNjPravVICIy+q5ZzpUWy4Hyarn3sEP6J6IiIrIQ/iWtd11yODdHLGnpop5vEF8kJspC6BuPmlqYNJdw83Ydx9V0VpB4E9npWah5KkuZs5i2ZmCMA2XI00pnwMLpyzXrBHSdyOg4iflFXGg4SaJiIN5kYVuSAWWwz43Rdoy99lzWYTCwRbVjdWxmI8qOkgouOfdRaN6QxMWxKXGNMB+kp6eXL/rO5SH+i3G31FY5pai2UxRii4QCQ0xpOrI4R2QeMrbns8uWgmFN8Uj/V/wTcxwty0OR2TFeNLlockcxpWVjP1LKiVPZFNhSVoWI38395ldMZpZx5ZCKQmyBP4EB+r3TpJkh72AMc0oyAHNBH6+7unjZ0UZfOIeLN6rYYzGi6EsxElIdlJ9VSdZ+0Pe8hcbQIKo1CW3Ch8fjJWYtoqbOxRlnznJ1dHxEPjxrl8GIJtr0lHjfPpFrK9+rrJfHb75LcEoTfc0m/wDwxir1GOMFLQAAAABJRU5ErkJggg=="}}]);