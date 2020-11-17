import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Paper, Tabs, Tab} from '@material-ui/core';

import { Action, Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { RootState } from '../reducers';

interface HeaderProps {
    tapIndex : number,
    handleTapIndex: Function
};

const Header: React.FC<any> = (props: HeaderProps) => {
    const {
        tapIndex,
        handleTapIndex
    } = props;
    const [value, setValue] = useState(tapIndex);
    
    const handleTap = (e : any, value : number) => {
        setValue(value);
        handleTapIndex(value);
    }

    return (
        <header>
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