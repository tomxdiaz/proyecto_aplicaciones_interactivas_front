import React from 'react';
import { useWishList } from '../../context/WishListContext';
import WishListItem from './WishListItem';
import wishListService from '../../services/wishListService';
import { ListContainer } from '../CustomList/MyList.styles';
import CustomEmptyListMessage from '../CustomList/CustomEmptyListMessage';
import MyList from '../CustomList/MyList';
import { useSnackbar } from '../../context/SnackbarContext';

const MyWishList = () => {
  const { wishList, setWishList } = useWishList();
  const { openSnackbar } = useSnackbar();

  const refreshWishList = () => {
    wishListService
      .getUserWishList()
      .then(userWishList => {
        setWishList(userWishList);
      })
      .catch(e => {
        openSnackbar('Error al refrescar los favoritos', 'error');
      });
  };

  const emptyWishList = () => {
    wishListService
      .emptyWishList()
      .then(res => {
        refreshWishList();
      })
      .catch(e => {
        openSnackbar('Error al vaciar la lista de favoritos', 'error');
      });
  };

  return (
    <ListContainer
      display={'flex'}
      flexDirection={'column'}
      width={'100%'}
      alignItems={'center'}
      paddingTop={'2rem'}
      paddingBottom={'4rem'}
      gap={'2rem'}>
      {wishList.length ? (
        <MyList title={'Favoritos'} onEmpty={emptyWishList}>
          {wishList.map(wishListItem => (
            <WishListItem key={wishListItem.id} wishListItem={wishListItem} />
          ))}
        </MyList>
      ) : (
        <CustomEmptyListMessage
          message={'Oops, parece que no tienes items en favoritos'}
          buttonMessage={'Explorar productos'}
        />
      )}
    </ListContainer>
  );
};

export default MyWishList;
