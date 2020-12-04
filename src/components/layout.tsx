import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Header from './header';
import Footer from './footer';

interface LayoutProps {
    children : React.ReactChild
}

const useStyles = makeStyles((theme) => ({
    root : {
        paddingTop : '50px',
        minHeight : '90vh'
    }
}));


const Layout : React.FC<LayoutProps> = ({ children }) => {
    const classes = useStyles();

    return (
        <div className="wrap">
            <Header />
            <Container
             maxWidth="md"
             className={`container ${classes.root}`}
             component="article"
             >
               {children}
            </Container>
            <Footer />
        </div>        
    );
};


export default Layout;