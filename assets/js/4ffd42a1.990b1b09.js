"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[40933],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),g=l(n),h=s,f=g["".concat(c,".").concat(h)]||g[h]||d[h]||r;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,i=new Array(r);i[0]=g;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},66328:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var a=n(87462),s=(n(67294),n(3905));const r={title:"Understanding Tags and Branches for SCA Agent-Based Scans",slug:"/r/c_sc_tags_branches"},i=void 0,o={unversionedId:"guides/sca/using_agent_based_scans/issue_management/understanding_tags_branches_sca_agent",id:"guides/sca/using_agent_based_scans/issue_management/understanding_tags_branches_sca_agent",title:"Understanding Tags and Branches for SCA Agent-Based Scans",description:"Veracode Software Composition Analysis (SCA) agent-based scanning is designed to be used with Git-based systems. Within these systems, there are commits, branches, and tags. This section describes how these three items affect issues in agent-based scanning and how you can manage them.",source:"@site/docs/guides/07_sca/04_using_agent_based_scans/19_issue_management/08_understanding_tags_branches_sca_agent.md",sourceDirName:"guides/07_sca/04_using_agent_based_scans/19_issue_management",slug:"/r/c_sc_tags_branches",permalink:"/km-docusaurus-test/r/c_sc_tags_branches",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Understanding Tags and Branches for SCA Agent-Based Scans",slug:"/r/c_sc_tags_branches"},sidebar:"tutorialSidebar",previous:{title:"Understanding SCA License Risk",permalink:"/km-docusaurus-test/r/c_integrated_license_agent"},next:{title:"Export Agent-Based Scan Results",permalink:"/km-docusaurus-test/r/t_sca_export_results"}},c={},l=[{value:"How a Branch or Tag Affects Issues",id:"how-a-branch-or-tag-affects-issues",level:3},{value:"Viewing a Specific Branch or Tag",id:"viewing-a-specific-branch-or-tag",level:3},{value:"How Agent-Based Scanning Identifies the Branch or Tag",id:"how-agent-based-scanning-identifies-the-branch-or-tag",level:3},{value:"Selecting a Default Branch",id:"selecting-a-default-branch",level:3}],u={toc:l};function d(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Veracode Software Composition Analysis (SCA) agent-based scanning is designed to be used with Git-based systems. Within these systems, there are commits, branches, and tags. This section describes how these three items affect issues in agent-based scanning and how you can manage them."),(0,s.kt)("h3",{id:"how-a-branch-or-tag-affects-issues"},"How a Branch or Tag Affects Issues"),(0,s.kt)("p",null,"Veracode SCA has a unique list of issues for each branch or tag scanned, which means that if you have scanned multiple branches, you may see the same issue multiple times in the issues list. This feature allows you to see the state of a specific branch or tag rather than having only one set of results for everything."),(0,s.kt)("h3",{id:"viewing-a-specific-branch-or-tag"},"Viewing a Specific Branch or Tag"),(0,s.kt)("p",null,"When viewing a project in the Veracode Platform, you can choose to see issues from a single branch or tag. To do this, click ",(0,s.kt)("strong",{parentName:"p"},"Change")," next to the selected branch. In the Switch Branch or Tag window, you can see which branches you have scanned."),(0,s.kt)("h3",{id:"how-agent-based-scanning-identifies-the-branch-or-tag"},"How Agent-Based Scanning Identifies the Branch or Tag"),(0,s.kt)("p",null,"Veracode SCA agent-based scanning chooses a tag, branch, or commit hash when importing results to the Veracode Platform. It uses the ",(0,s.kt)("inlineCode",{parentName:"p"},"git describe --all")," command to determine the state of the scanned repository. The order of selection is:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Tag"),(0,s.kt)("li",{parentName:"ol"},"Branch"),(0,s.kt)("li",{parentName:"ol"},"Previous tag"),(0,s.kt)("li",{parentName:"ol"},"Previous branch"),(0,s.kt)("li",{parentName:"ol"},"Commit hash")),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"}," If you scan a tag on a branch, Veracode SCA considers it a tag.")),(0,s.kt)("h3",{id:"selecting-a-default-branch"},"Selecting a Default Branch"),(0,s.kt)("p",null,"See ",(0,s.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/t_sca_set_default_branch"},"Change Default Branch for SCA Agent-Based Scans"),"."))}d.isMDXComponent=!0}}]);