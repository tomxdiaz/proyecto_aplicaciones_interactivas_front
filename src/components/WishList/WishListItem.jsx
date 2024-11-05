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
import ROUTES, { getRoute } from '../../pages/routes';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import searchService from '../../services/searchService';

const WishListItem = ({ item }) => {
  const navigate = useNavigate();
  const { user } = useUser();
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

  const goToProductDetail = () => {
    navigate(getRoute(ROUTES.PRODUCTDETAIL, { id: product.id }));
    if (user) {
      searchService.addSearch(product);
    }
  };

  return (
    <CustomCard>
      <CustomCardActionArea onClick={goToProductDetail}>
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
