import React from 'react';
import MyListItem from '../CustomList/MyListItem';
import { Typography } from '@mui/material';

const LastSearchesItem = ({ search }) => {
  const { product } = search;

  return (
    <MyListItem product={search.product} onRemove={null}>
      <Typography>{search.date}</Typography>
    </MyListItem>
  );
};

export default LastSearchesItem;
