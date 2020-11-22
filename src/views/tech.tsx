import React from 'react';

import Layout from '../components/layout';
import ListView from '../components/listView';
import BlogPost from '../components/blogPost';
import PostList from '../components/postList';

interface TechProps {
    
}

const Tech : React.FC<TechProps> = () => {
    const tempProps = true;

    const TechContents =  tempProps ? PostList : BlogPost;

    return(
        <Layout>
            <React.Fragment>
                <section className="tech-list">
                    <h1>기술블로그</h1>
                    <p>이전글 다음 글 같은 글목록</p>
                    <ListView />
                </section>
                <section className="tech-contents">
                    <TechContents />
                </section>
            </React.Fragment>
        </Layout>
    );
}

export default Tech;