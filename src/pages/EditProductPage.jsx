import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import ROUTES from './routes';

export const EditProductPage = () => {
  const { id } = useParams();

  const { user } = useUser();
  const navigate = useNavigate();

  console.log(user);

  useEffect(() => {
    if (!user) {
      navigate(ROUTES.LOGIN.path);
    }
  }, [user, navigate]);

  return (
    <>
      <div>ID: {id}</div>
    </>
  );
};
