"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[73090],{3905:(t,e,o)=>{o.d(e,{Zo:()=>l,kt:()=>u});var n=o(67294);function a(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function r(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function i(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(e){a(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function s(t,e){if(null==t)return{};var o,n,a=function(t,e){if(null==t)return{};var o,n,a={},r=Object.keys(t);for(n=0;n<r.length;n++)o=r[n],e.indexOf(o)>=0||(a[o]=t[o]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)o=r[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(a[o]=t[o])}return a}var c=n.createContext({}),p=function(t){var e=n.useContext(c),o=e;return t&&(o="function"==typeof t?t(e):i(i({},e),t)),o},l=function(t){var e=p(t.components);return n.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var o=t.components,a=t.mdxType,r=t.originalType,c=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),m=p(o),u=a,h=m["".concat(c,".").concat(u)]||m[u]||d[u]||r;return o?n.createElement(h,i(i({ref:e},l),{},{components:o})):n.createElement(h,i({ref:e},l))}));function u(t,e){var o=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=o.length,i=new Array(r);i[0]=m;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:a,i[1]=s;for(var p=2;p<r;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},23766:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=o(87462),a=(o(67294),o(3905));const r={title:"Promote a Sandbox Scan",slug:"/r/t_promote_sandbox"},i=void 0,s={unversionedId:"guides/static/sandbox/t_promote_sandbox",id:"guides/static/sandbox/t_promote_sandbox",title:"Promote a Sandbox Scan",description:"After completing a sandbox scan, you have the option to promote the sandbox scan to a policy scan that counts toward your policy compliance score. You can perform a sandbox scan as part of integration testing to validate the security of your application and, then, promote the sandbox scan to a policy scan.",source:"@site/docs/guides/06_static/20_sandbox/07_t_promote_sandbox.md",sourceDirName:"guides/06_static/20_sandbox",slug:"/r/t_promote_sandbox",permalink:"/km-docusaurus-test/r/t_promote_sandbox",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Promote a Sandbox Scan",slug:"/r/t_promote_sandbox"},sidebar:"tutorialSidebar",previous:{title:"Mitigating Flaws in Sandbox Scans",permalink:"/km-docusaurus-test/r/c_mitigate_sandbox"},next:{title:"Download the Sandbox Activity Report",permalink:"/km-docusaurus-test/r/t_download_sandbox_activity"}},c={},p=[],l={toc:p};function d(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"After completing a sandbox scan, you have the option to promote the sandbox scan to a policy scan that counts toward your policy compliance score. You can perform a sandbox scan as part of integration testing to validate the security of your application and, then, promote the sandbox scan to a policy scan."),(0,a.kt)("p",null,"Veracode recommends that you designate one sandbox to test different versions of code or components of an application. To achieve policy compliance, apply all mitigations to the scan results designated for promotion. Then, only promote scans from this sandbox."),(0,a.kt)("p",null,"When you promote a sandbox scan to a policy scan, Veracode applies the score of that scan against the policy. You can have multiple sandboxes to scan the different components of your application. However, when you promote a sandbox scan, that scan must contain the entire application."),(0,a.kt)("p",null,"Sandbox scans of individual components of an application analyze only a small part of the application. These scans do not have the full context of the application. Scans can detect findings by analyzing the interaction between files or libraries."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Before promoting a scan, verify that you have uploaded all the modules of the full application.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Before you begin:")),(0,a.kt)("p",null,"The sandbox scan you want to promote must meet these conditions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The scan is the most recent."),(0,a.kt)("li",{parentName:"ul"},"The scan is no more than 60 days old.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"To complete this task:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"From the application overview page, click ",(0,a.kt)("strong",{parentName:"p"},"Sandboxes")," on the left navigation menu.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click the name of the sandbox you use for promotion.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click the name of the most recent scan."),(0,a.kt)("admonition",{parentName:"li",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If the most recent scan is in progress or incomplete, you cannot promote an earlier scan from the same sandbox."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("img",{src:o(59007).Z,width:"23",height:"14"})," and select ",(0,a.kt)("strong",{parentName:"p"},"Promote Scan"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If you want to delete this sandbox from your application upon promotion, select the ",(0,a.kt)("strong",{parentName:"p"},"Delete Associated Sandbox")," checkbox."),(0,a.kt)("p",{parentName:"li"},"Deleting the sandbox helps you avoid having an excessive number of sandboxes, which can make results difficult to review. The additional sandboxes count toward your ",(0,a.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Start_a_Sandbox_Scan"},"sandbox limit"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Promote")," to promote the scan."),(0,a.kt)("p",{parentName:"li"},"After you promote the scan, it appears in the Policy Evaluation section of the application page and the list of completed policy scans. The name of the scan is appended with ","(","Promoted",")"," to indicate that you promoted it from a sandbox to a policy scan. All data exports include the flaw data from promoted sandbox scans. You can also view the flaw data in ",(0,a.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_about_dashboards"},"Veracode Analytics"),"."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Results:")),(0,a.kt)("p",null,"When promoting a scan, the scan shows the Promote in Progress status until the promotion finishes. The promotion might take some time, depending on the number of findings in the scan."),(0,a.kt)("p",null,"When performing a ",(0,a.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/t_rescan"},"rescan")," of a promoted scan, Veracode resets the scan status to Promote in Progress until the rescan is complete."))}d.isMDXComponent=!0},59007:(t,e,o)=>{o.d(e,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAOCAYAAADE84fzAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH4wIcFScU5vl/SAAAAAd0RVh0QXV0aG9yAKmuzEgAAAAMdEVYdERlc2NyaXB0aW9uABMJISMAAAAKdEVYdENvcHlyaWdodACsD8w6AAAADnRFWHRDcmVhdGlvbiB0aW1lADX3DwkAAAAJdEVYdFNvZnR3YXJlAF1w/zoAAAALdEVYdERpc2NsYWltZXIAt8C0jwAAAAh0RVh0V2FybmluZwDAG+aHAAAAB3RFWHRTb3VyY2UA9f+D6wAAAAh0RVh0Q29tbWVudAD2zJa/AAAABnRFWHRUaXRsZQCo7tInAAAAl0lEQVQ4jWMUkVP+z0AjwEQrg0cNHyyGpyxmuPPwDsPrh3cYXl9ezJDFwMAwYR+U//AOw9FuBgYGhmSGdZdhYjsZJhBreJaLNgM/jMMnxqDGkMwgJ4qQVzNuZ2BIcWDQ44OJKDOYdhNp+LQ9Vxk+wjh3zzEUMMxl2HP1E1z+1tlKBoY5BxguwYXuMpwuxW4442gmGl6GAwCfpjE4jox3GgAAAABJRU5ErkJggg=="}}]);