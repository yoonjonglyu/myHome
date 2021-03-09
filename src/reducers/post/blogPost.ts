import { Reducer } from 'redux';
import * as actions from '../../actions';
import * as types from '../../actions/actionTypes';

interface BlogPostState {
    BlogPost : {
        postTitle : string
        postDate : string
        postAuthor : string
        postContent : string
        postTags : Array<{idx : number, name : string}>
    }
}

const tempContents = `
<h3>소제목은 h3로</h3>
<p>
    글은 기본적으로  p태그 안에 쓰고 단락마다 p태그를 열고 닫는다.<br />
    여러 라인으로 글을 쓰고 글 간격이나 기타등등<br />
    을 조정
</p>
<img src="https://github.com/yoonjonglyu/myHome/blob/master/src/assets/images/sam-test.jpg" alt="이미지는 img src로 단락 밖에" />
<p>
    이렇게 말이다. 해드라인도 p태그 밖에 위치한다.
</p>
<pre className="post-code"><span>code : js</span><br/><code>const</code> foo = bar;<br /><fc>console.log(foo);</fc></pre>
<p>
    코드는 pre로 감싸서 p태그 밖의 스타일링은 class를 통해서가 아니라 태그 자체로 스타일링 해야할거 같다.
</p>`;

const initialState : BlogPostState = {
    BlogPost : {
        postTitle : "블로그 글 타이틀",
        postDate : "2020-12-04",
        postAuthor : "ISA(류윤종)",
        postContent : tempContents,
        postTags : [
            {
                idx : 1,
                name : "리액트"
            },
            {
                idx : 2,
                name : "웹팩"
            },
            {
                idx : 3,
                name : "타입스크립트"
            }
        ]
    } 
}
const BlogPost : Reducer<BlogPostState, actions.BlogPostActions> = (state = initialState, action) => {
    if(action.type === types.POST_CONTENTS){
        return {
            ...state,
            BlogPost : action.payload
        };
    } else {
        return state;
    }
};

export default BlogPost;