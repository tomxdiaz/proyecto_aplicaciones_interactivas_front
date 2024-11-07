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

const Login = () => {
  const navigate = useNavigate();
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

      userService.getUserData().then(userData => {
        setUser(userData);
      });

      wishListService.getUserWishList().then(userWishList => {
        setWishList(userWishList);
      });

      cartService.getUserCart().then(userCart => {
        setCart(userCart);
      });

      navigate(redirectURL);
    } catch (error) {
      console.log(error);
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
