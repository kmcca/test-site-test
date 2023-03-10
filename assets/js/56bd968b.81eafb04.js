"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[70276],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),f=a,m=u["".concat(c,".").concat(f)]||u[f]||p[f]||o;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},21766:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={title:"Understanding Data in the XML Report",slug:"/r/c_about_XML_report"},i=void 0,s={unversionedId:"guides/findings/accessing_veracode_reports/xml_report/understanding_data_in__XML_report",id:"guides/findings/accessing_veracode_reports/xml_report/understanding_data_in__XML_report",title:"Understanding Data in the XML Report",description:"The XML export contains some data that is provided for automated consumption of flaw results, including remediation status and date first found.",source:"@site/docs/guides/11_findings/08_accessing_veracode_reports/08_xml_report/01_understanding_data_in__XML_report.md",sourceDirName:"guides/11_findings/08_accessing_veracode_reports/08_xml_report",slug:"/r/c_about_XML_report",permalink:"/km-docusaurus-test/r/c_about_XML_report",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Understanding Data in the XML Report",slug:"/r/c_about_XML_report"},sidebar:"tutorialSidebar",previous:{title:"Download an XML Report",permalink:"/km-docusaurus-test/r/t_download_XML_report"},next:{title:"Sharing Reports from the Veracode Platform",permalink:"/km-docusaurus-test/r/c_shared_reports"}},c={},l=[],d={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The XML export contains some data that is provided for automated consumption of flaw results, including remediation status and date first found."),(0,a.kt)("p",null,"The Detailed Results XML file for an application that contains more than one scan can contain information about both new and fixed flaws. The report states the line where each flaw is located, the number of lines of code ","(","LOC",")"," in a module, and also maps the flaws to the CWE, OWASP, and CERT industry standard lists of vulnerabilities."),(0,a.kt)("p",null,"Flaws that have been fixed can be filtered out by using the XML attribute ",(0,a.kt)("inlineCode",{parentName:"p"},"remediation_status"),":"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'<flaw ... remediation_status="fixed" ... >')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Flaws may not show as fixed if there were large changes in the upload or if another scan, which might have run in a development sandbox, already detected a flaw as fixed. If a flaw no longer appears in the scan results, you can consider it closed.")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"date_first_occurrence")," attribute of the flaw contains the date on which the first report referencing this flaw was published. You can use this date to compute statistics about flaw aging."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"cia_impact")," attribute contains information about the Veracode assessment of the confidentiality, integrity, and availability impact of the flaw if it is exploited. Veracode uses this information, part of the CVSS standard, to compute the severity for the flaw. The value is presented as three letters, where the first letter is the confidentiality, second is integrity, and third is availability. Possible values for each letter are ",(0,a.kt)("inlineCode",{parentName:"p"},"c")," for Complete, ",(0,a.kt)("inlineCode",{parentName:"p"},"p")," for Partial, or ",(0,a.kt)("inlineCode",{parentName:"p"},"n")," for None."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"policy_compliance_status")," attribute contains information about the Veracode policy evaluation for sandbox scan results. Each finding for a sandbox scan includes the policy impact under the BLANK attribute, which allows you to inspect the sandbox findings that impact policy. A sandbox scan does not take into account the activity-based policy rules, such as scan types and scan frequency. Sandbox scans do not count towards the rule of scan frequency. In a sandbox, only the findings are assessed for policy implications."))}p.isMDXComponent=!0}}]);