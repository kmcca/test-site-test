"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[84514],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=l(a),h=i,m=p["".concat(c,".").concat(h)]||p[h]||u[h]||s;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=a.length,o=new Array(s);o[0]=p;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var l=2;l<s;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},77966:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var n=a(87462),i=(a(67294),a(3905));const s={title:"Best Practices for a Dynamic Analysis of Web Applications",slug:"/r/Best_Practices_for_a_Dynamic_Analysis_of_Web_Applications"},o=void 0,r={unversionedId:"guides/dynamic_analysis/da_scan_web/da_web_apps_best_practices",id:"guides/dynamic_analysis/da_scan_web/da_web_apps_best_practices",title:"Best Practices for a Dynamic Analysis of Web Applications",description:"This section provides best practices that Veracode recommends you follow to configure and use Veracode Dynamic Analysis to test the security of your web applications.",source:"@site/docs/guides/10_dynamic_analysis/01_da_scan_web/01_da_web_apps_best_practices.md",sourceDirName:"guides/10_dynamic_analysis/01_da_scan_web",slug:"/r/Best_Practices_for_a_Dynamic_Analysis_of_Web_Applications",permalink:"/km-docusaurus-test/r/Best_Practices_for_a_Dynamic_Analysis_of_Web_Applications",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Best Practices for a Dynamic Analysis of Web Applications",slug:"/r/Best_Practices_for_a_Dynamic_Analysis_of_Web_Applications"},sidebar:"tutorialSidebar",previous:{title:"Scan Web Applications",permalink:"/km-docusaurus-test/guides/dynamic_analysis/da_scan_web/Scan_Web_Applications"},next:{title:"Create a Web Application Scan",permalink:"/km-docusaurus-test/r/t_create_was"}},c={},l=[{value:"Authenticated Analysis Considerations",id:"authenticated-analysis-considerations",level:2},{value:"User Credentials for Scans",id:"user-credentials-for-scans",level:3},{value:"Use a Credentials Variable and Login Script",id:"use-a-credentials-variable-and-login-script",level:3},{value:"Disable Password Lockout",id:"disable-password-lockout",level:3},{value:"Suppress Password Resets",id:"suppress-password-resets",level:3},{value:"Disable Multi-Factor Authentication",id:"disable-multi-factor-authentication",level:3},{value:"Reduce Network Latency",id:"reduce-network-latency",level:2},{value:"Optimize Dynamic Analysis Scans",id:"optimize-dynamic-analysis-scans",level:2},{value:"Run an Initial Analysis to Assess Your Site",id:"run-an-initial-analysis-to-assess-your-site",level:3},{value:"Minimize Duplicate Content",id:"minimize-duplicate-content",level:3},{value:"Exclude URLs That Point to Similar Content",id:"exclude-urls-that-point-to-similar-content",level:3},{value:"Exclude Links to Tracking Sites and Ad Servers",id:"exclude-links-to-tracking-sites-and-ad-servers",level:3},{value:"Exclude Links to Disruptive Areas of the Web Application",id:"exclude-links-to-disruptive-areas-of-the-web-application",level:3},{value:"Expand the Scope of the Scan",id:"expand-the-scope-of-the-scan",level:2},{value:"Include Subdomains",id:"include-subdomains",level:3},{value:"Include Directories and Subdirectories",id:"include-directories-and-subdirectories",level:3}],d={toc:l};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This section provides best practices that Veracode recommends you follow to configure and use ",(0,i.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_was_intro"},"Veracode Dynamic Analysis")," to test the security of your web applications."),(0,i.kt)("h2",{id:"authenticated-analysis-considerations"},"Authenticated Analysis Considerations"),(0,i.kt)("p",null,"Access to a web application typically requires one or more authentication methods. Veracode Dynamic Analysis supports several authentication methods for an authenticated analysis. To avoid scan failures or scan results with little or no coverage when scanning authenticated sites, Veracode recommends the following best practices."),(0,i.kt)("h3",{id:"user-credentials-for-scans"},"User Credentials for Scans"),(0,i.kt)("p",null,"Veracode recommends that you configure test credentials that you use specifically for security testing. Do not use personal, real user credentials because the crawler uses them to sign in and test the target site."),(0,i.kt)("h3",{id:"use-a-credentials-variable-and-login-script"},"Use a Credentials Variable and Login Script"),(0,i.kt)("p",null,"To protect and update the user credentials without needing to periodically modify the configuration of your dynamic analysis, consider using ",(0,i.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Create_a_Credentials_Variable_for_Dynamic_Analysis_Login_Scripts_with_the_REST_API"},"a credentials variable and a login script with the REST API"),"."),(0,i.kt)("h3",{id:"disable-password-lockout"},"Disable Password Lockout"),(0,i.kt)("p",null,"The scanner uses various sign-in methods and authentication combinations to access your site, so you do not want a lockout to occur during scanning. If you have a site that disables a user password after a certain number of failed sign-in attempts, Veracode recommends that you disable this lockout option if possible."),(0,i.kt)("h3",{id:"suppress-password-resets"},"Suppress Password Resets"),(0,i.kt)("p",null,"For a web application, pages that support personalized logins often display a reset password link or input. To prevent the scanner from resetting the password during an analysis, Veracode recommends that you prevent the scan from interacting with this feature. If you know the URL for the password reset feature, you can ",(0,i.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_was_conf_url3?tocId=4hGmxf2ePdRCkmto2qQdXw"},"add the URL to a blocklist")," to prevent the scanner from accessing the related link."),(0,i.kt)("h3",{id:"disable-multi-factor-authentication"},"Disable Multi-Factor Authentication"),(0,i.kt)("p",null,"Veracode designed Dynamic Analysis to run with little to no user interaction. If your site uses a multi-factor authentication (MFA) token, it does not notify you when you need to enter that token during scanning. If your organization allows it, Veracode recommends that you disable MFA for the specific test user account that the scanner uses to access the site. With MFA disabled, the scanner can sign in and sign out of the site multiple times without encountering a lockout."),(0,i.kt)("h2",{id:"reduce-network-latency"},"Reduce Network Latency"),(0,i.kt)("p",null,"The responsiveness of the target web application can increase the duration of the Dynamic Analysis scan. To reduce network latency during scanning, consider the following configurations when planning a Dynamic Analysis."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/Scheduling_Dynamic_Analysis_Scans"},"Schedule the scan")," to run during low load-times so that the site can respond quicker to the many requests from the Dynamic Analysis. Compared to a human user that might interact once with one component of the web application, a Dynamic Analysis sends multiple requests to the same component as it performs tests."),(0,i.kt)("li",{parentName:"ul"},"If you are using ",(0,i.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/Internal_Scanning_Management"},"Veracode Internal Scanning Management")," (ISM), install the ISM endpoint close to the target web application to minimize the number of hops between the Dynamic Analysis requests and the application. For example, install the endpoint in the same datacenter or network segment as the target application.")),(0,i.kt)("h2",{id:"optimize-dynamic-analysis-scans"},"Optimize Dynamic Analysis Scans"),(0,i.kt)("p",null,"Dynamic Analysis assumes that your target web applications use the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_supp_DA"},"supported technologies")," and are operating under normal network conditions. However, there are factors that may impact scan speed, overall performance of the Dynamic Analysis, and the results. The following best practices explain how to use the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Understanding_the_DA_Coverage_Report"},"Coverage Report")," from a Dynamic Analysis to identify potential performance issues, resolve them, and get the results you want."),(0,i.kt)("h3",{id:"run-an-initial-analysis-to-assess-your-site"},"Run an Initial Analysis to Assess Your Site"),(0,i.kt)("p",null,"Veracode recommends that you run the first analysis of a new web application without setting any limitations that might influence the scan coverage and affect the results. You can use the first scan as a ",(0,i.kt)("em",{parentName:"p"},"reconnaissance analysis"),", where it can freely explore your web application and populate the Coverage Report with as much detail as possible."),(0,i.kt)("p",null,"After completing the initial analysis, you can ",(0,i.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/t_view_DA_linksreport"},"review the Coverage Report")," for the web application. The report provides detailed analytics and patterns of behavior that you can use to optimize the scan configuration."),(0,i.kt)("p",null,"Third-party traffic to your site does not impact the scan time. If you notice scan latency or longer scan times, contact ",(0,i.kt)("a",{parentName:"p",href:"https://www.veracode.com/resources/customers/technical-support"},"Veracode Technical Support"),"."),(0,i.kt)("p",null,"For additional information on reducing scan times for web applications, see ",(0,i.kt)("a",{parentName:"p",href:"https://community.veracode.com/s/article/Reducing-scan-times-on-web-applications-that-are-large-workflow-intensive-JavaScript-heavy"},"this Community topic"),". "),(0,i.kt)("h3",{id:"minimize-duplicate-content"},"Minimize Duplicate Content"),(0,i.kt)("p",null,"Veracode Dynamic Analysis includes a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_was_conf_url3?tocId=qmi2EopDEdVkytBLp01QcA"},"Similarity Threshold")," option that automatically performs redundancy checks to identify similar, or redundant, content across all pages of a web application. However, some web applications might also create content in certain ways, such as generating content based on user interaction, but only a human can determine whether the same code functionality generated that content. "),(0,i.kt)("p",null,"You can ",(0,i.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/t_view_DA_linksreport"},"review the Coverage Report")," to determine if your web application contains similar content that you can exclude from scanning. You can also adjust the Similarity Threshold to control the level of these redundancy checks. "),(0,i.kt)("h3",{id:"exclude-urls-that-point-to-similar-content"},"Exclude URLs That Point to Similar Content"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/t_view_DA_linksreport"},"Coverage Report")," provides a list of all scanned URLs. If these URLs point to web applications with similar content, you can use the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_was_conf_url3?tocId=4hGmxf2ePdRCkmto2qQdXw"},"URL-Specific Allowlist and Blocklist")," option to exclude these URLs from scans. Excluding similar content can improve the scan results and reduce scan time."),(0,i.kt)("h3",{id:"exclude-links-to-tracking-sites-and-ad-servers"},"Exclude Links to Tracking Sites and Ad Servers"),(0,i.kt)("p",null,"You might have web applications that link to external ad servers or trackers that track user behavior. Teams, such as Marketing, within your organization use the analytics and other useful information from these trackers to learn about your users. A Dynamic Analysis scan does not crawl these links, but it loads them to ensure the web application has all required third-party resources for the analysis. If the application contains several links, the load time might increase the scan time. These links also appear in the Coverage Report, under Ignored URLs. To exclude these links from your Coverage Report and, depending on the number of links, reduce the scan time, add them to your blocklist."),(0,i.kt)("p",null,"You can ",(0,i.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/t_view_DA_linksreport"},"review the Coverage Report")," to identify links to trackers and use the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_was_conf_url3?tocId=4hGmxf2ePdRCkmto2qQdXw"},"URL-Specific Allowlist and Blocklist")," option to exclude these links from scans."),(0,i.kt)("h3",{id:"exclude-links-to-disruptive-areas-of-the-web-application"},"Exclude Links to Disruptive Areas of the Web Application"),(0,i.kt)("p",null,"A web application might expose links that provide access to areas of the application for deleting application data, or deleting or resetting user accounts. These links are typically accessible to users with high-level permissions, can disrupt scans, and can affect the results. "),(0,i.kt)("p",null,"To ensure the test user account for Dynamic Analysis scans cannot access these areas of the application, either disable the appropriate permission on the account or use the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_was_conf_url3?tocId=4hGmxf2ePdRCkmto2qQdXw"},"URL-Specific Allowlist and Blocklist")," option to block access."),(0,i.kt)("h2",{id:"expand-the-scope-of-the-scan"},"Expand the Scope of the Scan"),(0,i.kt)("p",null,"If the scope of your ",(0,i.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_was_conf_url3?tocId=5FtoIUf7HtAmIixVuT4V4g"},"scan configuration")," is too narrow, it can miss areas of the web application that contain vulnerabilities."),(0,i.kt)("h3",{id:"include-subdomains"},"Include Subdomains"),(0,i.kt)("p",null,"If your web application has subdomains that require security testing, ensure you add the URLs for these subdomains to the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_was_conf_url3?tocId=4hGmxf2ePdRCkmto2qQdXw"},"allowlist"),". During scanning, the crawler can use the URLs to transition from one subdomain to the next without running into access issues. When you include all required subdomains in the same scan, you can generate a single report for the entire web application."),(0,i.kt)("h3",{id:"include-directories-and-subdirectories"},"Include Directories and Subdirectories"),(0,i.kt)("p",null,"If the content of a web application is organized by directories on the same root domain, configure the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_was_conf_url3?tocId=~cymi~HDPDgrp8_kNVBBmw"},"Directory Restrictions")," options to specify the directories and subdirectories you want to scan."))}u.isMDXComponent=!0}}]);