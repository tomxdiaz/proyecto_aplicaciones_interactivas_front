import { Avatar as AvatarMui, Box, styled } from '@mui/material';
import { NAVBAR_HAIGHT } from '../../utils/constants';

export const NavBarContainer = styled(Box)({
  margin: 0,
  padding: '5px',
  border: '1px solid black',
  height: NAVBAR_HAIGHT,
  minHeight: NAVBAR_HAIGHT,
  maxHeight: NAVBAR_HAIGHT,
  width: '100%',
  maxWidth: '100%'
});

export const Avatar = styled(AvatarMui)({
  float: 'right',
  width: NAVBAR_HAIGHT,
  maxWidth: `calc(${NAVBAR_HAIGHT} - 10px)`,
  height: `calc(${NAVBAR_HAIGHT})`,
  maxHeight: '100%'
});
