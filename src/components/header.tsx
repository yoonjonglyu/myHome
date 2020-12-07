import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Tabs, Tab} from '@material-ui/core';

import { Action, Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { RootState } from '../reducers';

interface HeaderProps {
    tapIndex : number | false,
    handleTapIndex: Function
};

const useStyles = makeStyles(() => ({
    root: {
        position : 'fixed',
        width : '99%',
        top: 0,
        left: '0.5%',
        zIndex : 999999
    }
}));

const Header: React.FC<HeaderProps> = (props) => {
    const classes = useStyles();
    const {
        tapIndex,
        handleTapIndex
    } = props;
    const [value, setValue] = useState(tapIndex);
    
    const handleTap = (e : any, value : number) => {
        setValue(value);
        handleTapIndex(value);
        window.scrollTo(0, 0);
    }
    useEffect(() => {
        if(tapIndex === false){
            const state : Array<string> = location.hash.split('\/');
        
            switch(state[1]){
                case '':
                    setValue(0);
                    handleTapIndex(0);
                    break;
                case 'about':
                    setValue(1);
                    handleTapIndex(1);
                    break;
                case 'essay':
                    setValue(2);
                    handleTapIndex(2);
                    break;
                case 'tech':
                    setValue(3);
                    handleTapIndex(3);
                    break;
                case 'portfolio':
                    setValue(4);
                    handleTapIndex(4);
                    break;
                default:
                    break;
            }
        }
    }, []);

    return (
        <header className={classes.root}>
            <Paper component="nav">
                <Tabs
                    value={value}
                    onChange={handleTap}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab label="Main" component={Link} to="/" />
                    <Tab label="About" component={Link} to="/about" />
                    <Tab label="Essay" component={Link} to="/essay" />
                    <Tab label="Tech" component={Link} to="/tech" />
                    <Tab label="Portfolio" component={Link} to="/portfolio" />

                </Tabs>
            </Paper>
        </header>
    );
};

const mapStateToProps = ({ Taps } : RootState) => {
    return {
        tapIndex: Taps.tapIndex
    };
};

const mapDispatchToProps = (dispatch : Dispatch<Action<any>>) => {
    return {
        handleTapIndex : (value : number) => {dispatch(actions.TAPINDEX(value))} 
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);