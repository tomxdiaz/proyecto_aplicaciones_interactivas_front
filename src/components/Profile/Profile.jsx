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
  LastSearches,
  ProfileCard,
  ProfileContainer
} from './Profile.styles';
import LastSearchesItem from '../Searches/LastSearchesItem';
import CustomEmptyListMessage from '../CustomList/CustomEmptyListMessage';
import { LastFavorites } from './LastFavorites/LastFavorites';

export const Profile = ({ user }) => {
  console.log(user);
  const [buys, setBuys] = useState([]);
  const [favorites, setFavorites] = useState([]);
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

    setFavorites(favoritiesResponse.splice(0, 3));
    setSearches(searchResponse.splice(0, 3));
  };

  useEffect(() => {
    getInitialData();
  }, []);

  const clearSearchList = () => {
    searchService.emptySearches().then(() => getInitialData());
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
        <LastFavorites favorites={favorites} refreshData={getInitialData} />
        <LastSearches>
          {searches.length ? (
            <MyList title={'Ultimas Búsquedas'} onEmpty={clearSearchList}>
              {searches.map(search => (
                <LastSearchesItem
                  search={search}
                  key={`profile-lastSearch-${search.product.id}`}
                  small
                />
              ))}
            </MyList>
          ) : (
            <CustomEmptyListMessage
              message={'Parece que no tienes busquedas recientes'}
              buttonMessage={'Explorar productos'}
            />
          )}
        </LastSearches>
      </InfoContainer>
    </ProfileContainer>
  );
};
