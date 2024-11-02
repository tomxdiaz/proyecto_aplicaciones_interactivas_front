import { Switch as SwitchMui, alpha, styled } from '@mui/material';
import { COLORS } from '../../../utils/constants';

export const Switch = styled(SwitchMui)({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: COLORS.primary,
    '&:hover': {
      backgroundColor: alpha(COLORS.primary, 0.2)
    }
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: COLORS.primary
  }
});
