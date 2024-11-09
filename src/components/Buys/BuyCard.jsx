import React from 'react';
import { Typography, Box, Divider } from '@mui/material';
import { es } from 'date-fns/locale';
import { format } from 'date-fns';

import { CustomCardImage, ItemBox } from './BuyCard.styles';

const BuyCard = ({ buy }) => {
  const formattedDate = format(
    new Date(buy.buyDate),
    "dd 'de' MMMM 'de' yyyy 'a las' HH:mm:ss",
    {
      locale: es
    }
  );
  return (
    <Box>
      <Divider sx={{ my: 1 ,borderBottomWidth: 1.5}} />
      {buy.items.map(item => (
        <Box>
          <ItemBox>
            <CustomCardImage image={item.images[0]} />
            <Box>
              <Typography variant='overline'>{item.title}</Typography>
              <Typography>${item.price}</Typography>
              <Typography>Cantidad: {item.quantity}</Typography>
            </Box>
            <Box style={{ marginLeft: 'auto' }}>
              <Typography>subTotal</Typography>
              <Typography>${item.subTotal.toFixed(2)}</Typography>
            </Box>
          </ItemBox>
        </Box>
      ))}
      <Box padding='20px' display='flex' justifyContent='space-between'>
        <Typography width={'auto'}>Compra hecha el dia : {formattedDate}</Typography>
        <Typography
          style={{
            textDecoration: 'underline'
          }}>
          Precio Total : ${buy.totalPrice.toFixed(2)}
        </Typography>
      </Box>
    </Box>
  );
};
export default BuyCard;
