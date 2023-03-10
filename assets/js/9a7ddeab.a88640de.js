"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[39475],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,g=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(g,i(i({ref:t},s),{},{components:n})):a.createElement(g,i({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},55590:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={title:"Use the Legacy Method to Package iOS and tvOS Apps",slug:"/r/Use_the_Legacy_Method_to_Package_iOS_and_tvOS_Apps"},i=void 0,p={unversionedId:"guides/packaging/ios_tvos/use_legacy_method",id:"guides/packaging/ios_tvos/use_legacy_method",title:"Use the Legacy Method to Package iOS and tvOS Apps",description:"If you cannot package with the gen-ir method Veracode recommends, you can package with the legacy method.",source:"@site/docs/guides/03_packaging/14_ios_tvos/03_use_legacy_method.md",sourceDirName:"guides/03_packaging/14_ios_tvos",slug:"/r/Use_the_Legacy_Method_to_Package_iOS_and_tvOS_Apps",permalink:"/km-docusaurus-test/r/Use_the_Legacy_Method_to_Package_iOS_and_tvOS_Apps",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Use the Legacy Method to Package iOS and tvOS Apps",slug:"/r/Use_the_Legacy_Method_to_Package_iOS_and_tvOS_Apps"},sidebar:"tutorialSidebar",previous:{title:"Generate IR to Package iOS and tvOS Apps",permalink:"/km-docusaurus-test/r/Generate_IR_to_Package_iOS_and_tvOS_Apps"},next:{title:"Resolving Missing Bitcode in iOS Applications",permalink:"/km-docusaurus-test/r/Resolving_Missing_Bitcode_in_iOS_Applications"}},l={},c=[],s={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"If you cannot package with the ",(0,r.kt)("inlineCode",{parentName:"p"},"gen-ir")," method Veracode recommends, you can package with the legacy method."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"To complete this task:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In Xcode, go to the PROJECT section on the left and select your project.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click the Project navigator folder icon from the top left menu in Xcode.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the Project navigator, select your project, and then select its target to the right.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From the top menu bar, select ",(0,r.kt)("strong",{parentName:"p"},"Build Settings")," > ",(0,r.kt)("strong",{parentName:"p"},"All")," > ",(0,r.kt)("strong",{parentName:"p"},"Build Options")," > ",(0,r.kt)("strong",{parentName:"p"},"Debug Information Format"),", and then set the value to ",(0,r.kt)("strong",{parentName:"p"},"DWARF with dSYM"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Build Settings")," > ",(0,r.kt)("strong",{parentName:"p"},"Build Options")," > ",(0,r.kt)("strong",{parentName:"p"},"Enable Bitcode"),", and then set the value to ",(0,r.kt)("inlineCode",{parentName:"p"},"Yes"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From the top menu bar in MacOS, select ",(0,r.kt)("strong",{parentName:"p"},"Product")," > ",(0,r.kt)("strong",{parentName:"p"},"Scheme")," > ",(0,r.kt)("strong",{parentName:"p"},"Edit Scheme...")," > ",(0,r.kt)("strong",{parentName:"p"},"Archive")," > ",(0,r.kt)("strong",{parentName:"p"},"Build Configuration"),", and then select ",(0,r.kt)("strong",{parentName:"p"},"Debug"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From the top of Xcode, select your device in the breadcrumb menu, and then choose ",(0,r.kt)("strong",{parentName:"p"},"Any iOS Device"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Product")," > ",(0,r.kt)("strong",{parentName:"p"},"Archive")," to build your archive. After the build has completed, the archive is highlighted in Xcode Organizer.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Right-click your archive, and then click ",(0,r.kt)("strong",{parentName:"p"},"Show in Finder"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open your terminal, and then change directory to your project.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the following command to create an archive:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"xcodebuild archive \\\n  -project MyApp.xcodeproj \\\n  -scheme MyApp \\\n  -destination generic/platform=iOS \\ DEBUG_INFORMATION_FORMAT=dwarf-with-dsym \\ ENABLE_BITCODE=YES\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you are using the Cocoapods dependency manager, add the following snippet to the end of your ",(0,r.kt)("inlineCode",{parentName:"p"},"podfile")," to automatically enable Bitcode for your project dependencies:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"post_install do |installer|   \ninstaller.pods_project.targets.each do |target|       \ntarget.build_configurations.each do |config|         \nconfig.build_settings['ENABLE_BITCODE'] = 'YES'    \nend  \nend\nend\n")),(0,r.kt)("p",{parentName:"li"},"Then, run ",(0,r.kt)("inlineCode",{parentName:"p"},"cd {project_home_dir} && pod install")," in terminal.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/Requesting_a_Static_Scan"},"Upload your iOS application")," to the Veracode Platform for analysis.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Optionally, to upload your archives with Veracode Software Composition Analysis, add the ",(0,r.kt)("inlineCode",{parentName:"p"},"Podfile.lock")," file to the root of another zipped archive. Keep this new zipped archive separate from the one that contains the ",(0,r.kt)("inlineCode",{parentName:"p"},".xcarchive")," folder, as shown in the following command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"zip MyApp-Podfile.zip Podfile.lock\n")),(0,r.kt)("p",{parentName:"li"},"  Upload ",(0,r.kt)("inlineCode",{parentName:"p"},"MyApp-Podfile.zip")," to the same scan as the ",(0,r.kt)("inlineCode",{parentName:"p"},"MyApp.zip")," that you previously uploaded."))))}d.isMDXComponent=!0}}]);