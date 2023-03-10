"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[16149],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=d(a),k=r,c=u["".concat(o,".").concat(k)]||u[k]||s[k]||l;return a?n.createElement(c,i(i({ref:t},m),{},{components:a})):n.createElement(c,i({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},76138:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const l={title:"updateapp.do",slug:"/r/r_updateapp"},i=void 0,p={unversionedId:"guides/apis/xml_apis/upload_xml_apis/updateapp_do",id:"guides/apis/xml_apis/upload_xml_apis/updateapp_do",title:"updateapp.do",description:"The updateapp.do call modifies the settings of an existing application in the portfolio.",source:"@site/docs/guides/15_apis/05_xml_apis/02_upload_xml_apis/18_updateapp_do.md",sourceDirName:"guides/15_apis/05_xml_apis/02_upload_xml_apis",slug:"/r/r_updateapp",permalink:"/km-docusaurus-test/r/r_updateapp",draft:!1,tags:[],version:"current",sidebarPosition:18,frontMatter:{title:"updateapp.do",slug:"/r/r_updateapp"},sidebar:"tutorialSidebar",previous:{title:"removefile.do",permalink:"/km-docusaurus-test/r/r_removefile"},next:{title:"updatebuild.do",permalink:"/km-docusaurus-test/r/r_updatebuild"}},o={},d=[{value:"REST API Equivalent",id:"rest-api-equivalent",level:2},{value:"Resource URL",id:"resource-url",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>industry</code> Parameter Values",id:"industry-parameter-values",level:3},{value:"<code>app_type</code> Parameter Values",id:"app_type-parameter-values",level:3},{value:"HTTPie Example",id:"httpie-example",level:3},{value:"HTTPie Results",id:"httpie-results",level:3}],m={toc:d};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"updateapp.do")," call modifies the settings of an existing application in the portfolio."),(0,r.kt)("p",null,"Before using this API, Veracode strongly recommends that you read ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_API_usage_guidelines"},"API Usage and Access Guidelines"),". Ensure you access the APIs with the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs"},"domain for your region"),"."),(0,r.kt)("h2",{id:"rest-api-equivalent"},"REST API Equivalent"),(0,r.kt)("p",null,"The REST API equivalent of this call is a ",(0,r.kt)("inlineCode",{parentName:"p"},"PUT")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"/appsec/v1/applications")," using the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/r_applications_update"},"Applications API"),". Veracode strongly recommends that you use the REST API for this action. For new integrations, always use the REST APIs."),(0,r.kt)("h2",{id:"resource-url"},"Resource URL"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://analysiscenter.veracode.com/api/5.0/updateapp.do\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"app_id"),(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Required")),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Application ID.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"app_name")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Changes the application name.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"description")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Changes the application description.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"business_criticality"),(0,r.kt)("br",null),"Name for wrapper: ",(0,r.kt)("inlineCode",{parentName:"td"},"criticality")),(0,r.kt)("td",{parentName:"tr",align:null},"String (case-sensitive)"),(0,r.kt)("td",{parentName:"tr",align:null},"Matches the names of the business criticality enums:",(0,r.kt)("inlineCode",{parentName:"td"},"Very High"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"High"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Medium"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Low"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Very Low")," ",(0,r.kt)("br",null),"You cannot change this value for applications that a vendor shares with your account.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"policy")),(0,r.kt)("td",{parentName:"tr",align:null},"String (case-sensitive)"),(0,r.kt)("td",{parentName:"tr",align:null},"Validates against the names of existing policies for this account. You cannot change this value for applications that a vendor shares with your account. Default is the policy set as default for the ",(0,r.kt)("inlineCode",{parentName:"td"},"business_criticality")," parameter.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"business_unit")),(0,r.kt)("td",{parentName:"tr",align:null},"String (case-sensitive)"),(0,r.kt)("td",{parentName:"tr",align:null},"Validates against the names of existing business units for this account.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"business_owner")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the business owner for the application.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"business_owner_email")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Email address for the business owner of the application.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"teams")),(0,r.kt)("td",{parentName:"tr",align:null},"String (case-sensitive)"),(0,r.kt)("td",{parentName:"tr",align:null},"Comma-separated list of team names. Validates against the names of existing teams for this account.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"origin")),(0,r.kt)("td",{parentName:"tr",align:null},"String (case-sensitive)"),(0,r.kt)("td",{parentName:"tr",align:null},"Validates against the names of the ",(0,r.kt)("inlineCode",{parentName:"td"},"Origin")," enums:",(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"3rd party library")),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"Purchased Application")),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"Contractor")),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"Internally Developed")),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"Open Source")),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"Outsourced Team"))),"Defaults to ",(0,r.kt)("inlineCode",{parentName:"td"},"Not Specified"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"industry")),(0,r.kt)("td",{parentName:"tr",align:null},"String (case-sensitive)"),(0,r.kt)("td",{parentName:"tr",align:null},"Validates against the names of the ",(0,r.kt)("inlineCode",{parentName:"td"},"Industry")," enums. See ",(0,r.kt)("a",{parentName:"td",href:"#industry-parameter-values"},(0,r.kt)("inlineCode",{parentName:"a"},"industry")," Parameter Values"),". Defaults to the same industry as the account.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"app_type")),(0,r.kt)("td",{parentName:"tr",align:null},"String (case-sensitive)"),(0,r.kt)("td",{parentName:"tr",align:null},"Validates against the names of the ",(0,r.kt)("inlineCode",{parentName:"td"},"Application Purpose")," enums. See ",(0,r.kt)("a",{parentName:"td",href:"#apptype-parameter-values"},(0,r.kt)("inlineCode",{parentName:"a"},"app_type")," Parameter Values"),". Defaults to ",(0,r.kt)("inlineCode",{parentName:"td"},"Not Specified"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"deployment_method"),(0,r.kt)("br",null),"Name for wrapper: ",(0,r.kt)("inlineCode",{parentName:"td"},"deploymenttype")),(0,r.kt)("td",{parentName:"tr",align:null},"String (case-sensitive)"),(0,r.kt)("td",{parentName:"tr",align:null},"Validates against the names of the ",(0,r.kt)("inlineCode",{parentName:"td"},"Deployment Method")," enums. Defaults to ",(0,r.kt)("inlineCode",{parentName:"td"},"Not Specified"),". Case-sensitive enum values are: ",(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"Web Based")),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"Enterprise Application Enhancement")),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"Client/Server")),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"Mobile")),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"Stand Alone"))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"archer_app_name")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the application in Archer.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"tags")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Comma-separated list of tags.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"custom_field_name")),(0,r.kt)("td",{parentName:"tr",align:null},"String (case-sensitive)"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the custom field that ",(0,r.kt)("inlineCode",{parentName:"td"},"custom_field_value")," changes. If either is present, then the other is required. Call ",(0,r.kt)("inlineCode",{parentName:"td"},"updateapp.do")," once for each custom field you need to update.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"custom_field_value")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The value of the custom field that ",(0,r.kt)("inlineCode",{parentName:"td"},"custom_field_name")," specifies. If either is present, then the other is required. Call ",(0,r.kt)("inlineCode",{parentName:"td"},"updateapp.do")," once for each custom field you need to update.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"next_day_scheduling_enabled")),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies if a user can schedule next-day consultations. Only available to ",(0,r.kt)("a",{parentName:"td",href:"https://docs.veracode.com/r/c_role_permissions"},"user accounts")," with the Security Lead or Administrator roles and to ",(0,r.kt)("a",{parentName:"td",href:"https://docs.veracode.com/r/c_API_roles_details"},"API service accounts")," with the Upload and Scan API role. Default is ",(0,r.kt)("inlineCode",{parentName:"td"},"false"),".")))),(0,r.kt)("h3",{id:"industry-parameter-values"},(0,r.kt)("inlineCode",{parentName:"h3"},"industry")," Parameter Values"),(0,r.kt)("p",null,"Values are case-sensitive."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"agmine")),(0,r.kt)("td",{parentName:"tr",align:null},"Agriculture & Mining")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"busiserv")),(0,r.kt)("td",{parentName:"tr",align:null},"Business Services")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"compelec")),(0,r.kt)("td",{parentName:"tr",align:null},"Computers & Electronics")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"conserv")),(0,r.kt)("td",{parentName:"tr",align:null},"Consumer Services")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"edu")),(0,r.kt)("td",{parentName:"tr",align:null},"Education")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"enerutil")),(0,r.kt)("td",{parentName:"tr",align:null},"Energy & Utilities")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fed")),(0,r.kt)("td",{parentName:"tr",align:null},"Federal")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"finserv")),(0,r.kt)("td",{parentName:"tr",align:null},"Financial Services")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"gvmt")),(0,r.kt)("td",{parentName:"tr",align:null},"Government")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"hpb")),(0,r.kt)("td",{parentName:"tr",align:null},"Healthcare, Pharmaceuticals, & Biotech")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"local")),(0,r.kt)("td",{parentName:"tr",align:null},"Local")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"manu")),(0,r.kt)("td",{parentName:"tr",align:null},"Manufacturing")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mediaent")),(0,r.kt)("td",{parentName:"tr",align:null},"Media & Entertainment")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"non-profit")),(0,r.kt)("td",{parentName:"tr",align:null},"Non-Profit")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"notspec")),(0,r.kt)("td",{parentName:"tr",align:null},"Not Specified")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"prtnr")),(0,r.kt)("td",{parentName:"tr",align:null},"Partner")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"realconst")),(0,r.kt)("td",{parentName:"tr",align:null},"Real Estate & Construction")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"retail")),(0,r.kt)("td",{parentName:"tr",align:null},"Retail")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"softint")),(0,r.kt)("td",{parentName:"tr",align:null},"Software & Internet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"telcom")),(0,r.kt)("td",{parentName:"tr",align:null},"Telecommunications")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"transerv")),(0,r.kt)("td",{parentName:"tr",align:null},"Transportation & Storage")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"travel")),(0,r.kt)("td",{parentName:"tr",align:null},"Travel, Recreation, and Leisure")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"wholedist")),(0,r.kt)("td",{parentName:"tr",align:null},"Wholesale & Distribution")))),(0,r.kt)("h3",{id:"app_type-parameter-values"},(0,r.kt)("inlineCode",{parentName:"h3"},"app_type")," Parameter Values"),(0,r.kt)("p",null,"Values are case-sensitive."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Application Design/Construction/IDE/Analysis")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Application Life-Cycle Management")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Application Server/Integration Server")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Back-Office Enterprise")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CRM/Groupware/Messaging")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Consumer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Content Management/Authoring")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Engineering")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Enterprise Resource Planning")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Information Access/Delivery/Mining/Portal")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Information/Data Management/Database")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Middleware/Message-oriented/Transaction")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Network Management")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Networking")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Other")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Other Development Tools")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Security")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ServerWare/Clustering/Web/VM")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Storage")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"System-Level Software")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Systems Management")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Testing Tools"))),(0,r.kt)("h3",{id:"httpie-example"},"HTTPie Example"),(0,r.kt)("p",null,"Examples use the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_httpie_tool"},"HTTPie command-line tool"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'http --auth-type=veracode_hmac "https://analysiscenter.veracode.com/api/5.0/updateapp.do" "app_id==<app id>" "custom_field_name==Custom 10" "custom_field_value==jjones"\n')),(0,r.kt)("h3",{id:"httpie-results"},"HTTPie Results"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"updateapp.do")," call returns the ",(0,r.kt)("inlineCode",{parentName:"p"},"appinfo")," XML document, which references the ",(0,r.kt)("a",{parentName:"p",href:"https://analysiscenter.veracode.com/resource/2.0/appinfo.xsd"},"appinfo.xsd")," schema file. You can use the XSD schema file to validate the XML data."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n\n<appinfo xmlns:xsi="http&#x3a;&#x2f;&#x2f;www.w3.org&#x2f;2001&#x2f;XMLSchema-instance" \n      xmlns="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;2.0&#x2f;appinfo" \n      xsi:schemaLocation="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;2.0&#x2f;appinfo \n      https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;resource&#x2f;2.0&#x2f;appinfo.xsd" appinfo_version="1.1" \n      account_id="<account id>">\n   <application app_id="<app id>" app_name="<app name>" description="<app description>" \n      business_criticality="Very High" policy="Veracode Transitional Very High" \n      policy_updated_date="2019-08-13T14&#x3a;02&#x3a;08-04&#x3a;00" teams="Demo Team" origin="Not Specified" \n      industry_vertical="Other" app_type="Other" deployment_method="Not Specified" is_web_application="false" \n      archer_app_name="<archer app name>" modified_date="2019-08-13T13&#x3a;59&#x3a;38-04&#x3a;00" cots="false" \n      vast="false" business_unit="Not Specified" tags="">\n      <customfield name="Custom 1" value=""/>\n      <customfield name="Custom 2" value=""/>\n      <customfield name="Custom 3" value=""/>\n      <customfield name="Custom 4" value=""/>\n      <customfield name="Custom 5" value=""/>\n      <customfield name="Custom 6" value=""/>\n      <customfield name="Custom 7" value=""/>\n      <customfield name="Custom 8" value=""/>\n      <customfield name="Custom 9" value=""/>\n      <customfield name="Custom 10" value="jjones"/>\n   </application>\n</appinfo>\n')))}s.isMDXComponent=!0}}]);