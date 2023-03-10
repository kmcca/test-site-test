"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[84180],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=d(a),m=r,k=c["".concat(p,".").concat(m)]||c[m]||u[m]||o;return a?n.createElement(k,i(i({ref:t},s),{},{components:a})):n.createElement(k,i({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},87749:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const o={title:"Android Packaging",slug:"/r/compilation_android"},i=void 0,l={unversionedId:"guides/packaging/android",id:"guides/packaging/android",title:"Android Packaging",description:"Your Android applications must meet specific packaging and compilation requirements before you can submit them for scanning.",source:"@site/docs/guides/03_packaging/04_android.md",sourceDirName:"guides/03_packaging",slug:"/r/compilation_android",permalink:"/km-docusaurus-test/r/compilation_android",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Android Packaging",slug:"/r/compilation_android"},sidebar:"tutorialSidebar",previous:{title:"Supported Languages and Platforms",permalink:"/km-docusaurus-test/r/r_supported_table"},next:{title:"Apex Packaging",permalink:"/km-docusaurus-test/r/c_compilation_apex"}},p={},d=[{value:"Supported Android JREs and Compilers",id:"supported-android-jres-and-compilers",level:2},{value:"Supported Android Frameworks",id:"supported-android-frameworks",level:2},{value:"Compilation Guidance for Debug Builds",id:"compilation-guidance-for-debug-builds",level:2}],s={toc:d};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Your Android applications must meet specific packaging and compilation requirements before you can submit them for scanning."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/r_supported_table"},"Supported Languages and Platforms")," for instructions for other platforms."),(0,r.kt)("p",null,"You can analyze applications using Veracode Static Analysis or Veracode Software Composition Analysis ","(","SCA",")"," agent-based scanning. For SCA agent-based scan requirements, see ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Using_Veracode_SCA_with_Programming_Languages"},"Using Veracode SCA with Programming Languages"),"."),(0,r.kt)("p",null,"Veracode supports the scanning of Java and Kotlin applications compiled for Android. Veracode also supports these mobile frameworks:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/compilation_titan"},"Appcelerator Titanium")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/compilation_phonegap"},"Apache Cordova/Adobe PhoneGap")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/c_compilation_react"},"React Native")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/compilation_xamarin"},"Xamarin"))),(0,r.kt)("p",null,"Veracode does not support other cross-platform development frameworks."),(0,r.kt)("h2",{id:"supported-android-jres-and-compilers"},"Supported Android JREs and Compilers"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Language"),(0,r.kt)("th",{parentName:"tr",align:null},"Platform"),(0,r.kt)("th",{parentName:"tr",align:null},"Supported Versions"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Jetpack"),(0,r.kt)("td",{parentName:"tr",align:null},"Android"),(0,r.kt)("td",{parentName:"tr",align:null},"All stable releases through January 2022")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Java and Kotlin"),(0,r.kt)("td",{parentName:"tr",align:null},"Android"),(0,r.kt)("td",{parentName:"tr",align:null},"Android 2.2\u201313 (API Levels 8\u201333)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"NOTE"),(0,r.kt)("br",null)," ",(0,r.kt)("a",{parentName:"td",href:"https://docs.veracode.com/r/Initial_Support_and_Supported_Languages_Meaning"},"Initial support")," for Android 12 (API Level 31), Android 13 (API Level 33).")))),(0,r.kt)("p",null,"Veracode supports scanning Android applications written in Java and Kotlin and packaged as an Android Package ","(","APK",")"," or Android App Bundle ","(","AAB",")","."),(0,r.kt)("p",null,"Veracode can analyze Android application code with or without ",(0,r.kt)("inlineCode",{parentName:"p"},"debug")," symbols. When you provide debug builds of Android application code, Veracode can provide source file and line number information about the location of findings."),(0,r.kt)("p",null,"For a successful scan, you cannot obfuscate the Android application."),(0,r.kt)("h2",{id:"supported-android-frameworks"},"Supported Android Frameworks"),(0,r.kt)("p",null,"Veracode supports and provides high-quality results for Android applications using these frameworks."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Framework"),(0,r.kt)("th",{parentName:"tr",align:null},"Supported Versions"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AWS Mobile SDK for Android"),(0,r.kt)("td",{parentName:"tr",align:null},"2.2.4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Parse Android SDK"),(0,r.kt)("td",{parentName:"tr",align:null},"1.9.4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ExoPlayer"),(0,r.kt)("td",{parentName:"tr",align:null},"2.x")))),(0,r.kt)("h2",{id:"compilation-guidance-for-debug-builds"},"Compilation Guidance for Debug Builds"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you use Android Studio to develop your project:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Select a debug build variant from the Build Variants menu. Verify that you set all submodules to ",(0,r.kt)("strong",{parentName:"li"},"Debug"),"."),(0,r.kt)("li",{parentName:"ul"},"Name the APK using this format: ",(0,r.kt)("inlineCode",{parentName:"li"},"<app_name>-<productFlavor>-debug.apk")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To build with Android Studio on the command-line interface, use ",(0,r.kt)("inlineCode",{parentName:"p"},"gradlew")," with the ",(0,r.kt)("inlineCode",{parentName:"p"},"assembleDebug")," option.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"With the standard ",(0,r.kt)("inlineCode",{parentName:"p"},"javac")," compiler, on the command line, add the ",(0,r.kt)("inlineCode",{parentName:"p"},"-g")," option to obtain debug symbols, for example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"javac -g foo.java\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you are using ant to build the project, you must enable the ",(0,r.kt)("inlineCode",{parentName:"p"},"debug")," property in the ",(0,r.kt)("inlineCode",{parentName:"p"},"javac")," tasks, for example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'<javac debug="on"> ... set of classes </javac>\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you are developing the project with Eclipse, go to ",(0,r.kt)("strong",{parentName:"p"},"Project")," ",">"," ",(0,r.kt)("strong",{parentName:"p"},"Properties")," and select the Java Compiler properties. Under Classfile Generation, select these options:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Add variable attributes to generated class files")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Add line number attributes to generated class files")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Add source file name to generated class files")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you want to include ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_about_SCA"},"Software Composition Analysis")," (SCA) findings in your Static Analysis, you must also include the dependencies. This is the default behavior. If you had opted out of sharing dependencies, you must remove the ",(0,r.kt)("inlineCode",{parentName:"p"},"dependenciesInfo")," section from the ",(0,r.kt)("inlineCode",{parentName:"p"},"build.gradle")," file."))))}u.isMDXComponent=!0}}]);