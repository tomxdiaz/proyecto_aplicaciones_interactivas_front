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
  ProfileCardContainer,
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

  const refreshFavorites = () => {
    wishListService
      .getUserWishList()
      .then(favoritesData => setFavorites(favoritesData.splice(0, 3)));
  };

  const refreshSearches = () => {
    searchService
      .getUserSearches()
      .then(searchData => setSearches(searchData.splice(0, 3)));
  };

  useEffect(() => {
    wishListService
      .getUserWishList()
      .then(favoritesData => setFavorites(favoritesData.splice(0, 3)))
      .then(() => searchService.getUserSearches())
      .then(searchData => setSearches(searchData.splice(0, 3)))
      .then(() => buyService.getUserBuy())
      .then(buyData => {
        const lastBuys = buyData.reduce((acc, buy) => [...acc, ...buy.items], []);
        setBuys(lastBuys.splice(0, 3));
      });
  }, []);

  return (
    <ProfileContainer>
      <InfoContainer>
        <ProfileCardContainer>
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
        </ProfileCardContainer>
        <LastBuys buys={buys} />
      </InfoContainer>
      <InfoContainer>
        <LastFavorites favorites={favorites} refreshData={refreshFavorites} />
        <LastSearches searches={searches} refreshData={refreshSearches} />
      </InfoContainer>
    </ProfileContainer>
  );
};
