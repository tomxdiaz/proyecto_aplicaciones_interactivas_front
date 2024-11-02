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
    title: 'Home',
    inNavMenu: false
  },
  LOGIN: {
    path: '/login',
    element: <LoginPage />,
    title: 'Login',
    inNavMenu: false
  },
  REGISTER: {
    path: '/register',
    element: <RegisterPage />,
    title: 'Registro',
    inNavMenu: false
  },
  PRODUCTDETAIL: {
    path: '/product/:id',
    element: <ProductDetailPage />,
    title: 'Detalle de producto',
    inNavMenu: false
  },
  CREATEPRODUCT: {
    path: '/create-product',
    element: <CreateProductPage />,
    title: 'Crear producto',
    inNavMenu: true
  },

  EDITPRODUCT: {
    path: '/edit-product/:id',
    element: <EditProductPage />,
    title: 'Editar producto',
    inNavMenu: true
  }
};

export default ROUTES;
