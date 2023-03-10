"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[62243],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},12078:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={title:"Go SCA Agent-Based Scanning",slug:"/r/c_sc_go"},i=void 0,l={unversionedId:"guides/sca/using_agent_based_scans/finding_and_fixing_vulnerabilities/go_sca_agent",id:"guides/sca/using_agent_based_scans/finding_and_fixing_vulnerabilities/go_sca_agent",title:"Go SCA Agent-Based Scanning",description:"You can find vulnerabilities in your Go applications using Veracode Software Composition Analysis agent-based scanning. You can run a scan on Glide, go get, Go modules, Godep, Govendor, and Trash repositories using the agent-based scanning command-line interface or the CI integrations.",source:"@site/docs/guides/07_sca/04_using_agent_based_scans/18_finding_and_fixing_vulnerabilities/04_go_sca_agent.md",sourceDirName:"guides/07_sca/04_using_agent_based_scans/18_finding_and_fixing_vulnerabilities",slug:"/r/c_sc_go",permalink:"/km-docusaurus-test/r/c_sc_go",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Go SCA Agent-Based Scanning",slug:"/r/c_sc_go"},sidebar:"tutorialSidebar",previous:{title:"Fix Example Transitive Vulnerability for Bower",permalink:"/km-docusaurus-test/r/Fix_Example_Transitive_Vulnerability_for_Bower"},next:{title:"PHP SCA Agent-Based Scanning",permalink:"/km-docusaurus-test/r/c_sc_php"}},s={},c=[],p={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can find vulnerabilities in your Go applications using Veracode Software Composition Analysis agent-based scanning. You can run a scan on Glide, go get, Go modules, Godep, Govendor, and Trash repositories using the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_sc_agent_usage"},"agent-based scanning command-line interface")," or the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Integrate_Veracode_SCA_Agent_Based_Scanning_with_Your_CI_Projects"},"CI integrations"),"."),(0,r.kt)("p",null,"For packaging instructions for Veracode Static Analysis and Veracode SCA upload scans, see ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/compilation_go"},"Packaging Go Applications"),"."),(0,r.kt)("p",null,"You can use agent-based scanning to scan any code repository to which you have access and fulfills the above requirements. To run an example scan, you can clone one of the public Veracode SCA ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/srcclr"},"repositories"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Glide: ",(0,r.kt)("inlineCode",{parentName:"li"},"git clone https://github.com/srcclr/example-go-glide")),(0,r.kt)("li",{parentName:"ul"},"Go Get: ",(0,r.kt)("inlineCode",{parentName:"li"},"git clone https://github.com/srcclr/example-go-goget")),(0,r.kt)("li",{parentName:"ul"},"Go Modules: ",(0,r.kt)("inlineCode",{parentName:"li"},"git clone https://github.com/srcclr/example-go-modules")),(0,r.kt)("li",{parentName:"ul"},"Godep: ",(0,r.kt)("inlineCode",{parentName:"li"},"git clone https://github.com/srcclr/example-go-godep")),(0,r.kt)("li",{parentName:"ul"},"Govendor: ",(0,r.kt)("inlineCode",{parentName:"li"},"git clone https://github.com/srcclr/example-go-govendor")),(0,r.kt)("li",{parentName:"ul"},"Trash: ",(0,r.kt)("inlineCode",{parentName:"li"},"git clone https://github.com/srcclr/example-go-trash"))),(0,r.kt)("p",null,"After you add a ",(0,r.kt)("inlineCode",{parentName:"p"},"srcclr.yml")," file to the directory where you point the Veracode SCA agent, you can specify ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_sc_scan_directives"},"scan directives")," for scanning your .NET code. ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Go_Scan_Directives"},"Some scan directives")," are specific to Go projects."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Before you begin:")),(0,r.kt)("p",null,"Scanning a repository that uses Go and one of its build or package managers requires the ability to assemble the project dependencies within the environment in which you scan the project. This includes these requirements:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Meet the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/c_sc_agent_usage"},"requirements for the Veracode SCA agent"),"."),(0,r.kt)("li",{parentName:"ul"},"Have access to the Go repository."),(0,r.kt)("li",{parentName:"ul"},"Use Go version 1.5 or later."),(0,r.kt)("li",{parentName:"ul"},"Ensure that the project can build in the environment where the agent performs scans."),(0,r.kt)("li",{parentName:"ul"},"Ensure that the ",(0,r.kt)("inlineCode",{parentName:"li"},"GOROOT")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"GOPATH")," environment variables are set to the correct directories, and that the bin subdirectory of ",(0,r.kt)("inlineCode",{parentName:"li"},"GOROOT")," is included in the PATH environment variable. For example, if ",(0,r.kt)("inlineCode",{parentName:"li"},"GOROOT")," is set to ",(0,r.kt)("inlineCode",{parentName:"li"},"/usr/local/go"),", you should include ",(0,r.kt)("inlineCode",{parentName:"li"},"/usr/local/go/bin")," in your PATH. See the ",(0,r.kt)("a",{parentName:"li",href:"https://golang.org/doc/code.html"},"Go documentation")," for more information on configuring Go projects."),(0,r.kt)("li",{parentName:"ul"},"If you use Godep, Govendor, Glide, or Trash, ensure the package manager is installed."),(0,r.kt)("li",{parentName:"ul"},"For these tools, meet the specified requirement:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Glide: include the ",(0,r.kt)("inlineCode",{parentName:"li"},"Glide.lock")," file"),(0,r.kt)("li",{parentName:"ul"},"Go get: use Go version 1.5\u20131.15"),(0,r.kt)("li",{parentName:"ul"},"Go modules: run the ",(0,r.kt)("inlineCode",{parentName:"li"},"'go list -m all'")," command"),(0,r.kt)("li",{parentName:"ul"},"Godep: include the ",(0,r.kt)("inlineCode",{parentName:"li"},"Godeps/Godeps.json")," file"),(0,r.kt)("li",{parentName:"ul"},"Golangdep: include the ",(0,r.kt)("inlineCode",{parentName:"li"},"Gopkg.lock")," file"),(0,r.kt)("li",{parentName:"ul"},"Govendor: include the ",(0,r.kt)("inlineCode",{parentName:"li"},"vendor/vendor.json")," file"),(0,r.kt)("li",{parentName:"ul"},"Trash: include the ",(0,r.kt)("inlineCode",{parentName:"li"},"vendor.conf")," file")))),(0,r.kt)("p",null,"If you set ",(0,r.kt)("inlineCode",{parentName:"p"},"FORCE_GO_INSTALL")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," as a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_sc_scan_directives"},"scan directive")," or ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Veracode_SCA_Agent_Environment_Variables"},"environment variable")," or use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--url")," argument, the Veracode SCA agent runs specific commands to identify the dependencies and their versions in your project. You can run these commands before scanning to test that the agent can build the project:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Glide: ",(0,r.kt)("inlineCode",{parentName:"li"},"glide install")),(0,r.kt)("li",{parentName:"ul"},"Go get: ",(0,r.kt)("inlineCode",{parentName:"li"},"go get -d ./...")),(0,r.kt)("li",{parentName:"ul"},"Godep: ",(0,r.kt)("inlineCode",{parentName:"li"},"godep restore")),(0,r.kt)("li",{parentName:"ul"},"Govendor: ",(0,r.kt)("inlineCode",{parentName:"li"},"govendor sync")),(0,r.kt)("li",{parentName:"ul"},"Trash: ",(0,r.kt)("inlineCode",{parentName:"li"},"trash"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"To complete this task:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the scan command with the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Using_the_Veracode_SCA_Command_Line_Agent"},"Veracode SCA CLI agent")," pointed to the directory of the Go repository. For example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"srcclr scan path/to/{project_folder}\n")),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"To scan code repositories hosted in Git, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--url")," argument ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Veracode_SCA_Agent_Commands"},"with the CLI agent"),".")),(0,r.kt)("p",{parentName:"li"}," To view more verbose output during the scan process, you can add the ",(0,r.kt)("inlineCode",{parentName:"p"},"--loud")," argument:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"srcclr scan path/to/{project_folder} --loud\n")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Results:")),(0,r.kt)("p",null,"The Veracode SCA agent uses the native package managers to identify the dependencies and their versions in your project. When the agent evaluates the open-source libraries in use, it produces a summary of the scan results. This summary includes counts for total libraries used, vulnerable libraries, percentage of third-party code, and a list of the vulnerabilities found."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Next steps:")),(0,r.kt)("p",null,"After completing the scan, you can ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Viewing_Agent_Based_Scan_Results"},"view the results"),"."))}d.isMDXComponent=!0}}]);