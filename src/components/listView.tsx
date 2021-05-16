import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import ListItem from './listItem';

import { tagList, tabIndex } from '../lib/custom/tag';

interface ListViewProps {

}

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    }
}));

const ListView: React.FC<ListViewProps> = (props) => {
    const classes = useStyles();
    const [tags, setTags]: Array<any> = useState([]);
    const tag = tagList();
    const tab = tabIndex();

    useEffect(() => {
        let state: object;
        switch (tab.tabIndex) {
            case 2:
                state = tag.tagList.essay;
                break;
            case 3:
                state = tag.tagList.tech;
                break;
            case 4:
                state = tag.tagList.portfolio;
                break;
            default:
                state = [];
                break;
        }
        setTags(state);
    }, [tab.tabIndex, tag.tagList]);

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


export default ListView