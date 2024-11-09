import React from 'react';
import MyListItem from '../CustomList/MyListItem';
import { Typography } from '@mui/material';

const LastSearchesItem = ({ search, small = false }) => {
  const { product } = search;

  return (
    <MyListItem product={search.product} onRemove={null} small={small}>
      <Typography>{search.date}</Typography>
    </MyListItem>
  );
};

export default LastSearchesItem;
