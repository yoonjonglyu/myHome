(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{121:function(t,e,s){"use strict";s.d(e,"b",(function(){return a})),s.d(e,"a",(function(){return i}));var o=s(36),n=s(9);function a(){const{postList:t}=Object(o.c)(t=>({postList:t.PostList.PostList})),e=Object(o.b)();return{postList:t,getPostList:t=>{e(n.b(t))},getPostListByTag:(t,s)=>{e(n.c(t,s))}}}function i(){const{postContents:t}=Object(o.c)(t=>({postContents:t.PostContents.post})),e=Object(o.b)();return{postContents:t,getPostContents:(t,s)=>{e(n.a(t,s))}}}},126:function(t,e,s){"use strict";s.r(e);var o=s(0),n=s.n(o),a=s(35),i=s(33),c=s(121),l=s(104);const r=i.b.div`
    padding : 30px 0;
    border-bottom : 1px solid #dbe2ef;
`,p=Object(i.b)(a.b)`
    text-decoration : none;
    color : unset;
`,b=i.b.span`
    font-size : 0.9rem;
    color : gray;
`,d=i.b.h2`
    font-size : 2rem;
`,u=i.b.p`
    font-size : 1rem;
    color : #0f4c75;
`;e.default=function(t){var e;const{}=t,s=Object(c.b)(),a=Object(l.a)(),[i,m]=Object(o.useState)(null===(e=location.hash.split("?")[1])||void 0===e?void 0:e.split("=")[1]);Object(o.useEffect)(()=>{var t;const e=null===(t=location.hash.split("?")[1])||void 0===t?void 0:t.split("=");switch(a.tabIndex){case 2:"tags"===(null==e?void 0:e[0])?s.getPostListByTag("essay",e[1]):s.getPostList("essay");break;case 3:"tags"===(null==e?void 0:e[0])?s.getPostListByTag("tech",e[1]):s.getPostList("tech");break;case 4:"tags"===(null==e?void 0:e[0])?s.getPostListByTag("portfolio",e[1]):s.getPostList("portfolio")}const o=setInterval(()=>{var t,e;i!==(null===(t=location.hash.split("?")[1])||void 0===t?void 0:t.split("=")[1])&&m(null===(e=location.hash.split("?")[1])||void 0===e?void 0:e.split("=")[1])});return()=>{clearInterval(o)}},[a.tabIndex,i]);const g=s.postList.length>0?s.postList.map((t,e)=>n.a.createElement(r,{key:e},n.a.createElement(p,{to:"?post="+t.postIdx},n.a.createElement(b,{className:"post-meta"},n.a.createElement("time",{dateTime:t.postDate},t.postDate)," ",t.postAuthor),n.a.createElement(d,{className:"post-title"},t.postTitle),n.a.createElement(u,{className:"post-description"},t.postDescription)))):n.a.createElement(r,null," ",n.a.createElement(d,{style:{textAlign:"center"}},"원하시는 조건에 해당 하는 글이 없습니다.")," ");return n.a.createElement("div",{className:"post-list"},g)}}}]);
//# sourceMappingURL=2.d8711d377062b2647581.js.map