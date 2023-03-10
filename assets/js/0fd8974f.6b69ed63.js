"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1489],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,_=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(_,c(c({ref:t},p),{},{components:n})):r.createElement(_,c({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},26969:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={title:"C/C++ Scan Directives",slug:"/r/C_C_Scan_Directives"},c=void 0,o={unversionedId:"guides/sca/using_agent_based_scans/scan_directives_agent/c_cpp_scan_directives",id:"guides/sca/using_agent_based_scans/scan_directives_agent/c_cpp_scan_directives",title:"C/C++ Scan Directives",description:"make_build_target",source:"@site/docs/guides/07_sca/04_using_agent_based_scans/10_scan_directives_agent/11_c_cpp_scan_directives.md",sourceDirName:"guides/07_sca/04_using_agent_based_scans/10_scan_directives_agent",slug:"/r/C_C_Scan_Directives",permalink:"/km-docusaurus-test/r/C_C_Scan_Directives",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"C/C++ Scan Directives",slug:"/r/C_C_Scan_Directives"},sidebar:"tutorialSidebar",previous:{title:".NET Scan Directives",permalink:"/km-docusaurus-test/r/NET_Scan_Directives"},next:{title:"Automatic Pull Request Scan Directives",permalink:"/km-docusaurus-test/r/Automatic_Pull_Request_Scan_Directives"}},s={},l=[],p={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"make_build_target"))),(0,a.kt)("p",null,"This directive specifies the command-line arguments for the ",(0,a.kt)("inlineCode",{parentName:"p"},"make")," command that builds the project. By default, the ",(0,a.kt)("inlineCode",{parentName:"p"},"make")," command runs without any command-line arguments for building the project."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"make_build_target: all\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"make_clean_target"))),(0,a.kt)("p",null,"This directive specifies which command-line argument for cleaning the project to run with the ",(0,a.kt)("inlineCode",{parentName:"p"},"make")," command."),(0,a.kt)("p",null,"Default value: ",(0,a.kt)("inlineCode",{parentName:"p"},"clean")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"make_clean_target: distclean\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"make_output_file"))),(0,a.kt)("p",null,"This directive specifies the path, relative to the project root, to the text file that contains the output of the ",(0,a.kt)("inlineCode",{parentName:"p"},"make")," command. If you use this directive, the scan agent parses the text file to obtain information about dependencies instead of running the ",(0,a.kt)("inlineCode",{parentName:"p"},"make")," command to build the project."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"make_output_file: make_log.txt\n")))}u.isMDXComponent=!0}}]);