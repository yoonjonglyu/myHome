(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{104:function(e,a,t){"use strict";t.d(a,"b",(function(){return r})),t.d(a,"a",(function(){return c}));var n=t(37),l=t(9);function r(){const{tagList:e}=Object(n.c)(e=>({tagList:e.TagList.tagList}));return{tagList:e}}function c(){const{tabIndex:e}=Object(n.c)(e=>({tabIndex:e.TabIndex.tabIndex})),a=Object(n.b)();return{tabIndex:e,handleTapIndex:e=>{a(l.h(e))}}}},106:function(e,a,t){"use strict";t.d(a,"a",(function(){return x}));var n=t(0),l=t.n(n),r=t(158),c=t(33),o=t(35),i=t(149),s=t(163),u=t(150),m=t(104);const b=c.b.header`
    position : fixed;
    width : 99%;
    top : 0;
    left : 0.5%;
    z-index : 999999;
`,d=e=>{const a=Object(m.a)(),[t,r]=Object(n.useState)(a.tabIndex);return Object(n.useEffect)(()=>{var e;if(!1===a.tabIndex){switch(null===(e=location.hash.split("/")[1])||void 0===e?void 0:e.split("?")[0]){case"":r(0),a.handleTapIndex(0);break;case"about":r(1),a.handleTapIndex(1);break;case"essay":r(2),a.handleTapIndex(2);break;case"tech":r(3),a.handleTapIndex(3);break;case"portfolio":r(4),a.handleTapIndex(4)}}},[]),l.a.createElement(b,null,l.a.createElement(i.a,{component:"nav"},l.a.createElement(s.a,{value:t,onChange:(e,t)=>{r(t),a.handleTapIndex(t),window.scrollTo(0,0)},indicatorColor:"primary",textColor:"primary",centered:!0},l.a.createElement(u.a,{label:"Main",component:o.b,to:"/"}),l.a.createElement(u.a,{label:"About",component:o.b,to:"/about"}),l.a.createElement(u.a,{label:"Essay",component:o.b,to:"/essay"}),l.a.createElement(u.a,{label:"Tech",component:o.b,to:"/tech"}),l.a.createElement(u.a,{label:"Portfolio",component:o.b,to:"/portfolio"}))))};var p=t(107);const E=c.b.footer`
    text-align : center;
    font-size : 1.2rem;
`,h=c.b.small`
    color : gray;
`,f=()=>l.a.createElement(E,null,l.a.createElement(i.a,null,l.a.createElement(p.a,null),l.a.createElement(h,null,"Copyright© ISA(yoonjonglyu)"))),g=Object(c.b)(r.a)`
    padding : 50px 0 0 0;
    minHeight : 90vh;
`,x=({children:e})=>l.a.createElement("div",{className:"wrap"},l.a.createElement(d,null),l.a.createElement("main",{role:"main"},l.a.createElement(g,{maxWidth:"md"},e)),l.a.createElement(f,null))},107:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(33),c=t(151),o=t(167),i=t(155),s=t(156),u=t(157),m=t(152),b=t(25),d=t(153),p=t(154),E=t.p+"assets/945677dc29c49b6215192d9f9a49b9ce.pdf";const h=Object(r.b)(c.a)`
    text-align: center;
`,f=r.b.h1`
    margin: 8px 0;
`,g=r.b.ul`
    list-style: none;
    margin: 8px auto;
    padding: 0;
`,x=r.b.li`
    display: inline-block;
    margin: 5px;
`,I=Object(m.a)(e=>({pink:{color:e.palette.getContrastText(b.a[500]),backgroundColor:b.a[500]},deepOrange:{color:e.palette.getContrastText(d.a[500]),backgroundColor:d.a[500]},lightBlue:{color:"#fff",backgroundColor:p.a[900]}}));a.a=function(){const e=I();return l.a.createElement(h,null,l.a.createElement(f,null,"CONTACT"),l.a.createElement(g,null,l.a.createElement(x,null,l.a.createElement("a",{href:"https://github.com/yoonjonglyu/",target:"_blank",title:"ISA GITHUB",rel:"noreferrer"},l.a.createElement(o.a,{className:e.lightBlue},l.a.createElement(i.a,null)))),l.a.createElement(x,null,l.a.createElement("a",{href:"mailto:isa@kakao.com",title:"메일보내기"},l.a.createElement(o.a,{className:e.pink},l.a.createElement(s.a,null)))),l.a.createElement(x,null,l.a.createElement("a",{href:E,target:"_blank",title:"이력서"},l.a.createElement(o.a,{className:e.deepOrange},l.a.createElement(u.a,null))))))}},161:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(106);a.default=function(){return l.a.createElement(r.a,null,l.a.createElement("h1",null,"Not FOUND PAGES!! 404."))}}}]);
//# sourceMappingURL=11.96b05ec74f09c0d554c2.js.map