import React from 'react';
import MyListItem from '../CustomList/MyListItem';
import { Typography } from '@mui/material';
import { es } from 'date-fns/locale';
import { format } from 'date-fns';

const LastSearchesItem = ({ search, small = false }) => {
  const formattedDate = format(
    new Date(search.date),
    "dd 'de' MMMM 'de' yyyy 'a las' HH:mm:ss",
    {
      locale: es
    }
  );
  return (
    <MyListItem product={search.product} onRemove={null} small={small}>
      {!small && <Typography>{formattedDate}</Typography>}
    </MyListItem>
  );
};

export default LastSearchesItem;
