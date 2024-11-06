import React from 'react';
import wishListService from '../../services/wishListService';
import { useWishList } from '../../context/WishListContext';
import MyListItem from '../CustomList/MyListItem';

const WishListItem = ({ wishListItem }) => {
  const { setWishList } = useWishList();

  const { product } = wishListItem;

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
    <MyListItem product={product} onRemove={removeFromWishList} children={null} />
  );
};

export default WishListItem;
