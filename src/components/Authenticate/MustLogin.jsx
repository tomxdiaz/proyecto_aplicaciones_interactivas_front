import { Box, Button, styled, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CustomContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '1rem',
  gap: '1rem'
});

const MustLogin = ({ user, children }) => {
  const navigate = useNavigate();

  return user ? (
    children
  ) : (
    <CustomContainer>
      <Typography variant='h4'>You must be logged in to view this page.</Typography>
      <Button onClick={() => navigate('/login')} variant='contained'>
        Login
      </Button>
    </CustomContainer>
  );
};

export default MustLogin;
