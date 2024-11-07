import { Box, Button, styled, Typography } from '@mui/material';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ROUTES, { getRoute } from '../../pages/routes';

const CustomContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '1rem',
  gap: '1rem'
});

const MustLogin = ({ user, children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return user ? (
    children
  ) : (
    <CustomContainer>
      <Typography variant='h4'>
        Tenes que iniciar sesion para ver esta pagina.
      </Typography>
      <Button onClick={() => navigate(getRoute(ROUTES.LOGIN))} variant='contained'>
        Iniciar sesion
      </Button>
    </CustomContainer>
  );
};

export default MustLogin;
