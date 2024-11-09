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
  ProfileCard,
  ProfileContainer
} from './Profile.styles';
import buyService from '../../services/buyService';
import { LastBuys } from './LastBuys/LastBuys';

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
    const buyResponse = await buyService.getUserBuy();

    const lastBuys = buyResponse.reduce((acc, buy) => [...acc, ...buy.items], []);
    console.log('items: ', lastBuys);

    setFavorites(favoritiesResponse.splice(0, 3));
    setSearches(searchResponse.splice(0, 3));
    setBuys(lastBuys.splice(0, 3));
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
        <LastBuys buys={buys} />
        <LastFavorites favorites={favorites} refreshData={getInitialData} />
        <LastSearches searches={searches} refreshData={getInitialData} />
      </InfoContainer>
    </ProfileContainer>
  );
};
