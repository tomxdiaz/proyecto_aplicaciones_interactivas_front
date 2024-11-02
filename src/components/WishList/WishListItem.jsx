import React from 'react';
import wishListService from '../../services/wishListService';
import { useWishList } from '../../context/WishListContext';
import { Typography } from '@mui/material';
import {
  CustomCard,
  CustomCardActionArea,
  CustomCardImage,
  CustomCardContent,
  CustomIconButton
} from './MyWishList.styles';
import { COLORS } from '../../utils/constants';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const WishListItem = ({ item }) => {
  const { setWishList } = useWishList();

  const { product } = item;

  const refreshWishList = () => {
    wishListService.getUserWishList().then(userWishList => {
      setWishList(userWishList);
    });
  };

  const removeFromWishList = () => {
    wishListService.removeProductFromWishList(product).then(res => {
      refreshWishList();
    });
  };

  return (
    <CustomCard>
      <CustomCardActionArea>
        <CustomCardImage image={product.images[0]} />
        <CustomCardContent>
          <Typography variant='h6'>{product.title}</Typography>
          <Typography>{product.description}</Typography>
          <Typography variant='h5'>${product.price}</Typography>
        </CustomCardContent>
      </CustomCardActionArea>
      <CustomIconButton
        onMouseDown={e => e.stopPropagation()}
        onClick={removeFromWishList}>
        <DeleteForeverIcon style={{ fill: COLORS.red }} fontSize='large' />
      </CustomIconButton>
    </CustomCard>
  );
};

export default WishListItem;
