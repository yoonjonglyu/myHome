import React from 'react';
import Styled from 'styled-components';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import { GitHub, Email, Description } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { lightBlue, pink, deepOrange } from '@material-ui/core/colors';

import profile from '../../../assets/pdf/programmers-ISA.pdf';

const Container = Styled(Card)`
    text-align: center;
`;
const HeadLine = Styled.h1`
    margin: 8px 0;
`;
const ContactList = Styled.ul`
    list-style: none;
    margin: 8px auto;
    padding: 0;
`;
const ContractItem = Styled.li`
    display: inline-block;
    margin: 5px;
`;

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

const Contact: React.FC = () => {
    const classes = useStyles();

    return (
        <Container>
            <HeadLine>CONTACT</HeadLine>
            <ContactList>
                <ContractItem><a href="https://github.com/yoonjonglyu/" target="_blank" title="ISA GITHUB" rel="noreferrer"><Avatar className={classes.lightBlue}><GitHub /></Avatar></a></ContractItem>
                <ContractItem><a href="mailto:isa@kakao.com" title="메일보내기"><Avatar className={classes.pink}><Email /></Avatar></a></ContractItem>
                <ContractItem><a href={profile} target="_blank" title="이력서" ><Avatar className={classes.deepOrange}><Description /></Avatar></a></ContractItem>
            </ContactList>
        </Container>
    );
};


export default Contact