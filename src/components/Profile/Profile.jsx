import { CardContent, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import searchService from '../../services/searchService';
import wishListService from '../../services/wishListService';
import { CardInfo } from './CardInfo/CardInfo';
import { LastFavorites } from './LastFavorites/LastFavorites';
import { LastSearches } from './LastSearches/LastSearches';
import {
  Avatar,
  InfoContainer,
  LastBuys,
  ProfileCard,
  ProfileContainer
} from './Profile.styles';

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
        <LastSearches searches={searches} refreshData={getInitialData} />
      </InfoContainer>
    </ProfileContainer>
  );
};
