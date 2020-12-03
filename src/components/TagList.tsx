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
    display: 'flex',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
    cursor : 'pointer'
  },
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
          to={`tags/${data.key}`}
          label={data.label}
          className={classes.chip}
          component={Link}
        />
      </li>
    );
  });

  return (
    <Paper component="ul" className={classes.root}>
      {TagItems}
    </Paper>
  );
};

export default TagList;