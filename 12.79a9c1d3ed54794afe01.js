(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{162:function(e,t,a){"use strict";a.r(t),a.d(t,"Main",(function(){return B}));var n=a(0),l=a.n(n),c=a(35),s=a(33),i=a(106),r=a.p+"assets/14de6c83fa9a45e8a2ef10f1fa7bfa1c.png";const o=s.c`
    0%{border-right: 1px solid #fff} 
    50%{border-right: 1px solid #000} 
    100%{border-right: 1px solid #fff} 
`,p=s.c`
    0%{opacity : 0.9} 
    50%{opacity : 0.8} 
    100%{opacity : 1} 
`,d=s.b.div`
    width : 100%;
    min-height : 380px;
    text-align : center;
    color : white;
    background-image : url('${r}');
    background-size : cover;
`,u=s.b.h1`
    display : inline-block;
    margin : 90px 0 20px 0;
    font-size : ${e=>e.isEnd?"2.5rem":"2rem"};
    line-height : 2rem;
    color : #eaeaea;
    &:after {
        content : '';
        animation : ${e=>e.isEnd?"none":o} 0.5s step-end infinite;
    }
`,f=s.b.span`
    display : inline-block;
    margin : 20px 8px;
    font-size : 1.3rem;
    line-height : 1.6rem;
    color : #08d9d6;
    animation : ${e=>e.isEnd?p:"none"} 0.5s step-end infinite;
    &:after {
        content : '';
        animation : ${e=>e.isStart&&!1===e.isEnd?o:"none"} 0.5s step-end infinite;
    }
`,b=s.b.span`
    display : inline-block;
    font-size : 1.2rem;
    line-height : 1.5rem;
    color : #ff2e63;
    &:after {
        content : '';
        animation : ${e=>e.isStart?o:"none"} 0.5s step-end infinite;
    }
`;var m=function(){const[e,t]=Object(n.useState)(""),[a,c]=Object(n.useState)(""),[s,i]=Object(n.useState)(""),[r,o]=Object(n.useState)(0),[p,m]=Object(n.useState)(!1),[g,E]=Object(n.useState)(!1),[h,k]=Object(n.useState)(100),y=()=>{const n={greeting:"Hello, World!",aboutme:"소프트웨어 장인을 목표로 노력하는 개발자 류윤종입니다.",description:["JavaScript(TypeScript)를 이용한 풀스택 개발을 지향합니다.","클린 코드, 누구나 이해하기 쉬운 코드 견고한 구조를 지향합니다.","늘 표면을 넘어 그 너머의 원리를 고민합니다."]};if(e.length<n.greeting.length)d(t,`${e}${l("greeting")[e.length]}`);else if(a.length<n.aboutme.length)d(c,`${a}${l("aboutme")[a.length]}`),!1===p&&m(!0);else if(s.length<n.description[r].length)s.length===n.description[r].length-1&&k(800),d(i,`${s}${l("description")[s.length]}`),!1===g&&(E(!0),k(150));else{let e=0;r+1<n.description.length?(e=1+r,o(1+r)):(e=0,o(0)),k(150),d(i,n.description[e][0])}function l(e){return"description"===e?n[e][r].split(""):n[e].split("")}function d(e,t){e(t)}};return Object(n.useEffect)(()=>{const e=setTimeout(y,h);return()=>{clearTimeout(e)}},[e,a,s]),l.a.createElement(d,null,l.a.createElement(u,{className:"intro-hello",isEnd:p},e,l.a.createElement("span",null)),l.a.createElement("p",null,l.a.createElement(f,{isStart:p,isEnd:g},a)),l.a.createElement("p",null,l.a.createElement(b,{isStart:g},s)))},g=a(124),E=a(142),h=a.n(E),k=a.p+"assets/35ed6fad4738af33462d9332e10c4191.png",y=a.p+"assets/dc7f352cd167d07dd9a988ffe60660c1.png",v=a.p+"assets/7a0d16d7fde44b925665d5cf14a9f2ba.png",x=a.p+"assets/eb0e4f9ace00657cc913616fe6bdfbac.png",S=a.p+"assets/4dce8ad7b91507d9ff663ab772c697bd.png",j=a.p+"assets/987182bf6f43efbf5b79975fb6128b34.png",O=a.p+"assets/6aff2fa26fa87bebf356d58233dc1c40.png",$=a.p+"assets/d23b6d26720f10b5f922d74acc31a377.png",w=a.p+"assets/c30b7e49958fd134f6bca0e405f07d32.png",T=a.p+"assets/8a40ac730a490744bbcbf6c707ff21a2.png",z=a.p+"assets/9bdea57b03a37e89d69e1f5274eaca00.png",N=a.p+"assets/6e42b2a035b28f24002127c163e271e1.png",J=a.p+"assets/d6dac60bc475746dd6ab33a767e7700d.png",L=a.p+"assets/87d6f4cd09df86bfeaed71bcad9e6ad4.png",P=a.p+"assets/38c4f29a0d66174a0c65a3e4a076f90c.png",H=a.p+"assets/ec1ba1629a102935eb91b2693f2f5fbb.png",I=a.p+"assets/cf55c87b3ac8f1ad0a32e5408e50107e.png",M=a.p+"assets/61d15811a0dccbced0917ba87a6ce627.png",Q=a(41);const W=s.b.h3`
    padding : 10px 0;
    text-align : center;
    font-size : 1.2rem;
`,A=Object(s.b)(h.a)`
    padding : 4px 8px 0 0;
    vertical-align: bottom;
`,C=s.b.p`
    text-align : center;
`,F=s.b.img`
    max-width : 100px;
    max-height : 100px;
    margin : 16px;
    vertical-align : middle;
`;var D=function(){const e=[{key:"HTML",value:k},{key:"CSS",value:y},{key:"Javascript",value:v},{key:"jQuery",value:S},{key:"WebPack",value:j},{key:"React",value:O},{key:"Vue",value:$},{key:"TypeScript",value:x}],t=[{key:"Node.js",value:w},{key:"PHP",value:T},{key:"Socket.IO",value:z},{key:"MySQL",value:N},{key:"PostgreSQL",value:J}],a=[{key:"Linux",value:L},{key:"Docker",value:P},{key:"Apache",value:H},{key:"Nginx",value:I},{key:"GIT",value:M},{key:"AWS",value:Q.a}];return l.a.createElement(l.a.Fragment,null,l.a.createElement(W,null,l.a.createElement(A,null),"프론트 엔드"),l.a.createElement(C,null,e.map((e,t)=>l.a.createElement(F,{key:t,src:e.value,alt:e.key}))),l.a.createElement(W,null,l.a.createElement(A,null),"벡 엔드"),l.a.createElement(C,null,t.map((e,t)=>l.a.createElement(F,{key:t,src:e.value,alt:e.key}))),l.a.createElement(W,null,l.a.createElement(A,null),"데브 옵스"),l.a.createElement(C,null,a.map((e,t)=>l.a.createElement(F,{key:t,src:e.value,alt:e.key}))))},G=a(104);const R=Object(s.b)(c.b)`
    text-decoration : none;
    color : unset;
`,V=s.b.h2`
    text-align : center;
    font-size : 1.5rem;
`,q=s.b.p`
    text-align : center;
    font-size: 1.1rem;
    line-height: 1.6rem;
`,B=function(e){const t=Object(G.a)();return l.a.createElement(i.a,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"main-headline"},l.a.createElement(m,null)),l.a.createElement("section",{className:"main-about"},l.a.createElement(V,null,"개인 연력"),l.a.createElement(R,{to:"./about",title:"더 알아보기",onClick:e=>{return a=1,t.handleTapIndex(a),void window.scrollTo(0,0);var a}},l.a.createElement(g.a,null))),l.a.createElement("section",{className:"main-skill"},l.a.createElement(V,null,"기술 스택"),l.a.createElement(q,null,"실무에서 실제로 사용해 봤거나 토이 프로젝트에서 활용 해본적 있는 것들",l.a.createElement("br",null),"지금 당장 실무에 투입 되어서도 활용 가능한 수준의 기술 중 대표적인 것들입니다."),l.a.createElement(D,null)),l.a.createElement("section",{className:"main-portfolio"},l.a.createElement(V,null,"포트폴리오"))))}}}]);
//# sourceMappingURL=12.79a9c1d3ed54794afe01.js.map