"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[72185],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},_=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),_=l(r),m=a,d=_["".concat(u,".").concat(m)]||_[m]||p[m]||o;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=_;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}_.displayName="MDXCreateElement"},3912:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={title:"Configure Agent for Automatic Pull Requests",slug:"/r/t_configure_auto_pr"},i=void 0,s={unversionedId:"guides/sca/using_agent_based_scans/using_sca_agent/about_automatic_pull_requests/configure_agent_auto_pull_requests",id:"guides/sca/using_agent_based_scans/using_sca_agent/about_automatic_pull_requests/configure_agent_auto_pull_requests",title:"Configure Agent for Automatic Pull Requests",description:"You configure parameters of automatic pull requests in your Veracode Software Composition Analysis agent.",source:"@site/docs/guides/07_sca/04_using_agent_based_scans/09_using_sca_agent/06_about_automatic_pull_requests/06_configure_agent_auto_pull_requests.md",sourceDirName:"guides/07_sca/04_using_agent_based_scans/09_using_sca_agent/06_about_automatic_pull_requests",slug:"/r/t_configure_auto_pr",permalink:"/km-docusaurus-test/r/t_configure_auto_pr",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Configure Agent for Automatic Pull Requests",slug:"/r/t_configure_auto_pr"},sidebar:"tutorialSidebar",previous:{title:"Automatic Pull Request Language Support",permalink:"/km-docusaurus-test/r/Understanding_Automatic_Pull_Request_Support"},next:{title:"Video: Enable Update Advisor and Configure Agent for Automatic Pull Requests",permalink:"/km-docusaurus-test/r/c_sc_video_enable_the_update_advisor_and_configure_agent_for_automatic_pull_requests"}},u={},l=[],c={toc:l};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You configure parameters of automatic pull requests in your Veracode Software Composition Analysis agent."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Before you begin:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Enable pull requests for ",(0,a.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/t_configure_pr_github"},"GitHub")," or ",(0,a.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/t_configure_pr_gitlab"},"GitLab"),"."),(0,a.kt)("li",{parentName:"ul"},"Enable the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/t_update_advisor"},"update advisor"),"."),(0,a.kt)("li",{parentName:"ul"},"Work in a ",(0,a.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/Understanding_Automatic_Pull_Request_Support"},"supported project"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"To complete this task:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Set the relevant ",(0,a.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_sc_scan_directives"},"scan directives")," in your shell or automation script to configure the parameters that determine when to generate the pull requests. You can set the directives in two ways:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"As environment variables in your CI/CD settings, with ",(0,a.kt)("inlineCode",{parentName:"p"},"SRCCLR_"),"appended to the directive names. For example:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"export SRCCLR_PR_ON=methods\nexport SRCCLR_NO_BREAKING_UPDATES=true\nexport SRCCLR_IGNORE_CLOSED_PRS=false\nexport SRCCLR_SCM_URL=https://gitlab.acme.io\nEXTRA_ARGS='--update-advisor --pull-request'\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"As directives in the ",(0,a.kt)("inlineCode",{parentName:"p"},"srcclr.yml")," file of your agent-based scanning project. For example:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"pr_on: methods\nno_breaking_updates: true\nignore_closed_prs: false\n")))),(0,a.kt)("admonition",{parentName:"li",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If configured in both files, the environment variables override the ",(0,a.kt)("inlineCode",{parentName:"p"},"srcclr.yml")," directives.")))),(0,a.kt)("p",null,"After you complete the configuration, your Veracode SCA agent can generate pull requests when the scan results meet the specified parameters. You can review and approve the pull request in your GitHub or GitLab project."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Next steps:")),(0,a.kt)("p",null,"For a more effective integration with your CI pipeline, Veracode recommends you customize the automatic pull request behavior in your pipeline job, such as the following example in GitLab:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'sourceclear:\n  stage: security\n  variables:\n    SRCCLR_API_TOKEN: ${SRCCLR_API_TOKEN}\n  script:\n    - |\n      if [[ $CI_BUILD_REF_NAME = master ]]; then\n \n        # Set up ssh-agent\n        which ssh-agent || ( apt-get update -y && apt-get install openssh-client -y )\n        eval $(ssh-agent -s)\n        echo "$SSH_PRIVATE_KEY" | base64 --decode | ssh-add - > /dev/null\n        mkdir -p ~/.ssh\n        chmod 700 ~/.ssh\n        [[ -f /.dockerenv ]] && echo -e "Host *\\n\\tStrictHostKeyChecking no\\n\\n" > ~/.ssh/config\n        git config --global user.email "user@sourceclear.com"\n        git config --global user.name "user"\n \n        # We want the PR to target the master branch\n        git checkout -b master\n \n        # GitLab doesn\'t set a remote either\n        git remote set-url origin "git@git.ci.srcclr.io:$CI_PROJECT_PATH.git"\n\n        EXTRA_ARGS=\'--update-advisor --pull-request\'\n \n        export SRCCLR_SCM_TOKEN="$GITLAB_TOKEN"\n        export SRCCLR_SCM_TYPE=GITLAB\n        export SRCCLR_SCM_URL=\'https://git.mycompany.com\'\n      fi\n    - VERBOSE=true curl -sSL https://download.sourceclear.com/ci.sh | sh -s -- scan $EXTRA_ARGS\n')))}p.isMDXComponent=!0}}]);