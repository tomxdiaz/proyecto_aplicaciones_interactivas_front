import React from 'react';
import { CustomContainer, WishListContainer } from './MyWishList.styles';
import { useWishList } from '../../context/WishListContext';
import WishListItem from './WishListItem';
import { Typography } from '@mui/material';

const MyWishList = () => {
  const { wishList } = useWishList();

  return (
    <CustomContainer>
      <Typography variant='h4'>My Wishlist</Typography>
      <WishListContainer>
        {wishList.map(wishListItem => (
          <WishListItem key={wishListItem.id} item={wishListItem} />
        ))}
      </WishListContainer>
    </CustomContainer>
  );
};

export default MyWishList;
