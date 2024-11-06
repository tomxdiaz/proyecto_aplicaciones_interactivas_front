import React from 'react';
import { Menu, MenuItem, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useUser } from '../../context/UserContext';
import { CustomAvatar, CustomLink, CustomNavBarButton } from './NavBar.styles';
import ROUTES, { getRoute } from '../../pages/routes';
import { NavRoutes } from './NavRoute/NavRoutes';

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
        {Object.entries(ROUTES).map(([, value]) =>
          value.inNavMenu ? (
            <CustomLink to={getRoute(value)} key={`NavLink-${value.title}`}>
              <MenuItem onClick={handleClose}>
                <Typography>{value.title}</Typography>
              </MenuItem>
            </CustomLink>
          ) : null
        )}
      </Menu>
    </>
  );
};

export default ProfileMenu;
