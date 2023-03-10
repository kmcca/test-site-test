"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[55507],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(g,s(s({ref:t},l),{},{components:n})):r.createElement(g,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},94192:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={title:"PHP SCA Agent-Based Scanning",slug:"/r/c_sc_php"},s=void 0,i={unversionedId:"guides/sca/using_agent_based_scans/finding_and_fixing_vulnerabilities/php_sca_agent",id:"guides/sca/using_agent_based_scans/finding_and_fixing_vulnerabilities/php_sca_agent",title:"PHP SCA Agent-Based Scanning",description:"You can find vulnerabilities in your PHP applications using Veracode Software Composition Analysis agent-based scanning. You can run a scan on Composer repositories using the agent-based scanning command-line interface or the CI integrations.",source:"@site/docs/guides/07_sca/04_using_agent_based_scans/18_finding_and_fixing_vulnerabilities/05_php_sca_agent.md",sourceDirName:"guides/07_sca/04_using_agent_based_scans/18_finding_and_fixing_vulnerabilities",slug:"/r/c_sc_php",permalink:"/km-docusaurus-test/r/c_sc_php",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"PHP SCA Agent-Based Scanning",slug:"/r/c_sc_php"},sidebar:"tutorialSidebar",previous:{title:"Go SCA Agent-Based Scanning",permalink:"/km-docusaurus-test/r/c_sc_go"},next:{title:"Python SCA Agent-Based Scanning",permalink:"/km-docusaurus-test/r/c_sc_python"}},c={},p=[],l={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can find vulnerabilities in your PHP applications using Veracode Software Composition Analysis agent-based scanning. You can run a scan on Composer repositories using the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_sc_agent_usage"},"agent-based scanning command-line interface")," or the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Integrate_Veracode_SCA_Agent_Based_Scanning_with_Your_CI_Projects"},"CI integrations"),"."),(0,a.kt)("p",null,"For packaging instructions for Veracode Static Analysis and Veracode SCA upload scans, see ",(0,a.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/compilation_php"},"Packaging PHP Applications"),"."),(0,a.kt)("p",null,"You can use agent-based scanning to scan any code repository to which you have access and fulfills the above requirements. To run an example scan, you can clone one of the public Veracode SCA ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/srcclr"},"repositories"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git clone https://github.com/srcclr/example-php-composer\n")),(0,a.kt)("p",null,"After you add a ",(0,a.kt)("inlineCode",{parentName:"p"},"srcclr.yml")," file to the directory where you point the Veracode SCA agent, you can specify ",(0,a.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_sc_scan_directives"},"scan directives")," for scanning your PHP code. ",(0,a.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/PHP_Scan_Directives"},"Some scan directives")," are specific to PHP projects."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Before you begin:")),(0,a.kt)("p",null,"Scanning a repository that uses PHP and one of its build or package managers requires the ability to assemble the projects dependencies within the environment in which you scan the project. This includes these requirements:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Meet the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/c_sc_agent_usage"},"requirements for the Veracode SCA agent"),"."),(0,a.kt)("li",{parentName:"ul"},"Have access to the PHP repository."),(0,a.kt)("li",{parentName:"ul"},"Have PHP 5.3.2 or later installed."),(0,a.kt)("li",{parentName:"ul"},"Have Composer 1.0.0 or later installed."),(0,a.kt)("li",{parentName:"ul"},"Have ",(0,a.kt)("inlineCode",{parentName:"li"},"composer.json")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"composer.lock")," files present in the repository."),(0,a.kt)("li",{parentName:"ul"},"Be able to run the ",(0,a.kt)("inlineCode",{parentName:"li"},"composer install")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"php composer.phar install")," command from the root of the project where you perform scans.")),(0,a.kt)("p",null,"The Veracode SCA agent runs specific commands to identify the dependencies and their versions in your project. You can run these commands before scanning to test that the agent can build the project:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"composer install\ncomposer show --tree\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"To complete this task:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run the scan command with the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Using_the_Veracode_SCA_Command_Line_Agent"},"Veracode SCA CLI agent")," pointed to the directory of the PHP repository. For example:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"srcclr scan path/to/{project_folder}\n")),(0,a.kt)("admonition",{parentName:"li",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"To scan code repositories hosted in Git, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"--url")," argument ",(0,a.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Veracode_SCA_Agent_Commands"},"with the CLI agent"),".")),(0,a.kt)("p",{parentName:"li"}," To view more verbose output during the scan process, you can add the ",(0,a.kt)("inlineCode",{parentName:"p"},"--loud")," argument:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"srcclr scan path/to/{project_folder} --loud\n")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Results:")),(0,a.kt)("p",null,"The Veracode SCA agent uses the native package managers to identify the dependencies and their versions in your project. When the agent evaluates the open-source libraries in use, it produces a summary of the scan results. This summary includes counts for total libraries used, vulnerable libraries, percentage of third-party code, and a list of the vulnerabilities found."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Next steps:")),(0,a.kt)("p",null,"After completing the scan, you can ",(0,a.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Viewing_Agent_Based_Scan_Results"},"view the results"),"."))}u.isMDXComponent=!0}}]);