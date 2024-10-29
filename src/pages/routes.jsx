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
  PRODUCTDETAIL: {
    path: '/product/:id',
    element: <ProductDetailPage />
  },
  CREATEPRODUCT: {
    path: '/create-product',
    element: <CreateProductPage />
  },

  EDITPRODUCT: {
    path: '/edit-product/:id',
    element: <EditProductPage />
  }
};

export default ROUTES;
