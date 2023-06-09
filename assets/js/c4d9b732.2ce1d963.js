"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[64865],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},10526:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(87462),i=(n(67294),n(3905));const a={title:".NET Scan Directives",slug:"/r/NET_Scan_Directives"},o=void 0,s={unversionedId:"guides/sca/using_agent_based_scans/scan_directives_agent/net_scan_directives",id:"guides/sca/using_agent_based_scans/scan_directives_agent/net_scan_directives",title:".NET Scan Directives",description:"skip_dotnet_restore",source:"@site/docs/guides/07_sca/04_using_agent_based_scans/10_scan_directives_agent/10_net_scan_directives.md",sourceDirName:"guides/07_sca/04_using_agent_based_scans/10_scan_directives_agent",slug:"/r/NET_Scan_Directives",permalink:"/km-docusaurus-test/r/NET_Scan_Directives",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{title:".NET Scan Directives",slug:"/r/NET_Scan_Directives"},sidebar:"tutorialSidebar",previous:{title:"PHP Scan Directives",permalink:"/km-docusaurus-test/r/PHP_Scan_Directives"},next:{title:"C/C++ Scan Directives",permalink:"/km-docusaurus-test/r/C_C_Scan_Directives"}},c={},l=[],u={toc:l};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"skip_dotnet_restore"))),(0,i.kt)("p",null,"Boolean value that skips the restore step for NuGet packages in MSBuild during the scan. Veracode recommends you use this directive in either of these situations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You do not have the executables installed on your machine."),(0,i.kt)("li",{parentName:"ul"},"You built the project with the ",(0,i.kt)("inlineCode",{parentName:"li"},"project.assets.json")," files present in the project directory before performing the scan.")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"}," If you set this directive to true when the ",(0,i.kt)("inlineCode",{parentName:"p"},"project.assets.json")," files are not present in the project, Veracode SCA cannot identify dependencies.")),(0,i.kt)("p",null,"Default value: ",(0,i.kt)("inlineCode",{parentName:"p"},"false")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"skip_dotnet_restore: true\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"use_dotnet_exec"))),(0,i.kt)("p",null,"This directive specifies the .NET toolchain for the Veracode SCA agent to use. If you do not specify a toolchain, the agent attempts to identify one of the three valid case-insensitive toolchain values, searching in this order: ",(0,i.kt)("inlineCode",{parentName:"p"},"dotnet"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"nuget"),", then ",(0,i.kt)("inlineCode",{parentName:"p"},"msbuild"),". The agent ignores this directive if the ",(0,i.kt)("inlineCode",{parentName:"p"},"custom_dotnet_exec"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"custom_msbuild_exec"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"custom_nuget_exec")," directive specifies an executable."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"use_dotnet_exec: nuget\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"custom_dotnet_exec"))),(0,i.kt)("p",null,"String attribute that specifies the full path to a custom .NET CLI executable. The default value is the .NET executable on the ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH")," of the environment in which the agent performs the scan."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"custom_dotnet_exec: C:\\build_tools\\dotnet.exe\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"custom_msbuild_exec"))),(0,i.kt)("p",null,"String attribute that specifies the full path to a custom MSBuild CLI executable. The default value is the MSBuild executable on the ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH")," of the environment in which the agent performs the scan. The agent ignores this directive if the ",(0,i.kt)("inlineCode",{parentName:"p"},"custom_dotnet_exec")," directive specifies an executable."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"custom_msbuild_exec: C:\\build_tools\\msbuild.exe\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"custom_nuget_exec"))),(0,i.kt)("p",null,"String attribute that specifies the full path to a custom NuGet CLI executable. The default value is the NuGet executable on the ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH")," of the environment in which the agent performs the scan. The agent ignores this directive if either the ",(0,i.kt)("inlineCode",{parentName:"p"},"custom_dotnet_exec")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"custom_msbuild_exec")," directive specifies an executable."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"custom_nuget_exec: C:\\build_tools\\nuget.exe\n")))}p.isMDXComponent=!0}}]);