import { styled } from '@mui/material';
import { NAVBAR_HEIGHT, COLORS } from '../../utils/constants';

export const Main = styled('main')({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative'
});

export const Section = styled('section')({
  width: '100%',
  display: 'flex',
  minHeight: `calc(100% - ${NAVBAR_HEIGHT})`,
  backgroundColor: COLORS.grey
});
