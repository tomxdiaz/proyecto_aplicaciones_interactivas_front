import buyService from '../../services/buyService';
import { Box, Typography, Card } from '@mui/material';
import { CustomBuysBox, CustomLink, CustomButton } from './Buys.styles';
import ROUTES, { getRoute } from '../../pages/routes';
import React, { useEffect, useState } from 'react';
import BuyCard from './BuyCard';
const Buys = () => {
  const [buys, setBuys] = useState([]);
  const refreshBuys = () => {
    buyService.getUserBuy().then(data => {
      setBuys(data);
    });
  };

  useEffect(() => {
    refreshBuys();
  }, []);

  return (
    <CustomBuysBox>
      {buys.length ? (
        <>
          <Typography variant='h4' textAlign={'center'} margin={'10px'}>
            Mis compras
          </Typography>

          {buys
            .sort(
              (a, b) => new Date(b.buyDate).getTime() - new Date(a.buyDate).getTime()
            )
            .map(buy => (
              <BuyCard key={buy.id} buy={buy} />
            ))}
        </>
      ) : (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
          <Typography textAlign={'center'} variant='h4' m={2}>
            Oops, parece que aun no has hecho compras
          </Typography>
          <CustomLink to={getRoute(ROUTES.HOME)}>
            <CustomButton>
              <Typography m={2}>Explorar productos</Typography>
            </CustomButton>
          </CustomLink>
          <CustomLink to={getRoute(ROUTES.CART)}>
            <CustomButton>
              <Typography m={2}>Ver carrito</Typography>
            </CustomButton>
          </CustomLink>
        </Box>
      )}
    </CustomBuysBox>
  );
};
export default Buys;
