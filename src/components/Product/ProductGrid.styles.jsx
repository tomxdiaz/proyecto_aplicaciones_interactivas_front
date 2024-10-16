import { styled } from '@mui/material/styles';
import { Box, Grid2 } from '@mui/material';

export const CustomProductGrid = styled(Grid2)(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  gap: '20px',
  padding: '2rem',
}));
