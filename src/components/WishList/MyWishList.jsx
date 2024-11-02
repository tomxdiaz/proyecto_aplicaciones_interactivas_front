import React from 'react';
import {
  CustomButton,
  CustomContainer,
  CustomLink,
  WishListContainer
} from './MyWishList.styles';
import { useWishList } from '../../context/WishListContext';
import WishListItem from './WishListItem';
import { Box, Typography } from '@mui/material';
import ROUTES from '../../pages/routes';

const MyWishList = () => {
  const { wishList } = useWishList();

  return (
    <CustomContainer>
      <Typography variant='h4'>Mis favoritos</Typography>
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
            <CustomLink to={ROUTES.HOME.path}>
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
