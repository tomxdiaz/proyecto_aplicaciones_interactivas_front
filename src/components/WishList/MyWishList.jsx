import React from 'react';
import {
  CustomButton,
  CustomContainer,
  CustomLink,
  CustomWishListBar,
  WishListContainer
} from './MyWishList.styles';
import { useWishList } from '../../context/WishListContext';
import WishListItem from './WishListItem';
import { Box, Button, Typography } from '@mui/material';
import ROUTES, { getRoute } from '../../pages/routes';
import wishListService from '../../services/wishListService';
import { useNavigate } from 'react-router-dom';

const MyWishList = () => {
  const { wishList, setWishList } = useWishList();

  const refreshWishList = () => {
    wishListService.getUserWishList().then(userWishList => {
      setWishList(userWishList);
    });
  };

  const emptyWishList = () => {
    wishListService.emptyWishList().then(res => {
      refreshWishList();
    });
  };

  return (
    <CustomContainer>
      <CustomWishListBar>
        <Typography variant='h4'>Mis favoritos</Typography>
        <CustomButton onClick={emptyWishList}>Vaciar</CustomButton>
      </CustomWishListBar>
      <WishListContainer>
        {wishList.length ? (
          wishList.map(wishListItem => (
            <WishListItem key={wishListItem.id} item={wishListItem} />
          ))
        ) : (
          <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
            <Typography variant='h4'>
              Oops, parece que no tienes favoritos
            </Typography>
            <CustomLink to={getRoute(ROUTES.HOME)}>
              <CustomButton>
                <Typography>Explorar productos</Typography>
              </CustomButton>
            </CustomLink>
          </Box>
        )}
      </WishListContainer>
    </CustomContainer>
  );
};

export default MyWishList;
