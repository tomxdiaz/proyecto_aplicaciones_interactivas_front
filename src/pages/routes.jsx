import React from 'react';
import {
  HomePage,
  LoginPage,
  RegisterPage,
  CreateProductPage,
  EditProductPage
} from './index';
import { ProductDetailPage } from './ProductDetailPage';

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
  PRODUCTDETAIL: {
    path: '/product/:id',
    element: <ProductDetailPage />
  },
  CREATEPRODUCT: {
    path: '/create-product',
    element: <CreateProductPage />,
    title: 'Crear producto'
  },

  EDITPRODUCT: {
    path: '/edit-product/:id',
    element: <EditProductPage />,
    title: 'Editar producto'
  }
};

export default ROUTES;
