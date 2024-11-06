import React from 'react';
import { Menu, MenuItem, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useUser } from '../../context/UserContext';
import { CustomAvatar, CustomLink, CustomNavBarButton } from './NavBar.styles';
import ROUTES, { getRoute } from '../../pages/routes';

const ProfileMenu = () => {
  const { user } = useUser();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const theme = useTheme();

  const desktop = useMediaQuery(theme.breakpoints.up('md'));

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const isAdmin = user && user.role === 'ADMIN';

  return (
    <>
      <CustomNavBarButton
        aria-controls='profile-menu'
        aria-haspopup='true'
        onClick={handleMenu}>
        <CustomAvatar />
        {desktop && <Typography>{`${user.name} ${user.lastName}`}</Typography>}
      </CustomNavBarButton>
      <Menu
        id='profile-menu'
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}>
        {/* <CustomLink to={getRoute(ROUTES.PROFILE)}>
          <MenuItem onClick={handleClose}>Perfil</MenuItem>
        </CustomLink>
        <CustomLink to={getRoute(ROUTES.CART)}>
          <MenuItem onClick={handleClose}>Carrito</MenuItem>
        </CustomLink>
        <CustomLink to={getRoute(ROUTES.MYWISHLIST)}>
          <MenuItem onClick={handleClose}>Mis favoritos</MenuItem>
        </CustomLink>
        <CustomLink to={getRoute(ROUTES.CREATEPRODUCT)}>
          <MenuItem onClick={handleClose}>Crear producto</MenuItem>
        </CustomLink>
        <CustomLink to={getRoute(ROUTES.LASTSEARCHES)}>
          <MenuItem onClick={handleClose}>Busquedas recientes</MenuItem>
        </CustomLink> */}
        {Object.entries(ROUTES)
          .filter(([key, value]) => value.inNavMenu)
          .filter(([key, value]) => (value.adminOnly ? isAdmin : true))
          .map(([key, value]) => {
            return (
              <CustomLink key={key} to={getRoute(value)}>
                <MenuItem onClick={handleClose}>{value.title}</MenuItem>
              </CustomLink>
            );
          })}
      </Menu>
    </>
  );
};

export default ProfileMenu;
