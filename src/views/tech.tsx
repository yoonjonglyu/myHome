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
    const isPost = location.hash.split('?')[1];
    const TechContents =  !isPost ? PostList : BlogPost;
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
                    <TechContents postData={tempPost}/>
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