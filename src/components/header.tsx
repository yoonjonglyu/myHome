import React, { Dispatch, useState } from 'react';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { connect } from 'react-redux';
import * as actions from '../actions';

interface HeaderProps {
    tapindex : number,
    handleTapIndex: Function
};

const Header: React.FC<any> = (props: HeaderProps) => {
    const {
        tapindex,
        handleTapIndex
    } = props;
    const [value, setValue] = useState(tapindex);
    
    const handleTap = (e : any, value : number) => {
        setValue(value);
        handleTapIndex(value);
    }

    return (
        <header>
            <Paper>
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

const mapStateToProps = ({ Taps } : any) => {
    return {
        tapindex: Taps.tapIndex
    };
};

const mapDispatchToProps = (dispatch : any) => {
    return {
        handleTapIndex : (value : number) => {dispatch(actions.TAPINDEX(value))} 
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);