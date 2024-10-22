import { styled } from '@mui/material';
import { NAVBAR_HAIGHT } from '../../utils/constants';

export const Main = styled('main')({
  margin: 0,
  padding: 0,
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  maxHeight: '100vh',
  width: '100%',
  maxWidth: '100%'
});

export const Section = styled('section')({
  margin: 0,
  padding: 0,
  display: 'flex',
  height: `calc(100% - ${NAVBAR_HAIGHT})`,
  maxHeight: `calc(100% - ${NAVBAR_HAIGHT})`,
  minHeight: `calc(100% - ${NAVBAR_HAIGHT})`,
  width: '100%',
  maxWidth: '100vw'
});
