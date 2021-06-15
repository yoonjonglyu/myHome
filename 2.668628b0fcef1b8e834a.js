(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{121:function(t,e,s){"use strict";s.d(e,"b",(function(){return a})),s.d(e,"a",(function(){return c}));var o=s(36),n=s(9);function a(){const{postList:t}=Object(o.c)(t=>({postList:t.PostList.PostList})),e=Object(o.b)();return{postList:t,getPostList:t=>{e(n.b(t))},getPostListByTag:(t,s)=>{e(n.c(t,s))}}}function c(){const{postContents:t}=Object(o.c)(t=>({postContents:t.PostContents.post})),e=Object(o.b)();return{postContents:t,getPostContents:(t,s)=>{e(n.a(t,s))}}}},126:function(t,e,s){"use strict";s.r(e),s.d(e,"PostList",(function(){return m}));var o=s(0),n=s.n(o),a=s(35),c=s(33),i=s(121),r=s(104);const p=c.b.div`
    padding : 30px 0;
    border-bottom : 1px solid #dbe2ef;
`,l=Object(c.b)(a.b)`
    text-decoration : none;
    color : unset;
`,b=c.b.span`
    font-size : 0.9rem;
    color : gray;
`,u=c.b.h2`
    font-size : 2rem;
`,g=c.b.p`
    font-size : 1rem;
    color : #0f4c75;
`,m=function(t){const e=Object(i.b)(),s=Object(r.a)();Object(o.useEffect)(()=>{const t=new URLSearchParams;switch(s.tabIndex){case 2:o()?e.getPostListByTag("essay",n()):e.getPostList("essay");break;case 3:o()?e.getPostListByTag("tech",n()):e.getPostList("tech");break;case 4:o()?e.getPostListByTag("portfolio",n()):e.getPostList("portfolio")}function o(){return t.has("tags")&&null!==t.get("tags")}function n(){const e=t.get("tags");return null!==e?e:""}},[s.tabIndex]);const a=e.postList.length>0?e.postList.map((t,e)=>n.a.createElement(p,{key:e},n.a.createElement(l,{to:"?post="+t.postIdx},n.a.createElement(b,{className:"post-meta"},n.a.createElement("time",{dateTime:t.postDate},t.postDate)," ",t.postAuthor),n.a.createElement(u,{className:"post-title"},t.postTitle),n.a.createElement(g,{className:"post-description"},t.postDescription)))):n.a.createElement(p,null," ",n.a.createElement(u,{style:{textAlign:"center"}},"원하시는 조건에 해당 하는 글이 없습니다.")," ");return n.a.createElement("div",{className:"post-list"},a)}}}]);
//# sourceMappingURL=2.668628b0fcef1b8e834a.js.map