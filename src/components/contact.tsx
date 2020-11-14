import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import { lightBlue, pink, deepOrange } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';
import { GitHub, Email, Description } from '@material-ui/icons';

interface ContactProps {
}

const useStyles = makeStyles((theme) => ({
    pink: {
        color: theme.palette.getContrastText(pink[500]),
        backgroundColor: pink[500],
    },
    deepOrange: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
    },
    lightBlue: {
        color: '#fff',
        backgroundColor: lightBlue[900],
    },
}));

const Contact: React.FC<ContactProps> = () => {
    const classes = useStyles();

    return (
        <Card>
            <h1>CONTACT</h1>
            <ul>
                <li><a href="https://github.com/yoonjonglyu/" target="_blank" ><Avatar className={classes.lightBlue}><GitHub /></Avatar></a></li>
                <li><a href="mailto:isa@kakao.com" ><Avatar className={classes.pink}><Email /></Avatar></a></li>
                <li><a href="#" ><Avatar className={classes.deepOrange}><Description /></Avatar></a></li>
            </ul>
        </Card>
    );
};


export default Contact;