import React from 'react';

import Layout from '../components/layout';

interface EssayProps {
    
}

const Essay : React.FC<EssayProps> = () => {
    return(
        <Layout>
            <h1>에세이겸 일기(블로그)</h1>
        </Layout>
    );
}

export default Essay;