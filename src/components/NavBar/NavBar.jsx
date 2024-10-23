import React from 'react';
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

const NavBar = () => {
  const loggedIn = false;
  const username = 'Tomas';

  return (
    <CustomNavBarContainer>
      <CustomAppBar position='static' sx={{}}>
        <CustomToolbar>
          <CustomLogo src={'../../../public/logo.jpg'} />
          <CustomNavBarMenu>
            <CustomNavBarButton>
              <Link to={ROUTES.HOME.path}>
                <Typography>Home</Typography>
              </Link>
            </CustomNavBarButton>
          </CustomNavBarMenu>
          {loggedIn ? (
            <CustomNavBarButton>
              <Typography>Hi, {username}!</Typography>
            </CustomNavBarButton>
          ) : (
            <Box>
              <CustomNavBarButton>
                <Link to={ROUTES.LOGIN.path}>
                  <Typography>Login</Typography>
                </Link>
              </CustomNavBarButton>
              <CustomNavBarButton>
                <Link to={ROUTES.REGISTER.path}>
                  <Typography>Register</Typography>
                </Link>
              </CustomNavBarButton>
            </Box>
          )}
        </CustomToolbar>
      </CustomAppBar>
    </CustomNavBarContainer>
  );
};

export default NavBar;
