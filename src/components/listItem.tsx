import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core';

interface ListItemProps {
    children: Array<ItemsProps>
}
interface ItemsProps {
    idx: number
    name: string
};

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(1),
        textAlign: "center",
        fontSize: "0.8rem",
        color: "#364f6b",
        overflow: "hidden"
    },
}));

const ListItem: React.FC<ListItemProps> = function (props) {
    const classes = useStyles();
    const {
        children
    } = props;

    const Items = children.map((data) => {
        return (
            <Grid item xs={3} key={data.idx}>
                <Link to={`?tags=${data.idx}`} style={{ textDecoration: "none" }}>
                    <Paper className={classes.paper}>{data.name}</Paper>
                </Link>
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