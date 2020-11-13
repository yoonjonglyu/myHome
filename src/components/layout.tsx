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
            <Container maxWidth="sm" style={{ borderLeft: '1px solid black', borderRight: '1px solid black', paddingTop : '12px', minHeight : '90vh'}}>
               {children}
            </Container>
            <Footer />
        </div>        
    );
};


export default Layout;