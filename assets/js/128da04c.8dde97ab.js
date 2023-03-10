"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[86874],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>p});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},l=Object.keys(e);for(i=0;i<l.length;i++)r=l[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)r=l[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var a=i.createContext({}),u=function(e){var t=i.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return i.createElement(a.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,a=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=u(r),p=n,h=g["".concat(a,".").concat(p)]||g[p]||d[p]||l;return r?i.createElement(h,o(o({ref:t},c),{},{components:r})):i.createElement(h,o({ref:t},c))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=g;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var u=2;u<l;u++)o[u]=r[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}g.displayName="MDXCreateElement"},34597:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var i=r(87462),n=(r(67294),r(3905));const l={title:"Filter Findings in Greenlight for Visual Studio Results",slug:"/r/t_filter_greenlight_vs"},o=void 0,s={unversionedId:"guides/ides/greenlight/greenlight_visual_studio/review_results_greenlight_visual_studio/greenlight_visual_studio_filter_results",id:"guides/ides/greenlight/greenlight_visual_studio/review_results_greenlight_visual_studio/greenlight_visual_studio_filter_results",title:"Filter Findings in Greenlight for Visual Studio Results",description:"You can filter results so that you can focus on the findings that are the most relevant and important.",source:"@site/docs/guides/05_ides/02_greenlight/06_greenlight_visual_studio/03_review_results_greenlight_visual_studio/01_greenlight_visual_studio_filter_results.md",sourceDirName:"guides/05_ides/02_greenlight/06_greenlight_visual_studio/03_review_results_greenlight_visual_studio",slug:"/r/t_filter_greenlight_vs",permalink:"/km-docusaurus-test/r/t_filter_greenlight_vs",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Filter Findings in Greenlight for Visual Studio Results",slug:"/r/t_filter_greenlight_vs"},sidebar:"tutorialSidebar",previous:{title:"Reviewing Findings in Veracode Greenlight for Visual Studio",permalink:"/km-docusaurus-test/r/c_vs_findings"},next:{title:"Ignore Findings in Greenlight for Visual Studio Results",permalink:"/km-docusaurus-test/r/t_ignoreflaws_greenlight_vs"}},a={},u=[],c={toc:u};function d(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,i.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"You can filter results so that you can focus on the findings that are the most relevant and important."),(0,n.kt)("p",null,"The filter action is local to you to be able to filter out findings in the Veracode Greenlight results based on severity or CWE type. You can clear a filter at any time, and all filters are cleared upon reboot or restart of the IDE."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Before you begin:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You meet the ",(0,n.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/Meet_Veracode_Greenlight_Prerequisites"},"Greenlight prerequisites"),"."),(0,n.kt)("li",{parentName:"ul"},"You have run a ",(0,n.kt)("a",{parentName:"li",href:"https://docs.veracode.com/r/t_scan_visualstudio"},"Greenlight scan in Visual Studio"),".")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"To complete this task:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On the ",(0,n.kt)("strong",{parentName:"p"},"Veracode Greenlight Findings")," tab, click a severity on which to filter the findings."),(0,n.kt)("p",{parentName:"li"},"The list of findings now only shows the findings of the selected severities.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click the filter icon ",(0,n.kt)("img",{src:r(82242).Z,width:"14",height:"13"})," in the header of the CWE ID, Location, Language, and Scan Level columns to select more detailed filters, such as a specific CWE ID."),(0,n.kt)("p",{parentName:"li"},"The list of findings is reduced to only those matching the selected filters."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Results:")),(0,n.kt)("p",null,"To remove the filters, click the severities at the top of the tab again. If you have filtered on any of the other columns, click the filter icon ",(0,n.kt)("img",{src:r(82242).Z,width:"14",height:"13"})," and click ",(0,n.kt)("strong",{parentName:"p"},"(Select All)")," in the dropdown menus of the other information types."))}d.isMDXComponent=!0},82242:(e,t,r)=>{r.d(t,{Z:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAANCAYAAACZ3F9/AAAACXBIWXMAABJ0AAASdAHeZh94AAAAB3RJTUUH4wIPDwoWe8CaXAAAAAd0RVh0QXV0aG9yAKmuzEgAAAAMdEVYdERlc2NyaXB0aW9uABMJISMAAAAKdEVYdENvcHlyaWdodACsD8w6AAAADnRFWHRDcmVhdGlvbiB0aW1lADX3DwkAAAAJdEVYdFNvZnR3YXJlAF1w/zoAAAALdEVYdERpc2NsYWltZXIAt8C0jwAAAAh0RVh0V2FybmluZwDAG+aHAAAAB3RFWHRTb3VyY2UA9f+D6wAAAAh0RVh0Q29tbWVudAD2zJa/AAAABnRFWHRUaXRsZQCo7tInAAAAoklEQVQokb2OsQ2DMBQFz1/YjQtKL+IVXHgQl54BsR/z/M5yighEQAGUIlc+vZPOqGrnBwZjDNM0sSzLIyHGyDzPiHOOWive+1vJe0+tFeccIiKEECil3IqlFEIIiAgCYK0lpUSM8TIxpYS1FuAtAlwl7xNXNvEqeZ94Er8lHxM3+oHWWlfVnnPuOeeuqr21drz14Zi15ozjeNo+fqflIf8XXwJNTzPxKglXAAAAAElFTkSuQmCC"}}]);