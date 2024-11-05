import { styled } from '@mui/material/styles';
import { Grid2 } from '@mui/material';

export const CustomItemGrid = styled(Grid2)({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  gap: '20px',
  padding: '2rem'
});
