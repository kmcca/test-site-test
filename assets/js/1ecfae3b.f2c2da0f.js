"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[71093],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},18770:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={title:"Install Veracode Static for Eclipse",slug:"/r/c_install_Eclipse"},o=void 0,l={unversionedId:"guides/ides/static_ide/static_for_eclipse/install_static_eclipse/README",id:"guides/ides/static_ide/static_for_eclipse/install_static_eclipse/README",title:"Install Veracode Static for Eclipse",description:"Veracode Static for Eclipse functions like other Eclipse plugins that you install from an update site within the Eclipse IDE.",source:"@site/docs/guides/05_ides/01_static_ide/03_static_for_eclipse/01_install_static_eclipse/README.md",sourceDirName:"guides/05_ides/01_static_ide/03_static_for_eclipse/01_install_static_eclipse",slug:"/r/c_install_Eclipse",permalink:"/km-docusaurus-test/r/c_install_Eclipse",draft:!1,tags:[],version:"current",frontMatter:{title:"Install Veracode Static for Eclipse",slug:"/r/c_install_Eclipse"},sidebar:"tutorialSidebar",previous:{title:"Veracode Static for Eclipse",permalink:"/km-docusaurus-test/r/api_eclipse"},next:{title:"Install Veracode Static for Eclipse Behind a Proxy",permalink:"/km-docusaurus-test/r/Install_Veracode_Static_for_Eclipse_Behind_a_Proxy"}},c={},p=[],s={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Veracode Static for Eclipse functions like other Eclipse plugins that you install from an update site within the Eclipse IDE."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Before you begin:")),(0,a.kt)("p",null,"You have installed a supported version of Java and the Eclipse IDE listed on the ",(0,a.kt)("a",{parentName:"p",href:"https://community.veracode.com/s/article/Support-Matrix"},"Veracode-Authored Integrations page"),". Veracode Static for Eclipse can run on Eclipse-derived IDEs, such as Spring Suite."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"To complete this task:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select ",(0,a.kt)("strong",{parentName:"p"},"Help")," ",">"," ",(0,a.kt)("strong",{parentName:"p"},"Install New Software"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Add"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the Add Repository window, in the Name field, enter Veracode Static for Eclipse and, in the Location field, enter ",(0,a.kt)("inlineCode",{parentName:"p"},"https://tools.veracode.com/integrations/Eclipse/update"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"OK"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select the checkbox next to the plugin and click ",(0,a.kt)("strong",{parentName:"p"},"Next"),". If the Veracode checkbox does not open, clear the ",(0,a.kt)("strong",{parentName:"p"},"Group items by category")," checkbox.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the Install window, click ",(0,a.kt)("strong",{parentName:"p"},"Next"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select ",(0,a.kt)("strong",{parentName:"p"},"I accept the terms of the license agreement")," and click ",(0,a.kt)("strong",{parentName:"p"},"Finish"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"When prompted, restart Eclipse."))))}u.isMDXComponent=!0}}]);