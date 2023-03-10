"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[56623],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(g,o(o({ref:t},c),{},{components:r})):n.createElement(g,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},35696:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const i={title:"Configure SAML Self-Registration (Legacy)",slug:"/r/Configure_SAML_Self_Registration_Legacy"},o=void 0,s={unversionedId:"guides/admin/signing_on/using_saml_self_registration_legacy/configure_saml_self_registration_legacy",id:"guides/admin/signing_on/using_saml_self_registration_legacy/configure_saml_self_registration_legacy",title:"Configure SAML Self-Registration (Legacy)",description:"If you are using the new Single Sign-on and Just-In-Time Provisioning feature, see Configure JIT Provisioning.",source:"@site/docs/guides/14_admin/01_signing_on/05_using_saml_self_registration_legacy/01_configure_saml_self_registration_legacy.md",sourceDirName:"guides/14_admin/01_signing_on/05_using_saml_self_registration_legacy",slug:"/r/Configure_SAML_Self_Registration_Legacy",permalink:"/km-docusaurus-test/r/Configure_SAML_Self_Registration_Legacy",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Configure SAML Self-Registration (Legacy)",slug:"/r/Configure_SAML_Self_Registration_Legacy"},sidebar:"tutorialSidebar",previous:{title:"Using SAML for Self-Registration (Legacy)",permalink:"/km-docusaurus-test/r/about_saml_selfregister_Legacy"},next:{title:"Understanding API Roles",permalink:"/km-docusaurus-test/r/c_API_roles_details"}},l={},u=[],c={toc:u};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"  If you are using the new Single Sign-on and Just-In-Time Provisioning feature, see ",(0,a.kt)("a",{href:"https://docs.veracode.com/r/Configure_SAML_Self_Registration"},"Configure JIT Provisioning"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Before you begin:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/about_saml"},"Enable SAML authentication"),"."),(0,a.kt)("li",{parentName:"ul"},"Configure your identity provider to add the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/about_saml_selfregister"},"required attributes")," to your assertion."),(0,a.kt)("li",{parentName:"ul"},"Add any optional attributes to the assertion that your identity provider can include.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"To complete this task:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the Veracode Platform, click the gear icon ",(0,a.kt)("img",{src:r(80843).Z,width:"24",height:"16"})," in the top menu and select ",(0,a.kt)("strong",{parentName:"p"},"Admin"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click the ",(0,a.kt)("strong",{parentName:"p"},"SAML")," tab.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Ensure you have provided the settings for ",(0,a.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/about_saml"},"SAML single sign-on"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select ",(0,a.kt)("strong",{parentName:"p"},"Enable Self Registration"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Choose if self-registered users require activation with these options:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Activation Required: an administrator must approve the self-registered user before the user can log in. The user is notified when their registration is approved.")),(0,a.kt)("admonition",{parentName:"li",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Veracode plans to deprecate the ",(0,a.kt)("strong",{parentName:"p"},"Activation Required")," option and recommends that you do not use this option.")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"No Activation Required: when users self-register, they are directly logged in to the Veracode Platform."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Choose how the Veracode Platform handles conflicts between data in the SAML assertion and data in the Veracode Platform with these options:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Use SAML Assertion Data: the Veracode Platform is updated with whatever data is in the SAML assertion. This setting allows the identity provider to automatically update fields that may change, such as email address, phone number, or last name.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Prefer Veracode User Data: the Veracode Platform ignores any changes of data in the SAML assertion.")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Choose which default attributes to set on individual users. Veracode requires that you either specify the default Veracode user role in the SAML attributes or the SAML assertion data. If you do not require activation for all newly registered users, set a default user role, otherwise the user cannot log in."),(0,a.kt)("admonition",{parentName:"li",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Some attributes may not be populated if they are not available. Additional SAML attributes include the user roles, which specify which scan types the user is allowed to perform."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Save"),"."))))}p.isMDXComponent=!0},80843:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAQCAYAAAAMJL+VAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAHYYAAB2GAV2iE4EAAAAkdEVYdENvbW1lbnQATEVBRCBUZWNobm9sb2dpZXMgSW5jLiBWMS4wMX7Qgw0AAARkSURBVDhPNZTrTxRXGMb3j+r32sSvJv1Sk6Ym+qGXxLSx1mjT2qa11qS2aFMbbURRpFwEVBSWm9wRkHLxggiCXAVkdWHZnZ3bzszOr89Z2k1m58x7znne533eS8KK8oQxZNBPb08vxy6Qdi1W8rDuROSKOezAJRdGFCKQGVuHYx8KQUwUF7Hw8dwIHYci+HoEQ8KXwZYtE2khB3gZll8MU1bTxdfXujhcfZfbMykcbeX0oGOen0d3sbXOCjgIBahv+WK7GOC6Po4+PO0nwrBA3rcIgizbgbg5GSqbGtjf/4J09g0dg+18dX2UAYNe9MkLxIBF+o9CFzcKSsC2GIeBHu0RK9KijLIlzN/mVoq/Ozq58GCdht4+frjRw5XlrdLh1Pwsv1a38t3gBNXdI5QlJ+lbysuRjytA24uxQjkWkKsLrhtTLPgUiyG+vhOhl6a2tpb3k+N8ebOTfXVjdG56Ai+Kmbx7RbKbM5xr6GZ/1SBHL7VwPDnCuJIVB15JOiOXF/nKg2TR2lGIJo+27idWnw7y+fVp1kxIUtnoaRUsxmamOds7weXJNdYMFbE1YDib/H6vhVOjKTZliyWHo8xH/2dXMDuyu+7uZ+Jx+232VI4ytLRNLCpBmGei/y5fXGvig7uDfFjVyOmeZ8yZsog93m6ucKGqme+bnrBhqEsqr2BT8HfZGyIRrhyLrqkib+EpZ27Vc6hrHleG1VdTnLzaQ+uqYSAa6084U9PNqadbKlGHgbZmDpZ3UL1kSfc8mdhWNW1wf3yY82PPWTeBsMbjyQFOj6wqB6qG9HSSPfUzbKonhseSHKtbK1VGiRFbNHQMcDSZVvQ56hqTXByzSsxj6Zn3VV5xyPxYDx/92cDPQ4v0/jPMp5du881YikR25QknKzo40PZCSVITzY3y06V2Kl9nCBRRbmOSH8vvcXbatNdbBpNJDpV1cmPFwhGJwn9EjCyLzx5y7Fw575W1cGXqtag7JMZb69hb/Yi5jbzks/GVrMmhFo6UD7G/5gH7rjRzcXCVV9bObo7SKS7W1XGiY4qXJvdy4IfW7iSIXObml2icz/C2aNyqil4+7+OzykkW5c8VF5WxcpFhdmGZ+kfqj5k3vJYt8nd2O9lao6y2hfMjb0jFORzlvhCoknQmLEaCjEuNaPrArBNBkKH7VjvvXmvmSHUb79T207SwW26GnSm1rYUJjl9uYm/DAB9X3OPwnUUmNV/MdDHzyVFkBc0FBVQimFdt2PKSc2wSckohtaIObqHy8Sz3+/v5trGTP5bTRAJfmZ3it6t3+KXvGb3TU1R0tdCbCUq6B0qarR4wPCw1pKl/4yQsBKWhaCJOBJFk0UZ2x2FHBrLb1N+s5UDXHOnMGgO97Zyo6eOhnJmQdnTRgJu5Y4akmZgG1Bcb3/Uw/WoksiKNEC/ULJJ+5oApudLwkN/l2eeqnFY++aubgxVt3JlZwRKaHdq7suXzpSFXApEDjSM5d0t7rnBCN1saH04Y8i9xnmvhMXegKwAAAABJRU5ErkJggg=="}}]);