import React from 'react';

import Layout from '../components/layout';
import ListView from '../components/listView';
import BlogPost from '../components/blogPost';
import PostList from '../components/postList';

interface EssayProps {
    
}

const Essay : React.FC<EssayProps> = () => {
    const tempProps = false;

    const EssayContents =  tempProps ? PostList : BlogPost;

    return(
        <Layout>
            <React.Fragment>
                <section className="essay-tag">
                    <h1>에세이 겸 일기</h1>
                    <ListView />
                </section>
                <section className="essay-items">
                    <EssayContents />
                    <p>
                        아직 좋은 아이디어가 안떠오른다.
                    </p>
                </section>
            </React.Fragment>
        </Layout>
    );
}

export default Essay;