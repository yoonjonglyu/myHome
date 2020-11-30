import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import ListItem from './listItem';

import { Action, Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { RootState } from '../reducers';

interface ListViewProps {
    data: {
        essay: Array<any>
        tech: Array<any>
        portfolio: Array<any>
    }
    tapIndex: number | false
}

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    }
}));

const ListView: React.FC<ListViewProps> = (props) => {
    const classes = useStyles();
    const {
        data,
        tapIndex
    } = props;
    const [tagList, setTagList]: Array<any> = useState([]);

    useEffect(() => {
        let state: object;
        switch (tapIndex) {
            case 2:
                state = data.essay;
                break;
            case 3:
                state = data.tech;
                break;
            case 4:
                state = data.portfolio;
                break;
            default:
                state = [];
                break;
        }
        setTagList(state);
    }, [ tapIndex ]);


    const ListRow = tagList.map((items: Array<any>, key: number) => {
        return (
            <Grid container item xs={12} spacing={1} key={key}>
                <ListItem children={items} />
            </Grid>
        );
    })

    return (
        <Grid container spacing={1} component="nav" className={classes.root}>
            {ListRow}
        </Grid>
    );
};

const mapStateToProps = ({ TagList, Taps }: RootState) => {
    return {
        data: TagList.tagList,
        tapIndex: Taps.tapIndex
    };
};

const mapDispatchToProps = (dispatch: Dispatch<Action<any>>) => {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListView);