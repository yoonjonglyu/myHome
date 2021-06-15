(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{104:function(e,a,t){"use strict";t.d(a,"b",(function(){return r})),t.d(a,"a",(function(){return c}));var n=t(36),l=t(9);function r(){const{tagList:e}=Object(n.c)(e=>({tagList:e.TagList.tagList}));return{tagList:e}}function c(){const{tabIndex:e}=Object(n.c)(e=>({tabIndex:e.TabIndex.tabIndex})),a=Object(n.b)();return{tabIndex:e,handleTapIndex:e=>{a(l.h(e))}}}},106:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(33),c=t(151),o=t(167),i=t(155),m=t(156),u=t(157),s=t(152),E=t(25),d=t(153),b=t(154),p=t.p+"assets/945677dc29c49b6215192d9f9a49b9ce.pdf";const f=Object(r.b)(c.a)`
    text-align: center;
`,g=r.b.h1`
    margin: 8px 0;
`,h=r.b.ul`
    list-style: none;
    margin: 8px auto;
    padding: 0;
`,y=r.b.li`
    display: inline-block;
    margin: 5px;
`,v=Object(s.a)(e=>({pink:{color:e.palette.getContrastText(E.a[500]),backgroundColor:E.a[500]},deepOrange:{color:e.palette.getContrastText(d.a[500]),backgroundColor:d.a[500]},lightBlue:{color:"#fff",backgroundColor:b.a[900]}}));a.a=function(){const e=v();return l.a.createElement(f,null,l.a.createElement(g,null,"CONTACT"),l.a.createElement(h,null,l.a.createElement(y,null,l.a.createElement("a",{href:"https://github.com/yoonjonglyu/",target:"_blank",title:"ISA GITHUB",rel:"noreferrer"},l.a.createElement(o.a,{className:e.lightBlue},l.a.createElement(i.a,null)))),l.a.createElement(y,null,l.a.createElement("a",{href:"mailto:isa@kakao.com",title:"메일보내기"},l.a.createElement(o.a,{className:e.pink},l.a.createElement(m.a,null)))),l.a.createElement(y,null,l.a.createElement("a",{href:p,target:"_blank",title:"이력서"},l.a.createElement(o.a,{className:e.deepOrange},l.a.createElement(u.a,null))))))}},107:function(e,a,t){"use strict";t.d(a,"a",(function(){return y}));var n=t(0),l=t.n(n),r=t(158),c=t(33),o=t(35),i=t(149),m=t(163),u=t(150),s=t(104);const E=c.b.header`
    position : fixed;
    width : 99%;
    top : 0;
    left : 0.5%;
    z-index : 999999;
`,d=e=>{const a=Object(s.a)(),[t,r]=Object(n.useState)(a.tabIndex);return Object(n.useEffect)(()=>{var e;if(!1===a.tabIndex){switch(null===(e=location.hash.split("/")[1])||void 0===e?void 0:e.split("?")[0]){case"":r(0),a.handleTapIndex(0);break;case"about":r(1),a.handleTapIndex(1);break;case"essay":r(2),a.handleTapIndex(2);break;case"tech":r(3),a.handleTapIndex(3);break;case"portfolio":r(4),a.handleTapIndex(4)}}},[]),l.a.createElement(E,null,l.a.createElement(i.a,{component:"nav"},l.a.createElement(m.a,{value:t,onChange:(e,t)=>{r(t),a.handleTapIndex(t),window.scrollTo(0,0)},indicatorColor:"primary",textColor:"primary",centered:!0},l.a.createElement(u.a,{label:"Main",component:o.b,to:"/"}),l.a.createElement(u.a,{label:"About",component:o.b,to:"/about"}),l.a.createElement(u.a,{label:"Essay",component:o.b,to:"/essay"}),l.a.createElement(u.a,{label:"Tech",component:o.b,to:"/tech"}),l.a.createElement(u.a,{label:"Portfolio",component:o.b,to:"/portfolio"}))))};var b=t(106);const p=c.b.footer`
    text-align : center;
    font-size : 1.2rem;
`,f=c.b.small`
    color : gray;
`,g=()=>l.a.createElement(p,null,l.a.createElement(i.a,null,l.a.createElement(b.a,null),l.a.createElement(f,null,"Copyright© ISA(yoonjonglyu)"))),h=Object(c.b)(r.a)`
    padding : 50px 0 0 0;
    minHeight : 90vh;
`,y=({children:e})=>l.a.createElement("div",{className:"wrap"},l.a.createElement(d,null),l.a.createElement("main",{role:"main"},l.a.createElement(h,{maxWidth:"md"},e)),l.a.createElement(g,null))},119:function(e,a,t){"use strict";t.d(a,"a",(function(){return S}));var n=t(0),l=t.n(n),r=t(131),c=t(132),o=t(146),i=t(133),m=t(135),u=t(136),s=t(138),E=t(137),d=t(139),b=t(140),p=t(141),f=t(142),g=t(149),h=t(134),y=t(33);const v=y.a`
  @media screen and (max-width: 768px) {
      .MuiTimeline-root {
        padding: 0;
      }
      .MuiTimelineSeparator-root {
        display: none !IMPORTANT;
      }
      .MuiTimelineOppositeContent-root {
        display: none !IMPORTANT;
      }
      .MuiTimelineItem-alignAlternate:nth-child(even) .MuiTimelineItem-content {
        text-align : left !IMPORTANT;
      }
  }
`,x=Object(y.b)(r.a)`
  font-size : 0.9rem;
  @keyframes fadeup {
    0% {
      opacity : 0;
      transform : translateY(200px); 
    }
    100% {
      opacity : 1;
      transform : none;
    } 
  }
  animation: fadeup 0.8s;
`,k=Object(y.b)(g.a)`
  padding: 6px 16px;
`,T=Object(y.b)(c.a)`
  background-color: #f50057 !important;
`,S=function(){return l.a.createElement(x,{align:"alternate"},l.a.createElement(v,null),l.a.createElement(o.a,null,l.a.createElement(i.a,null,l.a.createElement(h.a,{variant:"body2",color:"textSecondary"},"1995년 05월 24일")),l.a.createElement(m.a,null,l.a.createElement(u.a,null,l.a.createElement(E.a,null)),l.a.createElement(c.a,null)),l.a.createElement(s.a,null,l.a.createElement(k,{elevation:3},l.a.createElement(h.a,{variant:"h6",component:"h1"},"출생"),l.a.createElement(h.a,null,"전주 류씨(全州 柳氏) 수곡파(水谷派)",l.a.createElement("br",null),"차남 류재홍 슬하",l.a.createElement("br",null),"대구 출생")))),l.a.createElement(o.a,null,l.a.createElement(i.a,null,l.a.createElement(h.a,{variant:"body2",color:"textSecondary"},"초등학생 4학년 시절")),l.a.createElement(m.a,null,l.a.createElement(u.a,{color:"primary"},l.a.createElement(d.a,null)),l.a.createElement(c.a,null)),l.a.createElement(s.a,null,l.a.createElement(k,{elevation:3},l.a.createElement(h.a,{variant:"h6",component:"h1"},"중국 유학"),l.a.createElement(h.a,null,"아버지께서 장차 ",l.a.createElement("strong",null,"중국이 급부상하여 경제 대국이 될 것이니 중국에서 기회를 찾아보라는 뜻으로")," 원하셔서 중국 유학길에 올랐다.")))),l.a.createElement(o.a,null,l.a.createElement(i.a,null,l.a.createElement(h.a,{variant:"body2",color:"textSecondary"},"2015년")),l.a.createElement(m.a,null,l.a.createElement(u.a,{color:"primary",variant:"outlined"},l.a.createElement(b.a,null)),l.a.createElement(T,null)),l.a.createElement(s.a,null,l.a.createElement(k,{elevation:3},l.a.createElement(h.a,{variant:"h6",component:"h1"},"귀국 후 군입대"),l.a.createElement(h.a,null,"중국에서의 10년 정도의 유학 생활",l.a.createElement("br",null),"부모님의 결정에 따라야 할 시기를 지나서 스스로 자신의 인생을 결정 할 수 있게 된 기점으로 미래를 구상한 후 ",l.a.createElement("br",null),l.a.createElement("strong",null,"중국에서의 삶이 내가 원하는 삶이 아니라고 느끼고 독립을 결심",l.a.createElement("br",null),"집에서 아무런 금전적인 지원을 받지 않는 조건으로 독립하기 위해서 먼저 한국 남자라면 언젠가는 마무리 지어야 할 병역 문제를 먼저 해결하기로 결심하고 귀국"),l.a.createElement("br",null),"육군 현역으로 입대를 했다.")))),l.a.createElement(o.a,null,l.a.createElement(i.a,null,l.a.createElement(h.a,{variant:"body2",color:"textSecondary"},"2017년")),l.a.createElement(m.a,null,l.a.createElement(u.a,{color:"secondary"},l.a.createElement(p.a,null)),l.a.createElement(c.a,null)),l.a.createElement(s.a,null,l.a.createElement(k,{elevation:3},l.a.createElement(h.a,{variant:"h6",component:"h1"},"전역 후 직업 탐색"),l.a.createElement(h.a,null,"무사히 전역 한후,",l.a.createElement("br",null),l.a.createElement("strong",null,"자신이 정한 인생의 목표인 등봉조극(登峰造極)을 위해서 직업을 신중히 탐색했고"),", 여러 시행착오 끝에 ",l.a.createElement("strong",null,"개발자를 업으로")," 삼기로 결정했다.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("small",null,"登峰造極(등봉조극): 산에 올라 정상에 도달한다는 뜻으로, 학문이나 기술이 심오한 경지에 도달함을 비유하여 이르는 말."))))),l.a.createElement(o.a,null,l.a.createElement(i.a,null,l.a.createElement(h.a,{variant:"body2",color:"textSecondary"},"2019년")),l.a.createElement(m.a,null,l.a.createElement(u.a,{color:"primary",variant:"outlined"},l.a.createElement(f.a,null)),l.a.createElement(T,null)),l.a.createElement(s.a,null,l.a.createElement(k,{elevation:3},l.a.createElement(h.a,{variant:"h6",component:"h1"},"페르소나"),l.a.createElement(h.a,null,"개발자가 되기로 결심 하고 계속 독학을 하는 와중에",l.a.createElement("br",null),"미완성인 이력서를 보고 온 입사제의를 받고 입사했다.",l.a.createElement("br",null),"처음 목표로 했던 ",l.a.createElement("strong",null,'"일단 개발을 할 수 있는 환경에서 개발을 잘 해보자"는 목표에 적합한 회사'),"였고,",l.a.createElement("br",null),"해당 회사의 ",l.a.createElement("strong",null,'1인 개발자로 "제로 베이스에서 부터 그래도 구색을 갖춘 회사가 되기 까지 모든 걸 자기가 닦아 볼 기회"라')," 여기고 목표를 위해서 노력하여서",l.a.createElement("br",null),"내가 원하던 목표인 개발을 통해서 ",l.a.createElement("strong",null,"해당 회사의 프로젝트 개발(SI, 공공기관 + 대기업 계열사), 기본적인 솔루션 개발(자사 제품 + 개발 라이브러리), 기본적인 개발 환경 구축 등",l.a.createElement("br",null),"을 이루고")," 그 과정에서 쌓였던 스트레스 요인인 사내 정치 + 낮은 연봉 + 시너지 없는 환경을 이유로 퇴사 후 다시 독학을 시작했다.")))),l.a.createElement(o.a,null,l.a.createElement(i.a,null,l.a.createElement(h.a,{variant:"body2",color:"textSecondary"},"2020년")),l.a.createElement(m.a,null,l.a.createElement(u.a,{color:"secondary",variant:"outlined"},l.a.createElement(f.a,null)),l.a.createElement(c.a,null)),l.a.createElement(s.a,null,l.a.createElement(k,{elevation:3},l.a.createElement(h.a,{variant:"h6",component:"h1"},"더블디 그 후 서울로"),l.a.createElement(h.a,null,"전 회사를 퇴사후 공부하는 시간 과 코로나 19 사태를 피해서 은둔 생활 보내다",l.a.createElement("br",null),"대구 지역의 코로나 19 대확산이 진정 국면에 들어선 것을 보며 다시 구직활동을 시작했다.",l.a.createElement("br",null),"목표는 ",l.a.createElement("strong",null,'"오픈소스 개발 또는 컨트리뷰터가 가능할 정도로 자신의 실력을 키우고, 협업을 할 수 있는 환경, 1년차 전에 연봉 3천 이상"'),l.a.createElement("br",null),"이였고 기술 스택 상 Node.js개발 그리고 React.js개발이 가능한 회사 위주로 컨텍하여 대구 소재의 해당 회사에 합격 후 입사",l.a.createElement("br",null),"처음 목표 였던 오픈소스 개발이 가능할 정도의 협업 환경을 만들기 위해서 여러모로 노력 하였으나, 배달 앱 벡엔드 REST API 개발 과정에서 해당 회사의 여건상",l.a.createElement("br",null),"처음 목표 였던 오픈소스 개발이 가능할 정도로 제대로 된 개발 환경을 구축하는게 회사 여건 상 불가능 하다는 걸 느껴서 퇴사를 했다.",l.a.createElement("br",null),l.a.createElement("strong",null,"여러모로 검토 해본 결과 대구에서는 내가 목표로 하는 것을 이룰 만한 환경을 찾기 힘들다는 걸 깨닫고 서울로 올라왔다."))))),l.a.createElement(o.a,null,l.a.createElement(i.a,null,l.a.createElement(h.a,{variant:"body2",color:"textSecondary"},"미래")),l.a.createElement(m.a,null,l.a.createElement(u.a,{color:"primary",variant:"outlined"},l.a.createElement(f.a,null)),l.a.createElement(T,null)),l.a.createElement(s.a,null,l.a.createElement(k,{elevation:3},l.a.createElement(h.a,{variant:"h6",component:"h1"},"미래의 지향점"),l.a.createElement(h.a,null,"나는 처음부터 직업을 선택할때 ",l.a.createElement("strong",null,"登峰造極(등봉조극) 또는 庖丁解牛(포정해우)라 부르는 일종의 경지를 목표로")," 직업을 선택했고",l.a.createElement("br",null),"그로 인해서 ",l.a.createElement("strong",null,"내가 개발자라는 업을 삼으면서 목표로 삼았던 것은 바로 귀도 반 로섬(파이썬 창시자) 와 같이 메이저한 언어를 개발 하는 것이다."),l.a.createElement("br",null),"그러나, 해당 목표는 ",l.a.createElement("strong",null,"너무 거대한 목표이기에 해당 목표를 위해서 차근차근 작은 목표를 만들어서 하나씩 이루어가고 있는중이다."),l.a.createElement("br",null),l.a.createElement("br",null),'지금까지 이룬 목표는 "1. 개발 회사에서 일 잘 해보자. 2. 1년차 쯤 연봉 3천넘기자." 이고 ',l.a.createElement("br",null),"지금 당장의 목표는 ",l.a.createElement("strong",null,'"1.오픈소스 개발(컨트리뷰터)과 네카라 같은 IT 기업에서 S급 인재가 되어보자."'),"이다.")))))}},162:function(e,a,t){"use strict";t.r(a),t.d(a,"Main",(function(){return U}));var n=t(0),l=t.n(n),r=t(35),c=t(33),o=t(107),i=t.p+"assets/14de6c83fa9a45e8a2ef10f1fa7bfa1c.png";const m=c.c`
    0%{border-right: 1px solid #fff} 
    50%{border-right: 1px solid #000} 
    100%{border-right: 1px solid #fff} 
`,u=c.c`
    0%{opacity : 0.9} 
    50%{opacity : 0.8} 
    100%{opacity : 1} 
`,s=c.b.div`
    width : 100%;
    min-height : 380px;
    text-align : center;
    color : white;
    background-image : url('${i}');
    background-size : cover;
`,E=c.b.h1`
    display : inline-block;
    margin : 90px 0 20px 0;
    font-size : ${e=>e.isEnd?"2.5rem":"2rem"};
    line-height : 2rem;
    color : #eaeaea;
    &:after {
        content : '';
        animation : ${e=>e.isEnd?"none":m} 0.5s step-end infinite;
    }
`,d=c.b.span`
    display : inline-block;
    margin : 20px 8px;
    font-size : 1.3rem;
    line-height : 1.6rem;
    color : #08d9d6;
    animation : ${e=>e.isEnd?u:"none"} 0.5s step-end infinite;
    &:after {
        content : '';
        animation : ${e=>e.isStart&&!1===e.isEnd?m:"none"} 0.5s step-end infinite;
    }
`,b=c.b.span`
    display : inline-block;
    font-size : 1.2rem;
    line-height : 1.5rem;
    color : #ff2e63;
    &:after {
        content : '';
        animation : ${e=>e.isStart?m:"none"} 0.5s step-end infinite;
    }
`;var p=function(){const[e,a]=Object(n.useState)(""),[t,r]=Object(n.useState)(""),[c,o]=Object(n.useState)(""),[i,m]=Object(n.useState)(0),[u,p]=Object(n.useState)(!1),[f,g]=Object(n.useState)(!1),[h,y]=Object(n.useState)(100),v=()=>{const n={greeting:"Hello, World!",aboutme:"소프트웨어 장인을 목표로 노력하는 개발자 류윤종입니다.",description:["JavaScript(TypeScript)를 이용한 풀스택 개발을 지향합니다.","클린 코드, 누구나 이해하기 쉬운 코드 견고한 구조를 지향합니다.","늘 표면을 넘어 그 너머의 원리를 고민합니다."]};if(e.length<n.greeting.length)s(a,`${e}${l("greeting")[e.length]}`);else if(t.length<n.aboutme.length)s(r,`${t}${l("aboutme")[t.length]}`),!1===u&&p(!0);else if(c.length<n.description[i].length)c.length===n.description[i].length-1&&y(800),s(o,`${c}${l("description")[c.length]}`),!1===f&&(g(!0),y(150));else{let e=0;i+1<n.description.length?(e=1+i,m(1+i)):(e=0,m(0)),y(150),s(o,n.description[e][0])}function l(e){return"description"===e?n[e][i].split(""):n[e].split("")}function s(e,a){e(a)}};return Object(n.useEffect)(()=>{const e=setTimeout(v,h);return()=>{clearTimeout(e)}},[e,t,c]),l.a.createElement(s,null,l.a.createElement(E,{className:"intro-hello",isEnd:u},e,l.a.createElement("span",null)),l.a.createElement("p",null,l.a.createElement(d,{isStart:u,isEnd:f},t)),l.a.createElement("p",null,l.a.createElement(b,{isStart:f},c)))},f=t(119),g=t(143),h=t.n(g),y=t.p+"assets/35ed6fad4738af33462d9332e10c4191.png",v=t.p+"assets/dc7f352cd167d07dd9a988ffe60660c1.png",x=t.p+"assets/7a0d16d7fde44b925665d5cf14a9f2ba.png",k=t.p+"assets/eb0e4f9ace00657cc913616fe6bdfbac.png",T=t.p+"assets/4dce8ad7b91507d9ff663ab772c697bd.png",S=t.p+"assets/987182bf6f43efbf5b79975fb6128b34.png",O=t.p+"assets/6aff2fa26fa87bebf356d58233dc1c40.png",j=t.p+"assets/d23b6d26720f10b5f922d74acc31a377.png",I=t.p+"assets/c30b7e49958fd134f6bca0e405f07d32.png",w=t.p+"assets/8a40ac730a490744bbcbf6c707ff21a2.png",N=t.p+"assets/9bdea57b03a37e89d69e1f5274eaca00.png",C=t.p+"assets/6e42b2a035b28f24002127c163e271e1.png",M=t.p+"assets/d6dac60bc475746dd6ab33a767e7700d.png",$=t.p+"assets/87d6f4cd09df86bfeaed71bcad9e6ad4.png",A=t.p+"assets/38c4f29a0d66174a0c65a3e4a076f90c.png",z=t.p+"assets/ec1ba1629a102935eb91b2693f2f5fbb.png",L=t.p+"assets/cf55c87b3ac8f1ad0a32e5408e50107e.png",P=t.p+"assets/61d15811a0dccbced0917ba87a6ce627.png",R=t(41);const H=c.b.h3`
    padding : 10px 0;
    text-align : center;
    font-size : 1.2rem;
`,J=Object(c.b)(h.a)`
    padding : 4px 8px 0 0;
    vertical-align: bottom;
`,W=c.b.p`
    text-align : center;
`,B=c.b.img`
    max-width : 100px;
    max-height : 100px;
    margin : 16px;
    vertical-align : middle;
`;var Q=function(){const e=[{key:"HTML",value:y},{key:"CSS",value:v},{key:"Javascript",value:x},{key:"jQuery",value:T},{key:"WebPack",value:S},{key:"React",value:O},{key:"Vue",value:j},{key:"TypeScript",value:k}],a=[{key:"Node.js",value:I},{key:"PHP",value:w},{key:"Socket.IO",value:N},{key:"MySQL",value:C},{key:"PostgreSQL",value:M}],t=[{key:"Linux",value:$},{key:"Docker",value:A},{key:"Apache",value:z},{key:"Nginx",value:L},{key:"GIT",value:P},{key:"AWS",value:R.a}];return l.a.createElement(l.a.Fragment,null,l.a.createElement(H,null,l.a.createElement(J,null),"프론트 엔드"),l.a.createElement(W,null,e.map((e,a)=>l.a.createElement(B,{key:a,src:e.value,alt:e.key}))),l.a.createElement(H,null,l.a.createElement(J,null),"벡 엔드"),l.a.createElement(W,null,a.map((e,a)=>l.a.createElement(B,{key:a,src:e.value,alt:e.key}))),l.a.createElement(H,null,l.a.createElement(J,null),"데브 옵스"),l.a.createElement(W,null,t.map((e,a)=>l.a.createElement(B,{key:a,src:e.value,alt:e.key}))))},F=t(104);const G=Object(c.b)(r.b)`
    text-decoration : none;
    color : unset;
`,_=c.b.h2`
    text-align : center;
    font-size : 1.5rem;
`,D=c.b.p`
    text-align : center;
    font-size: 1.1rem;
    line-height: 1.6rem;
`,U=function(e){const a=Object(F.a)();return l.a.createElement(o.a,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"main-headline"},l.a.createElement(p,null)),l.a.createElement("section",{className:"main-about"},l.a.createElement(_,null,"개인 연력"),l.a.createElement(G,{to:"./about",title:"더 알아보기",onClick:e=>{return t=1,a.handleTapIndex(t),void window.scrollTo(0,0);var t}},l.a.createElement(f.a,null))),l.a.createElement("section",{className:"main-skill"},l.a.createElement(_,null,"기술 스택"),l.a.createElement(D,null,"실무에서 실제로 사용해 봤거나 토이 프로젝트에서 활용 해본적 있는 것들",l.a.createElement("br",null),"지금 당장 실무에 투입 되어서도 활용 가능한 수준의 기술 중 대표적인 것들입니다."),l.a.createElement(Q,null)),l.a.createElement("section",{className:"main-portfolio"},l.a.createElement(_,null,"포트폴리오"))))}}}]);
//# sourceMappingURL=7.3a57df03cc9ef4a29e94.js.map