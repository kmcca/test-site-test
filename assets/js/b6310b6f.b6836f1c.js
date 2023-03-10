"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[10934],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},87728:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={title:"Fix Example Transitive Vulnerability for NPM",slug:"/r/Fix_Example_Transitive_Vulnerability_for_NPM"},o=void 0,l={unversionedId:"guides/sca/using_agent_based_scans/finding_and_fixing_vulnerabilities/javascript_sca_agent/fix_example_npm_transitive",id:"guides/sca/using_agent_based_scans/finding_and_fixing_vulnerabilities/javascript_sca_agent/fix_example_npm_transitive",title:"Fix Example Transitive Vulnerability for NPM",description:"Because NPM projects allow for multiple versions of the same library, you cannot override a vulnerable library by adding the appropriate version directly to the configuration file.",source:"@site/docs/guides/07_sca/04_using_agent_based_scans/18_finding_and_fixing_vulnerabilities/03_javascript_sca_agent/03_fix_example_npm_transitive.md",sourceDirName:"guides/07_sca/04_using_agent_based_scans/18_finding_and_fixing_vulnerabilities/03_javascript_sca_agent",slug:"/r/Fix_Example_Transitive_Vulnerability_for_NPM",permalink:"/km-docusaurus-test/r/Fix_Example_Transitive_Vulnerability_for_NPM",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Fix Example Transitive Vulnerability for NPM",slug:"/r/Fix_Example_Transitive_Vulnerability_for_NPM"},sidebar:"tutorialSidebar",previous:{title:"Fix Example Direct Vulnerability for NPM",permalink:"/km-docusaurus-test/r/Fix_Example_Direct_Vulnerability_for_NPM"},next:{title:"Fix Example Transitive Vulnerability for NPM Without Force Resolutions",permalink:"/km-docusaurus-test/r/Fix_Example_Transitive_Vulnerability_for_NPM_Without_Force_Resolutions"}},s={},p=[],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Because NPM projects allow for multiple versions of the same library, you cannot override a vulnerable library by adding the appropriate version directly to the configuration file."),(0,a.kt)("p",null,"These steps provide a fix for a ",(0,a.kt)("a",{parentName:"p",href:"https://www.sourceclear.com/registry/vulnerabilities/2678"},"Timing Attack Via Signature Validation")," vulnerability in ",(0,a.kt)("a",{parentName:"p",href:"https://www.sourceclear.com/registry/libraries/610?version=1.0.3"},"cookie-signature, version 1.0.3")," in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/srcclr/example-javascript"},"example-javascript")," repository. In the example, the recommended version of cookie-signature is 1.0.4."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Before you begin:")),(0,a.kt)("p",null,"You must have already run a Veracode SCA agent-based scan or run the ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install")," command to install dependencies. These actions result in a ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," folder and a ",(0,a.kt)("inlineCode",{parentName:"p"},"package-lock.json")," appearing in your project. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"To complete this task:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add this ",(0,a.kt)("inlineCode",{parentName:"p"},"resolutions")," section to your ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," file:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'"resolutions": {\n  "cookie-signature": "1.0.4"\n}\n')),(0,a.kt)("p",{parentName:"li"},"If a ",(0,a.kt)("inlineCode",{parentName:"p"},"resolutions")," section already exists, add ",(0,a.kt)("inlineCode",{parentName:"p"},'"cookie-signature": "1.0.4"')," to it.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add this ",(0,a.kt)("inlineCode",{parentName:"p"},"scripts")," section to your ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," file:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'"scripts": {\n  "preinstall": "npx npm-force-resolutions"\n}\n')),(0,a.kt)("p",{parentName:"li"},"If a ",(0,a.kt)("inlineCode",{parentName:"p"},"scripts")," section already exists, add ",(0,a.kt)("inlineCode",{parentName:"p"},'"preinstall": "npx npm-force-resolutions"')," to it. This change makes the ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install")," command force the version resolution of the ",(0,a.kt)("inlineCode",{parentName:"p"},"cookie-signature")," library to 1.0.4, according to the ",(0,a.kt)("inlineCode",{parentName:"p"},"resolutions")," section using the ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/npm-force-resolutions"},"NPM Force Resolutions")," package.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Delete the ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," folder.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run the ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install")," command to download the updated dependency and ensure the updated version works with your project."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Next steps:")),(0,a.kt)("p",null,"If you encounter problems using the NPM ",(0,a.kt)("inlineCode",{parentName:"p"},"force-resolutions")," package, you can use ",(0,a.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Fix_Example_Transitive_Vulnerability_for_NPM_Without_Force_Resolutions"},"this alternative method"),"."))}u.isMDXComponent=!0}}]);