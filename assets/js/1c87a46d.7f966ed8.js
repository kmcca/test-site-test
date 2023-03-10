"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[34855],{3905:(e,n,i)=>{i.d(n,{Zo:()=>p,kt:()=>m});var t=i(67294);function a(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function r(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function l(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?r(Object(i),!0).forEach((function(n){a(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function o(e,n){if(null==e)return{};var i,t,a=function(e,n){if(null==e)return{};var i,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)i=r[t],n.indexOf(i)>=0||(a[i]=e[i]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)i=r[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=t.createContext({}),_=function(e){var n=t.useContext(s),i=n;return e&&(i="function"==typeof e?e(n):l(l({},n),e)),i},p=function(e){var n=_(e.components);return t.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var i=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=_(i),m=a,d=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return i?t.createElement(d,l(l({ref:n},p),{},{components:i})):t.createElement(d,l({ref:n},p))}));function m(e,n){var i=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=i.length,l=new Array(r);l[0]=u;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var _=2;_<r;_++)l[_]=i[_];return t.createElement.apply(null,l)}return t.createElement.apply(null,i)}u.displayName="MDXCreateElement"},89365:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>_});var t=i(87462),a=(i(67294),i(3905));const r={title:"Pipeline Scan Example for GitLab and Gradle with Automatic Vulnerability Generation Using a Custom Policy",slug:"/r/Pipeline_Scan_Example_for_Using_GitLab_and_Gradle_with_Automatic_Vulnerability_Generation_Using_a_Custom_Policy"},l=void 0,o={unversionedId:"guides/pipeline_scan/pipeline_scan_gitlab_examples/r_gitlab_gradle_vulnerability_custom_policy",id:"guides/pipeline_scan/pipeline_scan_gitlab_examples/r_gitlab_gradle_vulnerability_custom_policy",title:"Pipeline Scan Example for GitLab and Gradle with Automatic Vulnerability Generation Using a Custom Policy",description:"These code examples show how to download a custom policy and use it in a GitLab pipeline with Gradle and automatic vulnerability generation.",source:"@site/docs/guides/08_pipeline_scan/08_pipeline_scan_gitlab_examples/07_r_gitlab_gradle_vulnerability_custom_policy.md",sourceDirName:"guides/08_pipeline_scan/08_pipeline_scan_gitlab_examples",slug:"/r/Pipeline_Scan_Example_for_Using_GitLab_and_Gradle_with_Automatic_Vulnerability_Generation_Using_a_Custom_Policy",permalink:"/km-docusaurus-test/r/Pipeline_Scan_Example_for_Using_GitLab_and_Gradle_with_Automatic_Vulnerability_Generation_Using_a_Custom_Policy",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Pipeline Scan Example for GitLab and Gradle with Automatic Vulnerability Generation Using a Custom Policy",slug:"/r/Pipeline_Scan_Example_for_Using_GitLab_and_Gradle_with_Automatic_Vulnerability_Generation_Using_a_Custom_Policy"},sidebar:"tutorialSidebar",previous:{title:"Pipeline Scan Example for GitLab and Gradle with Automatic Vulnerability Generation Using a Built-in Policy",permalink:"/km-docusaurus-test/r/Pipeline_Scan_Example_for_Using_GitLab_and_Gradle_with_Automatic_Vulnerability_Generation_Using_a_Built_in_Policy"},next:{title:"Pipeline Scan Example for Using a Baseline File with GitLab",permalink:"/km-docusaurus-test/r/Pipeline_Scan_Example_for_Using_a_Baseline_File_with_GitLab"}},s={},_=[],p={toc:_};function c(e){let{components:n,...i}=e;return(0,a.kt)("wrapper",(0,t.Z)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"These code examples show how to download a custom policy and use it in a GitLab pipeline with Gradle and automatic vulnerability generation."),(0,a.kt)("p",null,"To download a policy locally to use later in the pipeline, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"--request_policy")," parameter as shown in this example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'- java -jar pipeline-scan.jar\n       --veracode_api_id "${VERACODE_API_ID}"\n       --veracode_api_key "${VERACODE_API_SECRET}"\n       --request_policy="Custom Policy"\n')),(0,a.kt)("p",null,"Pipeline Scan automatically names the locally-generated policy file using the format ",(0,a.kt)("inlineCode",{parentName:"p"},"<policy name>.json"),", replacing any spaces with underscores. In this example, the resulting file is named ",(0,a.kt)("inlineCode",{parentName:"p"},"Custom_Policy.json"),". You should place this file in a location accessible to the pipeline for its subsequent use. Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"--policy_file")," parameter to specify the local custom policy for vulnerability filtering:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'\n# image must have JDK8+, gradle, curl, unzip\nimage: <image-with-above-requirements>\n\nstages:\n  - build\n  - scan\n\nbuild_job:\n  stage: build\n  artifacts:\n    name: ${CI_PROJECT_NAME}_${CI_COMMIT_REF_NAME}_${CI_COMMIT_SHA}_build\n    paths:\n      - build/\n    expire_in: 1 week\n  script: gradle clean build\n\npipeline scan:\n  stage: scan\n  dependencies:\n    - build_job\n  artifacts:\n    name: ${CI_PROJECT_NAME}_${CI_COMMIT_REF_NAME}_${CI_COMMIT_SHA}_pipeline-results\n    paths:\n      - results.json\n      - veracode_gitlab_vulnerabilities.json\n    reports:\n      sast: veracode_gitlab_vulnerabilities.json\n    expire_in: 1 week\n    when: always\n  script:\n    - curl -O https://downloads.veracode.com/securityscan/pipeline-scan-LATEST.zip\n    - unzip pipeline-scan-LATEST.zip pipeline-scan.jar\n    - java -jar pipeline-scan.jar\n      --veracode_api_id "${VERACODE_API_ID}"\n      --veracode_api_key "${VERACODE_API_SECRET}"\n      --file "build/libs/sample.jar"\n      --policy_file="Custom_Policy.json"\n      --baseline_file "${CI_BASELINE_PATH}"\n      --timeout "${CI_TIMEOUT}"\n      --project_name "${CI_PROJECT_PATH}"\n      --project_url "${CI_REPOSITORY_URL}"\n      --project_ref "${CI_COMMIT_REF_NAME}"\n      --gl_vulnerability_generation true\n\n')))}c.isMDXComponent=!0}}]);