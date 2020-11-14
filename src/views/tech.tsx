import React from 'react';

import Layout from '../components/layout';

interface TechProps {
    
}

const Tech : React.FC<TechProps> = () => {
    return(
        <Layout>
            <React.Fragment>
                <section className="tech-list">
                    <h1>기술블로그</h1>
                    <p>이전글 다음 글 같은 글목록 + 태그를 통한 카테고리 분류 거기다 여유되면 검색 기능</p>
                </section>
                <section className="tech-contents">
                    <p>그냥 일반적인 블로그 글</p>
                    디스커스로 댓글창을 달아볼까 생각중이다.
                </section>
            </React.Fragment>
        </Layout>
    );
}

export default Tech;