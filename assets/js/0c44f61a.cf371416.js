"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[13632],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(r),u=n,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return r?a.createElement(h,i(i({ref:t},c),{},{components:r})):a.createElement(h,i({ref:t},c))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},32119:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const o={title:"Install and Use the C# API Wrapper",slug:"/r/t_about_Csharp_wrapper"},i=void 0,p={unversionedId:"guides/apis/api_wrappers/install_csharp_wrapper",id:"guides/apis/api_wrappers/install_csharp_wrapper",title:"Install and Use the C# API Wrapper",description:"You download the C# wrapper as a ZIP archive from Veracode, extract the installer from the archive and, then, run the installer from the command line.",source:"@site/docs/guides/15_apis/06_api_wrappers/01_install_csharp_wrapper.md",sourceDirName:"guides/15_apis/06_api_wrappers",slug:"/r/t_about_Csharp_wrapper",permalink:"/km-docusaurus-test/r/t_about_Csharp_wrapper",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Install and Use the C# API Wrapper",slug:"/r/t_about_Csharp_wrapper"},sidebar:"tutorialSidebar",previous:{title:"API Wrappers",permalink:"/km-docusaurus-test/r/c_about_wrappers"},next:{title:"Install the Java API Wrapper from Maven Central",permalink:"/km-docusaurus-test/r/t_working_with_java_wrapper"}},l={},s=[],c={toc:s};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"You download the C# wrapper as a ZIP archive from Veracode, extract the installer from the archive and, then, run the installer from the command line."),(0,n.kt)("p",null,"You configure the API wrapper parameters to specify your Veracode API credentials, the actions to perform, and to add new parameters."),(0,n.kt)("p",null,"You can also ",(0,n.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/t_VS_library"},"reference the C# API wrapper from Visual Studio"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Before you begin:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You have generated ",(0,n.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/c_api_credentials3"},"Veracode API credentials"),"."),(0,n.kt)("li",{parentName:"ul"},"You have installed the required software listed on the ",(0,n.kt)("a",{parentName:"li",href:"https://community.veracode.com/s/article/Support-Matrix"},"Veracode-Authored Integrations page"),".")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"To complete this task:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Download and extract the ",(0,n.kt)("a",{parentName:"p",href:"https://tools.veracode.com/integrations/API-Wrappers/CSharp/bin/VeracodeCSharpAPI.zip"},"C# ZIP file"),"."),(0,n.kt)("p",{parentName:"li"},"In the ZIP file, the documentation is located in ",(0,n.kt)("inlineCode",{parentName:"p"},"Help\\index.html"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In a command prompt window, navigate to the directory where the EXE file is located and enter ",(0,n.kt)("inlineCode",{parentName:"p"},"VeracodeC#API"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enter this command:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"VeracodeC#API -vid <Veracode API ID> -vkey <Veracode API key> -action <action>\n")),(0,n.kt)("p",{parentName:"li"},"where ",(0,n.kt)("inlineCode",{parentName:"p"},"<action>")," is any of the ",(0,n.kt)("inlineCode",{parentName:"p"},"-action")," values listed under Usage in the Help window of the console."),(0,n.kt)("p",{parentName:"li"},"Veracode recommends that you use an external ",(0,n.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_configure_api_cred_file"},"Veracode API credentials file")," to ",(0,n.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_wrappers_using_api_creds_file"},"provide your credentials to the Veracode API wrapper"),". When you use a Veracode API credentials file, you can omit the ",(0,n.kt)("inlineCode",{parentName:"p"},"-vid")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"-vkey")," parameters for specifying your Veracode API credentials.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Review the parsing errors to identify missing parameters or parameters with invalid arguments.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"To enter missing parameters, run this command:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"VeracodeC#API -vid <Veracode API ID> -vkey <Veracode API key> -action <action> -<param1> <arg1> -<param2> <arg2>\u2026\n")),(0,n.kt)("p",{parentName:"li"},"where ",(0,n.kt)("inlineCode",{parentName:"p"},"<param#>")," is a missing parameter and ",(0,n.kt)("inlineCode",{parentName:"p"},"<arg#>")," is the corresponding argument."),(0,n.kt)("p",{parentName:"li"},"You can use the optional parameter ",(0,n.kt)("inlineCode",{parentName:"p"},"-inputfilepath")," if you want to provide the filepath of a CSV file from which to read additional command-line arguments. The correct format of the CSV file is to enter the parameter names in the first row and the corresponding values of those parameters in the subsequent rows."),(0,n.kt)("p",{parentName:"li"},"You can use ",(0,n.kt)("inlineCode",{parentName:"p"},"inputfilepath")," to make multiple calls to the API specified by the action. In the CSV file, use one row to specify the parameters for each call. For an example, see ",(0,n.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/r_createuser"},"createuser.do"),"."))),(0,n.kt)("p",null,"The wrapper returns a zero (integer",")"," exit code when a command succeeds."),(0,n.kt)("p",null,"The wrapper returns a non-zero (integer",")"," exit code when a command fails, as follows:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"1")," = Invalid input"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"2")," = API internal error"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"3")," = Incorrect file format of the CSV file referred to in the ",(0,n.kt)("inlineCode",{parentName:"li"},"-inputfilepath")," parameter"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"4")," = The scan did not pass ",(0,n.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/c_appsec_policies"},"policy compliance"),". This code only applies to an ",(0,n.kt)("inlineCode",{parentName:"li"},"uploadandscan")," composite action that specifies the ",(0,n.kt)("inlineCode",{parentName:"li"},"scantimeout")," parameter.")),(0,n.kt)("p",null,"The Veracode API wrappers return errors for missing required parameters and unrecognized parameters. The API wrappers do not return errors on defined API parameters that are not valid for use with the specified action. For example, if a Veracode API wrapper takes ",(0,n.kt)("inlineCode",{parentName:"p"},"sandboxid")," as an optional parameter and you supply ",(0,n.kt)("inlineCode",{parentName:"p"},"sandboxname")," in error, the API wrapper ignores ",(0,n.kt)("inlineCode",{parentName:"p"},"sandboxname")," and executes. You can verify the list of valid parameters in the console or the XML API documentation."))}d.isMDXComponent=!0}}]);