"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[44295],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var d=r.createContext({}),s=function(t){var e=r.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=s(t.components);return r.createElement(d.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,d=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),u=s(n),m=a,g=u["".concat(d,".").concat(m)]||u[m]||p[m]||i;return n?r.createElement(g,o(o({ref:e},c),{},{components:n})):r.createElement(g,o({ref:e},c))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var d in e)hasOwnProperty.call(e,d)&&(l[d]=e[d]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},63966:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={title:"Troubleshooting Prescan Errors for a Dynamic Analysis",slug:"/r/Troubleshooting_Prescan_Errors"},o=void 0,l={unversionedId:"guides/dynamic_analysis/scheduling_dast_scans/prescan_da_web_urls/troubleshoot_da_prescan_errors",id:"guides/dynamic_analysis/scheduling_dast_scans/prescan_da_web_urls/troubleshoot_da_prescan_errors",title:"Troubleshooting Prescan Errors for a Dynamic Analysis",description:"Prescan errors comprise two types: connection errors and authentication errors.",source:"@site/docs/guides/10_dynamic_analysis/04_scheduling_dast_scans/02_prescan_da_web_urls/03_troubleshoot_da_prescan_errors.md",sourceDirName:"guides/10_dynamic_analysis/04_scheduling_dast_scans/02_prescan_da_web_urls",slug:"/r/Troubleshooting_Prescan_Errors",permalink:"/km-docusaurus-test/r/Troubleshooting_Prescan_Errors",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Troubleshooting Prescan Errors for a Dynamic Analysis",slug:"/r/Troubleshooting_Prescan_Errors"},sidebar:"tutorialSidebar",previous:{title:"Reviewing Dynamic Analysis Prescan Errors",permalink:"/km-docusaurus-test/r/c_prescan_faillure"},next:{title:"Video: Troubleshoot Dynamic Analysis Prescan Connection Errors",permalink:"/km-docusaurus-test/r/c_was_video_prescan_errors_connection"}},d={},s=[{value:"Connection Errors",id:"connection-errors",level:2},{value:"Authentication Errors",id:"authentication-errors",level:2}],c={toc:s};function p(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Prescan errors comprise two types: connection errors and authentication errors."),(0,a.kt)("p",null,"These tables provide corrective actions for prescan connection and authentication errors. After troubleshooting the problem you are experiencing, verify the Dynamic Analysis configuration and run prescan again. If a failure persists, contact Veracode Technical Support."),(0,a.kt)("h2",{id:"connection-errors"},"Connection Errors"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Error Message"),(0,a.kt)("th",{parentName:"tr",align:null},"Definition and Corrective Action"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Unresolvable hostname")),(0,a.kt)("td",{parentName:"tr",align:null},"Veracode was not able to resolve the hostname. Verify the hostname and try again.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Unreachable port")),(0,a.kt)("td",{parentName:"tr",align:null},"Veracode was not able to reach the destination port. Verify the port and try again.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Connection error")),(0,a.kt)("td",{parentName:"tr",align:null},"Veracode was not able to connect to the target URL. Verify the URL and its connectivity, and try again.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Server error")),(0,a.kt)("td",{parentName:"tr",align:null},"There is an error on the target server. Verify the server is connected and available, and try again.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"No target found")),(0,a.kt)("td",{parentName:"tr",align:null},"Veracode did not find the target URL at the site. Verify you have entered the correct URL and try again.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Empty response received")),(0,a.kt)("td",{parentName:"tr",align:null},"Veracode received an empty response from the target URL. Verify the web server is correctly configured and try again.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Blocklisted URL")),(0,a.kt)("td",{parentName:"tr",align:null},"This URL is on the blocklist and will not be analyzed. Enter a new URL.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"No response from server")),(0,a.kt)("td",{parentName:"tr",align:null},"Veracode received no response from the host server of the target URL. Verify the URL and its connectivity, and try again.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Non-allowlisted URL")),(0,a.kt)("td",{parentName:"tr",align:null},"This URL is not on the allowlist and will not be analyzed. Enter a new URL.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Excessive redirect")),(0,a.kt)("td",{parentName:"tr",align:null},"This URL has an infinite or excessively long redirection loop and will not be analyzed. Enter a new URL.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Timeout error")),(0,a.kt)("td",{parentName:"tr",align:null},"This URL returned an HTTP protocol-level timeout error indicating there is a problem with network congestion or connection throttling by a proxy server. Verify your network infrastructure and connectivity, and try again.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Malformed URL")),(0,a.kt)("td",{parentName:"tr",align:null},"This URL does not adhere to the URI syntax. Re-enter the URL with the correct syntax.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Non-allowlisted URL redirection")),(0,a.kt)("td",{parentName:"tr",align:null},"The request to the target URL results in a redirection. Verify the URL and try again.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Blocklisted URL redirection")),(0,a.kt)("td",{parentName:"tr",align:null},"The request to the target URL redirects to a URL that is on the blocklist and will not be analyzed. Enter a new URL.")))),(0,a.kt)("h2",{id:"authentication-errors"},"Authentication Errors"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Error Message"),(0,a.kt)("th",{parentName:"tr",align:null},"Definition and Corrective Action"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Missing credentials")),(0,a.kt)("td",{parentName:"tr",align:null},"You have not provided any browser-based credentials. Enter the credentials and try again.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Invalid credentials")),(0,a.kt)("td",{parentName:"tr",align:null},"The browser-based credentials you provided are invalid. Verify the credentials and try again.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Selenium script failure")),(0,a.kt)("td",{parentName:"tr",align:null},"The Selenium login script you provided has failed. Record a new script and try again.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Browser failure")),(0,a.kt)("td",{parentName:"tr",align:null},"The browser was unresponsive while executing the login script. Record a new script and try again.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Verification text failure")),(0,a.kt)("td",{parentName:"tr",align:null},"The verification text failed. Verify that the verification text is present on the page after login.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Auto-login failure")),(0,a.kt)("td",{parentName:"tr",align:null},"Auto-login failed. Verify your credentials and try again.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Verification text failure")),(0,a.kt)("td",{parentName:"tr",align:null},"The verification text failed. Edit the login script to provide the verification text that is only present after successful login.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Authentication alert")),(0,a.kt)("td",{parentName:"tr",align:null},"No browser authentication was encountered. Verify the type of authentication necessary for the website and try again.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Logout pattern failure")),(0,a.kt)("td",{parentName:"tr",align:null},"No logout patterns were detected. Verify the logout pattern, ensure that at least one resource that requires authentication is accessible from the target URL. Then, try again.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Logout pattern failure")),(0,a.kt)("td",{parentName:"tr",align:null},"Too many logout patterns were detected. Verify the logout pattern and the authentication credentials, and try again.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Logout pattern failure")),(0,a.kt)("td",{parentName:"tr",align:null},"Veracode could not detect any logout patterns. Contact Veracode Technical Support if this error persists.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Logout pattern failure")),(0,a.kt)("td",{parentName:"tr",align:null},"Veracode detected numerous logout patterns. Verify the logout pattern and authentication credentials, and try again.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Blocklisted URL")),(0,a.kt)("td",{parentName:"tr",align:null},"The login verification is blocklisted. Change the URL or remove it from the blocklist.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"URL error")),(0,a.kt)("td",{parentName:"tr",align:null},"Requests to the login verification URL resulted in a network error. Correct the URL and ensure your web server is online.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Non-allowlisted URL")),(0,a.kt)("td",{parentName:"tr",align:null},"The login verification URL is not an allowed host. Change the URL and ensure it is not on the blocklist.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Redirection error")),(0,a.kt)("td",{parentName:"tr",align:null},"Requests to the login verification URL resulted in numerous HTTP redirects. Correct the URL or change the redirects.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Unsuccessful response")),(0,a.kt)("td",{parentName:"tr",align:null},"Requests to the login verification URL resulted in an unsuccessful HTTP response. Correct the URL and ensure your web server is online.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Malformed URL")),(0,a.kt)("td",{parentName:"tr",align:null},"The login verification URL does not adhere to URL syntax. Correct the URL and try again.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Non-allowlisted URL")),(0,a.kt)("td",{parentName:"tr",align:null},"The login verification URL redirects to a URL that is not an allowed host. Correct the URL and try again.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Blocklisted URL")),(0,a.kt)("td",{parentName:"tr",align:null},"The login verification URL redirects to a URL that is on the blocklist. Correct the URL or change the redirects, and try again.")))))}p.isMDXComponent=!0}}]);