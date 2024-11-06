import { ButtonBase, styled } from '@mui/material';
import { COLORS } from '../../../utils/constants';
import { DeleteForever } from '@mui/icons-material';

export const Button = styled(ButtonBase)({
  border: `2px solid ${COLORS.red}`,
  borderRadius: '5px',
  padding: '0.5rem 0',
  marginBottom: '1rem',
  width: '7rem',
  alignSelf: 'flex-end'
});

export const DeleteIcon = styled(DeleteForever)({
  color: COLORS.red
});
