import { styled } from '@mui/material';
import {
  COLORS,
  NAVBAR_HEIGHT_DESKTOP,
  NAVBAR_HEIGHT_MOBILE
} from '../../utils/constants';

export const Main = styled('main')({
  width: '100%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column'
});

export const Section = styled('section')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: COLORS.grey,
  height: `calc(100% - ${NAVBAR_HEIGHT_DESKTOP})`,
  [theme.breakpoints.down('md')]: {
    height: `calc(100% - ${NAVBAR_HEIGHT_MOBILE})`
  },
  overflowY: 'auto'
}));
