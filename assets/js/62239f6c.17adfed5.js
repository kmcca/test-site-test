"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6237],{3905:(n,e,t)=>{t.d(e,{Zo:()=>l,kt:()=>m});var o=t(67294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function c(n,e){if(null==n)return{};var t,o,a=function(n,e){if(null==n)return{};var t,o,a={},r=Object.keys(n);for(o=0;o<r.length;o++)t=r[o],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(o=0;o<r.length;o++)t=r[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var s=o.createContext({}),u=function(n){var e=o.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},l=function(n){var e=u(n.components);return o.createElement(s.Provider,{value:e},n.children)},d={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},p=o.forwardRef((function(n,e){var t=n.components,a=n.mdxType,r=n.originalType,s=n.parentName,l=c(n,["components","mdxType","originalType","parentName"]),p=u(t),m=a,w=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return t?o.createElement(w,i(i({ref:e},l),{},{components:t})):o.createElement(w,i({ref:e},l))}));function m(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var r=t.length,i=new Array(r);i[0]=p;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=n,c.mdxType="string"==typeof n?n:a,i[1]=c;for(var u=2;u<r;u++)i[u]=t[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},37035:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>u});var o=t(87462),a=(t(67294),t(3905));const r={title:"Understanding ISM Diagnostic Tool Results",slug:"/r/c_ism_diagnostic_results"},i=void 0,c={unversionedId:"guides/dynamic_analysis/ism/test_ism_endpoint_diagnostic/ism_diagnostic_results",id:"guides/dynamic_analysis/ism/test_ism_endpoint_diagnostic/ism_diagnostic_results",title:"Understanding ISM Diagnostic Tool Results",description:"The Veracode Internal Scanning Management (ISM) endpoint diagnostic tool provides details of the performance of the connections to your endpoint. It measures the connection from the endpoint to both the Veracode gateway and the application you want to scan.",source:"@site/docs/guides/10_dynamic_analysis/11_ism/23_test_ism_endpoint_diagnostic/01_ism_diagnostic_results.md",sourceDirName:"guides/10_dynamic_analysis/11_ism/23_test_ism_endpoint_diagnostic",slug:"/r/c_ism_diagnostic_results",permalink:"/km-docusaurus-test/r/c_ism_diagnostic_results",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Understanding ISM Diagnostic Tool Results",slug:"/r/c_ism_diagnostic_results"},sidebar:"tutorialSidebar",previous:{title:"Test Your ISM Endpoint with the Diagnostic Tool",permalink:"/km-docusaurus-test/r/t_ism_run_diagnostics"},next:{title:"ISM Diagnostic Tool Parameters",permalink:"/km-docusaurus-test/r/r_ism_diagnostic_parameters"}},s={},u=[],l={toc:u};function d(n){let{components:e,...t}=n;return(0,a.kt)("wrapper",(0,o.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Veracode Internal Scanning Management (ISM) endpoint diagnostic tool provides details of the performance of the connections to your endpoint. It measures the connection from the endpoint to both the Veracode gateway and the application you want to scan."),(0,a.kt)("p",null,"A successful endpoint diagnostic test returns two sets of results: the gateway diagnostics results and the destination diagnostics results."),(0,a.kt)("p",null,"For gateway diagnostics, the tool sends data through a secure tunnel from the endpoint to the Veracode gateway and, then, back to the endpoint, measuring the response time. The tunnel closes as soon as the data transfer completes. The gateway diagnostics summary provides these data points:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Average Transfer Time: the amount of time, in milliseconds, it took for the data to reach the gateway and return to the endpoint."),(0,a.kt)("li",{parentName:"ul"},"Average Throughput: the speed, in megabits per second, at which the data traveled.")),(0,a.kt)("p",null,"A high transfer time or low throughput may indicate a poor connection between your endpoint server and the Veracode network."),(0,a.kt)("p",null,"For destination diagnostics, the tool sends data through a SOCKS5 connection between your endpoint and the URL of the application you want to scan. Then, it sends the data back to the endpoint, measuring the response time. The destination diagnostics summary provides these data points:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Average Transfer Time: the amount of time, in milliseconds, it took for the data to reach the application URL and return to the endpoint."),(0,a.kt)("li",{parentName:"ul"},"Average Throughput: the speed, in megabits per second, at which the data traveled.")),(0,a.kt)("p",null,"A high transfer time or low throughput may indicate a poor connection between your endpoint server and the application you want to scan."),(0,a.kt)("p",null,"This example shows a successful diagnostic test:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"c:\\Program Files\\Veracode\\ISM\\veracode_ism>java -jar endpoint.jar --diagnostics https://www.veracode.com 5 3 250\n2020-03-06 20:07:21,985 INFO - Launching Smart Endpoint version: 20.3.4 Java version: 1.8.0_241\n2020-03-06 20:07:22,079 INFO - Running endpoint diagnostics\n2020-03-06 20:07:22,517 INFO - Running tunnel diagnostics\n2020-03-06 20:07:22,689 INFO - Tunnel diagnostics complete\n2020-03-06 20:07:22,689 INFO - Running destination diagnostics\n2020-03-06 20:07:23,157 INFO - Destination diagnostics complete\n2020-03-06 20:07:23,157 INFO - Tunnel diagnose usage stats: 0 bytes sent; 750000 bytes received\n2020-03-06 20:07:23,157 INFO - Tunnel diagnose Performance stats:\n2020-03-06 20:07:23,157 INFO - =======================================\n2020-03-06 20:07:23,157 INFO - Gateway diagnostics results\n2020-03-06 20:07:23,157 INFO - =======================================\n2020-03-06 20:07:23,157 INFO - # Time(ms) Size(kB) Throughput(Mbps) Quality\n2020-03-06 20:07:23,157 INFO - 1 47 250 42.55 100%\n2020-03-06 20:07:23,157 INFO - 2 47 250 42.55 100%\n2020-03-06 20:07:23,157 INFO - 3 47 250 42.55 100%\n2020-03-06 20:07:23,157 INFO - ==========Gateway Diagnostics Summary===========\n2020-03-06 20:07:23,157 INFO - Average Transfer Time:47.0 +/- 0.0\n2020-03-06 20:07:23,157 INFO - Average Throughput:42.5531914893617 +/- 0.0\n2020-03-06 20:07:23,157 INFO - =======================================\n2020-03-06 20:07:23,157 INFO - Destination diagnostics results 1 thread each for target https://www.veracode.com\n2020-03-06 20:07:23,157 INFO - =======================================\n2020-03-06 20:07:23,157 INFO - # Time(ms) Size(kB) Throughput(Mbps) Quality\n2020-03-06 20:07:23,157 INFO - 1 125 92.3 5.91 100%\n2020-03-06 20:07:23,157 INFO - 2 78 92.3 9.46 100%\n2020-03-06 20:07:23,157 INFO - 3 78 92.3 9.46 100%\n2020-03-06 20:07:23,157 INFO - 4 78 92.3 9.46 100%\n2020-03-06 20:07:23,157 INFO - 5 94 92.3 7.85 100%\n2020-03-06 20:07:23,157 INFO - ==========Destination Diagnostic Summary===========\n2020-03-06 20:07:23,157 INFO - Average Transfer Time:90.6 +/- 18.282232\n2020-03-06 20:07:23,157 INFO - Average Throughput:8.429736844080741 +/- 1.4079821\n2020-03-06 20:07:23,157 INFO - Smart Endpoint is shutting down\n2020-03-06 20:07:23,157 INFO - Smart Endpoint shut down complete\n")),(0,a.kt)("p",null,"If you see exceptions in the gateway diagnostic results, Veracode encountered issues creating a tunnel from the gateway to your endpoint. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"2020-06-05 17:09:52,375 DEBUG - Sockets client is running using proxy:HTTP @ /10.110.52.49:808\n2020-06-05 17:09:54,695 ERROR - Error in websocket client\njava.net.ConnectException: Connection refused: connect\nat java.net.DualStackPlainSocketImpl.connect0(Native Method)\nat java.net.DualStackPlainSocketImpl.socketConnect(Unknown Source)\nat java.net.AbstractPlainSocketImpl.doConnect(Unknown Source)\nat java.net.AbstractPlainSocketImpl.connectToAddress(Unknown Source)\nat java.net.AbstractPlainSocketImpl.connect(Unknown Source)\nat java.net.PlainSocketImpl.connect(Unknown Source)\nat java.net.Socket.connect(Unknown Source)\nat sun.net.NetworkClient.doConnect(Unknown Source)\nat sun.net.www.http.HttpClient.openServer(Unknown Source)\nat sun.net.www.http.HttpClient$1.run(Unknown Source)\nat sun.net.www.http.HttpClient$1.run(Unknown Source)\nat java.security.AccessController.doPrivileged(Native Method)\nat sun.net.www.http.HttpClient.privilegedOpenServer(Unknown Source)\nat sun.net.www.http.HttpClient.openServer(Unknown Source)\nat sun.net.www.http.HttpClient.<init>(Unknown Source)\nat sun.net.www.http.HttpClient.New(Unknown Source)\nat sun.net.www.http.HttpClient.New(Unknown Source)\nat sun.net.www.protocol.http.HttpURLConnection.getNewHttpClient(Unknown Source)\nat sun.net.www.protocol.http.HttpURLConnection.plainConnect0(Unknown Source)\nat sun.net.www.protocol.http.HttpURLConnection.plainConnect(Unknown Source)\nat sun.net.www.protocol.http.HttpURLConnection.connect(Unknown Source)\nat java.net.HttpConnectSocketImpl.doTunnel(Unknown Source)\nat java.net.HttpConnectSocketImpl.access$200(Unknown Source)\nat java.net.HttpConnectSocketImpl$2.run(Unknown Source)\nat java.net.HttpConnectSocketImpl$2.run(Unknown Source)\nat java.security.AccessController.doPrivileged(Native Method)\nat java.net.HttpConnectSocketImpl.privilegedDoTunnel(Unknown Source)\nat java.net.HttpConnectSocketImpl.connect(Unknown Source)\nat java.net.Socket.connect(Unknown Source)\nat org.java_websocket.client.WebSocketClient.run(WebSocketClient.java:387)\nat java.lang.Thread.run(Unknown Source)\n2020-06-05 17:09:54,702 DEBUG - Socket closed. Exit code: -1 Reason: Connection refused: connect\n")),(0,a.kt)("p",null,"The most likely cause of a gateway diagnostic exception is a firewall or proxy server that blocks WebSocket traffic. To resolve this error, you must configure your firewall to allow WebSocket traffic to the Veracode gateway."),(0,a.kt)("p",null,"If you see exceptions in the destination diagnostic results, the endpoint cannot access the destination URL. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"2020-06-05 17:18:26,872 ERROR - Exception while sending diagnostic data\ncom.veracode.was.mvsa.smartendpointclient.proxy.ProxyException: java.net.SocketTimeoutException: connect timed out\nat com.veracode.was.mvsa.smartendpointclient.proxy.embedded.socks5.AddressHandler.connect(AddressHandler.java:90)\nat com.veracode.was.mvsa.smartendpointclient.proxy.embedded.ProxyChannelEmbedded.send(ProxyChannelEmbedded.java:99)\nat com.veracode.was.mvsa.smartendpointclient.websocket.SmartEndpointSocketClient.lambda$openDiagnosticSocket$3(SmartEndpointSocketClient.java:296)\nat java.util.concurrent.Executors$RunnableAdapter.call(Unknown Source)\nat java.util.concurrent.FutureTask.run(Unknown Source)\nat java.util.concurrent.ThreadPoolExecutor.runWorker(Unknown Source)\nat java.util.concurrent.ThreadPoolExecutor$Worker.run(Unknown Source)\nat java.lang.Thread.run(Unknown Source)\nCaused by:\njava.net.SocketTimeoutException: connect timed out\nat com.veracode.was.mvsa.smartendpointclient.proxy.embedded.socks5.AddressHandler.connect(AddressHandler.java:90)\nat com.veracode.was.mvsa.smartendpointclient.proxy.embedded.ProxyChannelEmbedded.send(ProxyChannelEmbedded.java:99)\nat com.veracode.was.mvsa.smartendpointclient.websocket.SmartEndpointSocketClient.lambda$openDiagnosticSocket$3(SmartEndpointSocketClient.java:296)\nat java.util.concurrent.Executors$RunnableAdapter.call(Unknown Source)\nat java.util.concurrent.FutureTask.run(Unknown Source)\nat java.util.concurrent.ThreadPoolExecutor.runWorker(Unknown Source)\nat java.util.concurrent.ThreadPoolExecutor$Worker.run(Unknown Source)\nat java.lang.Thread.run(Unknown Source)\n2020-06-05 17:18:26,872 ERROR - Destination check exception\njava.net.SocketException: SOCKS: Connection refused\nat java.net.SocksSocketImpl.connect(Unknown Source)\nat java.net.Socket.connect(Unknown Source)\nat java.net.Socket.connect(Unknown Source)\nat com.veracode.was.mvsa.smartendpointclient.websocket.DiagnosticClient.getDestination(DiagnosticClient.java:275)\nat com.veracode.was.mvsa.smartendpointclient.websocket.DiagnosticClient.runDestinationCheck(DiagnosticClient.java:140)\nat com.veracode.was.mvsa.smartendpointclient.websocket.DiagnosticClient.runDiagnostics(DiagnosticClient.java:59)\nat com.veracode.was.mvsa.smartendpointclient.service.impl.SmartEndpointServiceImpl.runDiagnostics(SmartEndpointServiceImpl.java:376)\nat com.veracode.was.mvsa.smartendpointclient.main.EndpointLauncher.runDiagnostics(EndpointLauncher.java:80)\nat com.veracode.was.mvsa.smartendpointclient.main.Main.main(Main.java:98)\n")),(0,a.kt)("p",null,"The most likely cause of a destination diagnostic exception is that your proxy does not allow access to the URL from the endpoint machine. To resolve this error, you must configure your proxy to allow your endpoint machine to access the destination URL."))}d.isMDXComponent=!0}}]);