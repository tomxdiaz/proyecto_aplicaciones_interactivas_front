import React, { useEffect } from 'react';
import Register from '../components/Authenticate/Register';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import ROUTES from './routes';

export const RegisterPage = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate(ROUTES.HOME.path);
    }
  }, [user, navigate]);

  return <Register />;
};
