"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[67611],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>m});var o=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function n(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,o,r=function(e,t){if(null==e)return{};var i,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)i=a[o],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)i=a[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):n(n({},t),e)),i},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(i),m=r,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return i?o.createElement(f,n(n({ref:t},c),{},{components:i})):o.createElement(f,n({ref:t},c))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,n=new Array(a);n[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,n[1]=l;for(var p=2;p<a;p++)n[p]=i[p];return o.createElement.apply(null,n)}return o.createElement.apply(null,i)}d.displayName="MDXCreateElement"},49629:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=i(87462),r=(i(67294),i(3905));const a={title:"Configuring Precompilation Options for Visual Studio (Legacy)",slug:"/r/c_precompilation"},n=void 0,l={unversionedId:"guides/ides/static_ide/static_for_visual_studio_legacy/configure_static_vs_legacy/configure_precomp_static_vs_legacy",id:"guides/ides/static_ide/static_for_visual_studio_legacy/configure_static_vs_legacy/configure_precomp_static_vs_legacy",title:"Configuring Precompilation Options for Visual Studio (Legacy)",description:"In the Veracode Static for Visual Studio Options window, you can use the settings on the Precompilation tab to configure MSBuild and select a legacy precompilation method. You can usually accept the default values.",source:"@site/docs/guides/05_ides/01_static_ide/06_static_for_visual_studio_legacy/04_configure_static_vs_legacy/02_configure_precomp_static_vs_legacy.md",sourceDirName:"guides/05_ides/01_static_ide/06_static_for_visual_studio_legacy/04_configure_static_vs_legacy",slug:"/r/c_precompilation",permalink:"/km-docusaurus-test/r/c_precompilation",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Configuring Precompilation Options for Visual Studio (Legacy)",slug:"/r/c_precompilation"},sidebar:"tutorialSidebar",previous:{title:"Configure Proxy Settings for Veracode Static for Visual Studio (Legacy)",permalink:"/km-docusaurus-test/r/Install_Veracode_Static_for_Visual_Studio_Behind_a_Proxy"},next:{title:"Using Standard MSBuild Paths with Visual Studio",permalink:"/km-docusaurus-test/r/c_msbuild_paths"}},s={},p=[],c={toc:p};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In the Veracode Static for Visual Studio Options window, you can use the settings on the ",(0,r.kt)("strong",{parentName:"p"},"Precompilation")," tab to configure MSBuild and select a legacy precompilation method. You can usually accept the default values."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Precompilation and Publish Target Directory")),(0,r.kt)("p",null,"Specifies the location of the precompilation target directory in which to publish the build artifacts. The extension saves this value to the ",(0,r.kt)("inlineCode",{parentName:"p"},"VeracodePrecompileProfile.pubxml")," file, which it creates during the precompilation process."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Publish on build with Veracode settings")),(0,r.kt)("p",null,"Select this checkbox to invoke the precompile or publish process after a build or rebuild."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Use legacy precompilation method")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Select this checkbox to use the legacy method for precompiling and publishing, instead of the MSBuild method configured under the ASP.NET Publish section in the window. The MSBuild settings are saved. You can clear this checkbox to return to the MSBuild precompilation method."),(0,r.kt)("li",{parentName:"ul"},"Project-less templates, such as web forms applications, require that the ",(0,r.kt)("strong",{parentName:"li"},"Use legacy precompilation method")," checkbox is selected. The new functionality relies directly on MSBuild, which does not fully support legacy project-less templates.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"MSBuild Directory")),(0,r.kt)("p",null,"If MSBuild is not located in one of the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_msbuild_paths"},"standard MSBuild paths"),", you see the preferences window with an empty MSBuild Directory field. See ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_comp_troubleshoot"},"Troubleshooting Precompilation Errors")," if you have problems."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In general, you can use a later version of MSBuild on projects created with older versions of Visual Studio."),(0,r.kt)("li",{parentName:"ul"},"In the MSBuild Directory field, enter the directory path of the MSBuild version you want to use.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Default MSBuild Arguments")),(0,r.kt)("p",null,"This line shows the default MSBuild arguments:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"${SolutionName} /p:DeployOnBuild=true /p:PublishProfile=VeracodePrecompileProfile\n")),(0,r.kt)("p",null,"At runtime, the full path to the solution currently open in the Visual Studio solution explorer replaces the ",(0,r.kt)("inlineCode",{parentName:"p"},"SolutionName")," variable. The other two parameters are required for MSBuild to precompile the solution and, more specifically, each web project in the solution."),(0,r.kt)("p",null,"The last parameter, ",(0,r.kt)("inlineCode",{parentName:"p"},"/p:PublishProfile=VeracodePrecompileProfile"),", instructs MSBuild to find a publish profile named ",(0,r.kt)("inlineCode",{parentName:"p"},"VeracodePrecompileProfile.pubxml")," in the default publish profiles directory. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"WebProjectRoot/Properties/PublishProfiles"),"."),(0,r.kt)("p",null,"By default, if the extension does not modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"/p:PublishProfile")," property or find the ",(0,r.kt)("inlineCode",{parentName:"p"},"VeracodePrecompileProfile.pubxml")," file in the default publish profiles directory, it always creates the ",(0,r.kt)("inlineCode",{parentName:"p"},"VeracodePrecompileProfile.pubxml")," file. If you want to place this file in a different location, pass the full path within quotes to the location of the file: ",(0,r.kt)("inlineCode",{parentName:"p"},'/p:PublishProfile="C:\\PublishProfiles\\VeracodePrecompileProfile.pubxml"')),(0,r.kt)("p",null,"The custom directory location and publish profile file must exist or an error occurs. If you modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"/p:PublishProfile")," property, the extension no longer automatically creates the ",(0,r.kt)("inlineCode",{parentName:"p"},"VeracodePrecompileProfile.pubxml")," file. You can click ",(0,r.kt)("strong",{parentName:"p"},"Restore to Default")," to revert to the original behavior."),(0,r.kt)("p",null,"If you encounter problems and want more detailed information about MSBuild activity, you can add the logging parameter. For example, you must change this path to an appropriate logging directory:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"/flp:verbosity=detailed;logfile=C:\\Logs\\VeracodeMsBuildLog-${LogDateTimeStamp}.log")),(0,r.kt)("p",null,"Valid ",(0,r.kt)("inlineCode",{parentName:"p"},"verbosity")," values are: ",(0,r.kt)("inlineCode",{parentName:"p"},"diagnostic"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"detailed"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"normal"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"minimal"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"quiet"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"}," The ",(0,r.kt)("code",null,"diagnostic")," value can create extremely large log files depending on the complexity of your solution. Veracode recommends starting with a less-verbose value.")),(0,r.kt)("p",null,"You must ensure the directory structure referenced in the ",(0,r.kt)("inlineCode",{parentName:"p"},"logfile")," attribute exists. The filename is automatically created, but you receive an error if the directories do not already exist. Also, verify there is a space between the previous parameter and this parameter."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"LogDateTimeStamp")," variable at the end of the path is automatically replaced with a date and time stamp. Each time you publish it creates a new file as opposed to appending to an existing file."))}u.isMDXComponent=!0}}]);