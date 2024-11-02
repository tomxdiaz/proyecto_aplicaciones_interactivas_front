import { Switch as SwitchMui, alpha, styled } from '@mui/material';

export const Switch = styled(SwitchMui)({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: '#b83c1d',
    '&:hover': {
      backgroundColor: alpha('#b83c1d', 0.2)
    }
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: '#b83c1d'
  }
});
