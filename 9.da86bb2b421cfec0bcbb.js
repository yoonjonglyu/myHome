(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{104:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return c}));var a=n(36),r=n(9);function l(){const{tagList:e}=Object(a.c)(e=>({tagList:e.TagList.tagList}));return{tagList:e}}function c(){const{tabIndex:e}=Object(a.c)(e=>({tabIndex:e.TabIndex.tabIndex})),t=Object(a.b)();return{tabIndex:e,handleTapIndex:e=>{t(r.h(e))}}}},106:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(33),c=n(151),o=n(167),i=n(155),s=n(156),m=n(157),d=n(152),u=n(25),p=n(153),g=n(154),x=n.p+"assets/945677dc29c49b6215192d9f9a49b9ce.pdf";const f=Object(l.b)(c.a)`
    text-align: center;
`,b=l.b.h1`
    margin: 8px 0;
`,E=l.b.ul`
    list-style: none;
    margin: 8px auto;
    padding: 0;
`,h=l.b.li`
    display: inline-block;
    margin: 5px;
`,v=Object(d.a)(e=>({pink:{color:e.palette.getContrastText(u.a[500]),backgroundColor:u.a[500]},deepOrange:{color:e.palette.getContrastText(p.a[500]),backgroundColor:p.a[500]},lightBlue:{color:"#fff",backgroundColor:g.a[900]}}));t.a=function(){const e=v();return r.a.createElement(f,null,r.a.createElement(b,null,"CONTACT"),r.a.createElement(E,null,r.a.createElement(h,null,r.a.createElement("a",{href:"https://github.com/yoonjonglyu/",target:"_blank",title:"ISA GITHUB",rel:"noreferrer"},r.a.createElement(o.a,{className:e.lightBlue},r.a.createElement(i.a,null)))),r.a.createElement(h,null,r.a.createElement("a",{href:"mailto:isa@kakao.com",title:"메일보내기"},r.a.createElement(o.a,{className:e.pink},r.a.createElement(s.a,null)))),r.a.createElement(h,null,r.a.createElement("a",{href:x,target:"_blank",title:"이력서"},r.a.createElement(o.a,{className:e.deepOrange},r.a.createElement(m.a,null))))))}},107:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var a=n(0),r=n.n(a),l=n(158),c=n(33),o=n(35),i=n(149),s=n(163),m=n(150),d=n(104);const u=c.b.header`
    position : fixed;
    width : 99%;
    top : 0;
    left : 0.5%;
    z-index : 999999;
`,p=e=>{const t=Object(d.a)(),[n,l]=Object(a.useState)(t.tabIndex);return Object(a.useEffect)(()=>{var e;if(!1===t.tabIndex){switch(null===(e=location.hash.split("/")[1])||void 0===e?void 0:e.split("?")[0]){case"":l(0),t.handleTapIndex(0);break;case"about":l(1),t.handleTapIndex(1);break;case"essay":l(2),t.handleTapIndex(2);break;case"tech":l(3),t.handleTapIndex(3);break;case"portfolio":l(4),t.handleTapIndex(4)}}},[]),r.a.createElement(u,null,r.a.createElement(i.a,{component:"nav"},r.a.createElement(s.a,{value:n,onChange:(e,n)=>{l(n),t.handleTapIndex(n),window.scrollTo(0,0)},indicatorColor:"primary",textColor:"primary",centered:!0},r.a.createElement(m.a,{label:"Main",component:o.b,to:"/"}),r.a.createElement(m.a,{label:"About",component:o.b,to:"/about"}),r.a.createElement(m.a,{label:"Essay",component:o.b,to:"/essay"}),r.a.createElement(m.a,{label:"Tech",component:o.b,to:"/tech"}),r.a.createElement(m.a,{label:"Portfolio",component:o.b,to:"/portfolio"}))))};var g=n(106);const x=c.b.footer`
    text-align : center;
    font-size : 1.2rem;
`,f=c.b.small`
    color : gray;
`,b=()=>r.a.createElement(x,null,r.a.createElement(i.a,null,r.a.createElement(g.a,null),r.a.createElement(f,null,"Copyright© ISA(yoonjonglyu)"))),E=Object(c.b)(l.a)`
    padding : 50px 0 0 0;
    minHeight : 90vh;
`,h=({children:e})=>r.a.createElement("div",{className:"wrap"},r.a.createElement(p,null),r.a.createElement("main",{role:"main"},r.a.createElement(E,{maxWidth:"md"},e)),r.a.createElement(b,null))},116:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(33),c=n(4),o=n(1),i=(n(12),n(26)),s=n(34),m=[0,1,2,3,4,5,6,7,8,9,10],d=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var p=a.forwardRef((function(e,t){var n=e.alignContent,r=void 0===n?"stretch":n,l=e.alignItems,s=void 0===l?"stretch":l,m=e.classes,d=e.className,u=e.component,p=void 0===u?"div":u,g=e.container,x=void 0!==g&&g,f=e.direction,b=void 0===f?"row":f,E=e.item,h=void 0!==E&&E,v=e.justify,w=void 0===v?"flex-start":v,y=e.lg,j=void 0!==y&&y,k=e.md,I=void 0!==k&&k,O=e.sm,C=void 0!==O&&O,S=e.spacing,T=void 0===S?0:S,W=e.wrap,L=void 0===W?"wrap":W,N=e.xl,z=void 0!==N&&N,M=e.xs,B=void 0!==M&&M,G=e.zeroMinWidth,A=void 0!==G&&G,D=Object(c.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),F=Object(i.a)(m.root,d,x&&[m.container,0!==T&&m["spacing-xs-".concat(String(T))]],h&&m.item,A&&m.zeroMinWidth,"row"!==b&&m["direction-xs-".concat(String(b))],"wrap"!==L&&m["wrap-xs-".concat(String(L))],"stretch"!==s&&m["align-items-xs-".concat(String(s))],"stretch"!==r&&m["align-content-xs-".concat(String(r))],"flex-start"!==w&&m["justify-xs-".concat(String(w))],!1!==B&&m["grid-xs-".concat(String(B))],!1!==C&&m["grid-sm-".concat(String(C))],!1!==I&&m["grid-md-".concat(String(I))],!1!==j&&m["grid-lg-".concat(String(j))],!1!==z&&m["grid-xl-".concat(String(z))]);return a.createElement(p,Object(o.a)({className:F,ref:t},D))})),g=Object(s.a)((function(e){return Object(o.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return m.forEach((function(a){var r=e.spacing(a);0!==r&&(n["spacing-".concat(t,"-").concat(a)]={margin:"-".concat(u(r,2)),width:"calc(100% + ".concat(u(r),")"),"& > $item":{padding:u(r,2)}})})),n}(e,"xs"),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var a={};d.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");a[t]={flexBasis:r,flexGrow:0,maxWidth:r}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?Object(o.a)(e,a):e[t.breakpoints.up(n)]=a}(t,e,n),t}),{}))}),{name:"MuiGrid"})(p),x=n(35),f=n(149);const b=Object(l.b)(f.a)`
    padding: 8px;
    text-align: center;
    font-size: 0.8rem;
    color: #364f6b !important;
    overflow: hidden;
`,E=function(e){const{children:t}=e;return r.a.createElement(r.a.Fragment,null,t.map(e=>r.a.createElement(g,{item:!0,xs:3,key:e.idx},r.a.createElement(x.b,{to:"?tags="+e.idx,style:{textDecoration:"none"}},r.a.createElement(b,null,e.name)))))};var h=n(104);const v=Object(l.b)(g)`
    flex-grow : 1;
`;t.a=function(e){const[t,n]=Object(a.useState)([]),l=Object(h.b)(),c=Object(h.a)();return Object(a.useEffect)(()=>{let e;switch(c.tabIndex){case 2:e=l.tagList.essay;break;case 3:e=l.tagList.tech;break;case 4:e=l.tagList.portfolio;break;default:e=[]}n(e)},[c.tabIndex,l.tagList]),r.a.createElement(v,{container:!0,spacing:1,component:"nav"},r.a.createElement(g,{container:!0,item:!0,xs:12,spacing:1},r.a.createElement(E,{children:t})))}},166:function(e,t,n){"use strict";n.r(t),n.d(t,"Portfolio",(function(){return b}));var a=n(0),r=n.n(a),l=n(33),c=n(107),o=n(116);const i=l.b.ul`
    padding: 0;
    list-style : none;
`,s=l.b.li`
    padding-top : 14px;
    border-bottom : 1px solid blue;
`,m=l.b.img`
    float: left;
`,d=l.b.div`
    float : left;
    padding-left: 12px;
`,u=l.b.li`
    display: inline-block;
    margin: 0 8px 0 4px;
    color: gray;
`,p=function(e){const{portfolioList:t}=e,n=[],a=n.length>0?n.map((e,t)=>r.a.createElement(s,{key:t},r.a.createElement(m,{src:e.thum}),r.a.createElement(d,null,r.a.createElement("h3",null,e.title),r.a.createElement("p",null,e.description,"썸네일 하나 옆에 있고 길쭉한 형태로 타이틀이랑 설명등을 나열한 구조로"),r.a.createElement("p",null,"포트폴리오 정보를 간략히 보여주는데는 태그를 표시하는게 더 나을거같다.")),r.a.createElement("hr",{style:{clear:"both"}}),r.a.createElement(i,null,e.tags.map(e=>r.a.createElement(u,{key:e.idx},e.name))))):r.a.createElement("h2",null,"해당하는 포트폴리오가 없습니다.");return r.a.createElement("div",{className:"portfolio-list"},r.a.createElement(i,null,a))},g=l.b.h1`
    text-align : center;
    font-size : 1.2rem;
`,x=l.b.section`
    margin : 0;
`,f=l.b.section`
    margin-top : 16px;
    border : 1px solid #00adb5;
    border-left : 0;
    border-right : 0;
`,b=function(){return r.a.createElement(c.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(x,{className:"portfolio-category"},r.a.createElement(g,null,"포트폴리오"),r.a.createElement(o.a,null)),r.a.createElement(f,{className:"portfolio-contents"},r.a.createElement(p,{portfolioList:[]}))))}}}]);
//# sourceMappingURL=9.da86bb2b421cfec0bcbb.js.map