import { styled, Button as ButtonMui } from '@mui/material';
import { COLORS } from '../../../utils/constants';

export const Button = styled(ButtonMui)({
  backgroundColor: COLORS.primary,
  color: 'white',
  borderRadius: '20px'
});
