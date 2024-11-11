import { styled } from '@mui/material/styles';
import { Avatar as AvatarMui, Box, Container } from '@mui/material';

export const ProfileContainer = styled(Box)({
  width: '600px',
  maxWidth: '600px',
  margin: '20px auto',
  padding: '20px',
  borderRadius: '5px',
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)'
});

export const ProfileForm = styled('form')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: '1rem'
});

export const FormActions = styled(Box)({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1rem'
});

export const Avatar = styled(AvatarMui)({
  margin: 'auto',
  height: '7rem',
  width: '7rem'
});
