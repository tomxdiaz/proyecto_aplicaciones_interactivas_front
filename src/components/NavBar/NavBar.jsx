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
import { useUser } from '../../context/UserContext';

const NavBar = () => {
  const { user, setUser } = useUser();

  const logout = () => {
    setUser(null);
    sessionStorage.setItem('token', null);
  };

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
          {user ? (
            <>
              <CustomNavBarButton>
                <Typography>{`Hi ${user.name} ${user.lastName}`}</Typography>
              </CustomNavBarButton>
              <CustomNavBarButton onClick={logout}>
                <Typography>Logout</Typography>
              </CustomNavBarButton>
            </>
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
