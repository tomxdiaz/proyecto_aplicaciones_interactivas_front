import React, { useState } from 'react';
import { Typography, TextField, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import ROUTES from '../../pages/routes';
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

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useUser();
  const { setWishList } = useWishList();

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

      navigate(ROUTES.HOME.path);
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
            <Link to={ROUTES.REGISTER.path}>
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
