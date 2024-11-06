import { Typography } from '@mui/material';
import React from 'react';
import ROUTES, { getRoute } from '../../../pages/routes';
import { CustomLink, CustomNavBarButton } from '../NavBar.styles';

export const NavRoutes = () => {
  return Object.entries(ROUTES).map(([, value]) =>
    value.inNavMenu ? (
      <CustomLink to={getRoute(value.path)} key={`NavLink-${value.title}`}>
        <CustomNavBarButton>
          <Typography>{value.title}</Typography>
        </CustomNavBarButton>
      </CustomLink>
    ) : null
  );
};
