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
    element: <HomePage />
  },
  LOGIN: {
    path: '/login',
    element: <LoginPage />
  },
  REGISTER: {
    path: '/register',
    element: <RegisterPage />
  },
  CREATEPRODUCT: {
    path: '/create-product',
    element: <CreateProductPage />
  },
  EDITPRODUCT: {
    path: '/edit-product',
    element: <EditProductPage />
  }
};

export default ROUTES;
