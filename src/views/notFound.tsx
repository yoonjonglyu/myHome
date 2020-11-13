import React from 'react';

import Layout from '../components/layout';

interface NotFoundProps {
    
}

const NotFound : React.FC<NotFoundProps> = () => {
    return (
        <Layout>
            <h1>
                Not FOUND PAGES!! 404.
            </h1>
        </Layout>
    )
}

export default NotFound;