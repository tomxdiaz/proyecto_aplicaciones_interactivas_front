import { Divider, Typography } from '@mui/material';
import React from 'react';
import { useUser } from '../../context/UserContext';
import { useWishList } from '../../context/WishListContext';
import ROUTES, { getRoute } from '../../pages/routes';
import {
  CustomAppBar,
  CustomLink,
  CustomLogo,
  CustomNavBarButton,
  CustomProfileMenuContainer,
  CustomToolbar,
  NavBarMenu
} from './NavBar.styles';
import { NavRoutes } from './NavRoute/NavRoutes';
import ProfileMenu from './ProfileMenu';

const NavBar = () => {
  const { user, setUser } = useUser();
  const { wishList, setWishList } = useWishList();

  const logout = () => {
    setUser(null);
    setWishList([]);
    sessionStorage.removeItem('token');
  };

  return (
    <CustomAppBar>
      <CustomToolbar>
        <CustomLink to={getRoute(ROUTES.HOME)}>
          <CustomLogo src={'../../../public/logo.jpg'} />
        </CustomLink>
        <CustomProfileMenuContainer>
          {user ? (
            <>
              <ProfileMenu />
              <CustomNavBarButton onClick={logout}>
                <Typography>Cerrar sesion</Typography>
              </CustomNavBarButton>
            </>
          ) : (
            <>
              <CustomLink to={getRoute(ROUTES.LOGIN)}>
                <CustomNavBarButton>
                  <Typography>Iniciar sesion</Typography>
                </CustomNavBarButton>
              </CustomLink>
              <CustomLink to={getRoute(ROUTES.REGISTER)}>
                <CustomNavBarButton>
                  <Typography>Registrarse</Typography>
                </CustomNavBarButton>
              </CustomLink>
            </>
          )}
        </CustomProfileMenuContainer>
      </CustomToolbar>
    </CustomAppBar>
  );
};

export default NavBar;
