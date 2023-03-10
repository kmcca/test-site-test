"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[94447],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(a),d=r,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return a?n.createElement(f,i(i({ref:t},p),{},{components:a})):n.createElement(f,i({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},64458:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const o={title:"Configure a TeamCity Project for Veracode Scans",slug:"/r/c_config_teamcity_scan"},i=void 0,l={unversionedId:"guides/integrations/build_systems/teamcity_integration/config_teamcity_scan",id:"guides/integrations/build_systems/teamcity_integration/config_teamcity_scan",title:"Configure a TeamCity Project for Veracode Scans",description:"You can configure TeamCity jobs to upload binaries to Veracode for scanning. When you perform a Veracode scan, you use your same TeamCity build process, but add a build step for the Veracode parameters.",source:"@site/docs/guides/04_integrations/06_build_systems/09_teamcity_integration/03_config_teamcity_scan.md",sourceDirName:"guides/04_integrations/06_build_systems/09_teamcity_integration",slug:"/r/c_config_teamcity_scan",permalink:"/km-docusaurus-test/r/c_config_teamcity_scan",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Configure a TeamCity Project for Veracode Scans",slug:"/r/c_config_teamcity_scan"},sidebar:"tutorialSidebar",previous:{title:"Configure TeamCity Global Settings",permalink:"/km-docusaurus-test/r/c_config_teamcity"},next:{title:"Uninstall the Veracode TeamCity Plugin",permalink:"/km-docusaurus-test/r/Uninstall_the_Veracode_TeamCity_Plugin"}},c={},s=[],p={toc:s};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can configure TeamCity jobs to upload binaries to Veracode for scanning. When you perform a Veracode scan, you use your same TeamCity build process, but add a build step for the Veracode parameters."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Before you begin:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You meet the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/c_about_teamcity"},"prerequisites"),"."),(0,r.kt)("li",{parentName:"ul"},"You have ",(0,r.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/Install_the_Veracode_TeamCity_Plugin"},"installed the TeamCity plugin"),"."),(0,r.kt)("li",{parentName:"ul"},"You are logged in to TeamCity as administrator.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"To complete this task:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open the TeamCity project to which you want to apply the Veracode settings.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Edit Configuration Settings")," in the top-right corner.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In Build Steps, click ",(0,r.kt)("strong",{parentName:"p"},"Add build step"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From the dropdown menu, select ",(0,r.kt)("strong",{parentName:"p"},"Upload and Scan with Veracode."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the Application Name field, enter the name of the application you want Veracode to scan.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Optionally, if the specified Veracode application does not already exist, select ",(0,r.kt)("strong",{parentName:"p"},"Create New"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If applicable, enter the name of the team associated with the scan. To enter more than one team, use a comma-separated list.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From the Business Criticality menu, select the level of criticality of this application.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the development sandbox Name field, enter the name of the sandbox in which you want to run the scan as a sandbox scan.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the ",(0,r.kt)("strong",{parentName:"p"},"Create Sandbox")," checkbox if the sandbox does not already exist, but is a new sandbox you want TeamCity to create.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the Scan Name field, enter a name for the static scan you want to submit to Veracode for this application.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the Upload field, you can include and exclude filepath patterns of the files you want to upload and scan. Use a comma-separated list of Ant-style include patterns relative to the job workspace project name that you entered in the Project Name field.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the Scan field, you can include and exclude filename patterns of the uploaded files you want to scan as top-level modules. Use a comma-separated list of Ant-style include patterns with only the filenames of the files you have uploaded, not the filepaths.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Optionally, use the Save As fields to automatically remove characters from the filenames you are uploading, such as version numbers in this example: ",(0,r.kt)("inlineCode",{parentName:"p"},"teamcity-plugin-1.2.0.jar"),". In the Filename Pattern field, enter the filename and replace the text you want to always remove with two asterisks, such as in this example: ",(0,r.kt)("inlineCode",{parentName:"p"},"teamcity-plugin**.jar"),". In the Replacement Pattern field, enter the filename to which you want to rename your files, as in this example: ",(0,r.kt)("inlineCode",{parentName:"p"},"teamcity-plugin.jar"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the ",(0,r.kt)("strong",{parentName:"p"},"Wait for scan to complete")," checkbox if you want the TeamCity build to wait for the Veracode scan to complete. Enter the timeout period (in minutes) that you want TeamCity to wait. A Veracode policy scan fails, regardless of whether it completes or not, if it does not meet the requirements of the associated policy.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"For Delete Incomplete Scan, select an option for automatically deleting an incomplete scan, based on its status, to allow the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/r_uploadandscan"},(0,r.kt)("inlineCode",{parentName:"a"},"uploadandscan"))," action to continue processing. Default is ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),", which specifies to not delete an incomplete scan."),(0,r.kt)("p",{parentName:"li"},"To delete scans, you must have a user account with the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_role_permissions"},"Delete Scans")," role or an API service account with the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_API_roles_details"},"Upload and Scan")," role.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"For Veracode Credentials, enter your ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_api_credentials3"},"Veracode API credentials"),". If you entered these credentials on the Veracode administration page, you can select the ",(0,r.kt)("strong",{parentName:"p"},"Use global Veracode user credentials")," checkbox. The credentials you enter here override the global credentials.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Save"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Review all the build steps and click ",(0,r.kt)("strong",{parentName:"p"},"Run"),"."),(0,r.kt)("p",{parentName:"li"},"You can click the blue ",(0,r.kt)("strong",{parentName:"p"},"?")," icons in the field names to see more information."))))}m.isMDXComponent=!0}}]);