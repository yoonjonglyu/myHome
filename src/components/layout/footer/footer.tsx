import React from 'react';
import Paper from '@material-ui/core/Paper';
import Styled from 'styled-components';

import Contact from '../../ui/organisms/contact';

interface FooterProps {
}

const FooterArea = Styled.footer`
    text-align : center;
    font-size : 1.2rem;
`;
const CopyRight = Styled.small`
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