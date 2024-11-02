import React, { useState } from 'react';
import { Typography, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../pages/routes';
import authService from '../../services/authenticateService';
import userService from '../../services/userService';
import { CustomContainer } from './Authenticate.styles';

const Register = ({ onRegister }) => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('13-05-2005');
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

      navigate(ROUTES.LOGIN.path);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CustomContainer>
      <Typography variant='h4'>Register</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label='Name'
          value={name}
          onChange={e => setName(e.target.value)}
          fullWidth
          margin='normal'
        />
        <TextField
          label='LastName'
          value={lastName}
          onChange={e => setLastName(e.target.value)}
          fullWidth
          margin='normal'
        />
        <TextField
          label='Date of Birth'
          type='date'
          value={birthDate}
          onChange={e => setBirthDate(e.target.value)}
          fullWidth
          margin='normal'
        />
        <TextField
          label='Username'
          value={username}
          onChange={e => setUsername(e.target.value)}
          fullWidth
          margin='normal'
        />
        <TextField
          label='Email'
          type='email'
          value={emailAddress}
          onChange={e => setEmailAddress(e.target.value)}
          fullWidth
          margin='normal'
        />
        <TextField
          label='Password'
          type='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          fullWidth
          margin='normal'
        />

        <Button type='submit' variant='contained' color='primary'>
          Register
        </Button>
      </form>
    </CustomContainer>
  );
};

export default Register;
