import { styled } from '@mui/material';
import {
  NAVBAR_HEIGHT_DESKTOP,
  NAVBAR_HEIGHT_MOBILE,
  COLORS
} from '../../utils/constants';

export const Main = styled('main')({
  display: 'flex',
  height: '100vh',
  width: '100%',
  flexDirection: 'column'
});

export const Section = styled('main')(({ theme }) => ({
  width: '100%',
  height: `calc(100% - ${NAVBAR_HEIGHT_DESKTOP})`,
  [theme.breakpoints.down('md')]: {
    height: `calc(100% - ${NAVBAR_HEIGHT_MOBILE})`
  },
  backgroundColor: COLORS.grey
}));
