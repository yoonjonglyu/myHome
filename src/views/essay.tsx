import React from 'react';

import Layout from '../components/layout';
import ListView from '../components/listView';

interface EssayProps {
    
}

const Essay : React.FC<EssayProps> = () => {
    return(
        <Layout>
            <React.Fragment>
                <section className="essay-tag">
                    <h1>에세이 겸 일기</h1>
                    <ListView />
                </section>
                <section className="essay-items">
                    <p>
                        글쓰고 태그달고 댓글창달고 아직 좋은 아이디어가 안떠오른다.
                    </p>
                </section>
            </React.Fragment>
        </Layout>
    );
}

export default Essay;