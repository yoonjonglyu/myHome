import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import ListView from '../components/listView';
import BlogPost from '../components/blogPost';
import PostList from '../components/postList';

import { Action, Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { RootState } from '../reducers';

interface TechProps {
    
}

const Headline = styled.h1`
    text-align : center;
    font-size : 1.2rem;
`;

const Tech : React.FC<TechProps> = () => {
    const data = {
        postIdx : 1,
        postDate : "2020-12-01",
        postAuthor : "ISA",
        postTitle : "컨텐츠 리스트 임시 타이틀 길게 길게",
        postDescription : "낙원을 피어나는 되는 긴지라 피다. 바이며, 피가 이것이야말로 위하여 쓸쓸한 이것이다. 대고, 인간의 능히 있으랴? 두손을 이성은 용감하고 있는 끓는 보내는 사막이다. 찾아다녀도, 아름답고 찬미를 청춘의 이것이다. 동산에는 긴지라 대한 이상은 쓸쓸하랴? 곧 구하지 인간이 청춘의 얼마나 반짝이는 그들은 봄바람이다. 아니한 예가 같으며, 이것이다. 커다란 청춘 그림자는 이상 같이, 그들의 것이다."
    };
    const temp : Array<any> = [];
    const tempProps = false;

    const TechContents =  tempProps ? PostList : BlogPost;
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
    const tempPost = {
        postTitle : "블로그 글 타이틀",
        postDate : "2020-12-04",
        postAuthor : "ISA(류윤종)",
        postContent : tempContents,
        postTags : [
            {
                key : 0,
                label : "리액트"
            },
            {
                key : 2323,
                label : "웹팩"
            },
            {
                key : 1234,
                label : "타입스크립트"
            }
        ]
    };

    return(
        <Layout>
            <React.Fragment>
                <section className="tech-list">
                    <Headline>기술 블로그</Headline>
                    <ListView />
                </section>
                <section className="tech-contents">
                    <TechContents postList={temp} postData={tempPost}/>
                </section>
            </React.Fragment>
        </Layout>
    );
}

const mapStateToProps = (state : RootState) => {
    return {
    };
};

const mapDispatchToProps = (dispatch : Dispatch<Action<any>>) => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tech);