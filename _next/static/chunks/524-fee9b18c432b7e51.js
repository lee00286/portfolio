(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[524],{3524:function(e,t,n){Promise.resolve().then(n.bind(n,6838)),Promise.resolve().then(n.bind(n,1171))},1171:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return G}});var i=n(9268),l=n(6008),s=n(1060),r=n(6006),o=n(7720),a=n(1525),c=n(5559),u=n(1283),d=n(1416),x=n(157),f=n(2035),h=n(4781),j=n(5363),g=n(1339);let m=(e,t)=>(0,o.h)(e,{renderNode:{[a.BLOCKS.HEADING_1]:(e,t)=>(0,i.jsx)(c.X,{as:"h1",size:"2xl",children:t}),[a.BLOCKS.HEADING_2]:(e,t)=>(0,i.jsx)(c.X,{as:"h2",size:"xl",children:t}),[a.BLOCKS.HEADING_3]:(e,t)=>(0,i.jsx)(c.X,{as:"h3",size:"lg",children:t}),[a.BLOCKS.HEADING_4]:(e,t)=>(0,i.jsx)(c.X,{as:"h4",size:"md",children:t}),[a.BLOCKS.HEADING_5]:(e,t)=>(0,i.jsx)(c.X,{as:"h5",size:"sm",children:t}),[a.BLOCKS.HEADING_6]:(e,t)=>(0,i.jsx)(c.X,{as:"h6",size:"xs",children:t}),[a.BLOCKS.PARAGRAPH]:(e,t)=>(0,i.jsx)(u.x,{mb:"4",_last:{mb:"0"},children:t}),[a.BLOCKS.OL_LIST]:(e,t)=>(0,i.jsx)(d.GS,{children:t}),[a.BLOCKS.UL_LIST]:(e,t)=>(0,i.jsx)(d.QI,{children:t}),[a.BLOCKS.LIST_ITEM]:(e,t)=>(0,i.jsx)(d.HC,{children:t}),[a.BLOCKS.TABLE]:(e,t)=>(0,i.jsx)(x.p,{children:t}),[a.BLOCKS.EMBEDDED_ENTRY]:e=>{var t;return null==e||null===(t=e.data)||void 0===t||t.target,null},[a.INLINES.HYPERLINK]:(e,t)=>(0,i.jsx)(j.r,{href:e.data.uri,color:"link.light",isExternal:!0,children:t}),...t},renderText:e=>e.split("\n").reduce((e,t,n)=>[...e,n>0&&(0,i.jsx)("br",{},n),t],[]),renderMark:{[a.MARKS.CODE]:e=>{let t=!1;return r.Children.map(e,e=>{"string"==typeof e&&e.includes("#")&&(t=!0)}),t?(0,i.jsx)(f.Vp,{colorScheme:"yellow",children:e}):(0,i.jsx)(h.E,{colorScheme:"orange",children:e})}}}),v=e=>{let t=g.h;return null!=e&&e.pageId&&e.slug&&e.title&&void 0!==e.isTitleVisible?(t.pageId=e.pageId,t.slug=e.slug,t.title=e.title,t.isTitleVisible=e.isTitleVisible,e.emoji&&(t.emoji=e.emoji),e.text&&(t.text=e.text),e.codeBlock&&(t.codeBlock=e.codeBlock),e.sections&&(t.sections=e.sections),e.subPages&&(t.subPages=e.subPages),e.lines&&(t.subPages=e.lines),e.media&&(t.media=e.media),t):null};var p=n(9672),b=n(5790),C=n(5490),S=n(9860),E=n(6467),y=n(2016),_=n(8505),k=function(e){let{variant:t,...n}=e,l=(0,y.useStyleConfig)("SpinnerBox",{variant:t});return(0,i.jsx)(s.xu,{__css:l,...n,children:(0,i.jsx)(_.$,{variant:t})})},w=n(4973);let I=async e=>{try{let t=(0,w.Z)(),n=await t.getEntry(e),i=n.fields;return i}catch(e){throw Error(e)}};var B=e=>{let[t,n]=(0,r.useState)(null),[i,l]=(0,r.useState)(!0);return(0,r.useEffect)(()=>{e&&i&&I(e).then(e=>{null!==e&&n(e),l(!1)})},[e,i]),t},D=n(3709),L=function(e){var t,n,l;let{assetId:s}=e,r=B(s),o=(0,b.ff)("asset.light","asset.dark");if(!s||!(null==r?void 0:r.extension)||!(null==r?void 0:r.alt)||!(null==r?void 0:null===(l=r.media)||void 0===l?void 0:null===(n=l.fields)||void 0===n?void 0:null===(t=n.file)||void 0===t?void 0:t.url))return(0,i.jsx)(k,{variant:"asset"});let a="https:".concat(r.media.fields.file.url);return["pdf","PDF"].includes(r.extension)?(0,i.jsxs)(j.r,{href:a,display:"flex",justifyContent:"flex-start",alignContent:"center",border:"1px",borderRadius:"lg",borderColor:o,p:"4",_hover:{background:o},isExternal:!0,children:[(0,i.jsx)(S.M,{mr:"2",width:"4",children:(0,i.jsx)(D.Z,{})}),(0,i.jsx)(u.x,{children:r.alt})]}):(0,i.jsx)(E.E,{src:a,alt:r.alt})},P=function(e){let{assets:t}=e,n=(0,b.ff)("assetBg.light","assetBg.dark");if(!t||0===t.length)return(0,i.jsx)(s.xu,{});let l=t.length<4?t.length:4;return(0,i.jsx)(C.r,{templateColumns:"repeat(".concat(l,", 1fr)"),gap:6,mt:"4",borderRadius:"lg",p:"4",w:"full",backgroundColor:n,children:t.map((e,t)=>(0,i.jsx)(L,{assetId:e.sys.id},"asset-".concat(t)))})},T=function(e){let{variant:t,...n}=e,l=(0,y.useStyleConfig)("ContainerBox",{variant:t});return(0,i.jsx)(s.xu,{__css:l,...n})},O=function(e){let{variant:t,emoji:n,title:l,...r}=e,o=(0,y.useStyleConfig)("HeadingBox",{variant:t});return(0,i.jsxs)(s.xu,{__css:o,...r,children:[n&&(0,i.jsx)(c.X,{variant:t,children:n}),(0,i.jsx)(c.X,{variant:t,children:l})]})},Z=n(5134),H=function(e){let{variant:t,...n}=e,l=(0,y.useStyleConfig)("ContentBox",{variant:t});return(0,i.jsx)(s.xu,{__css:l,...n})},N=n(2919),z=n(936),K=function(e){let{variant:t,text:n,...l}=e,r=(0,y.useStyleConfig)("IconTagBox",{variant:t}),o="date"===t?(0,i.jsx)(N.Z,{}):"location"===t?(0,i.jsx)(z.Z,{}):(0,i.jsx)(i.Fragment,{});return(0,i.jsxs)(s.xu,{__css:r,...l,children:[(0,i.jsx)(S.M,{width:"4",children:o}),(0,i.jsx)(u.x,{fontSize:"xs",children:n})]})},R=function(e){let{lineData:t}=e;if(!t)return(0,i.jsx)(k,{variant:"line"});let n=(null==t?void 0:t.isTitleVisible)&&t.title?t.title:"",l=(null==t?void 0:t.text)&&m(t.text),s=(null==t?void 0:t.startDate)&&t.startDate,r=(null==t?void 0:t.endDate)&&t.endDate,o=(null==t?void 0:t.location)&&t.location,a=(null==t?void 0:t.media)&&t.media;return(0,i.jsxs)(T,{variant:"line",children:[n&&(0,i.jsx)(c.X,{variant:"line",children:n}),(s||o)&&(0,i.jsxs)(Z.k,{gap:{md:"2"},direction:{base:"column",md:"row"},children:[s&&(0,i.jsx)(K,{variant:"date",text:"".concat(s).concat(r?" ~ ".concat(r):"")}),o&&(0,i.jsx)(K,{variant:"location",text:o})]}),l&&(0,i.jsx)(H,{children:l}),a&&a.length>0&&(0,i.jsx)(P,{assets:a})]})},A=e=>{let[t,n]=(0,r.useState)(null),[i,l]=(0,r.useState)(!0);return(0,r.useEffect)(()=>{e&&i&&I(e).then(e=>{let t=v(e);null!==t&&n(t),l(!1)})},[e,i]),t},M=function(e){let{pageId:t}=e,n=(0,l.usePathname)(),r=A(t),o=(0,b.ff)("assetBg.light","assetBg.dark");return r?(0,i.jsxs)(j.r,{href:"".concat(n,"/").concat(r.slug),mt:"4",display:"flex",justifyContent:"flex-start",alignContent:"center",border:"1px",borderRadius:"lg",borderColor:o,p:"4",w:"full",_hover:{background:o},children:[(0,i.jsx)(S.M,{mr:"2",width:"4",children:(0,i.jsx)(D.Z,{})}),(0,i.jsx)(u.x,{children:r.title})]}):(0,i.jsx)(s.xu,{})},V=function(e){let{sectionData:t}=e;if(!t)return(0,i.jsx)(k,{});let n=t.emoji?t.emoji:"",l=(null==t?void 0:t.isTitleVisible)&&t.title?t.title:"",s=(null==t?void 0:t.text)&&m(t.text),r=(null==t?void 0:t.lines)&&t.lines,o=(null==t?void 0:t.startDate)&&t.startDate,a=(null==t?void 0:t.endDate)&&t.endDate,c=(null==t?void 0:t.location)&&t.location,u=(null==t?void 0:t.subPages)&&t.subPages,d=(null==t?void 0:t.media)&&t.media;return(0,i.jsxs)(T,{variant:"section",children:[(n||l)&&(0,i.jsx)(O,{variant:"section",emoji:n,title:l}),(o||c)&&(0,i.jsxs)(Z.k,{gap:{md:"2"},direction:{base:"column",md:"row"},children:[o&&(0,i.jsx)(K,{variant:"date",text:"".concat(o).concat(a?" ~ ".concat(a):"")}),c&&(0,i.jsx)(K,{variant:"location",text:c})]}),s&&(0,i.jsx)(H,{children:s}),r&&r.length>0&&r.map((e,n)=>(0,i.jsx)(R,{lineData:e.fields},"section-".concat(t.sectionId,"-line-").concat(n))),u&&u.length>0&&u.map((e,n)=>(0,i.jsx)(M,{pageId:e.sys.id},"section-".concat(t.sectionId,"-subpage-").concat(n))),d&&d.length>0&&(0,i.jsx)(P,{assets:d})]})},X=n(7306),G=function(){let{pageData:e}=(0,p.lO)(),t=(0,l.usePathname)(),n=(0,X.Vn)(t,!0);if(!e||e.pageId<0)return(0,i.jsx)(k,{});let r=e.emoji?e.emoji:"",o=(null==e?void 0:e.isTitleVisible)&&e.title?e.title:"",a=(null==e?void 0:e.text)&&m(e.text),c=(null==e?void 0:e.sections)&&e.sections,u=(null==e?void 0:e.media)&&e.media;return(0,i.jsxs)(T,{variant:"page",children:[(r||o)&&(0,i.jsx)(O,{variant:"page",emoji:r,title:o}),(0,i.jsx)(s.xu,{children:a}),c&&c.length>0&&c.map((e,t)=>(0,i.jsx)(V,{sectionData:e.fields},"".concat(n,"-page-").concat(t))),u&&u.length>0&&(0,i.jsx)(P,{assets:u})]})}},6838:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return F}});var i=n(9268),l=n(6008),s=n(5134),r=n(9860),o=n(6467),a=n(1130),c=n(1060),u=n(421),d=n(5790),x=n(6667),f=n(8823),h=n(8312),j=n(6432),g=n(6124),m=n(1283),v=n(9406),p=n(8163),b=n(8753),C=n(1299),S=n(5511),E=n(5363),y=n(1515),_=n(4460),k=n(3114),w=n(2242),I=n(993),B=n(2210),D=n(4328),L=n(7594),P=n(2410),T=function(){let{toggleColorMode:e}=(0,d.If)();return(0,i.jsx)(x.h,{"aria-label":"Toggle color mode",icon:(0,d.ff)((0,i.jsx)(L.Z,{}),(0,i.jsx)(P.Z,{})),p:"1",bgColor:(0,d.ff)("btnBg.light","btnBg.dark"),_hover:{bgColor:(0,d.ff)("btnHover.light","btnHover.dark")},onClick:e})},O=n(2016),Z=n(8860),H=function(e){let{variant:t,onMenuItem:n,...l}=e,s=(0,O.useStyleConfig)("MenuItemBox",{variant:t});return(0,i.jsx)(Z.s,{__css:s,onClick:n,...l})},N=function(e){let{variant:t,...n}=e,l=(0,O.useStyleConfig)("NavBox",{variant:t});return(0,i.jsx)(c.xu,{__css:l,...n})},z=function(e){let{variant:t,...n}=e,l=(0,O.useStyleConfig)("SidebarBox",{variant:t});return(0,i.jsx)(c.xu,{__css:l,...n})},K=n(4208),R=n(7306),A=n(6006);let M="portfolio",V=[{name:"Profile",icon:y.Z},{name:"Education",icon:_.Z},{name:"Professional Experiences",icon:k.Z},{name:"Other Experiences",icon:w.Z},{name:"Extracurricular Activities",icon:I.Z},{name:"Awards & Certifications",icon:B.Z}],X=e=>{let{onClose:t,...n}=e,{prefix:c}=(0,K.Eg)(),{push:u}=(0,l.useRouter)(),[d,x]=(0,A.useState)(!1);return(0,A.useEffect)(()=>{if(!t)return;let e=()=>{x(window.innerWidth>=768)};e(),window.addEventListener("resize",e),d&&t()},[d,t]),(0,i.jsxs)(z,{...n,children:[(0,i.jsxs)(s.k,{flexDir:"column",children:[(0,i.jsx)(r.M,{h:"20",mx:"8",mb:"2",children:(0,i.jsx)(o.E,{boxSize:"50px",src:"".concat(c,"/logo-icon.gif"),alt:"Logo icon for the page - Duck Emoji"})}),V.map((e,t)=>(0,i.jsx)(G,{icon:e.icon,navIndex:t,onClick:()=>u("".concat("/".concat(M),"/").concat((0,R.Cu)(t))),children:e.name},e.name))]}),(0,i.jsx)(r.M,{display:{base:"flex",md:"none"},m:"4",children:(0,i.jsx)(a.P,{p:"5",w:"full",bgColor:"error",borderRadius:"lg",color:"errorText",onClick:t})})]})},G=e=>{let{icon:t,navIndex:n,children:s,...r}=e,o=(0,l.usePathname)(),a=(0,R.Tc)((0,R.Vn)(o))===n;return(0,i.jsx)(c.xu,{as:"a",href:"#",style:{textDecoration:"none"},_focus:{boxShadow:"none"},children:(0,i.jsxs)(N,{variant:a?"current":"default",...r,children:[t&&(0,i.jsx)(u.J,{mr:"4",fontSize:"16",_groupHover:{color:"black"},as:t}),s]})})},q=e=>{let{onOpen:t,...n}=e,{prefix:r}=(0,K.Eg)(),{push:a}=(0,l.useRouter)(),u=(0,d.ff)("body.light","body.dark"),b=(0,d.ff)("border.light","border.dark");return(0,i.jsxs)(N,{variant:"mobile",...n,children:[(0,i.jsx)(x.h,{display:{base:"flex",md:"none"},onClick:t,variant:"outline","aria-label":"open menu",icon:(0,i.jsx)(D.Z,{})}),(0,i.jsx)(o.E,{display:{base:"flex",md:"none"},boxSize:"50px",src:"".concat(r,"/logo-icon.gif"),alt:"Logo icon for the page - Duck Emoji"}),(0,i.jsx)(T,{}),(0,i.jsx)(f.U,{spacing:{base:"0",md:"6"},display:{base:"none",md:"flex"},children:(0,i.jsx)(s.k,{alignItems:"center",children:(0,i.jsxs)(h.v,{children:[(0,i.jsx)(j.j,{py:2,transition:"all 0.3s",_focus:{boxShadow:"none"},children:(0,i.jsxs)(f.U,{children:[(0,i.jsxs)(g.g,{display:{base:"none",md:"flex"},alignItems:"flex-start",spacing:"1px",ml:"2",children:[(0,i.jsx)(m.x,{fontSize:"sm",children:"Yena Lee"}),(0,i.jsx)(m.x,{fontSize:"xs",variant:"navSubText",children:"She/her"})]}),(0,i.jsx)(c.xu,{display:{base:"none",md:"flex"},children:(0,i.jsx)(D.Z,{})})]})}),(0,i.jsxs)(v.q,{bgColor:u,borderColor:b,children:[(0,i.jsx)(H,{onMenuItem:()=>a("".concat("/".concat(M),"/profile")),children:"Profile"}),(0,i.jsx)(p.R,{}),(0,i.jsx)(H,{children:(0,i.jsx)(E.r,{href:"https://www.linkedin.com/in/yena-lee-00286/",w:"full",isExternal:!0,children:"LinkedIn"})}),(0,i.jsx)(H,{children:(0,i.jsx)(E.r,{href:"https://github.com/lee00286",w:"full",isExternal:!0,children:"GitHub"})})]})]})})})]})};var F=e=>{let{children:t}=e,{isOpen:n,onOpen:l,onClose:s}=(0,b.q)();return(0,i.jsxs)(c.xu,{w:"full",minH:"full",children:[(0,i.jsx)(X,{onClose:()=>s,display:{base:"none",md:"block"}}),(0,i.jsx)(C.d,{isOpen:n,placement:"left",onClose:s,returnFocusOnClose:!1,onOverlayClick:s,size:"full",children:(0,i.jsx)(S.s,{children:(0,i.jsx)(X,{onClose:s})})}),(0,i.jsx)(q,{onOpen:l}),(0,i.jsx)(N,{variant:"body",children:t})]})}},4973:function(e,t,n){"use strict";var i=n(3936);t.Z=()=>{try{let e=(0,i.createClient)({space:"diydfaxtcqhk",accessToken:"Z9uNdXs6Rd8haM3uMZjwqdxWjRmFChW30e7vmqed5Wg"});return e}catch(e){throw Error(e)}}},1339:function(e,t,n){"use strict";n.d(t,{h:function(){return i}});let i={pageId:-1,slug:"",title:"",isTitleVisible:!0}},4208:function(e,t,n){"use strict";n.d(t,{Ew:function(){return r},Eg:function(){return o}});var i=n(9268),l=n(6006);let s=(0,l.createContext)({prefix:""});function r(e){let{children:t}=e;return(0,i.jsx)(s.Provider,{value:{prefix:"https://lee00286.github.io/portfolio"},children:t})}function o(){return(0,l.useContext)(s)}},9672:function(e,t,n){"use strict";n.d(t,{Ti:function(){return x},lO:function(){return f}});var i=n(9268),l=n(6006),s=n(6008),r=n(4973);let o=async e=>{try{let t=(0,r.Z)(),n=await t.getEntries({include:2,content_type:"page","fields.slug":e}),i=n.items[0].fields;return i}catch(e){throw Error(e)}};var a=n(1339),c=n(7306);let u={pageData:a.h},d=(0,l.createContext)(u);function x(e){let{children:t}=e,n=(0,s.usePathname)(),[r,a]=(0,l.useState)(!0),[u,x]=(0,l.useState)(null),[f,h]=(0,l.useState)(null),[j,g]=(0,l.useState)((0,c.Vn)(n,!0));return(0,l.useEffect)(()=>{let e=(0,c.Vn)(n,!0);(e!==j||r)&&(a(!0),u&&u[e]?(h(u[e]),g(e),a(!1)):o(e).then(t=>{x({[e]:t,...u}),h(t),g(e),a(!1)}))},[r,n]),(0,i.jsx)(d.Provider,{value:{pageData:f},children:t})}function f(){return(0,l.useContext)(d)}},7306:function(e,t,n){"use strict";n.d(t,{Cu:function(){return l},Tc:function(){return s},Vn:function(){return r}});let i=["profile","education","professional-experiences","other-experiences","extracurricular-activities","awards-and-certificates"];i[1];let l=e=>e>=0&&e<i.length?i[e]:"",s=e=>i.findIndex(t=>t===e),r=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!e)return"";let n=e.split("/");if(t){for(let e=n.length-1;e>=0;e--)if(""!==n[e])return n[e]}return n[1]}}}]);