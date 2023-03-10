"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5932],{3905:(n,e,t)=>{t.d(e,{Zo:()=>u,kt:()=>d});var a=t(67294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},i=Object.keys(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var c=a.createContext({}),l=function(n){var e=a.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},u=function(n){var e=l(n.components);return a.createElement(c.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,i=n.originalType,c=n.parentName,u=s(n,["components","mdxType","originalType","parentName"]),g=l(t),d=r,m=g["".concat(c,".").concat(d)]||g[d]||p[d]||i;return t?a.createElement(m,o(o({ref:e},u),{},{components:t})):a.createElement(m,o({ref:e},u))}));function d(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var i=t.length,o=new Array(i);o[0]=g;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=n,s.mdxType="string"==typeof n?n:r,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},69922:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=t(87462),r=(t(67294),t(3905));const i={title:"Scanning Containers with Agent-Based Scanning",slug:"/r/c_sc_container_scan"},o=void 0,s={unversionedId:"guides/sca/using_agent_based_scans/finding_and_fixing_vulnerabilities/scanning_containers_agent",id:"guides/sca/using_agent_based_scans/finding_and_fixing_vulnerabilities/scanning_containers_agent",title:"Scanning Containers with Agent-Based Scanning",description:"Container scanning extends the Veracode vulnerability database and SCA technology to system libraries in Docker containers.",source:"@site/docs/guides/07_sca/04_using_agent_based_scans/18_finding_and_fixing_vulnerabilities/13_scanning_containers_agent.md",sourceDirName:"guides/07_sca/04_using_agent_based_scans/18_finding_and_fixing_vulnerabilities",slug:"/r/c_sc_container_scan",permalink:"/km-docusaurus-test/r/c_sc_container_scan",draft:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{title:"Scanning Containers with Agent-Based Scanning",slug:"/r/c_sc_container_scan"},sidebar:"tutorialSidebar",previous:{title:"Agent-Based Scan Language Support Matrix",permalink:"/km-docusaurus-test/r/c_sc_agent_languages"},next:{title:"Video: Scan a Container with Agent-Based Scanning",permalink:"/km-docusaurus-test/r/c_sc_video_container_scan"}},c={},l=[{value:"CLI Container Scanning",id:"cli-container-scanning",level:3},{value:"Continuous Integration Container Scanning",id:"continuous-integration-container-scanning",level:3},{value:"Viewing Container Scanning Results",id:"viewing-container-scanning-results",level:3}],u={toc:l};function p(n){let{components:e,...t}=n;return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Container scanning extends the Veracode vulnerability database and SCA technology to system libraries in Docker containers."),(0,r.kt)("p",null,"For the latest Veracode container scanning functionality, see ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Veracode_Container_Security"},"Veracode Container Security"),"."),(0,r.kt)("p",null,"Veracode Software Composition Analysis agent-based scanning supports container scanning for these Linux distributions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"RHEL 7"),(0,r.kt)("li",{parentName:"ul"},"CentOS 6 and 7"),(0,r.kt)("li",{parentName:"ul"},"Alpine 3"),(0,r.kt)("li",{parentName:"ul"},"Debian 8, 9, and 10"),(0,r.kt)("li",{parentName:"ul"},"Ubuntu 16.04, 18.04, 20.04, 20.10, and 21.04")),(0,r.kt)("p",null,"You must have one of these package managers installed on your machine:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"yum"),(0,r.kt)("li",{parentName:"ul"},"pip"),(0,r.kt)("li",{parentName:"ul"},"NPM"),(0,r.kt)("li",{parentName:"ul"},"gem"),(0,r.kt)("li",{parentName:"ul"},"apk"),(0,r.kt)("li",{parentName:"ul"},"apt")),(0,r.kt)("p",null,"When using yum, Veracode recommends you have the permissions to run yum updates in the container without root privileges."),(0,r.kt)("p",null,"For RHEL Linux containers, agent-based scanning only supports official RHEL Docker images, which require a RHEL subscription."),(0,r.kt)("h3",{id:"cli-container-scanning"},"CLI Container Scanning"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Images")),(0,r.kt)("p",null,"To scan a Docker image, use ",(0,r.kt)("inlineCode",{parentName:"p"},"--image"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-docker"},"$ docker images --format '{{.Repository}}:{{.Tag}}'\ncentos:7\n \n$ srcclr scan --image centos:7\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Containers")),(0,r.kt)("p",null,"To scan a container running locally, pass the container ID or name to ",(0,r.kt)("inlineCode",{parentName:"p"},"--container"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ docker ps --format '{{.ID}}'\n2ca861ab7e85\n  srcclr scan --container 2ca861ab7e85 \n \n$ docker ps --format '{{.Names}}'\ncompassionate_shirley\n \n$ srcclr scan --container compassionate_shirley \n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"}," These repository-specific features are not available for container scanning: vulnerable methods, lines of code, and SCM-specific concepts such as branches.")),(0,r.kt)("h3",{id:"continuous-integration-container-scanning"},"Continuous Integration Container Scanning"),(0,r.kt)("p",null,"To scan a Docker image using the continuous integration ","(","CI",")"," agent, modify the existing cURL script for the Veracode SCA agent to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl -sSL https://download.sourceclear.com/ci.sh | sh -s scan --image <image name>\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"}," The Travis CI addon, which does not use this cURL script, does not support scanning Docker images.")),(0,r.kt)("h3",{id:"viewing-container-scanning-results"},"Viewing Container Scanning Results"),(0,r.kt)("p",null,"After your agent-based scan is complete, you can ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Viewing_Agent_Based_Scan_Results"},"view the vulnerabilities")," in your container from the project page in the Veracode Platform."))}p.isMDXComponent=!0}}]);