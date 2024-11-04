import React from 'react';
import {
  Avatar,
  Menu,
  MenuItem,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { useUser } from '../../context/UserContext';
import { useWishList } from '../../context/WishListContext';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { CustomAvatar, CustomLink, CustomNavBarButton } from './NavBar.styles';
import { Link } from 'react-router-dom';
import ROUTES, { getRoute } from '../../pages/routes';

const ProfileMenu = () => {
  const { user } = useUser();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = useTheme();

  const desktop = useMediaQuery(theme.breakpoints.up('md'));

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
        <CustomLink to={getRoute(ROUTES.PROFILE)}>
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
      </Menu>
    </>
  );
};

export default ProfileMenu;
