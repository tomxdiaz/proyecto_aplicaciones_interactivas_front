import React, { useEffect, useState } from 'react';
import { Typography, TextField, Button } from '@mui/material';
import {
  Link,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams
} from 'react-router-dom';
import ROUTES, { getRoute } from '../../pages/routes';
import authService from '../../services/authenticateService';
import userService from '../../services/userService';
import { useUser } from '../../context/UserContext';
import { useWishList } from '../../context/WishListContext';
import wishListService from '../../services/wishListService';
import {
  CustomContainer,
  CustomForm,
  CustomFormActions
} from './Authenticate.styles';
import cartService from '../../services/cartService';
import { useCart } from '../../context/CartContext';
import { useSnackbar } from '../../context/SnackbarContext';

const Login = () => {
  const navigate = useNavigate();
  const { openSnackbar } = useSnackbar();

  const { setUser } = useUser();
  const { setWishList } = useWishList();
  const { setCart } = useCart();
  const [searchParams] = useSearchParams();

  const redirectURL = searchParams.get('redirectURL');

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await authService.login(username, password);

      const userData = await userService.getUserData();
      setUser(userData);

      const userWishList = await wishListService.getUserWishList();
      setWishList(userWishList);

      const userCart = cartService.getUserCart();
      setCart(userCart);

      redirectURL ? navigate(redirectURL) : navigate(getRoute(ROUTES.HOME));
    } catch (e) {
      openSnackbar('Error al iniciar sesion', 'error');
    }
  };

  return (
    <>
      <CustomContainer>
        <Typography variant='h4'>Iniciar sesion</Typography>
        <CustomForm onSubmit={handleSubmit}>
          <TextField
            label='Username'
            fullWidth
            value={username}
            onChange={e => setUsername(e.target.value)}
            margin='normal'
            autoComplete='new-password'
          />
          <TextField
            label='Password'
            type='password'
            fullWidth
            value={password}
            onChange={e => setPassword(e.target.value)}
            margin='normal'
            autoComplete='new-password'
          />

          <CustomFormActions>
            <Link to={getRoute(ROUTES.REGISTER)}>
              <Typography>Todavia no tienes cuenta?</Typography>
            </Link>

            <Button type='submit' variant='contained' color='primary'>
              Iniciar sesion
            </Button>
          </CustomFormActions>
        </CustomForm>
      </CustomContainer>
    </>
  );
};

export default Login;
