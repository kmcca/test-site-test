"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[54278],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>u});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),c=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return i.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=r(e,["components","mdxType","originalType","parentName"]),h=c(n),u=a,g=h["".concat(p,".").concat(u)]||h[u]||d[u]||o;return n?i.createElement(g,s(s({ref:t},l),{},{components:n})):i.createElement(g,s({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=h;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:a,s[1]=r;for(var c=2;c<o;c++)s[c]=n[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},14600:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=n(87462),a=(n(67294),n(3905));const o={title:"Findings REST API Examples",slug:"/r/c_findings_v2_examples"},s=void 0,r={unversionedId:"guides/apis/rest_apis/findings_rest_apis/findings_api_examples",id:"guides/apis/rest_apis/findings_rest_apis/findings_api_examples",title:"Findings REST API Examples",description:"These examples demonstrate how to perform several functions with the Findings API.",source:"@site/docs/guides/15_apis/04_rest_apis/07_findings_rest_apis/03_findings_api_examples.md",sourceDirName:"guides/15_apis/04_rest_apis/07_findings_rest_apis",slug:"/r/c_findings_v2_examples",permalink:"/km-docusaurus-test/r/c_findings_v2_examples",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Findings REST API Examples",slug:"/r/c_findings_v2_examples"},sidebar:"tutorialSidebar",previous:{title:"Using the Static Flaw Information Endpoint",permalink:"/km-docusaurus-test/r/c_rest_static_finding_data_path_intro"},next:{title:"Greenlight REST API",permalink:"/km-docusaurus-test/r/c_greenlight_intro"}},p={},c=[{value:"Get Findings by CWE ID",id:"get-findings-by-cwe-id",level:2},{value:"Get Findings by Scan Type",id:"get-findings-by-scan-type",level:2},{value:"Get Findings for a Sandbox",id:"get-findings-for-a-sandbox",level:2},{value:"Get Findings by Severity",id:"get-findings-by-severity",level:2},{value:"Get Findings of a Specific Severity or Higher",id:"get-findings-of-a-specific-severity-or-higher",level:2},{value:"Get Findings and Include Annotations",id:"get-findings-and-include-annotations",level:2},{value:"Findings with Annotations in TSRV Format",id:"findings-with-annotations-in-tsrv-format",level:3},{value:"Get Findings that Violate Policy",id:"get-findings-that-violate-policy",level:2},{value:"Get Findings by Category",id:"get-findings-by-category",level:2},{value:"Get New Findings from Latest Scan",id:"get-new-findings-from-latest-scan",level:2},{value:"Get SCA Findings of a Severity Higher than the Allowed CVSS Score",id:"get-sca-findings-of-a-severity-higher-than-the-allowed-cvss-score",level:2},{value:"Get MPT Findings of a Severity Higher than the Allowed CVSS Score",id:"get-mpt-findings-of-a-severity-higher-than-the-allowed-cvss-score",level:2},{value:"Get Details About a Dynamic Analysis Flaw",id:"get-details-about-a-dynamic-analysis-flaw",level:2},{value:"Get Details About a Static Finding",id:"get-details-about-a-static-finding",level:2}],l={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"These examples demonstrate how to perform several functions with the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_findings_v2_intro"},"Findings API"),"."),(0,a.kt)("p",null,"Each example command requires the GUID of a target Veracode application. You can use the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_apps_intro"},"Applications API")," to get the GUID for an ",(0,a.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/r_applications_info"},"application"),"."),(0,a.kt)("p",null,"You can combine queries in your commands using ",(0,a.kt)("inlineCode",{parentName:"p"},"&"),". For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'http --auth-type=veracode_hmac GET "https://api.veracode.com/appsec/v2/applications/{application_guid}/findings?cwe=80&scan_type=STATIC"\n')),(0,a.kt)("h2",{id:"get-findings-by-cwe-id"},"Get Findings by CWE ID"),(0,a.kt)("p",null,"To identify each finding of a specific CWE in an application, run this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'http --auth-type=veracode_hmac GET "https://api.veracode.com/appsec/v2/applications/{application_guid}/findings?cwe=80"\n')),(0,a.kt)("h2",{id:"get-findings-by-scan-type"},"Get Findings by Scan Type"),(0,a.kt)("p",null,"To identify each finding of a specific scan type in an application, run this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'http --auth-type=veracode_hmac GET "https://api.veracode.com/appsec/v2/applications/{application_guid}/findings?scan_type=STATIC"\n')),(0,a.kt)("p",null,"The valid ",(0,a.kt)("inlineCode",{parentName:"p"},"scan_type")," values are ",(0,a.kt)("inlineCode",{parentName:"p"},"STATIC"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"DYNAMIC"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"MANUAL"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"SCA"),". If you do not include ",(0,a.kt)("inlineCode",{parentName:"p"},"SCA")," in this command, the Findings API excludes Software Composition Analysis findings."),(0,a.kt)("h2",{id:"get-findings-for-a-sandbox"},"Get Findings for a Sandbox"),(0,a.kt)("p",null,"To identify each finding for a specific sandbox in an application, run this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'http --auth-type=veracode_hmac GET "https://api.veracode.com/appsec/v2/applications/{application_guid}/findings?context={sandbox_guid}"\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"{sandbox_guid}")," parameter refers to non-policy sandboxes only. If you do not pass ",(0,a.kt)("inlineCode",{parentName:"p"},"{sandbox_guid}"),", the API returns the latest policy scan findings. "),(0,a.kt)("h2",{id:"get-findings-by-severity"},"Get Findings by Severity"),(0,a.kt)("p",null,"To identify each finding of a specific severity in an application, run this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'http --auth-type=veracode_hmac GET "https://api.veracode.com/appsec/v2/applications/{application_guid}/findings?severity=3"\n')),(0,a.kt)("p",null,"The valid ",(0,a.kt)("inlineCode",{parentName:"p"},"severity")," values are the numbers ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),"\u2013",(0,a.kt)("inlineCode",{parentName:"p"},"5"),"."),(0,a.kt)("h2",{id:"get-findings-of-a-specific-severity-or-higher"},"Get Findings of a Specific Severity or Higher"),(0,a.kt)("p",null,"To identify each finding higher than or equal to a specific severity in an application, run this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'http --auth-type=veracode_hmac GET "https://api.veracode.com/appsec/v2/applications/{application_guid}/findings?severity_gte=3"\n')),(0,a.kt)("p",null,"The valid ",(0,a.kt)("inlineCode",{parentName:"p"},"severity_gte")," values are the numbers ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),"\u2013",(0,a.kt)("inlineCode",{parentName:"p"},"5"),"."),(0,a.kt)("h2",{id:"get-findings-and-include-annotations"},"Get Findings and Include Annotations"),(0,a.kt)("p",null,"To identify each finding in an application and return the annotations, including mitigation details and comments, run this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'http --auth-type=veracode_hmac GET "https://api.veracode.com/appsec/v2/applications/{application_guid}/findings?include_annot=TRUE"\n')),(0,a.kt)("p",null,"This command adds an ",(0,a.kt)("inlineCode",{parentName:"p"},"annotations")," node containing the annotation information to the response."),(0,a.kt)("h3",{id:"findings-with-annotations-in-tsrv-format"},"Findings with Annotations in TSRV Format"),(0,a.kt)("p",null,"For findings with mitigation proposals in ",(0,a.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_review_TSRV"},"TSRV format"),", the command output appears as:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\\rTechnique : M1 : Establish and maintain control over all of your inputs.\\r\\nSpecifics : We are using an encoder for our input.\\r\\nRemaining Risk : None.\\r\\nVerification : We must decline, for secret reasons.\n")),(0,a.kt)("p",null,"Each component is separated by a carriage return and the line feed ",(0,a.kt)("inlineCode",{parentName:"p"},"\\r\\n"),". Processing the comment and separating at the ",(0,a.kt)("inlineCode",{parentName:"p"},"\\r\\n")," provides these items:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Technique : M1 : Establish and maintain control over all of your inputs"),(0,a.kt)("li",{parentName:"ul"},"Specifics : We are using an encoder for our input."),(0,a.kt)("li",{parentName:"ul"},"Remaining Risk : None."),(0,a.kt)("li",{parentName:"ul"},"Verification : We must decline, for secret reasons.")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"These comments are only examples. Veracode does not recommend offering any of these comments in your mitigations.")),(0,a.kt)("h2",{id:"get-findings-that-violate-policy"},"Get Findings that Violate Policy"),(0,a.kt)("p",null,"To identify each finding in an application that does not pass policy, run this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'http --auth-type=veracode_hmac GET "https://api.veracode.com/appsec/v2/applications/{application_guid}/findings?violates_policy=TRUE"\n')),(0,a.kt)("h2",{id:"get-findings-by-category"},"Get Findings by Category"),(0,a.kt)("p",null,"To identify each finding of a specific category in an application, run this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'http --auth-type=veracode_hmac GET "https://api.veracode.com/appsec/v2/applications/{application_guid}/findings?finding_category=20"\n')),(0,a.kt)("p",null,"Use the numeric ID value for ",(0,a.kt)("inlineCode",{parentName:"p"},"finding_category"),", as shown in the API output results as ",(0,a.kt)("inlineCode",{parentName:"p"},"finding..finding_category.id"),"."),(0,a.kt)("h2",{id:"get-new-findings-from-latest-scan"},"Get New Findings from Latest Scan"),(0,a.kt)("p",null,"To identify each new finding in the most recent scan of an application, run this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'http --auth-type=veracode_hmac GET "https://api.veracode.com/appsec/v2/applications/{application_guid}/findings?new=true"\n')),(0,a.kt)("h2",{id:"get-sca-findings-of-a-severity-higher-than-the-allowed-cvss-score"},"Get SCA Findings of a Severity Higher than the Allowed CVSS Score"),(0,a.kt)("p",null,"To identify each Software Composition Analysis (SCA) finding in an application with a severity higher than the CVSS score allowed in the policy, run this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'http --auth-type=veracode_hmac GET "https://api.veracode.com/appsec/v2/applications/{application_guid}/findings?scan_type=SCA&cvss_gte=6"\n')),(0,a.kt)("h2",{id:"get-mpt-findings-of-a-severity-higher-than-the-allowed-cvss-score"},"Get MPT Findings of a Severity Higher than the Allowed CVSS Score"),(0,a.kt)("p",null,"To identify each Manual Penetration Testing (MPT) finding in an application with a severity higher than the CVSS score allowed in the policy, run this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'http --auth-type=veracode_hmac GET "https://api.veracode.com/appsec/v2/applications/{application_guid}/findings?scan_type=MANUAL&cvss_gte=6"\n')),(0,a.kt)("p",null,"You can use the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_apps_intro"},"Applications API")," to get the GUID for an ",(0,a.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/r_applications_info"},"application"),". You can use the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_findings_v2_intro"},"Findings API")," to get the issue ID for a finding."),(0,a.kt)("p",null,"This endpoint uses the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_mpt_rest_api"},"Manual Testing API specification"),"."),(0,a.kt)("h2",{id:"get-details-about-a-dynamic-analysis-flaw"},"Get Details About a Dynamic Analysis Flaw"),(0,a.kt)("p",null,"Use this command to view details for a specific dynamic flaw:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'http --auth-type=veracode_hmac GET "https://api.veracode.com/appsec/v2/applications/{application_guid}/findings/{issue_id}/dynamic_flaw_info"\n')),(0,a.kt)("p",null,"You can use the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_findings_v2_intro"},"Findings API")," to get the issue ID for a finding."),(0,a.kt)("p",null,"This endpoint uses the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_rest_dynamic_flaw_intro"},"Dynamic Flaw API specification"),"."),(0,a.kt)("h2",{id:"get-details-about-a-static-finding"},"Get Details About a Static Finding"),(0,a.kt)("p",null,"This endpoint uses the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_rest_static_finding_data_path_intro"},"Static Finding Data Path API specification"),"."),(0,a.kt)("p",null,"Use this command to view the data paths for a static finding:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'http --auth-type=veracode_hmac GET "https://api.veracode.com/appsec/v2/applications/{application_guid}/findings/{finding_id}/static_flaw_info"\n')),(0,a.kt)("p",null,"Use this command to view the data paths for a static finding from a sandbox scan:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'http --auth-type=veracode_hmac GET "https://api.veracode.com/appsec/v2/applications/{application_guid}/findings/{issue_id}/static_flaw_info?context={sandbox_guid}\u201d\n')),(0,a.kt)("p",null,"You can use the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_apps_intro"},"Applications API")," to get the GUID for an ",(0,a.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/r_applications_info"},"application")," or ",(0,a.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/r_applications_sandboxes"},"development sandbox"),". You can use the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_findings_v2_intro"},"Findings API")," to get the issue ID for a finding."))}d.isMDXComponent=!0}}]);