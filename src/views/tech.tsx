import React, { lazy, Suspense } from 'react';
import styled from 'styled-components';

import Layout from '../components/layout/layout';
import ListView from '../components/listView';
const BlogPost = lazy(() => import('../components/blogPost'));
const PostList = lazy(() => import('../components/postList'));

interface TechProps {

}

const Headline = styled.h1`
    text-align : center;
    font-size : 1.2rem;
`;

const Tech: React.FC<TechProps> = () => {
    const isPost = location.hash.split('?')[1]?.split("=")[0];
    const TechContents = isPost === "post" ? BlogPost : PostList;

    return (
        <Layout>
            <React.Fragment>
                <section className="tech-list">
                    <Headline>기술 블로그</Headline>
                    <ListView />
                </section>
                <section className="tech-contents">
                    <Suspense fallback="">
                        <TechContents />
                    </Suspense>
                </section>
            </React.Fragment>
        </Layout>
    );
}

export default Tech;