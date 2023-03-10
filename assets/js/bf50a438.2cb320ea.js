"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[58623],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(a),h=n,m=u["".concat(c,".").concat(h)]||u[h]||p[h]||o;return a?r.createElement(m,i(i({ref:t},d),{},{components:a})):r.createElement(m,i({ref:t},d))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},23057:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=a(87462),n=(a(67294),a(3905));const o={author:["Tim Jarrett"],"ft:originID":"api_best_practices",title:"Veracode API Best Practices",slug:"/r/About_Veracode_API_Best_Practices",media_dir:"images/"},i=void 0,s={unversionedId:"guides/apis/api_best_practices",id:"guides/apis/api_best_practices",title:"Veracode API Best Practices",description:"The Veracode APIs allow you to perform and automate security testing tasks you perform in the Veracode Platform and with Veracode integrations. The best practices in this section help you avoid performance issues for your automations.",source:"@site/docs/guides/15_apis/02_api_best_practices.md",sourceDirName:"guides/15_apis",slug:"/r/About_Veracode_API_Best_Practices",permalink:"/km-docusaurus-test/r/About_Veracode_API_Best_Practices",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{author:["Tim Jarrett"],"ft:originID":"api_best_practices",title:"Veracode API Best Practices",slug:"/r/About_Veracode_API_Best_Practices",media_dir:"images/"},sidebar:"tutorialSidebar",previous:{title:"Veracode API Rate Limiting",permalink:"/km-docusaurus-test/r/About_API_Rate_Limiting"},next:{title:"Enabling HMAC for Veracode APIs",permalink:"/km-docusaurus-test/r/c_enabling_hmac"}},c={},l=[{value:"Using an API Service Account for Automations",id:"using-an-api-service-account-for-automations",level:2},{value:"Ensuring API Requests Succeed Before Adding Them to a Production Pipeline",id:"ensuring-api-requests-succeed-before-adding-them-to-a-production-pipeline",level:2},{value:"Safely Storing and Managing Your Veracode Credentials",id:"safely-storing-and-managing-your-veracode-credentials",level:2},{value:"Ensuring Veracode Credentials Are Valid",id:"ensuring-veracode-credentials-are-valid",level:2},{value:"Example Code for Printing Credentials Expiration Warning",id:"example-code-for-printing-credentials-expiration-warning",level:3},{value:"Checking the Status of Veracode Services",id:"checking-the-status-of-veracode-services",level:2},{value:"Allowing Sufficient Time Between Polling Calls",id:"allowing-sufficient-time-between-polling-calls",level:2},{value:"Retrying Failed Actions to Resolve Transient Network Issues",id:"retrying-failed-actions-to-resolve-transient-network-issues",level:2},{value:"Using the Veracode API Wrappers for Static Uploads",id:"using-the-veracode-api-wrappers-for-static-uploads",level:2},{value:"Fetching Application Events for Reports",id:"fetching-application-events-for-reports",level:2}],d={toc:l};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_gettingstarted"},"Veracode APIs")," allow you to perform and automate security testing tasks you perform in the Veracode Platform and with ",(0,n.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_veracode_integrations"},"Veracode integrations"),". The best practices in this section help you avoid performance issues for your automations."),(0,n.kt)("h2",{id:"using-an-api-service-account-for-automations"},"Using an API Service Account for Automations"),(0,n.kt)("p",null,"Veracode strongly recommends that you use an ",(0,n.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_about_veracode_accounts"},"API service account"),", which is also called an API user, when configuring automations, such as scripts in ",(0,n.kt)("inlineCode",{parentName:"p"},"cron"),"."),(0,n.kt)("p",null,"For example, if you use a user account and the user assigned to that account leaves your organization, after your Veracode administrator deactivates the account, the user credentials are no longer valid and your automation can no longer authenticate with Veracode. Running automations using an API service account avoids this scenario and also allows a team to get notifications from the Veracode Platform if these events occur. You can create an API service account in the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/admin_api"},"Veracode Platform")," or with the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_identity_create_api"},"Identity API"),"."),(0,n.kt)("h2",{id:"ensuring-api-requests-succeed-before-adding-them-to-a-production-pipeline"},"Ensuring API Requests Succeed Before Adding Them to a Production Pipeline"),(0,n.kt)("p",null,"Before adding Veracode APIs to your production pipelines or other build jobs, send a few API requests from a test pipeline to ensure the requests succeed. If the requests fail, ensure your pipeline successfully fails the build."),(0,n.kt)("p",null,"For example, if your pipeline sends a request to start a Static Analysis and the request fails, your team might not see the error and the same request continues to fail during subsequent pipeline runs. If the same job also creates a sandbox with every scan, you could be creating a large number of sandboxes with incomplete scans."),(0,n.kt)("p",null,"By default, the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_about_wrappers"},"Veracode Java API Wrapper")," automatically fails a pipeline if a Veracode scan errors. If you write your own scan logic with the Veracode APIs, or if your pipeline automation sends a different API call, you must check for errors and configure your script to return an error code of any value other than ",(0,n.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,n.kt)("h2",{id:"safely-storing-and-managing-your-veracode-credentials"},"Safely Storing and Managing Your Veracode Credentials"),(0,n.kt)("p",null,"Never store your ",(0,n.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_api_credentials3"},"Veracode API credentials")," in public locations, such as GitHub repositories, in a shell script, or other code, for example. Exposing your credentials to the public invites anyone to access data about the flaws in your software."),(0,n.kt)("p",null,"After configuring Veracode API credentials, Veracode strongly recommends you use one or more of these options to protect them:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Pipeline secrets. See the documentation for your pipeline vendor."),(0,n.kt)("li",{parentName:"ul"},"Pipeline environment variables. See the documentation for your pipeline vendor."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/c_configure_api_cred_file"},"Veracode API credentials file")," that you store separately from your code and appropriately secure on your host computer.")),(0,n.kt)("p",null,"If your credentials become compromised, you can use the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_identity_revoke_creds"},"Identity API")," to quickly revoke them."),(0,n.kt)("h2",{id:"ensuring-veracode-credentials-are-valid"},"Ensuring Veracode Credentials Are Valid"),(0,n.kt)("p",null,"You must not let your ",(0,n.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_api_credentials3"},"Veracode API credentials")," expire. By default, API credentials expire 1 year (365 days) after you generate or renew them. If you do not renew credentials before they expire, any automations that use them will fail."),(0,n.kt)("p",null,"You can generate API credentials in the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/t_create_api_creds"},"Veracode Platform")," or with the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_identity_gen_creds"},"Identity API"),"."),(0,n.kt)("p",null,"After generating your API credentials:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Make a note of the expiration date and set a reminder to renew the credentials."),(0,n.kt)("li",{parentName:"ul"},"Check the expiration date in your automation scripts and print a warning to notify your team when the credentials are scheduled to expire."),(0,n.kt)("li",{parentName:"ul"},"Monitor your email inbox for reminder emails from Veracode. Veracode sends these emails seven days and one day before the credentials expire.")),(0,n.kt)("h3",{id:"example-code-for-printing-credentials-expiration-warning"},"Example Code for Printing Credentials Expiration Warning"),(0,n.kt)("p",null,"This Python code example checks for the expiration date for your API credentials and prints a warning to the console if the credentials are close to expiring:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"def creds_expire_days_warning():\n    # the get_creds() method calls \n    # https://api.veracode.com/api/authn/v2/api_credentials\n    creds = api.VeracodeAPI().get_creds()\n    exp = datetime.datetime.strptime(creds['expiration_ts'], \"%Y-%m-%dT%H:%M:%S.%f%z\")\n    delta = exp - datetime.datetime.now().astimezone() #we get a datetime with timezone...\n    if (delta.days < 7):\n        print('These API credentials expire ', creds['expiration_ts'])\n")),(0,n.kt)("h2",{id:"checking-the-status-of-veracode-services"},"Checking the Status of Veracode Services"),(0,n.kt)("p",null,"If you need to check the status of various Veracode services, such as the current state of the Veracode Platform or an in-progress scan, Veracode recommends that you use the Veracode Status page or lightweight API calls. Ensure you design these API calls to perform a status check rather than repeatedly calling API endpoints that return more information than you might need. For example:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"To check when scan results are ready, rather than using ",(0,n.kt)("inlineCode",{parentName:"li"},"detailedreport.do"),", call ",(0,n.kt)("inlineCode",{parentName:"li"},"getbuildinfo.do"),"."),(0,n.kt)("li",{parentName:"ul"},"To check for a detailed report of all scan results related to the specified build, only call ",(0,n.kt)("inlineCode",{parentName:"li"},"detailedreport.do"),"."),(0,n.kt)("li",{parentName:"ul"},"To check the status of the Veracode Platform, use the ",(0,n.kt)("a",{parentName:"li",href:"https://status.veracode.com/"},"Veracode Status page")," or the lightweight ",(0,n.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/c_healthcheck_intro"},"Healthcheck API"),".")),(0,n.kt)("h2",{id:"allowing-sufficient-time-between-polling-calls"},"Allowing Sufficient Time Between Polling Calls"),(0,n.kt)("p",null,"You might need to make one API call to initiate a long-running action, then make a second call to check whether that action has completed. For example:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Submitting a static scan, then checking scan status"),(0,n.kt)("li",{parentName:"ul"},"Requesting a flaw report, then attempting to download it")),(0,n.kt)("p",null,"If your automation checks for updates on these actions every ten seconds, for example, this excessive polling can degrade performance for your account and Veracode might begin to ",(0,n.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/About_API_Rate_Limiting"},"throttle your API calls"),"."),(0,n.kt)("p",null,"Veracode recommends that you wait at least two minutes between API calls that check for the status of a scan or report. For static scans, consider using ",(0,n.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Pipeline_Scan"},"Pipeline Scan"),", which typically executes faster than an equivalent static policy scan or sandbox scan."),(0,n.kt)("h2",{id:"retrying-failed-actions-to-resolve-transient-network-issues"},"Retrying Failed Actions to Resolve Transient Network Issues"),(0,n.kt)("p",null,"When using Veracode APIs in your pipeline, if network problems or other issues cause your pipeline to fail, your application build could be in a bad state. These issues might be unrelated to a network communication failure, particularly when checking for status, between Veracode APIs and Veracode services."),(0,n.kt)("p",null,"To ensure your API integration is more resilient to transient network failures, Veracode recommends that you retry the failed actions no more than five times."),(0,n.kt)("h2",{id:"using-the-veracode-api-wrappers-for-static-uploads"},"Using the Veracode API Wrappers for Static Uploads"),(0,n.kt)("p",null,"Veracode integrations are built on the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_about_wrappers"},"Veracode API Wrappers"),". These wrappers simplify accessing and using the XML APIs from the command line or functions. You can use them for common workflows, such as uploading application code to a new or existing application profile. For static upload scenarios, the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/r_uploadandscan"},(0,n.kt)("inlineCode",{parentName:"a"},"uploadandscan"))," action can replace three or more separate API calls for creating an application profile, creating a sandbox, uploading files and starting a prescan and scan. The ",(0,n.kt)("inlineCode",{parentName:"p"},"uploadandscan")," action also includes guidance mentioned in this section, such as automatic retries on network errors and waiting between status calls."),(0,n.kt)("h2",{id:"fetching-application-events-for-reports"},"Fetching Application Events for Reports"),(0,n.kt)("p",null,"You might need to import Veracode data, such as events for the applications you are scanning, to an external vulnerability management system, dashboard, or business intelligence (BI) tool. If you have custom integrations that routinely fetch data for several, or all, of your  applications, these requests can degrade the performance of your Veracode account."),(0,n.kt)("p",null,"To simplify the process of identifying which applications have changed since you last retrieved data, you can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"last_policy_compliance_check_date")," property of the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Listing_Applications_by_Last_Policy_Evaluation_Date_with_the_Applications_API"},"Applications API"),"."),(0,n.kt)("p",null,"Each time Veracode evaluates the policy for an application, it updates the value for this property based on these events:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Publishing a new policy scan"),(0,n.kt)("li",{parentName:"ul"},"Approving a mitigation"),(0,n.kt)("li",{parentName:"ul"},"Assigning a different policy to the application")),(0,n.kt)("p",null,"To get only the applications that have had a policy check since the last time you retrieved data, you can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"policy_compliance_checked_after")," query filter with the Applications API. This allows you to process only changed applications, which significantly decreases total processing time and reduces the number of required API calls."))}p.isMDXComponent=!0}}]);