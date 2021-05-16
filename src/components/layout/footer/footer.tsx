import React from 'react';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';

import Contact from '../../contact';

interface FooterProps {
}

const FooterArea = styled.footer`
    text-align : center;
    font-size : 1.2rem;
`;
const CopyRight = styled.small`
    color : gray;
`;

const Footer: React.FC<FooterProps> = () => {
    return (
        <FooterArea>
            <Paper>
                <Contact />
                <CopyRight>
                    Copyright© ISA(yoonjonglyu)
                </CopyRight>
            </Paper>
        </FooterArea>
    );
};


export { Footer, FooterProps };