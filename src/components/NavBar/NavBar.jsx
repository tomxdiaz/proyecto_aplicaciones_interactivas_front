import { Box, Divider, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../../pages/routes';
import {
  CustomAppBar,
  CustomLogo,
  CustomNavBarButton,
  CustomNavBarContainer,
  CustomToolbar,
  NavBarMenu
} from './NavBar.styles';
import { NavRoutes } from './NavRoute/NavRoutes';

const NavBar = () => {
  const loggedIn = false;
  const username = 'Tomas';

  return (
    <CustomNavBarContainer>
      <CustomAppBar position='static' sx={{}}>
        <CustomToolbar>
          <CustomLogo src={'../../../public/logo.jpg'} />
          <NavBarMenu>
            <NavRoutes />
          </NavBarMenu>
          <Divider orientation='vertical' variant='middle' flexItem />
          {loggedIn ? (
            <CustomNavBarButton>
              <Typography>Hi, {username}!</Typography>
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
