import React from 'react';
import Styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';

const LoadingProgress = Styled(CircularProgress)`
    display: block !important;
    margin: 35vh auto 0;
`;

const Loading: React.FC = function () {
    return (
        <LoadingProgress />
    );
}

export default Loading;