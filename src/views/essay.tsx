import React, { lazy, Suspense } from 'react';
import styled from 'styled-components';

import Layout from '../components/layout/layout';
import ListView from '../components/listView';
const BlogPost = lazy(() => import('../components/blogPost'));
const PostList = lazy(() => import('../components/postList'));

interface EssayProps {

}
const Headline = styled.h1`
    text-align : center;
    font-size : 1.2rem;
`;

const Essay: React.FC<EssayProps> = () => {
    const isPost = location.hash.split('?')[1]?.split("=")[0];
    const EssayContents = isPost === "post" ? BlogPost : PostList;
    return (
        <Layout>
            <React.Fragment>
                <section className="essay-tag">
                    <Headline>에세이</Headline>
                    <ListView />
                </section>
                <section className="essay-contents">
                    <Suspense fallback="">
                        <EssayContents />
                    </Suspense>
                </section>
            </React.Fragment>
        </Layout>
    );
}

export default Essay;