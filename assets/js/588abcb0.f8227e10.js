"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[86969],{3905:(e,n,i)=>{i.d(n,{Zo:()=>c,kt:()=>f});var a=i(67294);function t(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function l(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,a)}return i}function r(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?l(Object(i),!0).forEach((function(n){t(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function s(e,n){if(null==e)return{};var i,a,t=function(e,n){if(null==e)return{};var i,a,t={},l=Object.keys(e);for(a=0;a<l.length;a++)i=l[a],n.indexOf(i)>=0||(t[i]=e[i]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)i=l[a],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(t[i]=e[i])}return t}var p=a.createContext({}),o=function(e){var n=a.useContext(p),i=n;return e&&(i="function"==typeof e?e(n):r(r({},n),e)),i},c=function(e){var n=o(e.components);return a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},_=a.forwardRef((function(e,n){var i=e.components,t=e.mdxType,l=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),_=o(i),f=t,d=_["".concat(p,".").concat(f)]||_[f]||u[f]||l;return i?a.createElement(d,r(r({ref:n},c),{},{components:i})):a.createElement(d,r({ref:n},c))}));function f(e,n){var i=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=i.length,r=new Array(l);r[0]=_;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:t,r[1]=s;for(var o=2;o<l;o++)r[o]=i[o];return a.createElement.apply(null,r)}return a.createElement.apply(null,i)}_.displayName="MDXCreateElement"},33057:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var a=i(87462),t=(i(67294),i(3905));const l={title:"Pipeline Scan Example for Using a Baseline File with Azure DevOps",slug:"/r/Pipeline_Scan_Example_for_Using_a_Baseline_File_with_Azure_Devops"},r=void 0,s={unversionedId:"guides/pipeline_scan/pipeline_scan_azure_examples/r_azure_baseline_file_example",id:"guides/pipeline_scan/pipeline_scan_azure_examples/r_azure_baseline_file_example",title:"Pipeline Scan Example for Using a Baseline File with Azure DevOps",description:"This YAML code example shows how to generate and use a baseline file in an Azure DevOps build pipeline.",source:"@site/docs/guides/08_pipeline_scan/06_pipeline_scan_azure_examples/04_r_azure_baseline_file_example.md",sourceDirName:"guides/08_pipeline_scan/06_pipeline_scan_azure_examples",slug:"/r/Pipeline_Scan_Example_for_Using_a_Baseline_File_with_Azure_Devops",permalink:"/km-docusaurus-test/r/Pipeline_Scan_Example_for_Using_a_Baseline_File_with_Azure_Devops",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Pipeline Scan Example for Using a Baseline File with Azure DevOps",slug:"/r/Pipeline_Scan_Example_for_Using_a_Baseline_File_with_Azure_Devops"},sidebar:"tutorialSidebar",previous:{title:"Pipeline Scan Example for Using Maven with Azure DevOps",permalink:"/km-docusaurus-test/r/Pipeline_Scan_Example_for_Using_Maven_with_Azure_DevOps"},next:{title:"GitHub Pipeline Scan Examples",permalink:"/km-docusaurus-test/r/Github_Pipeline_Scan_Examples"}},p={},o=[{value:"Create a Baseline File",id:"create-a-baseline-file",level:2},{value:"Apply Baseline File and Fail Build for New Flaws",id:"apply-baseline-file-and-fail-build-for-new-flaws",level:2}],c={toc:o};function u(e){let{components:n,...i}=e;return(0,t.kt)("wrapper",(0,a.Z)({},c,i,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"This YAML code example shows how to generate and use a baseline file in an Azure DevOps build pipeline."),(0,t.kt)("p",null,"The Pipeline Scan evaluates only flaws that differ from those stored in the ",(0,t.kt)("a",{parentName:"p",href:"07_c_about_pipeline_baseline_file.md"},"baseline file")," to determine pass or fail criteria. You can use a baseline file to evaluate security risk on only new changes to your application. The Pipeline Scan uses a single pipeline for the build and security scan, then stores the baseline file as an artifact each time a job runs. You can modify this example so that you can run the Pipeline Scan as its own pipeline that another job can trigger. Depending on your build configuration, you may want to store results in a separate globally-accessible location, such as a shared directory."),(0,t.kt)("h2",{id:"create-a-baseline-file"},"Create a Baseline File"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-yaml"},'\n# Create a baseline file.\ntrigger:\n  - master\npool:\n  vmImage: "ubuntu-latest"\nsteps:\n  - task: Gradle@2\n    inputs:\n      workingDirectory: ""\n      gradleWrapperFile: "gradlew"\n      gradleOptions: "-Xmx3072m"\n      javaHomeOption: "JDKVersion"\n      jdkVersionOption: "1.8"\n      jdkArchitectureOption: "x64"\n      publishJUnitResults: true\n      testResultsFiles: "**/TEST-*.xml"\n      tasks: "build"\n  - script: |\n      curl -O -L https://downloads.veracode.com/securityscan/pipeline-scan-LATEST.zip\n    displayName: "Download Pipeline Scan"\n  - task: ExtractFiles@1\n    inputs:\n      archiveFilePatterns: "pipeline-scan-LATEST.zip"\n      destinationFolder: "pipeline"\n      cleanDestinationFolder: false\n  - script: |\n      java -jar pipeline\\pipeline-scan.jar --veracode_api_id "$(VERACODE_API_ID)" --veracode_api_key "$(VERACODE_API_KEY)" --file "example.jar" --json_output_file="baseline.json" || true\n      # Pipeline Scan command. VERACODE_API_ID and VERACODE_API_KEY must reference your API credentials.\n      # "--json_output_file" saves scan results as a JSON file that you can use as a baseline file.\n    env:\n      VERACODE_API_ID: $(VERACODE_API_ID)\n      VERACODE_API_KEY: $(VERACODE_API_KEY)\n    displayName: "Run Pipeline Scan"\n  - publish: $(System.DefaultWorkingDirectory)/baseline.json\n    artifact: baseline\n\n')),(0,t.kt)("h2",{id:"apply-baseline-file-and-fail-build-for-new-flaws"},"Apply Baseline File and Fail Build for New Flaws"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-yaml"},'\n# Apply baseline file and fail build for new flaws.\ntrigger:\n  - master\npool:\n  vmImage: "ubuntu-latest"\nsteps:\n  - script: |\n      curl -O -L https://downloads.veracode.com/securityscan/pipeline-scan-LATEST.zip\n    displayName: "Download Pipeline Scan"\n  - task: ExtractFiles@1\n    inputs:\n      archiveFilePatterns: "pipeline-scan-LATEST.zip"\n      destinationFolder: "pipeline"\n      cleanDestinationFolder: false\n  - task: DownloadPipelineArtifact@2\n    inputs:\n      source: specific\n      project: "test"\n      pipeline: 2\n      artifact: baseline\n  - script: |\n      java -jar pipeline\\pipeline-scan.jar --veracode_api_id "$(VERACODE_API_ID)" --veracode_api_key "$(VERACODE_API_KEY)" --file "example.jar" --baseline_file "../baseline.json"\n      # VERACODE_API_ID and VERACODE_API_KEY must reference your API credentials.\n      # "--baseline_file" specifies the baseline of known flaws for the specified application file.\n      # This example command breaks the build for new flaws not listed in the specified baseline file.\n    env:\n      VERACODE_API_ID: $(VERACODE_API_ID)\n      VERACODE_API_KEY: $(VERACODE_API_KEY)\n    displayName: "Run Pipeline Scan"\n\n')))}u.isMDXComponent=!0}}]);