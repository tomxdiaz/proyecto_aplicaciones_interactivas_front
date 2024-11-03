import { MenuItem, Select as SelectMui, styled } from '@mui/material';

export const Select = styled(SelectMui)({
  border: '2px solid black',
  height: '2rem',
  borderRadius: '10px',
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none'
  }
});

export const EmptyMenuItem = styled(MenuItem)({
  display: 'flex',
  justifyContent: 'center'
});
