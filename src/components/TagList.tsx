import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Chip, Paper } from '@material-ui/core';

interface TagProps {
  key: number
  label: string
}

interface TagListProps {
  taglist: Array<TagProps>
}

const useStyles = makeStyles((theme) => ({
  root: {
    display : 'flex',
    flexWrap : 'wrap',
    listStyle : 'none',
    padding : theme.spacing(0.5),
    margin : 0,
  },
  chip : {
    margin : theme.spacing(0.5),
    cursor : 'pointer'
  },
  headLine: {
    display : 'block',
    margin : '8px 3px',
    fontSize : '1rem',
    textAlign : 'unset',
    color : '#b83b5e'
  }
}));

const TagList: React.FC<TagListProps> = (props) => {
  const classes = useStyles();
  const {
    taglist
  } = props;
  const [chipData, setChipData] = useState(taglist);

  const TagItems = chipData.map((data) => {
    return (
      <li key={data.key}>
        <Chip
          to={`?tags=${data.key}`}
          label={data.label}
          className={classes.chip}
          component={Link}
        />
      </li>
    );
  });

  return (
    <React.Fragment>
    <h2 className={classes.headLine}># 태그리스트</h2>
    <Paper component="ul" className={classes.root}>
      {TagItems}
    </Paper>
    </React.Fragment>
  );
};

export default TagList;