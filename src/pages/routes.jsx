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
    element: <HomePage />,
    title: 'Inicio',
    inNavMenu: false
  },
  MYWISHLIST: {
    path: '/my-wishlist',
    element: <MyWishListPage />,
    title: 'Favoritos',
    inNavMenu: true
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
  },
  CART: {
    path: '/cart',
    // element: <CartPage />
    element: <div></div>,
    title: 'Carrito',
    inNavMenu: true
  },
  PROFILE: {
    path: '/profile',
    element: <ProfilePage />,
    title: 'Perfil',
    inNavMenu: false
  },
  LOGIN: {
    path: '/login',
    element: <LoginPage />,
    title: 'Iniciar Sesion',
    inNavMenu: false
  },
  REGISTER: {
    path: '/register',
    element: <RegisterPage />,
    title: 'Registrarse',
    inNavMenu: false
  }
};

export default ROUTES;
