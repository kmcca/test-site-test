"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[10400],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},49492:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={title:"Apex Packaging",slug:"/r/c_compilation_apex"},o=void 0,l={unversionedId:"guides/packaging/apex",id:"guides/packaging/apex",title:"Apex Packaging",description:"Your Apex applications must meet specific compilation requirements before you can submit them for scanning.",source:"@site/docs/guides/03_packaging/05_apex.md",sourceDirName:"guides/03_packaging",slug:"/r/c_compilation_apex",permalink:"/km-docusaurus-test/r/c_compilation_apex",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Apex Packaging",slug:"/r/c_compilation_apex"},sidebar:"tutorialSidebar",previous:{title:"Android Packaging",permalink:"/km-docusaurus-test/r/compilation_android"},next:{title:"ASP Classic Packaging",permalink:"/km-docusaurus-test/r/compilation_ASPclassic"}},p={},s=[{value:"Supported Apex Versions",id:"supported-apex-versions",level:2},{value:"Supported Apex Libraries and Technologies",id:"supported-apex-libraries-and-technologies",level:2},{value:"Required Files",id:"required-files",level:2},{value:"Packaging Guidance",id:"packaging-guidance",level:2},{value:"Accessing Apex, Visualforce, and Lightning Components",id:"accessing-apex-visualforce-and-lightning-components",level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Your Apex applications must meet specific compilation requirements before you can submit them for scanning."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/r_supported_table"},"Supported Languages and Platforms")," for instructions for other platforms."),(0,r.kt)("p",null,"Veracode supports analyzing Apex and other application components that extend the Salesforce platform."),(0,r.kt)("h2",{id:"supported-apex-versions"},"Supported Apex Versions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Language"),(0,r.kt)("th",{parentName:"tr",align:null},"Supported Versions"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Apex"),(0,r.kt)("td",{parentName:"tr",align:null},"52.0 and earlier")))),(0,r.kt)("h2",{id:"supported-apex-libraries-and-technologies"},"Supported Apex Libraries and Technologies"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Framework/Technology"),(0,r.kt)("th",{parentName:"tr",align:null},"Supported Versions"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Visualforce Pages"),(0,r.kt)("td",{parentName:"tr",align:null},"52.0 and earlier")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Lightning Web Components"),(0,r.kt)("td",{parentName:"tr",align:null},"52.0 and earlier")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Aura (Lightning) Components"),(0,r.kt)("td",{parentName:"tr",align:null},"52.0 and earlier")))),(0,r.kt)("h2",{id:"required-files"},"Required Files"),(0,r.kt)("p",null,"Veracode requires source files for the Apex application."),(0,r.kt)("h2",{id:"packaging-guidance"},"Packaging Guidance"),(0,r.kt)("p",null,"Upload a ZIP archive containing these files to Veracode:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"All Apex source code"),(0,r.kt)("li",{parentName:"ul"},"Visualforce pages"),(0,r.kt)("li",{parentName:"ul"},"Lightning component source, including any application pages, component files, HTML templates, and JavaScript code from Lightning web components")),(0,r.kt)("p",null,"Files must be UTF-8 encoded."),(0,r.kt)("p",null,"Do not include third-party packages. Do not upload individual Apex source files."),(0,r.kt)("p",null,"Veracode only scans Apex files with these extensions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"APP"),(0,r.kt)("li",{parentName:"ul"},"CLS"),(0,r.kt)("li",{parentName:"ul"},"CMP"),(0,r.kt)("li",{parentName:"ul"},"COMPONENT"),(0,r.kt)("li",{parentName:"ul"},"EVT"),(0,r.kt)("li",{parentName:"ul"},"PAGE"),(0,r.kt)("li",{parentName:"ul"},"TGR"),(0,r.kt)("li",{parentName:"ul"},"TRIGGER"),(0,r.kt)("li",{parentName:"ul"},"VFP")),(0,r.kt)("h2",{id:"accessing-apex-visualforce-and-lightning-components"},"Accessing Apex, Visualforce, and Lightning Components"),(0,r.kt)("p",null,"You can access the components of your Salesforce applications to prepare them for analysis in one of these ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Download source code files individually in the Developer Console"),(0,r.kt)("li",{parentName:"ul"},"Use Salesforce extensions for Visual Studio Code"),(0,r.kt)("li",{parentName:"ul"},"Use the Force.com IDE"),(0,r.kt)("li",{parentName:"ul"},"Use the Salesforce Ant Migration tool")),(0,r.kt)("p",null,"For assistance using any of these tools, see the ",(0,r.kt)("a",{parentName:"p",href:"https://help.salesforce.com/docs."},"Salesforce documentation"),"."))}u.isMDXComponent=!0}}]);