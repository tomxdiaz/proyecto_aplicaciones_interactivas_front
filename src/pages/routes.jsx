import React from 'react';
import {
  HomePage,
  LoginPage,
  RegisterPage,
  CreateProductPage,
  EditProductPage,
  CartPage
} from './index';
import { ProductDetailPage } from './ProductDetailPage';
import { MyWishListPage } from './MyWishListPage';
import { ProfilePage } from './ProfilePage';
import { LastSearchesPage } from './LastSearchesPage';

export const getRoute = (route, params) => {
  let path = route.path;
  if (params) {
    for (const [key, value] of Object.entries(params)) {
      path = path.replace(`:${key}`, value);
    }
  }

  return path;
};

const ROUTES = {
  HOME: {
    path: '/',
    element: <HomePage />,
    title: 'Inicio',
    inNavMenu: false,
    adminOnly: false
  },
  MYWISHLIST: {
    path: '/my-wishlist',
    element: <MyWishListPage />,
    title: 'Favoritos',
    inNavMenu: true,
    adminOnly: false
  },
  CART: {
    path: '/cart',
    element: <CartPage />,
    title: 'Carrito',
    inNavMenu: true,
    adminOnly: false
  },
  LASTSEARCHES: {
    path: '/last-searches',
    element: <LastSearchesPage />,
    title: 'Busquedas recientes',
    inNavMenu: true,
    adminOnly: false
  },
  PROFILE: {
    path: '/profile',
    element: <ProfilePage />,
    title: 'Perfil',
    inNavMenu: false,
    adminOnly: false
  },
  PRODUCTDETAIL: {
    path: `/product/:id`,
    element: <ProductDetailPage />,
    title: 'Detalle de producto',
    inNavMenu: false,
    adminOnly: false
  },
  CREATEPRODUCT: {
    path: '/create-product',
    element: <CreateProductPage />,
    title: 'Crear producto',
    inNavMenu: true,
    adminOnly: true
  },
  EDITPRODUCT: {
    path: `/edit-product/:id`,
    element: <EditProductPage />,
    title: 'Editar producto',
    inNavMenu: false,
    adminOnly: true
  },
  LOGIN: {
    path: '/login',
    element: <LoginPage />,
    title: 'Iniciar Sesion',
    inNavMenu: false,
    adminOnly: false
  },
  REGISTER: {
    path: '/register',
    element: <RegisterPage />,
    title: 'Registrarse',
    inNavMenu: false,
    adminOnly: false
  }
};

export default ROUTES;
