import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import { CustomContainer } from './LoginCard.styles';
import authService from '../../services/authenticateService';
import userService from '../../services/userService';

const LoginCard = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const loginResponse = await authService.login(username, password);
      // Aca viene el token, guardar en useContext y redirigir a donde haga falta
      const { access_token } = loginResponse;

      sessionStorage.setItem('token', access_token);

      const userDataResponse = await userService.getUserData();

      window.alert(
        'Login exitoso, bienvenido ' +
          userDataResponse.name +
          ' ' +
          userDataResponse.lastName
      );
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
          autoComplete='off'
        />
        <TextField
          label='Password'
          type='password'
          fullWidth
          value={password}
          onChange={e => setPassword(e.target.value)}
          margin='normal'
          autoComplete='off'
        />
        <Button type='submit' variant='contained' color='primary'>
          Login
        </Button>
      </form>
    </CustomContainer>
  );
};

export default LoginCard;
