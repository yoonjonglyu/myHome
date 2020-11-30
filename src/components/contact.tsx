import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import { lightBlue, pink, deepOrange } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';
import { GitHub, Email, Description } from '@material-ui/icons';

import profile from '../assets/pdf/programmers-ISA.pdf';

interface ContactProps {
}

const useStyles = makeStyles((theme) => ({
    root : {
      textAlign : 'center',  
    },
    ul : {
        listStyle : 'none',
        margin : '8px auto',
        padding : 0
    },
    li : {
        display : 'inline-block',
        margin: '5px'
    },
    h1 : {
        margin: '8px 0'
    },
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
        <Card className={classes.root}>
            <h1 className={classes.h1}>CONTACT</h1>
            <ul className={classes.ul}>
                <li className={classes.li}><a href="https://github.com/yoonjonglyu/" target="_blank" title="ISA GITHUB" ><Avatar className={classes.lightBlue}><GitHub /></Avatar></a></li>
                <li className={classes.li}><a href="mailto:isa@kakao.com" title="메일보내기"><Avatar className={classes.pink}><Email /></Avatar></a></li>
                <li className={classes.li}><a href={profile} target="_blank" title="이력서" ><Avatar className={classes.deepOrange}><Description /></Avatar></a></li>
            </ul>
        </Card>
    );
};


export default Contact;