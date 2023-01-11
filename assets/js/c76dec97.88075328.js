"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8111],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),u=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=u(e.components);return o.createElement(s.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=u(t),m=a,w=p["".concat(s,".").concat(m)]||p[m]||l[m]||r;return t?o.createElement(w,i(i({ref:n},d),{},{components:t})):o.createElement(w,i({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=p;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<r;u++)i[u]=t[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1893:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>l,frontMatter:()=>r,metadata:()=>c,toc:()=>u});var o=t(7462),a=(t(7294),t(3905));const r={"ft:title":"Understanding ISM Diagnostic Tool Results","ft:prettyUrl":"c_ism_diagnostic_results"},i=void 0,c={unversionedId:"guides/ism/test_ism_endpoint_diagnostic/ism_diagnostic_results",id:"guides/ism/test_ism_endpoint_diagnostic/ism_diagnostic_results",title:"ism_diagnostic_results",description:"The Veracode Internal Scanning Management (ISM) endpoint diagnostic tool provides details of the performance of the connections to your endpoint. It measures the connection from the endpoint to both the Veracode gateway and the application you want to scan.",source:"@site/docs/guides/ism/23_test_ism_endpoint_diagnostic/01_ism_diagnostic_results.md",sourceDirName:"guides/ism/23_test_ism_endpoint_diagnostic",slug:"/guides/ism/test_ism_endpoint_diagnostic/ism_diagnostic_results",permalink:"/kmcca/km-docusaurus-test/docs/guides/ism/test_ism_endpoint_diagnostic/ism_diagnostic_results",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{"ft:title":"Understanding ISM Diagnostic Tool Results","ft:prettyUrl":"c_ism_diagnostic_results"},sidebar:"tutorialSidebar",previous:{title:"README",permalink:"/kmcca/km-docusaurus-test/docs/guides/ism/test_ism_endpoint_diagnostic/"},next:{title:"ism_diagnostic_parameters",permalink:"/kmcca/km-docusaurus-test/docs/guides/ism/test_ism_endpoint_diagnostic/ism_diagnostic_parameters"}},s={},u=[],d={toc:u};function l(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Veracode Internal Scanning Management (ISM) endpoint diagnostic tool provides details of the performance of the connections to your endpoint. It measures the connection from the endpoint to both the Veracode gateway and the application you want to scan."),(0,a.kt)("p",null,"A successful endpoint diagnostic test returns two sets of results: the gateway diagnostics results and the destination diagnostics results."),(0,a.kt)("p",null,"For gateway diagnostics, the tool sends data through a secure tunnel from the endpoint to the Veracode gateway and, then, back to the endpoint, measuring the response time. The tunnel closes as soon as the data transfer completes. The gateway diagnostics summary provides these data points:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Average Transfer Time: the amount of time, in milliseconds, it took for the data to reach the gateway and return to the endpoint."),(0,a.kt)("li",{parentName:"ul"},"Average Throughput: the speed, in megabits per second, at which the data traveled.")),(0,a.kt)("p",null,"A high transfer time or low throughput may indicate a poor connection between your endpoint server and the Veracode network."),(0,a.kt)("p",null,"For destination diagnostics, the tool sends data through a SOCKS5 connection between your endpoint and the URL of the application you want to scan. Then, it sends the data back to the endpoint, measuring the response time. The destination diagnostics summary provides these data points:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Average Transfer Time: the amount of time, in milliseconds, it took for the data to reach the application URL and return to the endpoint."),(0,a.kt)("li",{parentName:"ul"},"Average Throughput: the speed, in megabits per second, at which the data traveled.")),(0,a.kt)("p",null,"A high transfer time or low throughput may indicate a poor connection between your endpoint server and the application you want to scan."),(0,a.kt)("p",null,"This example shows a successful diagnostic test:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"c:\\Program Files\\Veracode\\ISM\\veracode_ism>java -jar endpoint.jar --diagnostics https://www.veracode.com 5 3 250\n2020-03-06 20:07:21,985 INFO - Launching Smart Endpoint version: 20.3.4 Java version: 1.8.0_241\n2020-03-06 20:07:22,079 INFO - Running endpoint diagnostics\n2020-03-06 20:07:22,517 INFO - Running tunnel diagnostics\n2020-03-06 20:07:22,689 INFO - Tunnel diagnostics complete\n2020-03-06 20:07:22,689 INFO - Running destination diagnostics\n2020-03-06 20:07:23,157 INFO - Destination diagnostics complete\n2020-03-06 20:07:23,157 INFO - Tunnel diagnose usage stats: 0 bytes sent; 750000 bytes received\n2020-03-06 20:07:23,157 INFO - Tunnel diagnose Performance stats:\n2020-03-06 20:07:23,157 INFO - =======================================\n2020-03-06 20:07:23,157 INFO - Gateway diagnostics results\n2020-03-06 20:07:23,157 INFO - =======================================\n2020-03-06 20:07:23,157 INFO - # Time(ms) Size(kB) Throughput(Mbps) Quality\n2020-03-06 20:07:23,157 INFO - 1 47 250 42.55 100%\n2020-03-06 20:07:23,157 INFO - 2 47 250 42.55 100%\n2020-03-06 20:07:23,157 INFO - 3 47 250 42.55 100%\n2020-03-06 20:07:23,157 INFO - ==========Gateway Diagnostics Summary===========\n2020-03-06 20:07:23,157 INFO - Average Transfer Time:47.0 +/- 0.0\n2020-03-06 20:07:23,157 INFO - Average Throughput:42.5531914893617 +/- 0.0\n2020-03-06 20:07:23,157 INFO - =======================================\n2020-03-06 20:07:23,157 INFO - Destination diagnostics results 1 thread each for target https://www.veracode.com\n2020-03-06 20:07:23,157 INFO - =======================================\n2020-03-06 20:07:23,157 INFO - # Time(ms) Size(kB) Throughput(Mbps) Quality\n2020-03-06 20:07:23,157 INFO - 1 125 92.3 5.91 100%\n2020-03-06 20:07:23,157 INFO - 2 78 92.3 9.46 100%\n2020-03-06 20:07:23,157 INFO - 3 78 92.3 9.46 100%\n2020-03-06 20:07:23,157 INFO - 4 78 92.3 9.46 100%\n2020-03-06 20:07:23,157 INFO - 5 94 92.3 7.85 100%\n2020-03-06 20:07:23,157 INFO - ==========Destination Diagnostic Summary===========\n2020-03-06 20:07:23,157 INFO - Average Transfer Time:90.6 +/- 18.282232\n2020-03-06 20:07:23,157 INFO - Average Throughput:8.429736844080741 +/- 1.4079821\n2020-03-06 20:07:23,157 INFO - Smart Endpoint is shutting down\n2020-03-06 20:07:23,157 INFO - Smart Endpoint shut down complete\n")),(0,a.kt)("p",null,"If you see exceptions in the gateway diagnostic results, Veracode encountered issues creating a tunnel from the gateway to your endpoint. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"2020-06-05 17:09:52,375 DEBUG - Sockets client is running using proxy:HTTP @ /10.110.52.49:808\n2020-06-05 17:09:54,695 ERROR - Error in websocket client\njava.net.ConnectException: Connection refused: connect\nat java.net.DualStackPlainSocketImpl.connect0(Native Method)\nat java.net.DualStackPlainSocketImpl.socketConnect(Unknown Source)\nat java.net.AbstractPlainSocketImpl.doConnect(Unknown Source)\nat java.net.AbstractPlainSocketImpl.connectToAddress(Unknown Source)\nat java.net.AbstractPlainSocketImpl.connect(Unknown Source)\nat java.net.PlainSocketImpl.connect(Unknown Source)\nat java.net.Socket.connect(Unknown Source)\nat sun.net.NetworkClient.doConnect(Unknown Source)\nat sun.net.www.http.HttpClient.openServer(Unknown Source)\nat sun.net.www.http.HttpClient$1.run(Unknown Source)\nat sun.net.www.http.HttpClient$1.run(Unknown Source)\nat java.security.AccessController.doPrivileged(Native Method)\nat sun.net.www.http.HttpClient.privilegedOpenServer(Unknown Source)\nat sun.net.www.http.HttpClient.openServer(Unknown Source)\nat sun.net.www.http.HttpClient.<init>(Unknown Source)\nat sun.net.www.http.HttpClient.New(Unknown Source)\nat sun.net.www.http.HttpClient.New(Unknown Source)\nat sun.net.www.protocol.http.HttpURLConnection.getNewHttpClient(Unknown Source)\nat sun.net.www.protocol.http.HttpURLConnection.plainConnect0(Unknown Source)\nat sun.net.www.protocol.http.HttpURLConnection.plainConnect(Unknown Source)\nat sun.net.www.protocol.http.HttpURLConnection.connect(Unknown Source)\nat java.net.HttpConnectSocketImpl.doTunnel(Unknown Source)\nat java.net.HttpConnectSocketImpl.access$200(Unknown Source)\nat java.net.HttpConnectSocketImpl$2.run(Unknown Source)\nat java.net.HttpConnectSocketImpl$2.run(Unknown Source)\nat java.security.AccessController.doPrivileged(Native Method)\nat java.net.HttpConnectSocketImpl.privilegedDoTunnel(Unknown Source)\nat java.net.HttpConnectSocketImpl.connect(Unknown Source)\nat java.net.Socket.connect(Unknown Source)\nat org.java_websocket.client.WebSocketClient.run(WebSocketClient.java:387)\nat java.lang.Thread.run(Unknown Source)\n2020-06-05 17:09:54,702 DEBUG - Socket closed. Exit code: -1 Reason: Connection refused: connect\n")),(0,a.kt)("p",null,"The most likely cause of a gateway diagnostic exception is a firewall or proxy server that blocks WebSocket traffic. To resolve this error, you must configure your firewall to allow WebSocket traffic to the Veracode gateway."),(0,a.kt)("p",null,"If you see exceptions in the destination diagnostic results, the endpoint cannot access the destination URL. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"2020-06-05 17:18:26,872 ERROR - Exception while sending diagnostic data\ncom.veracode.was.mvsa.smartendpointclient.proxy.ProxyException: java.net.SocketTimeoutException: connect timed out\nat com.veracode.was.mvsa.smartendpointclient.proxy.embedded.socks5.AddressHandler.connect(AddressHandler.java:90)\nat com.veracode.was.mvsa.smartendpointclient.proxy.embedded.ProxyChannelEmbedded.send(ProxyChannelEmbedded.java:99)\nat com.veracode.was.mvsa.smartendpointclient.websocket.SmartEndpointSocketClient.lambda$openDiagnosticSocket$3(SmartEndpointSocketClient.java:296)\nat java.util.concurrent.Executors$RunnableAdapter.call(Unknown Source)\nat java.util.concurrent.FutureTask.run(Unknown Source)\nat java.util.concurrent.ThreadPoolExecutor.runWorker(Unknown Source)\nat java.util.concurrent.ThreadPoolExecutor$Worker.run(Unknown Source)\nat java.lang.Thread.run(Unknown Source)\nCaused by:\njava.net.SocketTimeoutException: connect timed out\nat com.veracode.was.mvsa.smartendpointclient.proxy.embedded.socks5.AddressHandler.connect(AddressHandler.java:90)\nat com.veracode.was.mvsa.smartendpointclient.proxy.embedded.ProxyChannelEmbedded.send(ProxyChannelEmbedded.java:99)\nat com.veracode.was.mvsa.smartendpointclient.websocket.SmartEndpointSocketClient.lambda$openDiagnosticSocket$3(SmartEndpointSocketClient.java:296)\nat java.util.concurrent.Executors$RunnableAdapter.call(Unknown Source)\nat java.util.concurrent.FutureTask.run(Unknown Source)\nat java.util.concurrent.ThreadPoolExecutor.runWorker(Unknown Source)\nat java.util.concurrent.ThreadPoolExecutor$Worker.run(Unknown Source)\nat java.lang.Thread.run(Unknown Source)\n2020-06-05 17:18:26,872 ERROR - Destination check exception\njava.net.SocketException: SOCKS: Connection refused\nat java.net.SocksSocketImpl.connect(Unknown Source)\nat java.net.Socket.connect(Unknown Source)\nat java.net.Socket.connect(Unknown Source)\nat com.veracode.was.mvsa.smartendpointclient.websocket.DiagnosticClient.getDestination(DiagnosticClient.java:275)\nat com.veracode.was.mvsa.smartendpointclient.websocket.DiagnosticClient.runDestinationCheck(DiagnosticClient.java:140)\nat com.veracode.was.mvsa.smartendpointclient.websocket.DiagnosticClient.runDiagnostics(DiagnosticClient.java:59)\nat com.veracode.was.mvsa.smartendpointclient.service.impl.SmartEndpointServiceImpl.runDiagnostics(SmartEndpointServiceImpl.java:376)\nat com.veracode.was.mvsa.smartendpointclient.main.EndpointLauncher.runDiagnostics(EndpointLauncher.java:80)\nat com.veracode.was.mvsa.smartendpointclient.main.Main.main(Main.java:98)\n")),(0,a.kt)("p",null,"The most likely cause of a destination diagnostic exception is that your proxy does not allow access to the URL from the endpoint machine. To resolve this error, you must configure your proxy to allow your endpoint machine to access the destination URL."))}l.isMDXComponent=!0}}]);