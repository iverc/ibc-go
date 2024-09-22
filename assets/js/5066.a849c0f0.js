(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5066],{91262:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>s});n(67294);var o=n(72389),r=n(85893);function s(e){let{children:t,fallback:n}=e;return(0,o.Z)()?(0,r.jsx)(r.Fragment,{children:t?.()}):n??null}},9286:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>z});var o=n(67294),r=n(72389),s=n(90512),c=n(92949),a=n(86668);function i(){const{prism:e}=(0,a.L)(),{colorMode:t}=(0,c.I)(),n=e.theme,o=e.darkTheme||n;return"dark"===t?o:n}var l=n(35281),u=n(87594),d=n.n(u);const m=/title=(?<quote>["'])(?<title>.*?)\1/,p=/\{(?<range>[\d,-]+)\}/,f={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},h={...f,lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},b=Object.keys(f);function g(e,t){const n=e.map((e=>{const{start:n,end:o}=h[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${o})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function k(e,t){let n=e.replace(/\n$/,"");const{language:o,magicComments:r,metastring:s}=t;if(s&&p.test(s)){const e=s.match(p).groups.range;if(0===r.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${s}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=r[0].className,o=d()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(o),code:n}}if(void 0===o)return{lineClassNames:{},code:n};const c=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return g(["js","jsBlock"],t);case"jsx":case"tsx":return g(["js","jsBlock","jsx"],t);case"html":return g(["js","jsBlock","html"],t);case"python":case"py":case"bash":return g(["bash"],t);case"markdown":case"md":return g(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return g(["tex"],t);case"lua":case"haskell":case"sql":return g(["lua"],t);case"wasm":return g(["wasm"],t);case"vb":case"vba":case"visual-basic":return g(["vb","rem"],t);case"vbnet":return g(["vbnet","rem"],t);case"batch":return g(["rem"],t);case"basic":return g(["rem","f90"],t);case"fsharp":return g(["js","ml"],t);case"ocaml":case"sml":return g(["ml"],t);case"fortran":return g(["f90"],t);case"cobol":return g(["cobol"],t);default:return g(b,t)}}(o,r),a=n.split("\n"),i=Object.fromEntries(r.map((e=>[e.className,{start:0,range:""}]))),l=Object.fromEntries(r.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),u=Object.fromEntries(r.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),m=Object.fromEntries(r.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let d=0;d<a.length;){const e=a[d].match(c);if(!e){d+=1;continue}const t=e.slice(1).find((e=>void 0!==e));l[t]?i[l[t]].range+=`${d},`:u[t]?i[u[t]].start=d:m[t]&&(i[m[t]].range+=`${i[m[t]].start}-${d-1},`),a.splice(d,1)}n=a.join("\n");const f={};return Object.entries(i).forEach((e=>{let[t,{range:n}]=e;d()(n).forEach((e=>{f[e]??=[],f[e].push(t)}))})),{lineClassNames:f,code:n}}const v={codeBlockContainer:"codeBlockContainer_Ckt0"};var y=n(85893);function w(e){let{as:t,...n}=e;const o=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[o,r]=e;const s=t[o];s&&"string"==typeof r&&(n[s]=r)})),n}(i());return(0,y.jsx)(t,{...n,style:o,className:(0,s.Z)(n.className,v.codeBlockContainer,l.k.common.codeBlock)})}const j={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function x(e){let{children:t,className:n}=e;return(0,y.jsx)(w,{as:"pre",tabIndex:0,className:(0,s.Z)(j.codeBlockStandalone,"thin-scrollbar",n),children:(0,y.jsx)("code",{className:j.codeBlockLines,children:t})})}var C=n(902);const L={attributes:!0,characterData:!0,childList:!0,subtree:!0};function _(e,t){const[n,r]=(0,o.useState)(),s=(0,o.useCallback)((()=>{r(e.current?.closest("[role=tabpanel][hidden]"))}),[e,r]);(0,o.useEffect)((()=>{s()}),[s]),function(e,t,n){void 0===n&&(n=L);const r=(0,C.zX)(t),s=(0,C.Ql)(n);(0,o.useEffect)((()=>{const t=new MutationObserver(r);return e&&t.observe(e,s),()=>t.disconnect()}),[e,r,s])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),s())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var B=n(42573);const N={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function E(e){let{line:t,classNames:n,showLineNumbers:o,getLineProps:r,getTokenProps:c}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const a=r({line:t,className:(0,s.Z)(n,o&&N.codeLine)}),i=t.map(((e,t)=>(0,y.jsx)("span",{...c({token:e})},t)));return(0,y.jsxs)("span",{...a,children:[o?(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("span",{className:N.codeLineNumber}),(0,y.jsx)("span",{className:N.codeLineContent,children:i})]}):i,(0,y.jsx)("br",{})]})}var S=n(95999);function T(e){return(0,y.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,y.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function R(e){return(0,y.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,y.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}const O={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function M(e){let{code:t,className:n}=e;const[r,c]=(0,o.useState)(!1),a=(0,o.useRef)(void 0),i=(0,o.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const o=document.createElement("textarea"),r=document.activeElement;o.value=e,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";const s=document.getSelection(),c=s.rangeCount>0&&s.getRangeAt(0);n.append(o),o.select(),o.selectionStart=0,o.selectionEnd=e.length;let a=!1;try{a=document.execCommand("copy")}catch{}o.remove(),c&&(s.removeAllRanges(),s.addRange(c)),r&&r.focus()}(t),c(!0),a.current=window.setTimeout((()=>{c(!1)}),1e3)}),[t]);return(0,o.useEffect)((()=>()=>window.clearTimeout(a.current)),[]),(0,y.jsx)("button",{type:"button","aria-label":r?(0,S.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,S.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,S.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,s.Z)("clean-btn",n,O.copyButton,r&&O.copyButtonCopied),onClick:i,children:(0,y.jsxs)("span",{className:O.copyButtonIcons,"aria-hidden":"true",children:[(0,y.jsx)(T,{className:O.copyButtonIcon}),(0,y.jsx)(R,{className:O.copyButtonSuccessIcon})]})})}function $(e){return(0,y.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,y.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}const P={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function I(e){let{className:t,onClick:n,isEnabled:o}=e;const r=(0,S.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,y.jsx)("button",{type:"button",onClick:n,className:(0,s.Z)("clean-btn",t,o&&P.wordWrapButtonEnabled),"aria-label":r,title:r,children:(0,y.jsx)($,{className:P.wordWrapButtonIcon,"aria-hidden":"true"})})}function A(e){let{children:t,className:n="",metastring:r,title:c,showLineNumbers:l,language:u}=e;const{prism:{defaultLanguage:d,magicComments:p}}=(0,a.L)(),f=function(e){return e?.toLowerCase()}(u??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}(n)??d),h=i(),b=function(){const[e,t]=(0,o.useState)(!1),[n,r]=(0,o.useState)(!1),s=(0,o.useRef)(null),c=(0,o.useCallback)((()=>{const n=s.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[s,e]),a=(0,o.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=s.current,n=e>t||s.current.querySelector("code").hasAttribute("style");r(n)}),[s]);return _(s,a),(0,o.useEffect)((()=>{a()}),[e,a]),(0,o.useEffect)((()=>(window.addEventListener("resize",a,{passive:!0}),()=>{window.removeEventListener("resize",a)})),[a]),{codeBlockRef:s,isEnabled:e,isCodeScrollable:n,toggle:c}}(),g=function(e){return e?.match(m)?.groups.title??""}(r)||c,{lineClassNames:v,code:x}=k(t,{metastring:r,language:f,magicComments:p}),C=l??function(e){return Boolean(e?.includes("showLineNumbers"))}(r);return(0,y.jsxs)(w,{as:"div",className:(0,s.Z)(n,f&&!n.includes(`language-${f}`)&&`language-${f}`),children:[g&&(0,y.jsx)("div",{className:j.codeBlockTitle,children:g}),(0,y.jsxs)("div",{className:j.codeBlockContent,children:[(0,y.jsx)(B.y$,{theme:h,code:x,language:f??"text",children:e=>{let{className:t,style:n,tokens:o,getLineProps:r,getTokenProps:c}=e;return(0,y.jsx)("pre",{tabIndex:0,ref:b.codeBlockRef,className:(0,s.Z)(t,j.codeBlock,"thin-scrollbar"),style:n,children:(0,y.jsx)("code",{className:(0,s.Z)(j.codeBlockLines,C&&j.codeBlockLinesWithNumbering),children:o.map(((e,t)=>(0,y.jsx)(E,{line:e,getLineProps:r,getTokenProps:c,classNames:v[t],showLineNumbers:C},t)))})})}}),(0,y.jsxs)("div",{className:j.buttonGroup,children:[(b.isEnabled||b.isCodeScrollable)&&(0,y.jsx)(I,{className:j.codeButton,onClick:()=>b.toggle(),isEnabled:b.isEnabled}),(0,y.jsx)(M,{className:j.codeButton,code:x})]})]})]})}function z(e){let{children:t,...n}=e;const s=(0,r.Z)(),c=function(e){return o.Children.toArray(e).some((e=>(0,o.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),a="string"==typeof c?A:x;return(0,y.jsx)(a,{...n,children:c},String(s))}},87594:(e,t)=>{function n(e){let t,n=[];for(let o of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,r,s]=t;if(o&&s){o=parseInt(o),s=parseInt(s);const e=o<s?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(s+=e);for(let t=o;t!==s;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},57965:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useCodeblockThemeConfig=void 0;var o=n(11506);Object.defineProperty(t,"useCodeblockThemeConfig",{enumerable:!0,get:function(){return o.useCodeblockThemeConfig}})},11506:function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useCodeblockThemeConfig=void 0;const r=o(n(52263)),s={showGithubLink:!0,githubLinkLabel:"View on GitHub",showRunmeLink:!1,runmeLinkLabel:"Checkout via Runme"};t.useCodeblockThemeConfig=function(){const{siteConfig:{themeConfig:e}}=(0,r.default)();return Object.assign(s,e.codeblock||{})}},33010:function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=o(n(67294)),s=o(n(57381)),c=o(n(9286));t.default=(c.default,e=>function(e){return e.reference||e.metastring?.split(" ").includes("reference")}(e)?r.default.createElement(s.default,{...e}):r.default.createElement(c.default,{...e}))},68339:function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.getRunmeLink=t.RunmeLink=void 0;const r=o(n(67294)),s=o(n(91262)),c=n(57965),a=n(58138),i=n(44354),l=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,u=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;function d(e){let{reference:t,metastring:n}=e;const o=navigator.userAgent||navigator.vendor||window.opera,s=(0,c.useCodeblockThemeConfig)(),a=!function(e){return l.test(e)||u.test(e.substr(0,4))}(o)&&s.showRunmeLink&&n;return a?r.default.createElement("a",{href:`vscode://stateful.runme?${m(t,n)}`,className:"runmeLink",target:"_blank",style:i.buttonStyles},s.runmeLinkLabel):null}function m(e,t){const n=new URLSearchParams({command:"setup"}),o=t.match(/runmeRepository="(?<repository>[^"]*)"/),r=t.match(/runmeFileToOpen="(?<fileToOpen>[^"]*)"/),s=t.match(/useHTTPS|useHTTPS=(false|true)/);if(e.endsWith(".md"))return n.set("fileToOpen",(0,a.parseReference)(e).url),n.toString();if(r?.groups?.fileToOpen)return n.set("fileToOpen",r.groups.fileToOpen),o?.groups?.repository&&n.set("repository",o.groups.repository),n.toString();const{org:c,repo:i,title:l}=(0,a.parseReference)(e),u=s&&s.input&&(s.input.includes("useHTTPS=true")||s.input.includes(" useHTTPS ")||s.input.endsWith("useHTTPS"))?"https://github.com/":"git@github.com:";return n.set("repository",`${u}${c}/${i}.git`),n.set("fileToOpen",l.split("/").slice(0,-1).join("/")+"/README.md"),n.toString()}t.RunmeLink=function(e){return r.default.createElement(s.default,null,(()=>r.default.createElement(d,{...e})))},t.getRunmeLink=m},44354:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.buttonStyles=t.initialFetchResultState=void 0,t.initialFetchResultState={code:"loading...",error:null,loading:null},t.buttonStyles={margin:"0 10px"}},57381:function(e,t,n){"use strict";var o=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,o,r)}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&o(t,e,n);return r(t,e),t},c=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=s(n(67294)),i=c(n(9286)),l=n(57965),u=n(68339),d=n(58138),m=n(44354),p={fontSize:".9em",fontWeight:600,color:"#0E75DD",textAlign:"right",paddingBottom:"13px",textDecoration:"underline"};t.default=function(e){const[t,n]=(0,a.useReducer)(d.codeReducer,m.initialFetchResultState),o=(0,d.parseReference)(e.children);!1!==t.loading&&(0,d.fetchCode)(o,n);const r=e.metastring?.match(/title="(?<title>[^"]*)"/),s={...e,metastring:r?.groups?.title?` title="${r?.groups?.title}"`:` title="${o.title}"`,children:m.initialFetchResultState.code},c=(0,l.useCodeblockThemeConfig)(),f=c.showGithubLink||c.showRunmeLink;return a.default.createElement("div",{className:"docusaurus-theme-github-codeblock"},a.default.createElement(i.default,{...s},t.code),f&&a.default.createElement("div",{style:p},a.default.createElement(u.RunmeLink,{reference:e.children,metastring:e.metastring}),c.showGithubLink&&a.default.createElement("a",{href:e.children,className:"githubLink",style:m.buttonStyles,target:"_blank"},c.githubLinkLabel)))}},58138:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.codeReducer=t.fetchCode=t.parseReference=void 0;const o=n(44354);t.parseReference=function(e){const t=e.slice(e.indexOf("https")),[o,r]=t.split("#"),[s,c,a,i,...l]=new n.g.URL(o).pathname.split("/").slice(1),[u,d]=r?r.split("-").map((e=>parseInt(e.slice(1),10)-1)):[0,1/0];return{url:`https://raw.githubusercontent.com/${s}/${c}/${i}/${l.join("/")}`,fromLine:u,toLine:d,title:l.join("/"),org:s,repo:c}},t.fetchCode=async function(e,t){let n,{url:o,fromLine:r,toLine:s}=e;try{n=await fetch(o)}catch(i){return t({type:"error",value:i})}if(200!==n.status){return t({type:"error",value:await n.text()})}const c=(await n.text()).split("\n").slice(r,(s||r)+1),a=c.reduce(((e,t)=>{if(0===t.length)return e;const n=t.match(/^\s+/);return n?Math.min(e,n[0].length):0}),1/0);return 0===c.length?t({type:"error",value:`Error: No code found at ${o} from line ${r} to line ${s}`}):t({type:"loaded",value:c.map((e=>e.slice(a))).join("\n")})},t.codeReducer=function(e,t){let{type:n,value:r}=t;switch(n){case"reset":return o.initialFetchResultState;case"loading":return{...e,loading:!0};case"loaded":case"error":return{...e,code:r,loading:!1};default:return e}}},11151:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a,a:()=>c});var o=n(67294);const r={},s=o.createContext(r);function c(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);