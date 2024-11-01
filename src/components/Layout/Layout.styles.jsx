import { styled } from '@mui/material';
import { NAVBAR_HEIGHT, COLORS } from '../../utils/constants';

export const Main = styled('main')({
  display: 'flex',
  height: '100%',
  width: '100%',
  flexDirection: 'column'
});

export const Section = styled('section')({
  display: 'flex',
  width: '100%',
  height: `calc(100% - ${NAVBAR_HEIGHT})`,
  backgroundColor: COLORS.grey
});
