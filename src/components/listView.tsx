import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import ListItem from './listItem';

interface ListViewProps {
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    }
}));

const ListView: React.FC<ListViewProps> = (props) => {
    const classes = useStyles();

    const data = [
        [{ name: 'test1' }, { name: 'test1232323' }, { name: 'test1aasdsada' }],
        [{ name: 'test1' }, { name: 'test1232323' }, { name: 'test1aasdsada' }],
        [{ name: 'test1' }, { name: 'test1232323' }, { name: 'test1aasdsada' }]
    ];

    const ListRow = data.map((items: Array<any>, key : number) => {
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

export default ListView;