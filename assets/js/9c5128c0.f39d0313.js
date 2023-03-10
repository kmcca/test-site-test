"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[63343],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,k=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(k,s(s({ref:t},u),{},{components:n})):r.createElement(k,s({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},17291:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"Review Static Analysis and SCA Results in Jenkins",slug:"/r/c_jenkins_results"},s=void 0,o={unversionedId:"guides/integrations/build_systems/jenkins_integration/jenkins_review_static_sca_results",id:"guides/integrations/build_systems/jenkins_integration/jenkins_review_static_sca_results",title:"Review Static Analysis and SCA Results in Jenkins",description:"You can choose to display the results of a Veracode Static Analysis and SCA scan in Jenkins for freestyle or pipeline jobs.",source:"@site/docs/guides/04_integrations/06_build_systems/07_jenkins_integration/07_jenkins_review_static_sca_results.md",sourceDirName:"guides/04_integrations/06_build_systems/07_jenkins_integration",slug:"/r/c_jenkins_results",permalink:"/km-docusaurus-test/r/c_jenkins_results",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Review Static Analysis and SCA Results in Jenkins",slug:"/r/c_jenkins_results"},sidebar:"tutorialSidebar",previous:{title:"Using Development Sandboxes with Jenkins",permalink:"/km-docusaurus-test/r/c_jenkins_sandbox"},next:{title:"Using Veracode Dynamic Analysis with Jenkins",permalink:"/km-docusaurus-test/r/c_jenkins_rescan_da"}},l={},c=[],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can choose to display the results of a Veracode Static Analysis and SCA scan in Jenkins for freestyle or pipeline jobs."),(0,a.kt)("p",null,"If scans do not complete due to errors, the Jenkins build summary states that results are unavailable. The console output lists more information, including the cause of the error."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Before you begin:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You meet the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/c_using_jenkins"},"prerequisites"),"."),(0,a.kt)("li",{parentName:"ul"},"You have ",(0,a.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/t_install_jenkins"},"installed the Jenkins plugin"),"."),(0,a.kt)("li",{parentName:"ul"},"You have ",(0,a.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/t_configure_jenkins"},"configured a Jenkins job")," with the ",(0,a.kt)("strong",{parentName:"li"},"Wait for scan to complete")," checkbox selected and run a Veracode scan. If you configure the Jenkins job to scan with Veracode and wait for the results, the results display on the build summary page and indicate the policy compliance status of the scan."),(0,a.kt)("li",{parentName:"ul"},"In controller/agent Jenkins environments, the controller returns the Veracode scan results, so you must ensure your controller can access Veracode. If there is no access to Veracode, the Jenkins build status is not affected."),(0,a.kt)("li",{parentName:"ul"},"For ",(0,a.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/c_about_SCA"},"Software Composition Analysis (SCA)")," results, you have configured the organization associated with the Veracode Platform account to provide SCA results to Jenkins.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"To complete this task:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Log in to your Jenkins freestyle or pipeline project.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click the ",(0,a.kt)("strong",{parentName:"p"},"Veracode")," link at the left or in the main summary to see the results:"),(0,a.kt)("p",{parentName:"li"},"Static Analysis results:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Overall policy compliance status",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Policy name"),(0,a.kt)("li",{parentName:"ul"},"Policy rules:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Veracode Level"),(0,a.kt)("li",{parentName:"ul"},"Static Scan Requirement"),(0,a.kt)("li",{parentName:"ul"},"Static Score"))),(0,a.kt)("li",{parentName:"ul"},"Link to the Executive Summary page in the Veracode Platform"),(0,a.kt)("li",{parentName:"ul"},"Flaw count table: derived from the Veracode Detailed Report"),(0,a.kt)("li",{parentName:"ul"},"Flaw trend chart: only against successful Jenkins builds")))),(0,a.kt)("p",{parentName:"li"},"SCA results:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Number of blocklisted SCA components"),(0,a.kt)("li",{parentName:"ul"},"Highest found Common Vulnerability Scoring System (CVSS) score"),(0,a.kt)("li",{parentName:"ul"},"SCA vulnerability count table"),(0,a.kt)("li",{parentName:"ul"},"List of components added since the previous build")))))}p.isMDXComponent=!0}}]);