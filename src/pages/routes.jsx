import React from 'react';
import {
  HomePage,
  LoginPage,
  RegisterPage,
  CreateProductPage,
  EditProductPage
} from './index';

const ROUTES = {
  HOME: {
    path: '/',
    element: <HomePage />,
    title: 'Home'
  },
  LOGIN: {
    path: '/login',
    element: <LoginPage />,
    title: 'Login'
  },
  REGISTER: {
    path: '/register',
    element: <RegisterPage />,
    title: 'Registro'
  },
  CREATEPRODUCT: {
    path: '/create-product',
    element: <CreateProductPage />,
    title: 'Crear producto'
  },
  EDITPRODUCT: {
    path: '/edit-product',
    element: <EditProductPage />,
    title: 'Editar producto'
  }
};

export default ROUTES;
