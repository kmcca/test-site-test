"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[91834],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(g,i(i({ref:t},c),{},{components:a})):n.createElement(g,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},93914:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={author:["Scott Jordan"],title:"iOS and tvOS Packaging",slug:"/r/compilation_ios",media_dir:"images/"},i=void 0,l={unversionedId:"guides/packaging/ios_tvos/README",id:"guides/packaging/ios_tvos/README",title:"iOS and tvOS Packaging",description:"This section explains how to package native iOS applications developed with Objective-C and Swift. Veracode analyzes all iOS application components that you submit, including standalone frameworks, extensions, and watchOS extensions. After you complete a prescan, you can select these components as separate modules.",source:"@site/docs/guides/03_packaging/14_ios_tvos/README.md",sourceDirName:"guides/03_packaging/14_ios_tvos",slug:"/r/compilation_ios",permalink:"/km-docusaurus-test/r/compilation_ios",draft:!1,tags:[],version:"current",frontMatter:{author:["Scott Jordan"],title:"iOS and tvOS Packaging",slug:"/r/compilation_ios",media_dir:"images/"},sidebar:"tutorialSidebar",previous:{title:"Groovy Packaging",permalink:"/km-docusaurus-test/r/c_compilation_groovy"},next:{title:"Use xcodebuild to Package iOS and tvOS Apps",permalink:"/km-docusaurus-test/r/Use_xcodebuild_to_Package_iOS_and_tvOS_Apps"}},s={},p=[{value:"Required Files",id:"required-files",level:2},{value:"Supported iOS Platforms and Compilers",id:"supported-ios-platforms-and-compilers",level:2}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This section explains how to package native iOS applications developed with Objective-C and Swift. Veracode analyzes all iOS application components that you submit, including standalone frameworks, extensions, and watchOS extensions. After you complete a prescan, you can select these components as separate modules."),(0,r.kt)("p",null,"Veracode only scans iPhone, iPad, or Watch applications compiled with debug symbols. When you provide debug iOS applications, Veracode can tell you about source files with flaws, and their location and code line number."),(0,r.kt)("p",null,"Your applications must meet specific packaging and compilation requirements before you can submit them for ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_static_overview"},"Veracode Static Analysis")," and ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_integrated_benefits"},"Veracode Software Composition Analysis"),"."),(0,r.kt)("p",null,"For SCA agent-based scan requirements, see ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Using_Veracode_SCA_with_Programming_Languages"},"Using Veracode SCA with Programming Languages"),"."),(0,r.kt)("p",null,"For support for applications developed with JavaScript, see ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/compilation_phonegap"},"PhoneGap"),", ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/compilation_titan"},"Titanium"),", ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/compilation_xamarin"},"Xamarin"),", and ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_compilation_react"},"React Native"),"."),(0,r.kt)("p",null,"For instructions for other platforms, see ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/r_supported_table"},"Supported Languages and Platforms"),"."),(0,r.kt)("h2",{id:"required-files"},"Required Files"),(0,r.kt)("p",null,"Veracode requires that you include all binary executables and required libraries of the application for scanning."),(0,r.kt)("h2",{id:"supported-ios-platforms-and-compilers"},"Supported iOS Platforms and Compilers"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Language"),(0,r.kt)("th",{parentName:"tr",align:null},"Platform"),(0,r.kt)("th",{parentName:"tr",align:null},"Version"),(0,r.kt)("th",{parentName:"tr",align:null},"IDE"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Objective-C, C/C++, Swift 5.x"),(0,r.kt)("td",{parentName:"tr",align:null},"iOS"),(0,r.kt)("td",{parentName:"tr",align:null},"iOS 11\u201316",(0,r.kt)("br",null),"watchOS 6\u20139",(0,r.kt)("br",null),"tvOS 14\u201316"),(0,r.kt)("td",{parentName:"tr",align:null},"Xcode 12.x\u201314.x")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"NOTE")," ",(0,r.kt)("br",null)," ",(0,r.kt)("a",{parentName:"td",href:"https://docs.veracode.com/r/Initial_Support_and_Supported_Languages_Meaning"},"Initial support")," for iOS 16, watchOS 8, and tvOS 15",(0,r.kt)("br",null)),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,"The following sections show you how to use Xcode and ",(0,r.kt)("inlineCode",{parentName:"p"},"xcodebuild")," to configure settings Veracode uses to scan your iOS application."))}u.isMDXComponent=!0}}]);