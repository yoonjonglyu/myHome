import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core';

interface ListItemProps {
    children: Array<any>
}

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        overflow: 'hidden'
    },
}));

const ListItem: React.FC<ListItemProps> = (props) => {
    const classes = useStyles();
    const {
        children
    } = props;

    interface ItemsProps {
        name: string
    };

    const Items = children.map((data: ItemsProps, key: number) => {
        return (
            <Grid item xs={3} key={key}>
                <Paper className={classes.paper}>{data.name}</Paper>
            </Grid>
        );
    });

    return (
        <React.Fragment>
            {Items}
        </React.Fragment>
    );
}

export default ListItem;