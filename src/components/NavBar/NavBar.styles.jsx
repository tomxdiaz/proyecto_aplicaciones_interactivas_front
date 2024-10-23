import { AppBar, Box, Button, styled, Toolbar } from '@mui/material';
import { NAVBAR_HEIGHT } from '../../utils/constants';

export const CustomNavBarContainer = styled(Box)({
  height: NAVBAR_HEIGHT,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  border: '1px solid black'
});

export const CustomAppBar = styled(AppBar)({
  height: '100%',
  backgroundColor: 'white'
});

export const CustomToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between'
});

export const CustomNavBarButton = styled(Button)({
  textTransform: 'none'
});
