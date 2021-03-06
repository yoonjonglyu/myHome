import React, { lazy, Suspense } from 'react';
import Styled from 'styled-components';

import { Layout } from '../components/layout/layout';
import ListView from '../components/ui/organisms/listView';
const BlogPost = lazy(() => import('../components/ui/organisms/blogPost'));
const PostList = lazy(() => import('../components/ui/organisms/postList').then((fc) => ({ default: fc.PostList })));

const Headline = Styled.h1`
    text-align : center;
    font-size : 1.2rem;
`;

const Tech: React.FC = function () {
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
};

export default Tech