import React from 'react';

import Layout from '../components/layout';
import ListView from '../components/listView';
import BlogPost from '../components/blogPost';

interface TechProps {
    
}

const Tech : React.FC<TechProps> = () => {
    return(
        <Layout>
            <React.Fragment>
                <section className="tech-list">
                    <h1>기술블로그</h1>
                    <p>이전글 다음 글 같은 글목록</p>
                    <ListView />
                </section>
                <section className="tech-contents">
                    <BlogPost />
                </section>
            </React.Fragment>
        </Layout>
    );
}

export default Tech;