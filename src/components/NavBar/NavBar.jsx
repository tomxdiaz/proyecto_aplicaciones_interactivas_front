import React from 'react';
import {
  CustomNavBarContainer,
  CustomAppBar,
  CustomToolbar,
  CustomNavBarButton
} from './NavBar.styles';
import { Box, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ROUTES from '../../pages/routes/Routes';

const NavBar = () => {
  const loggedIn = false;
  const username = 'Tomas';

  return (
    // <NavBarContainer>
    //   <img style={{ height: '100%' }} src={'../../../public/logo.jpg'} />
    //   <div>
    //     <a href='/'>Home</a>
    //     <a href='/create-product'>Create Product</a>
    //   </div>
    //   <Avatar />
    // </NavBarContainer>

    <CustomNavBarContainer>
      <CustomAppBar position='static' sx={{}}>
        <CustomToolbar>
          <img style={{ height: '100%' }} src={'../../../public/logo.jpg'} />
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
