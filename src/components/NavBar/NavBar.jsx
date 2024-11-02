import { Box, Divider, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../../pages/routes';
import {
  CustomAppBar,
  CustomLogo,
  CustomNavBarButton,
  CustomToolbar,
  NavBarMenu,
  CustomProfileMenuContainer,
  CustomLink
} from './NavBar.styles';
import { NavRoutes } from './NavRoute/NavRoutes';
import { useUser } from '../../context/UserContext';
import { useWishList } from '../../context/WishListContext';
import ProfileMenu from './ProfileMenu';

const NavBar = () => {
  const { user, setUser } = useUser();
  const { wishList, setWishList } = useWishList();

  const logout = () => {
    setUser(null);
    setWishList([]);
    sessionStorage.removeItem('token');
  };
  {
  }

  return (
    <CustomAppBar>
      <CustomToolbar>
        <CustomLogo src={'../../../public/logo.jpg'} />
        <NavBarMenu>
          <NavRoutes />
        </NavBarMenu>
        <Divider orientation='vertical' variant='middle' flexItem />
        {user ? (
          <>
            <ProfileMenu />
            <CustomNavBarButton onClick={logout}>
              <Typography>Logout</Typography>
            </CustomNavBarButton>
          </>
        ) : (
          <CustomProfileMenuContainer>
            <CustomLink to={ROUTES.LOGIN.path}>
              <CustomNavBarButton>
                <Typography>Login</Typography>
              </CustomNavBarButton>
            </CustomLink>
            <CustomLink to={ROUTES.REGISTER.path}>
              <CustomNavBarButton>
                <Typography>Register</Typography>
              </CustomNavBarButton>
            </CustomLink>
          </CustomProfileMenuContainer>
        )}
      </CustomToolbar>
    </CustomAppBar>
  );
};

export default NavBar;
