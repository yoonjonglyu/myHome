import React from 'react';
import Paper from '@material-ui/core/Paper';

import Contact from '../components/contact';

interface FooterProps {
}

const Footer: React.FC<FooterProps> = () => {
    return (
        <footer >
            <Paper>
                <Contact />
                <small>
                    Copyright© ISA(yoonjonglyu)
                </small>
            </Paper>
        </footer>
    );
};


export default Footer;