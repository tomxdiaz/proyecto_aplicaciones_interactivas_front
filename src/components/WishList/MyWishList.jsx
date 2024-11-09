import React from 'react';
import { useWishList } from '../../context/WishListContext';
import wishListService from '../../services/wishListService';
import CustomEmptyListMessage from '../CustomList/CustomEmptyListMessage';
import MyList from '../CustomList/MyList';
import { ListContainer } from '../CustomList/MyList.styles';
import WishListItem from './WishListItem';

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
