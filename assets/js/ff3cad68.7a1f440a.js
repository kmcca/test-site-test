"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[89969],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return n?i.createElement(f,a(a({ref:t},c),{},{components:n})):i.createElement(f,a({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},34529:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var i=n(87462),r=(n(67294),n(3905));const o={title:"Configure Findings Import Settings for Jira Cloud",slug:"/r/t_jira_cloud_findings_import"},a=void 0,s={unversionedId:"guides/integrations/ticketing/jira_cloud_integration/configure_jira_cloud_integration/jira_cloud_configure_findings_import",id:"guides/integrations/ticketing/jira_cloud_integration/configure_jira_cloud_integration/jira_cloud_configure_findings_import",title:"Configure Findings Import Settings for Jira Cloud",description:"You configure the Veracode Integration for Jira Cloud to specify the findings identified during Veracode scanning to import into Jira Cloud.",source:"@site/docs/guides/04_integrations/07_ticketing/05_jira_cloud_integration/03_configure_jira_cloud_integration/02_jira_cloud_configure_findings_import.md",sourceDirName:"guides/04_integrations/07_ticketing/05_jira_cloud_integration/03_configure_jira_cloud_integration",slug:"/r/t_jira_cloud_findings_import",permalink:"/km-docusaurus-test/r/t_jira_cloud_findings_import",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Configure Findings Import Settings for Jira Cloud",slug:"/r/t_jira_cloud_findings_import"},sidebar:"tutorialSidebar",previous:{title:"Add Login Credentials to the Veracode Integration for Jira Cloud",permalink:"/km-docusaurus-test/r/t_jira_cloud_login_creds"},next:{title:"Mapping Veracode Fields to Jira Fields",permalink:"/km-docusaurus-test/r/c_jira_mapping"}},l={},p=[],c={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You configure the Veracode Integration for Jira Cloud to specify the findings identified during Veracode scanning to import into Jira Cloud."),(0,r.kt)("p",null,"You can import findings into either a:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default project that you select from the provided dropdown menu in this procedure."),(0,r.kt)("li",{parentName:"ul"},"Project that you have named in a custom field on the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/request_profile"},"Metadata page")," of each Veracode application profile.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"To complete this task:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In Jira Cloud, select ",(0,r.kt)("strong",{parentName:"p"},"Jira settings")," ",">"," ",(0,r.kt)("strong",{parentName:"p"},"Apps")," ",">"," ",(0,r.kt)("strong",{parentName:"p"},"Findings Import"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the Import section, select the types of findings to import. Other sections on this page become enabled or disabled depending on your selections."),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you do not select ",(0,r.kt)("b",null,"Sandbox static findings")," or ",(0,r.kt)("b",null,"Sandbox SCA findings"),", steps 7 and 8 are disabled."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the Filter Import By section, select which findings to import:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"All findings"),": from all scans, including closed findings"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Only findings from the most recent scan"),":  all open findings that Veracode found in the most recent scan"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"All unmitigated findings"),": from all scans, including closed findings"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Only unmitigated findings from most recent scan"),": all open, unmitigated findings from most recent scan"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"All findings that affect policy"),": all open findings from all scans that affect policy"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"All unmitigated findings that affect policy"),": all unmitigated, open findings from all scans that affect policy")),(0,r.kt)("p",{parentName:"li"},"During each import, the integration checks previously-imported findings to verify if it can close the findings. For example, if you select the import selection criteria ",(0,r.kt)("strong",{parentName:"p"},"Only findings from the most recent scan")," and the most recent scan resulted in a finding that was fixed, the integration closes the Jira issue for this particular finding.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select to assign imported findings to a specific epic or link them to a related issue."),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you selected to import sandbox findings, these options are disabled.")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Assign to Epic"),": select to assign imported findings to a specific epic. Then, from the dropdown menu, select the Veracode custom field that contains the exact epic issue key. If you leave this custom field empty, your import results in an error. The integration assigns imported findings from every Veracode application with this exact epic issue key value in the same custom field. For example, you have added the same epic issue key value to Custom Field 5 in every application profile."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Link to Issue"),": select to link imported findings to a related issue. Then, from the dropdown menu, select the Veracode custom field that contains the exact issue key for the related issue to which to link imported findings. If you leave this custom field empty, your import results in an error. The integration links imported findings from every Veracode application with this exact issue key value in the same custom field. For example, you have added the same issue key value to Custom Field 7 in every application profile."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From the Import Static and Dynamic Findings As dropdown menu, select the issue type to apply to each imported static and dynamic finding."),(0,r.kt)("p",{parentName:"li"},"For SCA findings, the integration imports components as stories and imports vulnerabilities for those components as subtasks of the related stories.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the Import Issues Into section, select the Jira project into which you want to import the security findings or select the Veracode custom field that maps to the appropriate Jira project."),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You cannot enter custom metadata for sandbox scans of the application using the Veracode Platform. To enter custom metadata for sandbox scans, use the ",(0,r.kt)("a",{href:"https://docs.veracode.com/r/c_sandbox_update_rest"},"Development Sandbox API"),"."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the Add Values To Issues section, select the labels, or enter a string for a custom label, to add to the issues for all imported findings. You can also select to assign the issues to the next fix version scheduled for your Jira project."),(0,r.kt)("p",{parentName:"li"},"For example, you can assign issues to the next fix version of your software build, add a custom label to help you triage or sort your findings, and add a label for the CWE that corresponds to the type of finding discovered during scanning.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you selected to import sandbox findings, specify the Jira project into which to import findings, the labels to add to the issues during import, and whether to assign each issue to the next fix version.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the Automated Issue Management section, select whether to automatically close findings mitigated in the Veracode Platform or manually update the status of mitigated findings.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Locate the Jira user ID. You can find the user ID from your ",(0,r.kt)("a",{parentName:"p",href:"https://admin.atlassian.com/"},"Atlassian Administration account")," in ",(0,r.kt)("strong",{parentName:"p"},"Admin")," ",">"," ",(0,r.kt)("strong",{parentName:"p"},"User Management"),". In User Management, click the user and the user ID number loads as the last subdirectory of the URL in your browser. For example: ",(0,r.kt)("inlineCode",{parentName:"p"},"https://admin.atlassian.com/s/7c701bbe/users/{Jira_user_ID}"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the JIRA User field, enter the user ID number of the Jira user who can create and modify issues."),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This Jira user must have the necessary permissions for all Jira projects into which the integration imports findings."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Test JIRA User")," to verify the Jira username.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Optionally, in the Override Description section, select the ",(0,r.kt)("strong",{parentName:"p"},"Override the Jira Description field")," checkbox.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter the text to add to the Description field in each issue or leave the text field blank. During the next findings import, the contents of this field replace any content in the issue Description field for each imported finding.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Save")," to save all import settings.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If Jira prompts you to perform a re-index, you can proceed with re-indexing. However, Veracode only recommends re-indexing when it is required."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Results:")),(0,r.kt)("p",null,"The Import Settings section reports any errors detected in your configuration. If there are no errors, the configuration is complete and you can proceed with importing findings using the Veracode Integration for Jira Cloud."))}d.isMDXComponent=!0}}]);