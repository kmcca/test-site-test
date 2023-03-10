"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[48999],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,k=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7460:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={title:"Enable Agent-Based Scanning Behind a Proxy",slug:"/r/t_sc_agent_proxy"},i=void 0,p={unversionedId:"guides/sca/using_agent_based_scans/using_sca_agent/enable_agent_behind_proxy",id:"guides/sca/using_agent_based_scans/using_sca_agent/enable_agent_behind_proxy",title:"Enable Agent-Based Scanning Behind a Proxy",description:"If you use the Veracode Software Composition Analysis agent with a CI tool that is behind a proxy, you must establish communication between the agent and your proxy server.",source:"@site/docs/guides/07_sca/04_using_agent_based_scans/09_using_sca_agent/02_enable_agent_behind_proxy.md",sourceDirName:"guides/07_sca/04_using_agent_based_scans/09_using_sca_agent",slug:"/r/t_sc_agent_proxy",permalink:"/km-docusaurus-test/r/t_sc_agent_proxy",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Enable Agent-Based Scanning Behind a Proxy",slug:"/r/t_sc_agent_proxy"},sidebar:"tutorialSidebar",previous:{title:"Use the Agent with an SCM Other than Git",permalink:"/km-docusaurus-test/r/c_sc_scm"},next:{title:"Veracode SCA Agent Commands",permalink:"/km-docusaurus-test/r/Veracode_SCA_Agent_Commands"}},l={},s=[],c={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"If you use the Veracode Software Composition Analysis agent with a CI tool that is behind a proxy, you must establish communication between the agent and your proxy server."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Before you begin:")),(0,r.kt)("p",null,"If your proxy performs TLS interception, you must provide the certificate chain to the agent."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"To complete this task:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To make the Java virtual machine (JVM) aware of the root certificate, run the appropriate command for your operating system:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Linux or Mac:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'export SRCCLR_SSL_CERT_FILE="/path to certificate file/"\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Windows PowerShell:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"$env:SRCCLR_SSL_CERT_FILE='/path to certificate file/'\n"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To make the agent aware of the proxy, make one of these configurations:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Set the ",(0,r.kt)("inlineCode",{parentName:"p"},"https_proxy")," ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Veracode_SCA_Agent_Environment_Variables"},"environment variable")," containing a URL that points to the proxy server. For example:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Linux or Mac:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'export https_proxy="http://127.0.0.1:8080"\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Windows Powershell:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"$env:https_proxy='http://127.0.0.1:8080'\n"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Set the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Veracode_SCA_Agent_Configuration_Values"},"agent configuration values")," relevant to proxy identification and authentication, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"proxyHost")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"proxyPort"),", in ",(0,r.kt)("inlineCode",{parentName:"p"},"~.srcclragent.yml")," or in another YML configuration file defined with the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Veracode_SCA_Agent_Commands"},(0,r.kt)("inlineCode",{parentName:"a"},"--config=")," option"),"."),(0,r.kt)("p",{parentName:"li"},"For example, include ",(0,r.kt)("inlineCode",{parentName:"p"},"proxyHost: 127.0.0.1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"proxyPort: 8080")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.srcclr/agent.yml"),".")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To complete the connection, run the appropriate command to establish communication between the agent and the proxy server. For example:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Linux or Mac:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'curl -sSL https://download.sourceclear.com/ci.sh | env DEBUG=1 SRCCLR_SSL_CERT_FILE="/path to certificate file/" bash -s scan --skip-collectors "ant,npm"\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Windows PowerShell:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"$Client = New-Object -TypeName System.Net.WebClient\n$Client.Proxy.Credentials = [System.Net.CredentialCache]::DefaultNetworkCredentials\n$Script = $Client.DownloadString('https://download.sourceclear.com/ci.ps1')\nInvoke-Command -ScriptBlock ([scriptblock]::Create($Script)) -ArgumentList @('scan', '--skip-collectors', 'ant,npm')\n")))),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you do not use the ",(0,r.kt)("inlineCode",{parentName:"p"},"https_proxy")," environment variable or set ",(0,r.kt)("inlineCode",{parentName:"p"},"proxyHost")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"proxyPort")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.srcclr/agent.yml"),", you must include ",(0,r.kt)("inlineCode",{parentName:"p"},"'--config=/path to configuration file/'")," in this command.")))))}m.isMDXComponent=!0}}]);