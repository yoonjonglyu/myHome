import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import ListItem from './listItem';

import { connect } from 'react-redux';
import * as actions from '../actions';

interface ListViewProps {
    data : Array<any>
}

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    }
}));

const ListView: React.FC<ListViewProps> = (props) => {
    const classes = useStyles();
    const {
        data
    } = props;

    const tempData = [// 해당 데이터를 어떻게 만드냐에 따라 뷰가 달라진다. 뷰모델 부분에서 가공할 필요가 있다.
        [{ name: 'test1' }, { name: 'test1232323' }, { name: 'test1aasdsada' }],
        [{ name: 'test1' }, { name: 'test1232323' }, { name: 'test1aasdsada' }],
        [{ name: 'test1' }, { name: 'test1232323' }, { name: 'test1aasdsada' }]
    ];
    
    const tagList = data.length > 0 ? data : tempData; 

    const ListRow = tagList.map((items: Array<any>, key : number) => {
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

const mapStateToProps = ({ TagList } : React.ComponentState) => {
    return {
        data : TagList.tagList
    };
};

const mapDispatchToProps = (dispatch : React.Dispatch<Function>) => {
    return {
        
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListView);