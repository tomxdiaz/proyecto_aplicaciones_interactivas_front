import React from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../../../pages/routes';
import { CustomNavBarButton } from '../NavBar.styles';
import { Typography } from '@mui/material';

export const NavRoutes = () => {
  return Object.entries(ROUTES).map(route => {
    const [key, value] = route;
    return value.inNavMenu ? (
      <Link to={value.path} key={`NavLink-${value.title}`}>
        <CustomNavBarButton>
          <Typography>{value.title}</Typography>
        </CustomNavBarButton>
      </Link>
    ) : null;
  });
};
