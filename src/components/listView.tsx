import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import ListItem from './listItem';

import { Action, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RootState } from '../reducers';

interface ListViewProps {
    tagList: {
        essay: Array<TagProps>
        tech: Array<TagProps>
        portfolio: Array<TagProps>
    }
    tapIndex: number | false
}
interface TagProps {
    idx : number
    name : string
}

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    }
}));

const ListView: React.FC<ListViewProps> = (props) => {
    const classes = useStyles();
    const {
        tagList,
        tapIndex
    } = props;
    const [tags, setTags]: Array<any> = useState([]);

    useEffect(() => {
        let state: object;
        switch (tapIndex) {
            case 2:
                state = tagList.essay;
                break;
            case 3:
                state = tagList.tech;
                break;
            case 4:
                state = tagList.portfolio;
                break;
            default:
                state = [];
                break;
        }
        setTags(state);
    }, [tapIndex, tagList]);

    const ListRow = (
        <Grid container item xs={12} spacing={1}>
            <ListItem children={tags} />
        </Grid>
    );

    return (
        <Grid container spacing={1} component="nav" className={classes.root}>
            {ListRow}
        </Grid>
    );
};

const mapStateToProps = ({ TagList, Taps }: RootState) => {
    return {
        tagList: TagList.tagList,
        tapIndex: Taps.tapIndex
    };
};

const mapDispatchToProps = (dispatch: Dispatch<Action<any>>) => {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListView);