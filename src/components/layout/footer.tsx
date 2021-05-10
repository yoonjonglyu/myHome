import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import Contact from '../contact';

interface FooterProps {
}

const useStyles = makeStyles((theme) => ({
    root : {
      textAlign : 'center',
      fontSize : '1.2rem',
    },
    copyRight : {
        color : 'gray'
    }
}));

const Footer: React.FC<FooterProps> = () => {
    const classes = useStyles();

    return (
        <footer className={classes.root}>
            <Paper>
                <Contact />
                <small className={classes.copyRight}>
                    Copyright© ISA(yoonjonglyu)
                </small>
            </Paper>
        </footer>
    );
};


export default Footer;