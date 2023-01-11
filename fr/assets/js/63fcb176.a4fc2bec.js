"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9690],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},896:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={"ft:title":"Configure Internal Scanning","ft:prettyUrl":"t_configure_gateway"},i=void 0,l={unversionedId:"guides/ism/configure_internal_scanning",id:"guides/ism/configure_internal_scanning",title:"configure_internal_scanning",description:"Your Veracode Internal Scanning Management \\(ISM\\) configuration consists of a gateway that is the access point to the Veracode cloud and endpoints, which connect Veracode to your internal applications or REST APIs.",source:"@site/docs/guides/ism/07_configure_internal_scanning.md",sourceDirName:"guides/ism",slug:"/guides/ism/configure_internal_scanning",permalink:"/kmcca/km-docusaurus-test/fr/docs/guides/ism/configure_internal_scanning",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{"ft:title":"Configure Internal Scanning","ft:prettyUrl":"t_configure_gateway"},sidebar:"tutorialSidebar",previous:{title:"ism_endpoint_installer",permalink:"/kmcca/km-docusaurus-test/fr/docs/guides/ism/ism_endpoint_installer"},next:{title:"add_endpoint_to_gateway",permalink:"/kmcca/km-docusaurus-test/fr/docs/guides/ism/add_endpoint_to_gateway"}},s={},c=[],p={toc:c};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Your Veracode Internal Scanning Management ","(","ISM",")"," configuration consists of a gateway that is the access point to the Veracode cloud and endpoints, which connect Veracode to your internal applications or REST APIs."),(0,o.kt)("p",null,"Before you begin:"),(0,o.kt)("p",null,"Before you install an endpoint on a machine, verify that the machine can reach the URLs you want to scan. Open the URLs in a web browser and, if the machine cannot connect to the URLs, ask your IT administrator to enable the connection."),(0,o.kt)("p",null,"Veracode recommends that you create only one gateway."),(0,o.kt)("p",null,"To complete this task:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the gear icon menu ",(0,o.kt)("img",{src:n(4471).Z,width:"24",height:"16"})," at the top of the Veracode Platform, click ",(0,o.kt)("strong",{parentName:"p"},"Internal Scanning Management"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Configure Internal Scanning"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter the name and description of the gateway. Then, click ",(0,o.kt)("strong",{parentName:"p"},"Next"),". ISM only supports ASCII characters, not UTF-8, for the names and descriptions of gateways and endpoints.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter the name and description of the endpoint you want to connect to this gateway.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select the platform of the machine running the endpoint. If you do not use Windows or Linux, select ",(0,o.kt)("strong",{parentName:"p"},"Other")," to perform a manual endpoint installation."),(0,o.kt)("p",{parentName:"li"},"If you select ",(0,o.kt)("strong",{parentName:"p"},"Other"),", go directly to ",(0,o.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/t_configure_endpoint_manual"},"Manually Install an Endpoint"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Next"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Complete these steps to start the installer:"),(0,o.kt)("p",{parentName:"li"},"a.  Click ",(0,o.kt)("strong",{parentName:"p"},"Download")," to download the ZIP file containing the installer."),(0,o.kt)("p",{parentName:"li"},"b.  Click ",(0,o.kt)("strong",{parentName:"p"},"Copy")," in the text box in step 2.3 to copy your endpoint key to your clipboard."),(0,o.kt)("p",{parentName:"li"},"c.  Move the downloaded ZIP file to a machine behind your firewall with access to your internal applications or REST APIs."),(0,o.kt)("p",{parentName:"li"},"d.  Extract the ZIP file."),(0,o.kt)("p",{parentName:"li"},"e.  Open the installer file."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"For Windows machines, the filename is ",(0,o.kt)("inlineCode",{parentName:"li"},"veracode_ism_install.bat"),"."),(0,o.kt)("li",{parentName:"ul"},"For Linux machines, the filename is ",(0,o.kt)("inlineCode",{parentName:"li"},"veracode_ism_install.sh"),"If you have insufficient permissions to create the service, run the file as an administrator. If you are using a Linux machine without a GUI wrapper, Veracode recommends you open the installer with this command: ",(0,o.kt)("code",null,"sudo -s ./veracode_ism_install.sh"))))),(0,o.kt)("ol",{start:8},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After you launch the installer, complete these steps to install the endpoint:"),(0,o.kt)("p",{parentName:"li"}," For Linux machines without a GUI wrapper, opening the installer prompts you to provide the information listed in these steps on the command line."),(0,o.kt)("p",{parentName:"li"},"a.  Read the terms of use for the endpoint, select the checkbox, and click ",(0,o.kt)("strong",{parentName:"p"},"Next"),"."),(0,o.kt)("p",{parentName:"li"},"b.  Verify the installation folder and Java home are correct or select your preferred folders and click ",(0,o.kt)("strong",{parentName:"p"},"Next"),"."),(0,o.kt)("p",{parentName:"li"},"If the installer cannot automatically detect the Java home, you must specify it."),(0,o.kt)("p",{parentName:"li"},"c.  If you use a proxy, select ",(0,o.kt)("strong",{parentName:"p"},"Manual configuration"),"."),(0,o.kt)("p",{parentName:"li"},"d.  If you select ",(0,o.kt)("strong",{parentName:"p"},"Manual configuration"),":"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Enter your proxy hostname and port number."),(0,o.kt)("li",{parentName:"ul"},"If you want to use the proxy only for communication between the endpoint and gateway:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Select ",(0,o.kt)("strong",{parentName:"li"},"For gateway connection"),"."),(0,o.kt)("li",{parentName:"ul"},"If you want the proxy to resolve the gateway hostname, which means you need to allow only the gateway hostname, clear the ",(0,o.kt)("strong",{parentName:"li"},"Let endpoint resolve hostname for gateway")," checkbox. If you do not clear it, you must include the hostname and IP address of the gateway in your allowlist."))),(0,o.kt)("li",{parentName:"ul"},"If you want to use the proxy for communication between the endpoint and gateway and between the endpoint and the URLs you scan:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Select ",(0,o.kt)("strong",{parentName:"li"},"For gateway and URL connections"),"."),(0,o.kt)("li",{parentName:"ul"},"If you want the proxy to resolve the gateway or URL hostnames, which means you need to allow only the hostname for the gateway and the URLs you scan, clear the ",(0,o.kt)("strong",{parentName:"li"},"Let endpoint resolve hostname for gateway")," or ",(0,o.kt)("strong",{parentName:"li"},"Let endpoint resolve hostname for URLs")," checkboxes. If you do not clear them, you must include the hostname and IP address of the gateway and URLs in your allowlist."))),(0,o.kt)("li",{parentName:"ul"},"If the proxy requires authentication, select ",(0,o.kt)("strong",{parentName:"li"},"Authentication Required")," and, then, enter your proxy credentials.")),(0,o.kt)("p",{parentName:"li"},"e. Click ",(0,o.kt)("strong",{parentName:"p"},"Next"),"."),(0,o.kt)("p",{parentName:"li"},"f. Paste the endpoint key you copied in step 7 and click ",(0,o.kt)("strong",{parentName:"p"},"Next"),"."),(0,o.kt)("p",{parentName:"li"}," If you did not copy the endpoint key, go to the gateway page in the Veracode Platform, click the Actions menu for this endpoint, and select ",(0,o.kt)("b",null,"Copy Endpoint Key"),"."),(0,o.kt)("p",{parentName:"li"},"g.  When the key validates, click ",(0,o.kt)("strong",{parentName:"p"},"Install"),"."),(0,o.kt)("p",{parentName:"li"},"h.  Click ",(0,o.kt)("strong",{parentName:"p"},"Close"),"."),(0,o.kt)("p",{parentName:"li"},"The gateway and endpoint you created now appear on the Internal Scanning Management page."),(0,o.kt)("p",{parentName:"li"},"The gateway may have a status of Initializing for a few minutes after you create it. The endpoint has a status of Pending until you successfully deploy it. When you successfully deploy the endpoint, it has a status of Ready."))),(0,o.kt)("p",null,"Next steps:"),(0,o.kt)("p",null,"If the endpoint fails to connect to the gateway, your organization may need to add the gateway IP address or domain name to your allowlist. The IP address and domain are visible from the Internal Scanning Management page and the gateway page."),(0,o.kt)("p",null,"After you have created the gateway, started the endpoint, and tested the gateway connection, you can configure a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_was_configure"},"Veracode Dynamic Analysis")," for internal scanning."))}m.isMDXComponent=!0},4471:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAQCAYAAAAMJL+VAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAHYYAAB2GAV2iE4EAAAAkdEVYdENvbW1lbnQATEVBRCBUZWNobm9sb2dpZXMgSW5jLiBWMS4wMX7Qgw0AAARkSURBVDhPNZTrTxRXGMb3j+r32sSvJv1Sk6Ym+qGXxLSx1mjT2qa11qS2aFMbbURRpFwEVBSWm9wRkHLxggiCXAVkdWHZnZ3bzszOr89Z2k1m58x7znne533eS8KK8oQxZNBPb08vxy6Qdi1W8rDuROSKOezAJRdGFCKQGVuHYx8KQUwUF7Hw8dwIHYci+HoEQ8KXwZYtE2khB3gZll8MU1bTxdfXujhcfZfbMykcbeX0oGOen0d3sbXOCjgIBahv+WK7GOC6Po4+PO0nwrBA3rcIgizbgbg5GSqbGtjf/4J09g0dg+18dX2UAYNe9MkLxIBF+o9CFzcKSsC2GIeBHu0RK9KijLIlzN/mVoq/Ozq58GCdht4+frjRw5XlrdLh1Pwsv1a38t3gBNXdI5QlJ+lbysuRjytA24uxQjkWkKsLrhtTLPgUiyG+vhOhl6a2tpb3k+N8ebOTfXVjdG56Ai+Kmbx7RbKbM5xr6GZ/1SBHL7VwPDnCuJIVB15JOiOXF/nKg2TR2lGIJo+27idWnw7y+fVp1kxIUtnoaRUsxmamOds7weXJNdYMFbE1YDib/H6vhVOjKTZliyWHo8xH/2dXMDuyu+7uZ+Jx+232VI4ytLRNLCpBmGei/y5fXGvig7uDfFjVyOmeZ8yZsog93m6ucKGqme+bnrBhqEsqr2BT8HfZGyIRrhyLrqkib+EpZ27Vc6hrHleG1VdTnLzaQ+uqYSAa6084U9PNqadbKlGHgbZmDpZ3UL1kSfc8mdhWNW1wf3yY82PPWTeBsMbjyQFOj6wqB6qG9HSSPfUzbKonhseSHKtbK1VGiRFbNHQMcDSZVvQ56hqTXByzSsxj6Zn3VV5xyPxYDx/92cDPQ4v0/jPMp5du881YikR25QknKzo40PZCSVITzY3y06V2Kl9nCBRRbmOSH8vvcXbatNdbBpNJDpV1cmPFwhGJwn9EjCyLzx5y7Fw575W1cGXqtag7JMZb69hb/Yi5jbzks/GVrMmhFo6UD7G/5gH7rjRzcXCVV9bObo7SKS7W1XGiY4qXJvdy4IfW7iSIXObml2icz/C2aNyqil4+7+OzykkW5c8VF5WxcpFhdmGZ+kfqj5k3vJYt8nd2O9lao6y2hfMjb0jFORzlvhCoknQmLEaCjEuNaPrArBNBkKH7VjvvXmvmSHUb79T207SwW26GnSm1rYUJjl9uYm/DAB9X3OPwnUUmNV/MdDHzyVFkBc0FBVQimFdt2PKSc2wSckohtaIObqHy8Sz3+/v5trGTP5bTRAJfmZ3it6t3+KXvGb3TU1R0tdCbCUq6B0qarR4wPCw1pKl/4yQsBKWhaCJOBJFk0UZ2x2FHBrLb1N+s5UDXHOnMGgO97Zyo6eOhnJmQdnTRgJu5Y4akmZgG1Bcb3/Uw/WoksiKNEC/ULJJ+5oApudLwkN/l2eeqnFY++aubgxVt3JlZwRKaHdq7suXzpSFXApEDjSM5d0t7rnBCN1saH04Y8i9xnmvhMXegKwAAAABJRU5ErkJggg=="}}]);