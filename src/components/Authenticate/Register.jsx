import React, { useState } from 'react';
import { Typography, TextField, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import ROUTES, { getRoute } from '../../pages/routes';
import authService from '../../services/authenticateService';
import userService from '../../services/userService';
import {
  CustomContainer,
  CustomForm,
  CustomFormActions
} from './Authenticate.styles';

const Register = () => {
  const parsedDate = new Date(Date.now()).toISOString().split('T')[0];

  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState(parsedDate);
  const [emailAddress, setEmailAddress] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const userData = {
        name,
        lastName,
        birthDate,
        username,
        emailAddress,
        password
      };

      await authService.register(userData);

      navigate(getRoute(ROUTES.LOGIN));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CustomContainer>
      <Typography variant='h4'>Registrarse</Typography>
      <CustomForm onSubmit={handleSubmit}>
        <TextField
          label='Name'
          value={name}
          onChange={e => setName(e.target.value)}
          fullWidth
          margin='normal'
          autoComplete='new-password'
        />
        <TextField
          label='LastName'
          value={lastName}
          onChange={e => setLastName(e.target.value)}
          fullWidth
          margin='normal'
          autoComplete='new-password'
        />
        <TextField
          label='Date of Birth'
          type='date'
          value={birthDate}
          onChange={e => setBirthDate(e.target.value)}
          fullWidth
          margin='normal'
          autoComplete='new-password'
        />
        <TextField
          label='Username'
          value={username}
          onChange={e => setUsername(e.target.value)}
          fullWidth
          margin='normal'
          autoComplete='new-password'
        />
        <TextField
          label='Email'
          type='email'
          value={emailAddress}
          onChange={e => setEmailAddress(e.target.value)}
          fullWidth
          margin='normal'
          autoComplete='new-password'
        />
        <TextField
          label='Password'
          type='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          fullWidth
          margin='normal'
          autoComplete='new-password'
        />

        <CustomFormActions>
          <Link to={getRoute(ROUTES.LOGIN)}>
            <Typography>Ya tienes una cuenta?</Typography>
          </Link>

          <Button type='submit' variant='contained' color='primary'>
            Crear cuenta
          </Button>
        </CustomFormActions>
      </CustomForm>
    </CustomContainer>
  );
};

export default Register;
