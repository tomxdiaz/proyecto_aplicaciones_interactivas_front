import React, { useEffect } from 'react';
import Login from '../components/Authenticate/Login';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import ROUTES from './routes';

export const LoginPage = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate(ROUTES.HOME.path);
    }
  }, [user, navigate]);

  return <Login />;
};
