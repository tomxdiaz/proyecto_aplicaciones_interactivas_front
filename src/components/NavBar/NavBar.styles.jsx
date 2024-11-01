import { AppBar, Avatar, Box, Button, styled, Toolbar } from '@mui/material';
import { NAVBAR_HEIGHT_DESKTOP, NAVBAR_HEIGHT_MOBILE } from '../../utils/constants';
import { Link } from 'react-router-dom';

export const CustomAppBar = styled(Box)(({ theme }) => ({
  height: NAVBAR_HEIGHT_DESKTOP,
  [theme.breakpoints.down('md')]: {
    height: NAVBAR_HEIGHT_MOBILE
  },
  width: '100%',
  display: 'flex',
  position: 'sticky',
  zIndex: 1000,
  top: 0,
  backgroundColor: 'white',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)'
}));

export const CustomToolbar = styled(Toolbar)({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'space-between'
});

export const CustomLogo = styled('img')({
  height: '100%'
});

export const CustomNavBarMenu = styled(Box)({
  flex: 1,
  display: 'flex',
  alignItems: 'center'
});

export const CustomProfileMenuContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'row'
});

export const CustomLink = styled(Link)({
  textDecoration: 'none'
});

export const CustomNavBarButton = styled(Button)({
  display: 'flex',
  gap: '0.5rem',
  alignItems: 'center',
  textTransform: 'none'
});

export const CustomAvatar = styled(Avatar)({
  width: 30,
  height: 30
});
