import React from 'react';
import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';

const LoadingProgress = styled(CircularProgress)`
    display: block;
    margin: 35vh auto 0;
`;

const Loading = function () {
    return (
        <React.Fragment>
            <LoadingProgress />
        </React.Fragment>
    );
}

export default Loading;