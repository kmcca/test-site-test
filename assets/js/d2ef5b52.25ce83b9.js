"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[92311],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),m=i,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(f,r(r({ref:t},c),{},{components:a})):n.createElement(f,r({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},64739:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));const o={title:"Use YAML to Add Veracode Static Analysis to Azure DevOps Pipelines",slug:"/r/Use_YAML_to_Add_Veracode_Analysis_to_Azure_DevOps_Pipelines"},r=void 0,s={unversionedId:"guides/integrations/build_systems/azure_devops_integration/azure_add_static_build_pipeline_yaml/README",id:"guides/integrations/build_systems/azure_devops_integration/azure_add_static_build_pipeline_yaml/README",title:"Use YAML to Add Veracode Static Analysis to Azure DevOps Pipelines",description:"You can use YAML to add the Veracode Azure DevOps Extension and integrate Veracode Static Analysis into your Azure DevOps and Team Foundation Server \\(TFS\\) build pipelines.",source:"@site/docs/guides/04_integrations/06_build_systems/04_azure_devops_integration/04_azure_add_static_build_pipeline_yaml/README.md",sourceDirName:"guides/04_integrations/06_build_systems/04_azure_devops_integration/04_azure_add_static_build_pipeline_yaml",slug:"/r/Use_YAML_to_Add_Veracode_Analysis_to_Azure_DevOps_Pipelines",permalink:"/km-docusaurus-test/r/Use_YAML_to_Add_Veracode_Analysis_to_Azure_DevOps_Pipelines",draft:!1,tags:[],version:"current",frontMatter:{title:"Use YAML to Add Veracode Static Analysis to Azure DevOps Pipelines",slug:"/r/Use_YAML_to_Add_Veracode_Analysis_to_Azure_DevOps_Pipelines"},sidebar:"tutorialSidebar",previous:{title:"Add Veracode Static Analysis to Azure DevOps Pipelines",permalink:"/km-docusaurus-test/r/t_TFS_config_build_pipe"},next:{title:"Azure DevOps YAML Properties for Upload and Scan",permalink:"/km-docusaurus-test/r/Azure_DevOps_YAML_Properties_for_Upload_and_Scan"}},l={},p=[],c={toc:p};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can use YAML to add the Veracode Azure DevOps Extension and integrate Veracode Static Analysis into your Azure DevOps and Team Foundation Server ","(","TFS",")"," build pipelines."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Before you begin:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Before uploading an application, you must package it to include the required debug symbols, as described in the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/compilation_packaging"},"Packaging Guidance"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Generated ",(0,i.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_api_credentials3"},"Veracode API credentials"),". If your credentials contain variables, you must start each variable with a ",(0,i.kt)("inlineCode",{parentName:"p"},"$")," and wrap the variable value in parentheses. For example, you enter the ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," variable as ",(0,i.kt)("inlineCode",{parentName:"p"},"$(Id)"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If you want to upload multiple artifacts for scanning, you have prepared one or more ZIP archives:"),(0,i.kt)("p",{parentName:"li"}," a. Add the artifacts to one or more ZIP archives."),(0,i.kt)("p",{parentName:"li"}," b. Ensure the ZIP archives are in the same upload file path location."),(0,i.kt)("p",{parentName:"li"}," c. Prepare the ZIP archives for uploading to Veracode using a separate build step or build steps in your pipeline."))),(0,i.kt)("p",null,"If you have an ASP.NET application, see ",(0,i.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/t_vsts_precompilation"},"Configure an Azure DevOps Build for ASP.NET Applications"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"To complete this task:")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In your Azure DevOps or TFS project, navigate to the YAML file for the pipeline in which to add the Veracode task.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Show assistant"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Search for ",(0,i.kt)("inlineCode",{parentName:"p"},"veracode"),", then select the ",(0,i.kt)("strong",{parentName:"p"},"Veracode Upload and Scan")," task.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the Veracode Upload and Scan window, in the Connection Details section, select a connection source for connecting to Veracode:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Service Connection"),": select an existing service connection that uses your Veracode API credentials or ",(0,i.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/Create_a_Service_Connection_in_Azure_DevOps"},"create a new service connection"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Credentials"),": enter your Veracode API credentials."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the Veracode Scan Settings section, enter the name of the associated application profile, a unique scan name, and the filepath to either the application artifact or the folder containing the artifacts to upload to Veracode."),(0,i.kt)("p",{parentName:"li"}," For a .NET application, if you have additional published projects from a solution, include them in the archive to upload and analyze. Add any JavaScript files to a separate ZIP archive according to the packaging instructions in the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/compilation_packaging"},"Veracode Packaging Requirements"),". Include only the file types for languages and platforms that Veracode can scan in a ZIP archive to improve uploading and scan speed. This is the Archive Files task Microsoft has available: ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/devops/pipelines/tasks/utility/archive-files?view=azure-devops"},"https://docs.microsoft.com/en-us/azure/devops/pipelines/tasks/utility/archive-files?view=azure-devops"),"."),(0,i.kt)("p",{parentName:"li"}," If this is not an existing Veracode application, select the ",(0,i.kt)("strong",{parentName:"p"},"Create Application Profile")," checkbox in the Advanced Scan Settings section to have Veracode create an ",(0,i.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/request_profile"},"application profile"),"."),(0,i.kt)("admonition",{parentName:"li",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Application names in Azure DevOps are case-sensitive."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the Advanced Scan Settings section, if you are using a development sandbox, enter a sandbox name or click ",(0,i.kt)("strong",{parentName:"p"},"Create Sandbox")," to create one."),(0,i.kt)("p",{parentName:"li"},"In the Optional Arguments field, enter any ",(0,i.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_wrapper_CL"},"optional parameters")," to apply to the Upload and Scan action. For example, to configure module selection, use the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/r_uploadandscan"},"uploadandscan")," composite actions to specify files to include and exclude in scanning. This example specifies to include all DLL files, exclude any EXE files, and to scan in a sandbox named ",(0,i.kt)("inlineCode",{parentName:"p"},"mysandbox"),", which Veracode creates if the sandbox does not already exist:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"-include *.dll -exclude *.exe -createsandbox true -sandboxname mysandbox\n")),(0,i.kt)("admonition",{parentName:"li",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Do not enclose any of the values in single or double quotations.")),(0,i.kt)("p",{parentName:"li"},"You can ",(0,i.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/t_hide_password"},"hide a proxy password")," during the Upload and Scan action. If you are using the extension in a TFS installation behind a firewall and you require a proxy to reach the public internet, you can add these parameters to configure the proxy settings: ",(0,i.kt)("inlineCode",{parentName:"p"},"-phost"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"-pport"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"-puser"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"-ppassword"),"."),(0,i.kt)("p",{parentName:"li"},"If the application profile does not exist, select the ",(0,i.kt)("strong",{parentName:"p"},"Create Application Profile")," checkbox to create it. You can select the ",(0,i.kt)("strong",{parentName:"p"},"Fail build if Upload and Scan build step fails")," checkbox to prevent the build from continuing if the Upload and Scan build step fails.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the Veracode Scan Results section, select the ",(0,i.kt)("strong",{parentName:"p"},"Import Results upon Scan Completion")," checkbox to import the scan results. You can select the option under it to stop the build if the scan results indicate that the application has failed your security policy."),(0,i.kt)("p",{parentName:"li"},"Selecting either checkbox reserves an assigned build agent to wait until the scan has completed successfully and the scan results are available. With one or both checkboxes selected, you can enter the build agent wait time, in minutes, for failing the build if no scan results are available. The value range is ",(0,i.kt)("inlineCode",{parentName:"p"},"30")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"1440")," (24 hours) and the default is ",(0,i.kt)("inlineCode",{parentName:"p"},"360")," (6 hours). If you enter a value outside this range, the build fails."),(0,i.kt)("p",{parentName:"li"},"If neither checkbox is selected, the build agent uploads the binaries to Veracode and continues to the next build task in the task list.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Add")," to add the Upload and Scan task to the YAML file in your build pipeline."),(0,i.kt)("p",{parentName:"li"},"This example shows a YAML file for building and scanning a .NET application. It specifies to access Veracode using a service connection. For descriptions of all YAML properties for the Upload and Scan task, see ",(0,i.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Azure_DevOps_YAML_Properties_for_Upload_and_Scan"},"Azure DevOps YAML Properties for Upload and Scan"),"."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# .NET Desktop\n# Build and run tests for .NET Desktop or Windows classic desktop solutions.\n# Add steps that publish symbols, save build artifacts, and more:\n# https://docs.microsoft.com/azure/devops/pipelines/apps/windows/dot-net\n\ntrigger:\n- master\n\npool:\n  vmImage: 'windows-latest'\n\nvariables:\n   solution: '**/*.sln'\n   buildPlatform: 'Any CPU'\n   buildConfiguration: 'Debug' # required as part of Veracode packaging for task: VSBuild@1\n \nsteps:\n- task: NuGetToolInstaller@1\n \n- task: NuGetCommand@2\n  inputs:\n    restoreSolution: '$(solution)'\n \n- task: VSBuild@1\n  inputs:\n    solution: '$(solution)'\n    platform: '$(buildPlatform)'\n    configuration: '$(buildConfiguration)'\n \n- task: VSTest@2\n  inputs:\n    platform: '$(buildPlatform)'\n    configuration: '$(buildConfiguration)'\n \n- task: DownloadPipelineArtifact@2\n  inputs:\n    patterns: '**/*.exe,**/*.dll,**/*.pdb' # ensures Veracode gets the PDB files for Static Analyisis\n \n# This task makes the pipeline build artifacts available in a known location for upload to Veracode\n- task: PublishPipelineArtifact@1\n  inputs:\n    targetPath: $(System.DefaultWorkingDirectory)/bin/Debug\n    artifactName: Debug\n     \n- task: Veracode@3\n  inputs:\n    ConnectionDetailsSelection: 'Endpoint' # access Veracode with service connection or Veracode API credentials\n    AnalysisService: 'Veracode Service Account' # service connection name for accessing Veracode\n    veracodeAppProfile: '$(system.teamProject)' # Veracode application profile to scan\n    version: '$(build.buildNumber)' # name of the scan to run\n    filepath: '$(System.DefaultWorkingDirectory)/bin/Debug' # filepath or folderpath of files to upload to Veracode\n    optargs: '-criticality high -include *.dll -exclude *.exe -createsandbox true -sandboxname mysandbox deleteIncompleteScan 1' # scan criticality is high, include DLL modules, exclude EXE modules, create sandbox mysandbox during scan, delete a scan with status of incomplete, no modules defined, failed, or cancelled \n    createSandBox: false # true to scan of new development sandbox\n    createProfile: true # false to enforce using existing profiles\n    deleteIncompleteScan: 0 # do not delete incomplete scans (default)\n    failBuildIfUploadAndScanBuildStepFails: false # true to fail build if Upload and Scan task fails to start\n    importResults: true # required to view Veracode results in Azure DevOps\n    failBuildOnPolicyFail: false # true to fail the build if application fails policy\n    maximumWaitTime: '360' # wait time, in minutes, to fail the build if no scan results available\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Optionally, to add debugging to your pipeline, add a new variable and enter these values in the New variable window:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Name: ",(0,i.kt)("inlineCode",{parentName:"li"},"system.debug")),(0,i.kt)("li",{parentName:"ul"},"Value: ",(0,i.kt)("inlineCode",{parentName:"li"},"true"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Results:")),(0,i.kt)("p",null,"After the scan is complete, in your build definition, you can select the ",(0,i.kt)("strong",{parentName:"p"},"Veracode Scan Summary")," tab to view the scan results."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Next steps:")),(0,i.kt)("p",null,"If you want to use the Veracode Azure DevOps flaw import feature in your build definition, ",(0,i.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Use_YAML_to_Configure_Azure_DevOps_Pipelines_for_Importing_Flaws"},"configure the additional related build variables"),"."))}d.isMDXComponent=!0}}]);