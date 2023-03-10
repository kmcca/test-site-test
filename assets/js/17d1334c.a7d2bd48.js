"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8269],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(t),g=a,f=d["".concat(c,".").concat(g)]||d[g]||p[g]||i;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},27415:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=t(87462),a=(t(67294),t(3905));const i={title:"Kotlin SCA Agent-Based Scanning",slug:"/r/c_sca_kotlin"},o=void 0,s={unversionedId:"guides/sca/using_agent_based_scans/finding_and_fixing_vulnerabilities/kotlin_sca_agent",id:"guides/sca/using_agent_based_scans/finding_and_fixing_vulnerabilities/kotlin_sca_agent",title:"Kotlin SCA Agent-Based Scanning",description:"You can find vulnerabilities in your Kotlin repositories using Veracode Software Composition Analysis agent-based scanning. You can run agent-based scans of Maven and Gradle repositories using the agent-based scanning command-line interface or the CI integrations.",source:"@site/docs/guides/07_sca/04_using_agent_based_scans/18_finding_and_fixing_vulnerabilities/09_kotlin_sca_agent.md",sourceDirName:"guides/07_sca/04_using_agent_based_scans/18_finding_and_fixing_vulnerabilities",slug:"/r/c_sca_kotlin",permalink:"/km-docusaurus-test/r/c_sca_kotlin",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Kotlin SCA Agent-Based Scanning",slug:"/r/c_sca_kotlin"},sidebar:"tutorialSidebar",previous:{title:"Scala SCA Agent-Based Scanning",permalink:"/km-docusaurus-test/r/c_sc_scala"},next:{title:"Swift SCA Agent-Based Scanning",permalink:"/km-docusaurus-test/r/c_sc_swift"}},c={},l=[],u={toc:l};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can find vulnerabilities in your Kotlin repositories using Veracode Software Composition Analysis agent-based scanning. You can run agent-based scans of Maven and Gradle repositories using the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_sc_agent_usage"},"agent-based scanning command-line interface")," or the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Integrate_Veracode_SCA_Agent_Based_Scanning_with_Your_CI_Projects"},"CI integrations"),"."),(0,a.kt)("p",null,"The requirements for running a scan and reviewing results for Kotlin repositories are the same as the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_sc_java"},"requirements for Java repositories"),"."),(0,a.kt)("p",null,"For packaging instructions for Veracode Static Analysis and Veracode SCA upload scans, see ",(0,a.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_compilation_kotlin"},"Packaging Kotlin Applications"),"."))}p.isMDXComponent=!0}}]);