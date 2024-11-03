import { Box, Button, styled, Typography } from '@mui/material';
import { COLORS } from '../../../utils/constants';

export const ImageInputContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
});

export const ImageInputButton = styled(Button)({
  width: '100%',
  minHeight: 50,
  maxHeight: 250,
  overflowY: 'auto',
  borderRadius: '10px',
  border: '2px dashed black',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  backgroundColor: '#f0f0f0',
  marginBottom: '1rem'
});

export const Image = styled('img')({
  width: '100%',
  height: 100,
  objectFit: 'cover',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
});

export const UploadInput = styled('input')({
  display: 'none'
});

export const NoImageMsg = styled(Typography)({
  color: COLORS.primary
});
