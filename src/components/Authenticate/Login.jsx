import React, { useState } from 'react';
import { Typography, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../pages/routes';
import authService from '../../services/authenticateService';
import { CustomContainer } from './Login.styles';
import userService from '../../services/userService';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const loginResponse = await authService.login(username, password);

      // Aca viene el token, guardar en useContext y redirigir a donde haga falta
      const { access_token } = loginResponse;

      sessionStorage.setItem('token', access_token);

      // useContext setToken()

      const user = await userService.getUserData();

      window.alert(user.lastName);

      navigate(ROUTES.HOME.path);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CustomContainer>
      <Typography variant='h4'>Login</Typography>
      <form onSubmit={handleSubmit}>
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
        <Button type='submit' variant='contained' color='primary'>
          Login
        </Button>
      </form>
    </CustomContainer>
  );
};

export default Login;
