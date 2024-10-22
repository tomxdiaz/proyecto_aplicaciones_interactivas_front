import { styled } from '@mui/material';
import { NAVBAR_HEIGHT } from '../../utils/constants';

export const Main = styled('main')({
  display: 'flex',
  width: '100%',
  height: '100vh',
  flexDirection: 'column',
  position: 'relative'
});

export const Section = styled('section')({
  width: '100%',
  display: 'flex',
  minHeight: `calc(100% - ${NAVBAR_HEIGHT})`
});
