import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import ListView from '../components/listView';
import BlogPost from '../components/blogPost';
import PostList from '../components/postList';

interface TechProps {
    
}

const Headline = styled.h1`
    text-align : center;
    font-size : 1.2rem;
`;

const Tech : React.FC<TechProps> = () => {
    const isPost = location.hash.split('?')[1]?.split("=")[0];
    const TechContents = isPost === "post" ? BlogPost : PostList;

    return(
        <Layout>
            <React.Fragment>
                <section className="tech-list">
                    <Headline>기술 블로그</Headline>
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