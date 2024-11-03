import React, { useEffect } from 'react';
import Register from '../components/Authenticate/Register';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import ROUTES, { getRoute } from './routes';

export const RegisterPage = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate(getRoute(ROUTES.HOME));
    }
  }, [user, navigate]);

  return <Register />;
};
