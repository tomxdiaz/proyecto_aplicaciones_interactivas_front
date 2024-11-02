import { styled } from '@mui/material';
import { COLORS } from '../../utils/constants';

export const Main = styled('main')({
  width: '100%',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column'
});

export const Section = styled('main')(({ theme }) => ({
  width: '100%',
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: COLORS.grey
}));
