import { CardContent, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import searchService from '../../services/searchService';
import wishListService from '../../services/wishListService';
import MyList from '../CustomList/MyList';
import WishListItem from '../WishList/WishListItem';
import { CardInfo } from './CardInfo/CardInfo';
import {
  Avatar,
  InfoContainer,
  LastBuys,
  LastFarorities,
  LastSearches,
  ProfileCard,
  ProfileContainer
} from './Profile.styles';
import LastSearchesItem from '../Searches/LastSearchesItem';

export const Profile = ({ user }) => {
  console.log(user);
  const [buys, setBuys] = useState([]);
  const [favorities, setFavorities] = useState([]);
  const [searches, setSearches] = useState([]);

  const accountType = {
    ADMIN: 'Administrador',
    USER: 'Cliente'
  };

  const profileContent = [
    { label: 'Usuario', value: user.username },
    { label: 'Nombre', value: `${user.name} ${user.lastName}` },
    { label: 'Dirección de correo', value: user.emailAddress },
    {
      label: 'Fecha de Nacimiento',
      value: new Date(user.birthDate)
        .toISOString()
        .slice(0, 10)
        .split('-')
        .reverse()
        .join('/')
    },
    { label: 'Tipo de cuenta', value: accountType[user.role] }
  ];

  const getInitialData = async () => {
    const favoritiesResponse = await wishListService.getUserWishList();
    const searchResponse = await searchService.getUserSearches();

    setFavorities(favoritiesResponse.splice(0, 3));
    setSearches(searchResponse.splice(0, 3));
  };

  useEffect(() => {
    getInitialData();
  }, []);

  const clearWishList = () => {
    wishListService.emptyWishList().then(() => getInitialData());
  };

  return (
    <ProfileContainer>
      <ProfileCard>
        <CardContent>
          <Avatar />
          {profileContent.map((tag, index) => (
            <CardInfo
              label={tag.label}
              value={tag.value}
              key={`profileCard-user-${index}`}
            />
          ))}
        </CardContent>
      </ProfileCard>
      <InfoContainer>
        <LastBuys>
          <Typography variant='h4'>Ultimas Compras</Typography>
        </LastBuys>
        <LastFarorities>
          <MyList title={'Ultimos favoritos guardados'} onEmpty={clearWishList}>
            {favorities.map(favorite => (
              <WishListItem
                wishListItem={favorite}
                key={`profile-wishList-${favorite.id}`}
                small
              />
            ))}
          </MyList>
        </LastFarorities>
        <LastSearches>
          <MyList title={'Ultimas Búsquedas'} onEmpty={clearWishList}>
            {searches.map(search => (
              <LastSearchesItem
                search={search}
                key={`profile-lastSearch-${search.product.id}`}
                small
              />
            ))}
          </MyList>
        </LastSearches>
      </InfoContainer>
    </ProfileContainer>
  );
};
