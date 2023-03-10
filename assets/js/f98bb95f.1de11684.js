"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[17123],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),l=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(a),m=n,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return a?r.createElement(g,i(i({ref:t},p),{},{components:a})):r.createElement(g,i({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3489:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=a(87462),n=(a(67294),a(3905));const o={title:"Configure an AWS CodeBuild Project for SCA",slug:"/r/t_aws_config_codebuild_sca"},i=void 0,c={unversionedId:"guides/integrations/build_systems/aws_codestar_integration/aws_configure_codebuild_project_sca",id:"guides/integrations/build_systems/aws_codestar_integration/aws_configure_codebuild_project_sca",title:"Configure an AWS CodeBuild Project for SCA",description:"You configure a new or existing build project in AWS CodeBuild project that performs Veracode Software Composition Analysis \\(SCA\\) agent-based scans. You add the build project to a pipeline stage in CodePipeline to analyze the build output from your application build stage.",source:"@site/docs/guides/04_integrations/06_build_systems/03_aws_codestar_integration/03_aws_configure_codebuild_project_sca.md",sourceDirName:"guides/04_integrations/06_build_systems/03_aws_codestar_integration",slug:"/r/t_aws_config_codebuild_sca",permalink:"/km-docusaurus-test/r/t_aws_config_codebuild_sca",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Configure an AWS CodeBuild Project for SCA",slug:"/r/t_aws_config_codebuild_sca"},sidebar:"tutorialSidebar",previous:{title:"Configure an AWS CodeBuild Project for Veracode Static Analysis",permalink:"/km-docusaurus-test/r/t_aws_config_codebuild_static"},next:{title:"Veracode Azure DevOps Extension",permalink:"/km-docusaurus-test/r/c_VS_team_servs"}},s={},l=[],p={toc:l};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"You configure a new or existing build project in AWS CodeBuild project that performs Veracode Software Composition Analysis ","(","SCA",")"," agent-based scans. You add the build project to a pipeline stage in CodePipeline to analyze the build output from your application build stage."),(0,n.kt)("p",null,"This procedure applies to both new and existing build projects. For a new project, you complete each section on the Create build project page and, then, click ",(0,n.kt)("strong",{parentName:"p"},"Create build project")," to save the configuration and build the project. For an existing project, you edit each pre-configured section on a separate page and, then, click ",(0,n.kt)("strong",{parentName:"p"},"Update")," after completing your edits."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Before you begin:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You have generated ",(0,n.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/c_api_credentials3"},"Veracode API credentials"),"."),(0,n.kt)("li",{parentName:"ul"},"You have ",(0,n.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/c_SC_platform"},"configured agent-based scanning"),"."),(0,n.kt)("li",{parentName:"ul"},"You have generated your ",(0,n.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/Integrating_Veracode_SCA_with_Atlassian_Bamboo"},"agent-based scanning API token"),". Your token is stored securely as an environment variable in AWS System Manager Parameter Store or AWS Secrets Manager."),(0,n.kt)("li",{parentName:"ul"},"You have compiled and packaged your application source files according to the ",(0,n.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/compilation_packaging"},"Veracode Packaging Requirements."),".")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"To complete this task:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In AWS, create or edit a build project to use for SCA.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the build project, configure the Project configuration, Source, and Environment sections for your development environment."),(0,n.kt)("p",{parentName:"li"},"Veracode recommends that the environment settings in this build project match the environment settings in the build project for building your application. For example, if you use a specific Docker image for your build project, reference that same image in this section.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the Environment section, expand ",(0,n.kt)("strong",{parentName:"p"},"Additional configuration"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the Environment variables section, add this environment variable to specify your agent-based scanning API token:"),(0,n.kt)("p",{parentName:"li"},"a. Name: enter ",(0,n.kt)("inlineCode",{parentName:"p"},"SRCCLR_API_TOKEN"),"."),(0,n.kt)("p",{parentName:"li"},"b. Value: enter your authentication token. For example, the location, name, or variable."),(0,n.kt)("p",{parentName:"li"},"c. Type: select ",(0,n.kt)("strong",{parentName:"p"},"Parameter"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Add environment variable")," to add additional ",(0,n.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Integrating_Veracode_SCA_with_Atlassian_Bamboo"},"environment variables required for accessing your source code management (SCM) system"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the Buildspec section, add these commands to specify the ",(0,n.kt)("inlineCode",{parentName:"p"},"SRCCLR_SCM_REV")," variable and to run SCA:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'phases:\n  build:\n    commands:\n      - export SRCCLR_SCM_REV="${CODEBUILD_RESOLVED_SOURCE_VERSION}"\n      - curl -sSL https://download.sourceclear.com/ci.sh | sh\n')),(0,n.kt)("p",{parentName:"li"},"The value of the ",(0,n.kt)("inlineCode",{parentName:"p"},"SRCCLR_SCM_REV")," variable points to the commit ID of the application version checked out in CodePipeline during each build. Because the value is dynamic, instead of static, you must specify it in the build specification. Also, if you add this build project and the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/t_aws_config_codebuild_static"},"build project for static analysis")," to the same build stage, the ",(0,n.kt)("inlineCode",{parentName:"p"},"SRCCLR_SCM_REV")," variable ensures that both projects can run concurrently.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Save or update the build project.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Build your project to ensure it is configured correctly.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Review the build log to identify any build errors."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Next steps:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Add this build project to a ",(0,n.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/t_aws_config_codepipeline_static"},"new or existing stage in a new or existing pipeline"),". In the pipeline, the stage to which you add this build project must run after the stage that builds your application."),(0,n.kt)("li",{parentName:"ul"},"Optionally, in the Veracode Platform, configure a ",(0,n.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/c_sc_policies_custom"},"custom rule")," to fail the build if the application fails to pass the Veracode analysis stage.")))}u.isMDXComponent=!0}}]);