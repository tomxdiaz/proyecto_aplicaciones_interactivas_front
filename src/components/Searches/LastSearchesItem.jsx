import React from 'react';
import MyListItem from '../CustomList/MyListItem';
import { Typography } from '@mui/material';
import { es } from 'date-fns/locale';
import { format } from 'date-fns';

const LastSearchesItem = ({ search }) => {
  const { product } = search;
  const formattedDate = format(
    new Date(search.date),
    "dd 'de' MMMM 'de' yyyy 'a las' HH:mm:ss",
    {
      locale: es
    }
  );

  return (
    <MyListItem product={search.product} onRemove={null}>
      <Typography>{formattedDate}</Typography>
    </MyListItem>
  );
};

export default LastSearchesItem;
