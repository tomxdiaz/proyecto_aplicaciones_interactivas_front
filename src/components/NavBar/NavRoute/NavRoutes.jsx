import { Typography } from '@mui/material';
import React from 'react';
import ROUTES from '../../../pages/routes';
import { CustomLink, CustomNavBarButton } from '../NavBar.styles';

export const NavRoutes = () => {
  return Object.entries(ROUTES).map(route => {
    const [key, value] = route;
    return value.inNavMenu ? (
      <CustomLink to={value.path} key={`NavLink-${value.title}`}>
        <CustomNavBarButton>
          <Typography>{value.title}</Typography>
        </CustomNavBarButton>
      </CustomLink>
    ) : null;
  });
};
