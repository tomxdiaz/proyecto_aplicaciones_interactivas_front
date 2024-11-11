import { styled } from '@mui/material';
import { COLORS } from '../../utils/constants';

export const Main = styled('main')({
  width: '100%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column'
});

export const Section = styled('section')(({ theme }) => ({
  flex: 1,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: COLORS.grey,
  overflowY: 'auto'
}));
