"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[63356],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(a),d=n,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return a?r.createElement(h,i(i({ref:t},c),{},{components:a})):r.createElement(h,i({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},88891:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const o={title:"API Tutorial: How to Access Scan Results",slug:"/r/t_TUTOR_results"},i=void 0,s={unversionedId:"guides/apis/xml_apis/results_xml_apis/xml_api_results_tutorial",id:"guides/apis/xml_apis/results_xml_apis/xml_api_results_tutorial",title:"API Tutorial: How to Access Scan Results",description:"This tutorial provides basic step-by-step information on how to use the Veracode Results API to automate the retrieval of application scan results using the HTTPie command-line tool. This guide uses standalone HTTP request calls, but you can combine them in an API wrapper to process multiple API calls.",source:"@site/docs/guides/15_apis/05_xml_apis/03_results_xml_apis/11_xml_api_results_tutorial.md",sourceDirName:"guides/15_apis/05_xml_apis/03_results_xml_apis",slug:"/r/t_TUTOR_results",permalink:"/km-docusaurus-test/r/t_TUTOR_results",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"API Tutorial: How to Access Scan Results",slug:"/r/t_TUTOR_results"},sidebar:"tutorialSidebar",previous:{title:"thirdpartyreportpdf.do",permalink:"/km-docusaurus-test/r/r_thirdpartyreportpdf"},next:{title:"Admin XML API (Deprecated)",permalink:"/km-docusaurus-test/r/c_about_admin_API_intro"}},l={},p=[],c={toc:p};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This tutorial provides basic step-by-step information on how to use the Veracode Results API to automate the retrieval of application scan results using the HTTPie command-line tool. This guide uses standalone HTTP request calls, but you can combine them in an API wrapper to process multiple API calls."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Before you begin:")),(0,n.kt)("p",null,"Before you can access and use the APIs, your Veracode user account must have the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_API_roles_details"},"required permissions"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"To complete this task:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From the command-line, request the list of applications in your portfolio by entering the following:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'http --auth-type=veracode_hmac "https://analysiscenter.veracode.com/api/5.0/getapplist.do"\n')),(0,n.kt)("p",{parentName:"li"},"The returned ",(0,n.kt)("inlineCode",{parentName:"p"},"applist.xml")," returns a list of application IDs and names, such as ",(0,n.kt)("inlineCode",{parentName:"p"},'app app_id="18766"')," ",(0,n.kt)("inlineCode",{parentName:"p"},'app_name="MyApp"'),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Obtain the list of builds for your chosen application."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"For policy scan results, enter the following command, using the application ID returned in the previous step:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'http --auth-type=veracode_hmac "https://analysiscenter.veracode.com/api/5.0/getbuildlist.do" "app_id==<your application ID>"\n')),(0,n.kt)("p",{parentName:"li"},"The returned ",(0,n.kt)("inlineCode",{parentName:"p"},"buildlist.xml")," from this step contains the IDs of the builds for this application.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"For sandbox scan results, enter the following command to obtain the IDs for your sandboxes, using the application ID returned in the previous step:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'http --auth-type=veracode_hmac "https://analysiscenter.veracode.com/api/5.0/getsandboxlist.do" "app_id==<your application ID>"\n')),(0,n.kt)("p",{parentName:"li"},"When you have the ID for the chosen sandbox, enter the following command to obtain the build IDs for that sandbox:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'http --auth-type=veracode_hmac "https://analysiscenter.veracode.com/api/5.0/getbuildlist.do" "app_id==<your application ID>" "sandbox_id==<your sandbox ID>"\n'))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"To obtain the detailed report for your chosen build, enter:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'http --auth-type=veracode_hmac "https://analysiscenter.veracode.com/api/5.0/detailedreport.do" "build_id==<the policy or sandbox build ID>\n')),(0,n.kt)("p",{parentName:"li"},"Where indicated, insert the ID for the target application build or sandbox scan. Locate the build ID from the ",(0,n.kt)("inlineCode",{parentName:"p"},"buildlist.xml")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"sandboxlist.xml")," returned in the previous step."))))}u.isMDXComponent=!0}}]);