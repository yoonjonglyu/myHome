import React from 'react';
import Paper from '@material-ui/core/Paper';

interface FooterProps {
}

const Footer: React.FC<FooterProps> = () => {
    return (
        <footer >
            <Paper>
                <small>
                    Copyright© ISA(yoonjonglyu)
                </small>
            </Paper>
        </footer>
    );
};


export default Footer;