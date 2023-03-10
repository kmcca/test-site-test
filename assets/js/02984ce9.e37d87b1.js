"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53111],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),g=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=g(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=g(r),m=a,d=u["".concat(p,".").concat(m)]||u[m]||c[m]||i;return r?n.createElement(d,o(o({ref:t},s),{},{components:r})):n.createElement(d,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var g=2;g<i;g++)o[g]=r[g];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},72123:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>g});var n=r(87462),a=(r(67294),r(3905));const i={title:"Enable Logging in Jira",slug:"/r/t_debug_jira"},o=void 0,l={unversionedId:"guides/integrations/ticketing/jira_integration/jira_enable_logging",id:"guides/integrations/ticketing/jira_integration/jira_enable_logging",title:"Enable Logging in Jira",description:"You can configure Jira to log the actions that the Veracode Integration for Jira performs. The log messages are located in the standard Jira log.",source:"@site/docs/guides/04_integrations/07_ticketing/04_jira_integration/08_jira_enable_logging.md",sourceDirName:"guides/04_integrations/07_ticketing/04_jira_integration",slug:"/r/t_debug_jira",permalink:"/km-docusaurus-test/r/t_debug_jira",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Enable Logging in Jira",slug:"/r/t_debug_jira"},sidebar:"tutorialSidebar",previous:{title:"Perform a Selective Finding Import in Jira",permalink:"/km-docusaurus-test/r/t_jira_select_finding_import"},next:{title:"Veracode Integration for Jira Cloud",permalink:"/km-docusaurus-test/r/c_jira_cloud_about"}},p={},g=[],s={toc:g};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can configure Jira to log the actions that the Veracode Integration for Jira performs. The log messages are located in the standard Jira log."),(0,a.kt)("p",null,"You can enable logging in the Jira interface and the log4j.properties file. If you enable logging in the Jira interface and restart Jira Server, you must re-enable logging. If you enable logging in the log4j.properties file and restart Jira Server, logging remains enabled."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Jira Cloud does not support logging.")),(0,a.kt)("p",null,"The location of the Jira logs depends on the Jira installation location. For example:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"On Linux: ",(0,a.kt)("inlineCode",{parentName:"li"},"/opt/atlassian/jira/logs/catalina.out")),(0,a.kt)("li",{parentName:"ul"},"On Windows: ",(0,a.kt)("inlineCode",{parentName:"li"},"C:\\Program Files (x86)\\Atlassian\\Application Data\\Jira\\log\\atlassian-jira.log"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"To complete this task:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In Jira, select ",(0,a.kt)("strong",{parentName:"p"},"Administration")," > ",(0,a.kt)("strong",{parentName:"p"},"System")," > ",(0,a.kt)("strong",{parentName:"p"},"Logging & Profiling"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the Default Loggers section, click ",(0,a.kt)("strong",{parentName:"p"},"Configure logging level for another package"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the window, in the Package name field, enter ",(0,a.kt)("inlineCode",{parentName:"p"},"com.veracode.jira.plugin"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"From the Logging Level dropdown menu, select ",(0,a.kt)("strong",{parentName:"p"},"INFO")," or ",(0,a.kt)("strong",{parentName:"p"},"DEBUG"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select ",(0,a.kt)("strong",{parentName:"p"},"Add"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If you want logging to remain enabled after restarting Jira Server, edit the file ",(0,a.kt)("inlineCode",{parentName:"p"},"{Jira home}/JIRA/atlassian-jira/WEB-INF/classes/log4j.properties"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add these two properties to ",(0,a.kt)("inlineCode",{parentName:"p"},"log4j.properties"),":"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},"log4j.logger.com.veracode.jira.plugin = INFO, filelog\nlog4j.additivity.com.veracode.jira.plugin = false\n")),(0,a.kt)("p",{parentName:"li"},"For ",(0,a.kt)("inlineCode",{parentName:"p"},"log4j.logger.com.veracode.jira.plugin"),", you can enter one of these logging levels: ",(0,a.kt)("inlineCode",{parentName:"p"},"DEBUG"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ERROR"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"INFO"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"WARNING"),"."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Results:")),(0,a.kt)("p",null,"The Veracode Integration for Jira saves all retrieved findings information. You can review the flaw report XML files to understand the actions the integration performed. Example flaw report locations include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"On Linux: "),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"/var/atlassian/application-data/jira/jira_home/veracode/flawreportxml\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"On Windows:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"C:\\Program Files (x86)\\Atlassian\\Application Data\\Jira\\veracode\\flawreportxml\n")))))}c.isMDXComponent=!0}}]);