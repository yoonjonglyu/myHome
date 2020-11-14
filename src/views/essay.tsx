import React from 'react';

import Layout from '../components/layout';

interface EssayProps {
    
}

const Essay : React.FC<EssayProps> = () => {
    return(
        <Layout>
            <React.Fragment>
                <section className="essay-tag">
                    <h1>에세이 겸 일기</h1>
                    <p>
                        블로그는 개인적인 이야기(수필이나 감상)등을 올릴 생각이라 태그로 관리한다. 검색 기능 넣으면 좋을듯
                    </p>
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