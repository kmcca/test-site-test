"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[59057],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>p});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),g=l(t),p=i,h=g["".concat(c,".").concat(p)]||g[p]||u[p]||r;return t?a.createElement(h,s(s({ref:n},d),{},{components:t})):a.createElement(h,s({ref:n},d))}));function p(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,s=new Array(r);s[0]=g;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var l=2;l<r;l++)s[l]=t[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},57720:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var a=t(87462),i=(t(67294),t(3905));const r={author:["Kevin McCarthy"],title:"Using Agent-Based Scans",slug:"/r/c_sc_what_is",media_dir:"images/"},s=void 0,o={unversionedId:"guides/sca/using_agent_based_scans/README",id:"guides/sca/using_agent_based_scans/README",title:"Using Agent-Based Scans",description:"What Agent-Based Scanning Does",source:"@site/docs/guides/07_sca/04_using_agent_based_scans/README.md",sourceDirName:"guides/07_sca/04_using_agent_based_scans",slug:"/r/c_sc_what_is",permalink:"/km-docusaurus-test/r/c_sc_what_is",draft:!1,tags:[],version:"current",frontMatter:{author:["Kevin McCarthy"],title:"Using Agent-Based Scans",slug:"/r/c_sc_what_is",media_dir:"images/"},sidebar:"tutorialSidebar",previous:{title:"Install the Veracode SCA Agent with PowerShell",permalink:"/km-docusaurus-test/r/Install_the_Veracode_SCA_Agent_with_PowerShell"},next:{title:"Understanding Deployment Options for Agent-Based Scanning",permalink:"/km-docusaurus-test/r/Understanding_Deployment_Options_for_Agent_Based_Scanning"}},c={},l=[{value:"What Agent-Based Scanning Does",id:"what-agent-based-scanning-does",level:3},{value:"How Agent-Based Scanning Does It",id:"how-agent-based-scanning-does-it",level:3},{value:"What Agent-Based Scanning Knows",id:"what-agent-based-scanning-knows",level:3},{value:"The Agent-Based Scanning Research Process",id:"the-agent-based-scanning-research-process",level:3}],d={toc:l};function u(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"what-agent-based-scanning-does"},"What Agent-Based Scanning Does"),(0,i.kt)("p",null,"Veracode SCA agent-Based Scanning provides a way to easily check the open-source libraries used in your code repositories for vulnerabilities. By using the native build and package managers that manage your open-source libraries, agent-based scanning can accurately identify vulnerabilities in your open-source code and provide fix information for them."),(0,i.kt)("h3",{id:"how-agent-based-scanning-does-it"},"How Agent-Based Scanning Does It"),(0,i.kt)("p",null,"Developers can use agent-based scanning on their desktop or with their continuous integration server. The Veracode SCA agent scans the application by building it with its native build or package manager and creating a call graph of the entire application. This call graph shows line-by-line details of code that is affected by a vulnerability, including all direct and transitive dependencies of the code. When the agent finds a vulnerability, Veracode SCA:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Determines whether the application uses the vulnerable part of the component"),(0,i.kt)("li",{parentName:"ul"},"Identifies the vulnerable methods used in the library"),(0,i.kt)("li",{parentName:"ul"},"Supplies full stack traces back to the developer about which line of code is calling the vulnerable method")),(0,i.kt)("p",null,"You can find details on this and what we collect from your environment during the scanning process in ",(0,i.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_sc_evidence"},"Understanding Agent-Based Scanning Evidence Collection"),"."),(0,i.kt)("h3",{id:"what-agent-based-scanning-knows"},"What Agent-Based Scanning Knows"),(0,i.kt)("p",null,"When an agent-based scan identifies the direct and transitive open-source libraries in your code, it provides substantial information including, but not limited to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Vulnerability write-ups"),(0,i.kt)("li",{parentName:"ul"},"Vulnerability exploit code"),(0,i.kt)("li",{parentName:"ul"},"Fixed library versions"),(0,i.kt)("li",{parentName:"ul"},"Outdated libraries in use"),(0,i.kt)("li",{parentName:"ul"},"Indication of whether the vulnerable part of the library is being used, and where it is being used in your code")),(0,i.kt)("p",null,"Veracode SCA provides the above information about the vulnerabilities in the Veracode Vulnerability Database, in addition to discovering vulnerabilities in a variety of ways. If you want to know more about the vulnerability discovery methods, read about ",(0,i.kt)("a",{parentName:"p",href:"https://www.veracode.com/products/software-composition-analysis"},"the science behind it"),"."),(0,i.kt)("h3",{id:"the-agent-based-scanning-research-process"},"The Agent-Based Scanning Research Process"),(0,i.kt)("p",null,"Veracode SCA agent-based scanning uses multiple methods to identify open-source libraries, based on accuracy and availability for each language and package manager. These methods include build coordinates, SHA-2 file hashes, proprietary byte-code hashes, and filenames. For each identified library, Veracode SCA reports the vulnerabilities based on its vulnerability database. Veracode builds the database using machine learning and natural language processing over a variety of public sources that contain information about open-source libraries. These sources include NVD, GitHub commits, GitHub issues, Jira boards, Bugzilla, mailing lists, vendor advisory lists, and other security-relevant websites and discussion boards. Due to this unique approach, Veracode SCA can identify vulnerabilities that the NVD has not yet reported in addition to the reported vulnerabilities. Veracode goes through every item flagged by the machine learning model, reviews the code where the potential vulnerability was discovered, and confirms if it is a vulnerability. Veracode SCA then adds a CVSS score, descriptions of the vulnerability, and remediation advice to the database."),(0,i.kt)("p",null,"For more information on how to get started with agent-based scanning, see ",(0,i.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Understanding_Deployment_Options_for_Agent_Based_Scanning"},"Understanding Deployment Options for Agent-Based Scanning"),"."))}u.isMDXComponent=!0}}]);