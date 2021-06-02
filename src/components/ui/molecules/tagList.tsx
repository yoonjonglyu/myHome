import React, { useState } from 'react';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Chip, Paper } from '@material-ui/core';

interface TagListProps {
  tagList: Array<TagProps>
}
interface TagProps {
  idx: number
  name: string
}

const UlPaper = Styled(Paper)`
  display: flex;
  margin: 0;
  padding: 4px;
  flex-wrap: wrap;
  list-style: none;
`;
const LiChip: any = Styled(Chip)`
  margin: 4px;
  cursor: pointer
`;
const HeadLine = Styled.h2`
  display: block;
  margin: 8px 3px;
  font-size: 1rem;
  text-align: unset;
  color: #b83b5e;
`;

const TagList: React.FC<TagListProps> = (props) => {
  const {
    tagList
  } = props;
  const [chipData, setChipData] = useState(tagList);

  const TagItems = chipData.map((data) => {
    return (
      <li key={data.idx}>
        <LiChip
          label={data.name}
          component={Link}
          to={`?tags=${data.idx}`}
        />
      </li>
    );
  });

  return (
    <React.Fragment>
      <HeadLine># 태그리스트</HeadLine>
      <UlPaper component="ul">
        {TagItems}
      </UlPaper>
    </React.Fragment>
  );
};

export { TagList, TagListProps }