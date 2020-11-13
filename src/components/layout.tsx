import React from 'react';
import { Container } from '@material-ui/core';

import Header from './header';
import Footer from './footer';

interface LayoutProps {
    children : React.ReactChild
}

const Layout : React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="wrap">
            <Header />
            <Container maxWidth="sm">
               {children}
            </Container>
            <Footer />
        </div>        
    );
};


export default Layout;