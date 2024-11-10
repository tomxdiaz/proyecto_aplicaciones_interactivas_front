import { Box } from '@mui/material';
import React from 'react';
import wishListService from '../../../services/wishListService';
import MyList from '../../CustomList/MyList';
import WishListItem from '../../WishList/WishListItem';
import CustomEmptyListMessage from '../../CustomList/CustomEmptyListMessage';

export const LastFavorites = ({ favorites, refreshData }) => {
  const clearWishList = () => {
    wishListService.emptyWishList().then(() => refreshData());
  };
  return (
    <Box>
      {favorites.length ? (
        <MyList title={'Ultimos favoritos guardados'} onEmpty={clearWishList}>
          {favorites.map(favorite => (
            <WishListItem
              wishListItem={favorite}
              key={`profile-wishList-${favorite.id}`}
              small
            />
          ))}
        </MyList>
      ) : (
        <CustomEmptyListMessage
          message={'Parece que no tienes items en favoritos'}
          buttonMessage={'Explorar productos'}
        />
      )}
    </Box>
  );
};
