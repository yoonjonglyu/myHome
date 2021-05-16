import React from 'react';
import { Container } from '@material-ui/core';
import styled from 'styled-components';

import Header from './header/header';
import Footer from './footer/footer';

interface LayoutProps {
    children: React.ReactChild
}

const MainContainer = styled(Container)`
    padding : 50px 0 0 0;
    minHeight : 90vh;
`


const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="wrap">
            <Header />
            <main role="main">
                <MainContainer
                    maxWidth="md"
                >
                    {children}
                </MainContainer>
            </main>
            <Footer />
        </div>
    );
};


export default Layout;