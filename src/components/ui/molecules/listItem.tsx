import React from 'react';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';
import { Paper, Grid } from '@material-ui/core';

interface ListItemProps {
    children: Array<{
        idx: number
        name: string
    }>
}

const TagItem = Styled(Paper)`
    padding: 8px;
    text-align: center;
    font-size: 0.8rem;
    color: #364f6b !important;
    overflow: hidden;
`;

const ListItem: React.FC<ListItemProps> = function (props) {
    const {
        children
    } = props;

    return (
        <React.Fragment>
            {
                children.map((data) => {
                    return (
                        <Grid item xs={3} key={data.idx}>
                            <Link to={`?tags=${data.idx}`} style={{ textDecoration: "none" }}>
                                <TagItem>{data.name}</TagItem>
                            </Link>
                        </Grid>
                    );
                })
            }
        </React.Fragment>
    );
}

export { ListItem, ListItemProps }