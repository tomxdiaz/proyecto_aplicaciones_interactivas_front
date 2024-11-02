import React from 'react';
import {
  CustomAppBar,
  CustomToolbar,
  CustomNavBarButton,
  CustomLogo,
  CustomNavBarMenu,
  CustomProfileMenuContainer,
  CustomLink
} from './NavBar.styles';
import { Typography } from '@mui/material';
import ROUTES from '../../pages/routes';
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

  return (
    <CustomAppBar>
      <CustomToolbar>
        <CustomLogo src={'../../../public/logo.jpg'} />
        <CustomNavBarMenu>
          <CustomLink to={ROUTES.HOME.path}>
            <CustomNavBarButton>
              <Typography>Inicio</Typography>
            </CustomNavBarButton>
          </CustomLink>
        </CustomNavBarMenu>
        {user ? (
          <>
            <ProfileMenu />
            <CustomNavBarButton onClick={logout}>
              <Typography>Cerrar sesion</Typography>
            </CustomNavBarButton>
          </>
        ) : (
          <CustomProfileMenuContainer>
            <CustomLink to={ROUTES.LOGIN.path}>
              <CustomNavBarButton>
                <Typography>Iniciar sesion</Typography>
              </CustomNavBarButton>
            </CustomLink>
            <CustomLink to={ROUTES.REGISTER.path}>
              <CustomNavBarButton>
                <Typography>Registrarse</Typography>
              </CustomNavBarButton>
            </CustomLink>
          </CustomProfileMenuContainer>
        )}
      </CustomToolbar>
    </CustomAppBar>
  );
};

export default NavBar;
