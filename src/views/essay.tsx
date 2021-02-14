import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import ListView from '../components/listView';
import BlogPost from '../components/blogPost';
import PostList from '../components/postList';

interface EssayProps {
    
}
const Headline = styled.h1`
    text-align : center;
    font-size : 1.2rem;
`;

const Essay : React.FC<EssayProps> = () => {
    const isPost = location.hash.split('?')[1]?.split("=")[0];
    const EssayContents = isPost === undefined  ? PostList : BlogPost;
    return(
        <Layout>
            <React.Fragment>
                <section className="essay-tag">
                    <Headline>에세이</Headline>
                    <ListView />
                </section>
                <section className="essay-contents">
                    <EssayContents />
                </section>
            </React.Fragment>
        </Layout>
    );
}

export default Essay;