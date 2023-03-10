"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[67132],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(f,s(s({ref:t},p),{},{components:n})):a.createElement(f,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22992:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={title:"Run an Agent-Based Scan for Maven",slug:"/r/Run_an_Agent_Based_Scan_for_Maven"},s=void 0,i={unversionedId:"guides/sca/using_agent_based_scans/finding_and_fixing_vulnerabilities/java_sca_agent/run_agent_scan_maven",id:"guides/sca/using_agent_based_scans/finding_and_fixing_vulnerabilities/java_sca_agent/run_agent_scan_maven",title:"Run an Agent-Based Scan for Maven",description:"You can use agent-based scanning to scan any code repository to which you have access and fulfills the above requirements. To run an example scan, you can clone one of the public Veracode SCA repositories:",source:"@site/docs/guides/07_sca/04_using_agent_based_scans/18_finding_and_fixing_vulnerabilities/02_java_sca_agent/01_run_agent_scan_maven.md",sourceDirName:"guides/07_sca/04_using_agent_based_scans/18_finding_and_fixing_vulnerabilities/02_java_sca_agent",slug:"/r/Run_an_Agent_Based_Scan_for_Maven",permalink:"/km-docusaurus-test/r/Run_an_Agent_Based_Scan_for_Maven",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Run an Agent-Based Scan for Maven",slug:"/r/Run_an_Agent_Based_Scan_for_Maven"},sidebar:"tutorialSidebar",previous:{title:"Java SCA Agent-Based Scanning",permalink:"/km-docusaurus-test/r/c_sc_java"},next:{title:"Scanning the Dependency Tree for Maven",permalink:"/km-docusaurus-test/r/Scanning_the_Dependency_Tree_for_Maven"}},c={},l=[],p={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can use agent-based scanning to scan any code repository to which you have access and fulfills the above requirements. To run an example scan, you can clone one of the public Veracode SCA ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/srcclr"},"repositories"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git clone https://github.com/srcclr/example-java-maven\n")),(0,r.kt)("p",null,"After you add a ",(0,r.kt)("inlineCode",{parentName:"p"},"srcclr.yml")," file to the directory where you point the Veracode SCA agent, you can specify ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_sc_scan_directives"},"scan directives")," for scanning your Maven code. ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Java_Scan_Directives"},"Some scan directives")," are specific to Maven projects."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Before you begin:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Meet the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/c_sc_agent_usage"},"requirements for the Veracode SCA agent"),"."),(0,r.kt)("li",{parentName:"ul"},"Have access to the Maven repository."),(0,r.kt)("li",{parentName:"ul"},"Include the ",(0,r.kt)("inlineCode",{parentName:"li"},"pom.xml")," file in the directory where you perform scans."),(0,r.kt)("li",{parentName:"ul"},"Use Maven 3.1 or later with the executable installed in the local path."),(0,r.kt)("li",{parentName:"ul"},"In your ",(0,r.kt)("inlineCode",{parentName:"li"},"~/.m2/settings.xml")," file, ensure that you properly set up any Nexus servers or authentications to successfully compile code."),(0,r.kt)("li",{parentName:"ul"},"Be able to run the ",(0,r.kt)("inlineCode",{parentName:"li"},"mvn dependency:tree")," command from the root of the project where you perform scans.")),(0,r.kt)("p",null,"The Veracode SCA agent runs a specific command to identify the dependencies and their versions in your project. You can run this command before scanning to test that the agent can build the project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mvn compile -Dcheckstyle.skip=true -e -DskipTests \\\n-DskipITs -Dmaven.test.skip=true --fail-fast --nsu -Denforcer.skip=true\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"To complete this task:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the scan command with the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Using_the_Veracode_SCA_Command_Line_Agent"},"Veracode SCA CLI agent")," pointed to the directory of the NPM repository. For example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"srcclr scan path/to/{project_folder}\n")),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"To scan code repositories hosted in Git, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--url")," argument ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Veracode_SCA_Agent_Commands"},"with the CLI agent"),".")),(0,r.kt)("p",{parentName:"li"},"To view more verbose output during the scan process, you can add the ",(0,r.kt)("inlineCode",{parentName:"p"},"--loud")," argument:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"srcclr scan path/to/{project_folder} --loud\n")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Results:")),(0,r.kt)("p",null,"The Veracode SCA agent uses the native package managers to identify the dependencies and their versions in your project. When the agent evaluates the open-source libraries in use, it produces a summary of the scan results. This summary includes counts for total libraries used, vulnerable libraries, percentage of third-party code, and a list of the vulnerabilities found."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Next steps:")),(0,r.kt)("p",null,"After completing the scan, you can ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Viewing_Agent_Based_Scan_Results"},"view the results"),"."))}u.isMDXComponent=!0}}]);