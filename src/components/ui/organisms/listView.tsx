import React, { useState, useEffect } from 'react';
import Styled from 'styled-components';
import { Grid } from '@material-ui/core';

import { ListItem } from '../molecules/listItem';

import { tagList, tabIndex } from '../../../lib/custom/tag';

interface ListViewProps {

}

const TagGrid: any = Styled(Grid)`
    flex-grow : 1;
`;

const ListView: React.FC<ListViewProps> = function (props) {
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

    return (
        <TagGrid container spacing={1} component="nav">
            <Grid container item xs={12} spacing={1}>
                <ListItem children={tags} />
            </Grid>
        </TagGrid>
    );
};


export default ListView