import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { CardContent, CardHeader } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from '../../context/SnackbarContext';
import ROUTES, { getRoute } from '../../pages/routes';
import buyService from '../../services/buyService';
import searchService from '../../services/searchService';
import wishListService from '../../services/wishListService';
import { CardInfo } from './CardInfo/CardInfo';
import { LastBuys } from './LastBuys/LastBuys';
import { LastFavorites } from './LastFavorites/LastFavorites';
import { LastSearches } from './LastSearches/LastSearches';
import {
  Avatar,
  EditButton,
  InfoContainer,
  ProfileCard,
  ProfileCardContainer,
  ProfileContainer
} from './Profile.styles';
import { accountType } from '../../utils/constants';

export const Profile = ({ user }) => {
  const [buys, setBuys] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searches, setSearches] = useState([]);
  const { openSnackbar } = useSnackbar();
  const navigate = useNavigate();

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
      .then(favoritesData => setFavorites(favoritesData.splice(0, 3)))
      .catch(() => openSnackbar('Error al obtener los favoritos', 'error'));
  };

  const refreshSearches = () => {
    searchService
      .getUserSearches()
      .then(searchData => setSearches(searchData.splice(0, 3)))
      .catch(() => openSnackbar('Error al obtener las ultimas busquedas', 'error'));
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
      })
      .catch(() =>
        openSnackbar('Error al obtener las ultimas actividades', 'error')
      );
  }, []);

  return (
    <ProfileContainer>
      <InfoContainer>
        <ProfileCardContainer>
          <ProfileCard>
            <CardHeader
              action={
                <EditButton
                  onClick={() => {
                    navigate(getRoute(ROUTES.EDIT_PROFILE, { id: 1 }));
                  }}>
                  <ModeEditIcon />
                </EditButton>
              }
              sx={{ paddingBottom: '0' }}
            />
            <CardContent sx={{ paddingTop: '0' }}>
              <Avatar />
              {profileContent.map((tag, index) => (
                <CardInfo
                  label={tag.label}
                  value={tag.value}
                  key={`profileCard-user-${tag.label}-${index}`}
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
