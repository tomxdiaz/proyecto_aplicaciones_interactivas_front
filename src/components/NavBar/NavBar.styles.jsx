import { Avatar as AvatarMui, Box, styled } from '@mui/material';
import { NAVBAR_HEIGHT } from '../../utils/constants';

export const NavBarContainer = styled(Box)({
  height: NAVBAR_HEIGHT,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  border: '1px solid black',
  padding: '0 2rem'
});

export const Avatar = styled(AvatarMui)({});
