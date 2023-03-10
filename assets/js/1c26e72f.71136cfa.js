"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[79242],{3905:(t,e,n)=>{n.d(e,{Zo:()=>k,kt:()=>s});var a=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var d=a.createContext({}),o=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},k=function(t){var e=o(t.components);return a.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,d=t.parentName,k=p(t,["components","mdxType","originalType","parentName"]),m=o(n),s=l,c=m["".concat(d,".").concat(s)]||m[s]||u[s]||r;return n?a.createElement(c,i(i({ref:e},k),{},{components:n})):a.createElement(c,i({ref:e},k))}));function s(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=m;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:l,i[1]=p;for(var o=2;o<r;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},18589:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>o});var a=n(87462),l=(n(67294),n(3905));const r={title:"Agent Scan Directives",slug:"/r/Agent_Scan_Directives"},i=void 0,p={unversionedId:"guides/sca/using_agent_based_scans/scan_directives_agent/agent_scan_directives",id:"guides/sca/using_agent_based_scans/scan_directives_agent/agent_scan_directives",title:"Agent Scan Directives",description:"scan_collectors",source:"@site/docs/guides/07_sca/04_using_agent_based_scans/10_scan_directives_agent/01_agent_scan_directives.md",sourceDirName:"guides/07_sca/04_using_agent_based_scans/10_scan_directives_agent",slug:"/r/Agent_Scan_Directives",permalink:"/km-docusaurus-test/r/Agent_Scan_Directives",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Agent Scan Directives",slug:"/r/Agent_Scan_Directives"},sidebar:"tutorialSidebar",previous:{title:"Using Scan Directives for Agent-Based Scanning",permalink:"/km-docusaurus-test/r/c_sc_scan_directives"},next:{title:"Multi-Language Scan Directives",permalink:"/km-docusaurus-test/r/Multi_Language_Scan_Directives"}},d={},o=[],k={toc:o};function u(t){let{components:e,...n}=t;return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"scan_collectors"))),(0,l.kt)("p",null,"By default, Veracode SCA agents find all supported build tools and package managers in the directory specified by the scan command, or the current directory for CI scans. You can use ",(0,l.kt)("inlineCode",{parentName:"p"},"scan_collectors")," to specify which build tools and package managers to use. The possible values for ",(0,l.kt)("inlineCode",{parentName:"p"},"scan_collectors")," are:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Language"),(0,l.kt)("th",{parentName:"tr",align:null},"Collector"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Java"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"maven")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"gradle")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"ant")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"jar"))))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Scala"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"sbt")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},'"sbt coursier"'))))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Go"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"glide")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},'"go get"')),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},'"go mod"')),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"godep")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"dep")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"govendor")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"trash"))))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Python"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"pip")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"pipenv"))))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"JavaScript"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"bower")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"yarn")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"npm"))))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Objective-C"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"cocoapods"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Ruby"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"gem"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PHP"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"composer"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"C/C++"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"makefile")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"sofile"))))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"C#"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"dll")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"msbuilddotnet"))))))),(0,l.kt)("p",null,"When you run the SCA agent with the ",(0,l.kt)("inlineCode",{parentName:"p"},"--quick")," option, the possible values for ",(0,l.kt)("inlineCode",{parentName:"p"},"scan_collectors")," are:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Language"),(0,l.kt)("th",{parentName:"tr",align:null},"Collector"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Java"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"jar quickscan"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Scala"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"jar quickscan"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Go"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},'"glide quickscan"')),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},'"godeps quickscan"')),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},'"dep quickscan"')),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},'"go mod quickscan"')),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},'"govendor quickscan"')),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},'"trash quickscan"'))))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Python"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"pipfile.lock quickscan"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"JavaScript"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},'"bower quickscan"')),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},'"yarn quickscan"')),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},'"npm quickscan"')),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},'"node_modules quickscan"'))))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Objective-C"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"podfile.lock quickscan"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Ruby"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"gemfile.lock quickscan"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PHP"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"composer quickscan"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"C/C++"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"sofile quickscan"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"C#"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"dll quickscan"'))))),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'scan_collectors: "gem, maven"\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"skip_collectors"))),(0,l.kt)("p",null,"By default, Veracode SCA agents find all supported build tools and package managers in the directory specified by the scan command, or the current directory for CI scans. You can use ",(0,l.kt)("inlineCode",{parentName:"p"},"skip_collectors")," to specify which build tools and package managers to ignore when running a scan. The possible values for ",(0,l.kt)("inlineCode",{parentName:"p"},"skip_collectors")," are:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Language"),(0,l.kt)("th",{parentName:"tr",align:null},"Collector"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Java"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"maven")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"gradle")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"ant")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"jar"))))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Scala"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"sbt")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},'"sbt coursier"'))))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Go"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("ul",null,(0,l.kt)("li",null,"glide"),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},'"go get"')),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},'"go mod"')),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"godep")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"dep")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"govendor")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"trash"))))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Python"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"pip")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"pipenv"))))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"JavaScript"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"bower")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"yarn")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"npm"))))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Objective-C"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"cocoapods"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Ruby"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"gem"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PHP"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"composer"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"C/C++"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"makefile")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"sofile"))))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"C#"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"dll")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"msbuilddotnet"))))))),(0,l.kt)("p",null,"When you run the SCA agent with the ",(0,l.kt)("inlineCode",{parentName:"p"},"--quick")," option, the possible values for ",(0,l.kt)("inlineCode",{parentName:"p"},"skip_collectors")," are:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Language"),(0,l.kt)("th",{parentName:"tr",align:null},"Collector"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Java"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"jar quickscan"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Scala"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"jar quickscan"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Go"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},'"glide quickscan"')),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},'"godeps quickscan"')),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},'"dep quickscan"')),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},'"go mod quickscan"')),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},'"govendor quickscan"')),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},'"trash quickscan"'))))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Python"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"pipfile.lock quickscan"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"JavaScript"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},'"bower quickscan"')),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},'"yarn quickscan"')),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},'"npm quickscan"')),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},'"node_modules quickscan"'))))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Objective-C"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"podfile.lock quickscan"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Ruby"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"gemfile.lock quickscan"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PHP"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"composer quickscan"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"C/C++"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"sofile quickscan"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"C#"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"dll quickscan"'))))),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'skip_collectors: "godep,govendor,go get"\n')),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"}," If you include a comma-separated list with the ",(0,l.kt)("inlineCode",{parentName:"p"},"skip_collectors")," command using PowerShell, you must enclose the string in quotation marks to avoid errors.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"scan_analyzers"))),(0,l.kt)("p",null,"In container scans, Veracode SCA agents find all supported build tools and package managers in the directory specified by the scan command or the current directory for CI scans, by default. You can use ",(0,l.kt)("inlineCode",{parentName:"p"},"scan_analyzers")," to specify which build tools and package managers to use. The possible values for ",(0,l.kt)("inlineCode",{parentName:"p"},"scan_analyzers")," are:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Analyzer"),(0,l.kt)("th",{parentName:"tr",align:null},"Package Manager"),(0,l.kt)("th",{parentName:"tr",align:null},"Language/Distribution"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"yum")),(0,l.kt)("td",{parentName:"tr",align:null},"yum"),(0,l.kt)("td",{parentName:"tr",align:null},"CentOS, RHEL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"gem")),(0,l.kt)("td",{parentName:"tr",align:null},"gem"),(0,l.kt)("td",{parentName:"tr",align:null},"Ruby")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pip2")),(0,l.kt)("td",{parentName:"tr",align:null},"pip2"),(0,l.kt)("td",{parentName:"tr",align:null},"Python 2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pip3")),(0,l.kt)("td",{parentName:"tr",align:null},"pip3"),(0,l.kt)("td",{parentName:"tr",align:null},"Python 3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"npm")),(0,l.kt)("td",{parentName:"tr",align:null},"NPM"),(0,l.kt)("td",{parentName:"tr",align:null},"JavaScript")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"apk")),(0,l.kt)("td",{parentName:"tr",align:null},"apk"),(0,l.kt)("td",{parentName:"tr",align:null},"Alpine")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"apt")),(0,l.kt)("td",{parentName:"tr",align:null},"apt"),(0,l.kt)("td",{parentName:"tr",align:null},"Debian, Ubuntu")))),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'scan_analyzers: "apk, yum"\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"skip_analyzers"))),(0,l.kt)("p",null,"In container scans, Veracode SCA agents find all supported build tools and package managers in the directory specified by the scan command or the current directory for CI scans, by default. You can use ",(0,l.kt)("inlineCode",{parentName:"p"},"skip_analyzers")," to specify which build tools and package managers to ignore when running a scan. The possible values for ",(0,l.kt)("inlineCode",{parentName:"p"},"skip_analyzers")," are:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Analyzer"),(0,l.kt)("th",{parentName:"tr",align:null},"Package Manager"),(0,l.kt)("th",{parentName:"tr",align:null},"Language/Distribution"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"yum")),(0,l.kt)("td",{parentName:"tr",align:null},"yum"),(0,l.kt)("td",{parentName:"tr",align:null},"CentOS, RHEL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"gem")),(0,l.kt)("td",{parentName:"tr",align:null},"gem"),(0,l.kt)("td",{parentName:"tr",align:null},"Ruby")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pip2")),(0,l.kt)("td",{parentName:"tr",align:null},"pip2"),(0,l.kt)("td",{parentName:"tr",align:null},"Python 2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pip3")),(0,l.kt)("td",{parentName:"tr",align:null},"pip3"),(0,l.kt)("td",{parentName:"tr",align:null},"Python 3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"npm")),(0,l.kt)("td",{parentName:"tr",align:null},"NPM"),(0,l.kt)("td",{parentName:"tr",align:null},"JavaScript")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"apk")),(0,l.kt)("td",{parentName:"tr",align:null},"apk"),(0,l.kt)("td",{parentName:"tr",align:null},"Alpine")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"apt")),(0,l.kt)("td",{parentName:"tr",align:null},"apt"),(0,l.kt)("td",{parentName:"tr",align:null},"Debian, Ubuntu")))),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'skip_analyzers: "apk, yum"\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"vuln_methods_ignored_directories"))),(0,l.kt)("p",null,"A comma-separated list of directories that you want Veracode to ignore during a vulnerable method analysis. This directive overrides the default directories."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"vuln_methods_ignored_directories: doc\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"vuln_methods_extra_ignored_directories"))),(0,l.kt)("p",null,"A comma-separated list of directories that adds to the default per-language set that the agent ignores during a vulnerable method analysis."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'vuln_methods_extra_ignored_directories: "doc, test"\n')),(0,l.kt)("p",null,"Default values:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Ruby: ",(0,l.kt)("inlineCode",{parentName:"li"},"test")),(0,l.kt)("li",{parentName:"ul"},"Java: ",(0,l.kt)("inlineCode",{parentName:"li"},"test")),(0,l.kt)("li",{parentName:"ul"},"Python: ",(0,l.kt)("inlineCode",{parentName:"li"},"test"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"tests"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"doc"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"docs"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"bin"),", ",(0,l.kt)("inlineCode",{parentName:"li"},".virtualenv"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"env"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"venv"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"ssl_cert_dir"))),(0,l.kt)("p",null,"A filepath that specifies the directories that contain X.509 certificates that the Veracode SCA agent should trust in addition to the certificates present in the Java Runtime Environment (JRE) or stored in your operating system. If you enter multiple directories, separate the filepaths with the correct path separator for your operating system. For example, use a colon (",(0,l.kt)("inlineCode",{parentName:"p"},":"),") for Linux and macOS."),(0,l.kt)("p",null,"Default value: the certificate location directory specified in the Java Virtual Machine (JVM)."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ssl_cert_dir: C:\\path\\to\\certificate\\directory\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"ssl_cert_file"))),(0,l.kt)("p",null,"A filepath that specifies the X.509 certificates that the Veracode SCA agent should trust in addition to the certificates present in the JRE or stored in your operating system. If you enter multiple files, separate the filepaths with the correct path separator for your operating system. For example, use a colon (",(0,l.kt)("inlineCode",{parentName:"p"},":"),") for Linux and macOS. If specified, this value overrides the ",(0,l.kt)("inlineCode",{parentName:"p"},"ssl_cert_dir")," directive."),(0,l.kt)("p",null,"Default value: the certificate location specified in the JVM."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ssl_cert_file: C:\\path\\to\\certificate\\example_cert.cer\n")))}u.isMDXComponent=!0}}]);