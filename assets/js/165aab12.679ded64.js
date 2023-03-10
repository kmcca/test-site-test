"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1964],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||r;return n?a.createElement(f,o(o({ref:t},s),{},{components:n})):a.createElement(f,o({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},43971:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const r={title:"ColdFusion Packaging",slug:"/r/compilation_CF"},o=void 0,l={unversionedId:"guides/packaging/CF",id:"guides/packaging/CF",title:"ColdFusion Packaging",description:"Your ColdFusion applications must meet specific compilation requirements before you can submit them for scanning.",source:"@site/docs/guides/03_packaging/08_CF.md",sourceDirName:"guides/03_packaging",slug:"/r/compilation_CF",permalink:"/km-docusaurus-test/r/compilation_CF",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"ColdFusion Packaging",slug:"/r/compilation_CF"},sidebar:"tutorialSidebar",previous:{title:"COBOL Packaging",permalink:"/km-docusaurus-test/r/c_compilation_cobol"},next:{title:"C/C++ on Linux Packaging",permalink:"/km-docusaurus-test/r/compilation_nix"}},p={},c=[{value:"Required Files",id:"required-files",level:2},{value:"Supported ColdFusion Versions",id:"supported-coldfusion-versions",level:2},{value:"Compilation Guidance",id:"compilation-guidance",level:2}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Your ColdFusion applications must meet specific compilation requirements before you can submit them for scanning."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/r_supported_table"},"Supported Languages and Platforms")," for instructions for other platforms."),(0,i.kt)("h2",{id:"required-files"},"Required Files"),(0,i.kt)("p",null,"Veracode requires:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"All binary executables"),(0,i.kt)("li",{parentName:"ul"},"All required libraries"),(0,i.kt)("li",{parentName:"ul"},"The complete debug information for the application")),(0,i.kt)("h2",{id:"supported-coldfusion-versions"},"Supported ColdFusion Versions"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Language"),(0,i.kt)("th",{parentName:"tr",align:null},"Platform"),(0,i.kt)("th",{parentName:"tr",align:null},"Version"),(0,i.kt)("th",{parentName:"tr",align:null},"Compiler"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ColdFusion"),(0,i.kt)("td",{parentName:"tr",align:null},"Deployed as Java"),(0,i.kt)("td",{parentName:"tr",align:null},"7\u201311, 2016"),(0,i.kt)("td",{parentName:"tr",align:null},"7\u201311, 2016 ","(",(0,i.kt)("inlineCode",{parentName:"td"},"cfcompile.exe"),")")))),(0,i.kt)("h2",{id:"compilation-guidance"},"Compilation Guidance"),(0,i.kt)("p",null,"Veracode analyzes ColdFusion applications you compile into Java. To prepare your application:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Compile the ColdFusion code into Java."),(0,i.kt)("li",{parentName:"ol"},"Build a Java Web Archive ","(","WAR",")"," file for uploading to Veracode.")),(0,i.kt)("p",null,"To compile your application CFML files to Java classfiles, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"cfcompile")," utility with the ",(0,i.kt)("inlineCode",{parentName:"p"},"-deploy")," option. On Windows, you can usually find this utility installed in ",(0,i.kt)("inlineCode",{parentName:"p"},"c:\\coldfusion8\\bin")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"c:\\coldfusion9\\bin"),". This sample command line compiles a ColdFusion application to Java:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'"c:\\coldfusion8\\bin\\cfcompile" -deploy c:\\mycfwebroot c:\\mycfapp c:\\mycfappbin\n')),(0,i.kt)("p",null,"This sample command compiles all CFML files in ",(0,i.kt)("inlineCode",{parentName:"p"},"c:mycfapp")," and places them in ",(0,i.kt)("inlineCode",{parentName:"p"},"c:mycfappbin"),"."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"}," The filenames of the generated classfiles are identical to the source filenames. Ensure the last parameter is a different location than the source directory so that you do not overwrite the source files.")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"cfcompile")," utility may not correctly process application pathnames with spaces. For this step to succeed, you may have to rename your application path without spaces."),(0,i.kt)("p",null,"Building the compiled ColdFusion application into a WAR file ensures that Veracode has the proper context for analyzing your application. To build a WAR file for deployment on an application server:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Log in to ColdFusion Administrator.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Choose ",(0,i.kt)("strong",{parentName:"p"},"Packaging and Deployment")," ",">"," ",(0,i.kt)("strong",{parentName:"p"},"J2EE Archives"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add a new archive of type WAR. The application directory is the location of the compiled application, for example: ",(0,i.kt)("inlineCode",{parentName:"p"},"c:\\\\mycfappbin"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Place the finished WAR archive in the distribution directory.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add any related data sources.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Clear the ",(0,i.kt)("strong",{parentName:"p"},"Include CFML Source")," checkbox.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Clear the ",(0,i.kt)("strong",{parentName:"p"},"Include CF Administrator"),"checkbox.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Clear the ",(0,i.kt)("strong",{parentName:"p"},"Disable Debugging")," checkbox.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Submit and wait for the WAR packaging to complete."),(0,i.kt)("p",{parentName:"li"},"The resulting WAR file might be large, at least 100 MB.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Upload the resulting WAR file to Veracode."))))}u.isMDXComponent=!0}}]);