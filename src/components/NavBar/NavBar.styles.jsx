import { Box, styled } from '@mui/material';
import { NAVBAR_HAIGHT } from '../../utils/constants';

export const NavBarContainer = styled(Box)({
  margin: 0,
  padding: 0,
  border: '1px solid black',
  height: NAVBAR_HAIGHT,
  minHeight: NAVBAR_HAIGHT,
  maxHeight: NAVBAR_HAIGHT,
  width: '100%',
  maxWidth: 'calc(100% - 2px)'
});
