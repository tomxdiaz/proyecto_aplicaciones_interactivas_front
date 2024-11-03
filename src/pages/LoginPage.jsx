import React, { useEffect } from 'react';
import Login from '../components/Authenticate/Login';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import ROUTES, { getRoute } from './routes';

export const LoginPage = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate(getRoute(ROUTES.HOME));
    }
  }, [user, navigate]);

  return <Login />;
};
