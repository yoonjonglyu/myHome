import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';
import { Paper, Tabs, Tab } from '@material-ui/core';

import { tabIndex } from '../../../lib/custom/tag';

interface HeaderProps {
};

const HeaderArea = Styled.header`
    position : fixed;
    width : 99%;
    top : 0;
    left : 0.5%;
    z-index : 999999;
`;

const Header: React.FC<HeaderProps> = (props) => {
    const tab = tabIndex();
    const [value, setValue] = useState(tab.tabIndex);

    const handleTap = (e: any, value: number) => {
        setValue(value);
        tab.handleTapIndex(value);
        window.scrollTo(0, 0);
    }
    useEffect(() => {
        if (tab.tabIndex === false) {
            const state: string = location.hash.split('\/')[1]?.split("?")[0];

            switch (state) {
                case '':
                    setValue(0);
                    tab.handleTapIndex(0);
                    break;
                case 'about':
                    setValue(1);
                    tab.handleTapIndex(1);
                    break;
                case 'essay':
                    setValue(2);
                    tab.handleTapIndex(2);
                    break;
                case 'tech':
                    setValue(3);
                    tab.handleTapIndex(3);
                    break;
                case 'portfolio':
                    setValue(4);
                    tab.handleTapIndex(4);
                    break;
                default:
                    break;
            }
        }
    }, []);

    return (
        <HeaderArea>
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
        </HeaderArea>
    );
};

export { Header, HeaderProps }