"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[14317],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(a),d=r,g=c["".concat(p,".").concat(d)]||c[d]||m[d]||i;return a?n.createElement(g,o(o({ref:t},u),{},{components:a})):n.createElement(g,o({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},29745:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const i={title:"PHP Packaging",slug:"/r/compilation_php"},o=void 0,l={unversionedId:"guides/packaging/php",id:"guides/packaging/php",title:"PHP Packaging",description:"Your PHP applications must meet specific compilation requirements before you can submit them for scanning.",source:"@site/docs/guides/03_packaging/23_php.md",sourceDirName:"guides/03_packaging",slug:"/r/compilation_php",permalink:"/km-docusaurus-test/r/compilation_php",draft:!1,tags:[],version:"current",sidebarPosition:23,frontMatter:{title:"PHP Packaging",slug:"/r/compilation_php"},sidebar:"tutorialSidebar",previous:{title:"PhoneGap/Cordova Packaging",permalink:"/km-docusaurus-test/r/compilation_phonegap"},next:{title:"PL/SQL Packaging",permalink:"/km-docusaurus-test/r/c_compilation_plsql"}},p={},s=[{value:"Supported PHP Versions",id:"supported-php-versions",level:2},{value:"Supported PHP Frameworks",id:"supported-php-frameworks",level:2},{value:"Template Engines",id:"template-engines",level:2},{value:"Packaging Guidance",id:"packaging-guidance",level:2},{value:"Analysis Limitations",id:"analysis-limitations",level:2}],u={toc:s};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Your PHP applications must meet specific compilation requirements before you can submit them for scanning."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/r_supported_table"},"Supported Languages and Platforms")," for instructions for other platforms."),(0,r.kt)("p",null,"You can analyze applications using Veracode Static Analysis or Veracode Software Composition Analysis ","(","SCA",")"," upload and scan, if licensed. For SCA agent-based scan requirements, see ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Using_Veracode_SCA_with_Programming_Languages"},"Using Veracode SCA with Programming Languages"),"."),(0,r.kt)("h2",{id:"supported-php-versions"},"Supported PHP Versions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Language"),(0,r.kt)("th",{parentName:"tr",align:null},"Supported Versions"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PHP"),(0,r.kt)("td",{parentName:"tr",align:null},"5.2\u20137.4, 8.0, 8.1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"NOTE"),(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"td",href:"https://docs.veracode.com/r/Initial_Support_and_Supported_Languages_Meaning"},"Initial support for PHP 8.0 and 8.1"),".")))),(0,r.kt)("h2",{id:"supported-php-frameworks"},"Supported PHP Frameworks"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Framework"),(0,r.kt)("th",{parentName:"tr",align:null},"Versions"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Laravel"),(0,r.kt)("td",{parentName:"tr",align:null},"5.x-9.x")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Zend"),(0,r.kt)("td",{parentName:"tr",align:null},"1, 2, 3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Symfony"),(0,r.kt)("td",{parentName:"tr",align:null},"5.x, 6.x")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"NOTE"),(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"td",href:"https://docs.veracode.com/r/Initial_Support_and_Supported_Languages_Meaning"},"Initial support for Symfony 6.x"),".")))),(0,r.kt)("h2",{id:"template-engines"},"Template Engines"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Supported Versions"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Smarty"),(0,r.kt)("td",{parentName:"tr",align:null},"2.6, 3.1")))),(0,r.kt)("h2",{id:"packaging-guidance"},"Packaging Guidance"),(0,r.kt)("p",null,"Upload a compressed ZIP archive of all PHP code, including third-party PHP code such as the ",(0,r.kt)("inlineCode",{parentName:"p"},"vendor")," folder, to Veracode. If you are using Software Composition Analysis, include ",(0,r.kt)("inlineCode",{parentName:"p"},"composer.lock")," in the root of your ZIP archive. To get the most accurate results, include ",(0,r.kt)("inlineCode",{parentName:"p"},"composer.json"),". Do not attempt to upload individual PHP files."),(0,r.kt)("p",null,"Veracode precompiles all PHP code uploaded to the Veracode Platform prior to analysis. The submitted PHP code must be able to compile. Otherwise, the prescan returns a compilation error."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Submitting third-party libraries for unsupported PHP frameworks may result in additional findings and longer analysis times.")),(0,r.kt)("p",null,"Veracode only attempts to compile files ending in these extensions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"PHP"),(0,r.kt)("li",{parentName:"ul"},"MODULE"),(0,r.kt)("li",{parentName:"ul"},"INC"),(0,r.kt)("li",{parentName:"ul"},"HTML"),(0,r.kt)("li",{parentName:"ul"},"HTM"),(0,r.kt)("li",{parentName:"ul"},"PROFILE"),(0,r.kt)("li",{parentName:"ul"},"INSTALL"),(0,r.kt)("li",{parentName:"ul"},"ENGINE"),(0,r.kt)("li",{parentName:"ul"},"THEME"),(0,r.kt)("li",{parentName:"ul"},"PHP4"),(0,r.kt)("li",{parentName:"ul"},"PHP5"),(0,r.kt)("li",{parentName:"ul"},"PHP7"),(0,r.kt)("li",{parentName:"ul"},"PHTML")),(0,r.kt)("h2",{id:"analysis-limitations"},"Analysis Limitations"),(0,r.kt)("p",null,"Veracode PHP analysis does not interpret PHP configuration settings in PHP.INI, build options passed to PHP configure script, ",(0,r.kt)("inlineCode",{parentName:"p"},"ini_set"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"assert"),", or HTTP server-specific configuration, which are options that you pass to PHP at runtime or specify in server configuration files. Veracode analysis makes these assumptions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"All applications are web applications."),(0,r.kt)("li",{parentName:"ul"},"stdout goes to an HTTP client."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Register_globals")," is set to OFF."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"register_argc_argv"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"always_populate_raw_post_data"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"register_long_arrays")," are ON."),(0,r.kt)("li",{parentName:"ul"},"All ",(0,r.kt)("inlineCode",{parentName:"li"},"magic_quotes")," configuration options are OFF.")))}m.isMDXComponent=!0}}]);