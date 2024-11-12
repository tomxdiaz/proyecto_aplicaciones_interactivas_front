import React from 'react';
import { Typography, Box, Divider, Card } from '@mui/material';
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
    <Card sx={{ width: '100%', padding: '1rem' }}>
      {buy.items.map(item => (
        <Box key={`buyCard-${item.id}`}>
          <ItemBox>
            <CustomCardImage image={item.images[0]} />
            <Box>
              <Typography variant='overline'>{item.title}</Typography>
              <Typography>${item.price}</Typography>
              <Typography>Cantidad: {item.quantity}</Typography>
            </Box>
            <Box style={{ marginLeft: 'auto' }}>
              <Typography>Sub Total</Typography>
              <Typography>${item.subTotal.toFixed(2)}</Typography>
            </Box>
          </ItemBox>
        </Box>
      ))}
      <Box padding='20px' display='flex' justifyContent='space-between'>
        <Typography width={'auto'}>Fecha: {formattedDate}</Typography>
        <Typography
          style={{
            textDecoration: 'underline'
          }}>
          Precio Total : ${buy.totalPrice.toFixed(2)}
        </Typography>
      </Box>
    </Card>
  );
};
export default BuyCard;
