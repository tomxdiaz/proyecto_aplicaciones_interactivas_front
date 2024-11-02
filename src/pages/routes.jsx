import React from 'react';
import {
  HomePage,
  LoginPage,
  RegisterPage,
  CreateProductPage,
  EditProductPage
} from './index';
import { ProductDetailPage } from './ProductDetailPage';
import { MyWishListPage } from './MyWishListPage';
import { ProfilePage } from './ProfilePage';

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
  PROFILE: {
    path: '/profile',
    element: <ProfilePage />
  },
  MYWISHLIST: {
    path: '/my-wishlist',
    element: <MyWishListPage />
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
