import React, { useEffect, useState } from 'react';
import {
  CustomNavBarContainer,
  CustomAppBar,
  CustomToolbar,
  CustomNavBarButton,
  CustomLogo,
  CustomNavBarMenu
} from './NavBar.styles';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ROUTES from '../../pages/routes';
import userService from '../../services/userService';

const NavBar = () => {
  const loggedIn = true;

  return (
    <CustomNavBarContainer>
      <CustomAppBar position='static' sx={{}}>
        <CustomToolbar>
          <CustomLogo src={'../../../public/logo.jpg'} />
          <CustomNavBarMenu>
            <Link to={ROUTES.HOME.path}>
              <CustomNavBarButton>
                <Typography>Home</Typography>
              </CustomNavBarButton>
            </Link>
          </CustomNavBarMenu>
          {loggedIn ? (
            <CustomNavBarButton>
              <Typography>Hi!</Typography>
            </CustomNavBarButton>
          ) : (
            <Box>
              <Link to={ROUTES.LOGIN.path}>
                <CustomNavBarButton>
                  <Typography>Login</Typography>
                </CustomNavBarButton>
              </Link>
              <Link to={ROUTES.REGISTER.path}>
                <CustomNavBarButton>
                  <Typography>Register</Typography>
                </CustomNavBarButton>
              </Link>
            </Box>
          )}
        </CustomToolbar>
      </CustomAppBar>
    </CustomNavBarContainer>
  );
};

export default NavBar;
