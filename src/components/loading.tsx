import React from 'react';
import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';

import Layout from './layout';

const LoadingProgress =styled(CircularProgress)`
    display: block;
    margin: 35vh auto 0;
`;

const Loading = function () {
    return (
        <Layout>
            <React.Fragment>
                <LoadingProgress />
            </React.Fragment>
        </Layout>
    );
}

export default Loading;