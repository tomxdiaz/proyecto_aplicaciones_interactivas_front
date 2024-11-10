import { Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ROUTES, { getRoute } from '../../pages/routes';
import {
  Avatar,
  FormActions,
  ProfileContainer,
  ProfileForm
} from './EditProfile.styles';
import { Input } from './Input/Input';
import { accountType } from '../../utils/constants';
import { useSnackbar } from '../../context/SnackbarContext';
import userService from '../../services/userService';
export const EditProfile = ({ user }) => {
  const [userData, setUserData] = useState(user);
  const navigate = useNavigate();
  const { openSnackbar } = useSnackbar();

  console.log('user: ', user);

  const userInputs = [
    { label: 'Nombre', value: userData.name, state: 'name' },
    { label: 'Apellido', value: userData.lastName, state: 'lastName' },
    { label: 'Usuario', value: userData.username, state: 'username' },
    {
      label: 'Fecha de nacimiento',
      value: userData.birthDate,
      state: 'birthDate',
      type: 'date'
    },
    { label: 'Email', value: userData.emailAddress, state: 'emailAddress' },
    {
      label: 'Tipo de cuenta',
      value: accountType[userData.role],
      state: 'role',
      disabled: true
    }
  ];

  const handleChange = (state, value) => {
    const newUser = { ...userData };
    userData[state] = value;
    setUserData(newUser);
  };

  const handleSubmit = event => {
    event.preventDefault();
    try {
      console.log('userData: ', userData);
      userService
        .updateUser(userData)
        .then(() => navigate(getRoute(ROUTES.PROFILE)))
        .catch(() =>
          openSnackbar('Error al actualizar datos de la cuenta', 'error')
        );
    } catch (error) {
      openSnackbar('Error al actualizar datos de la cuenta', 'error');
    }
  };

  return (
    <ProfileContainer>
      <Typography variant='h4'>Actualizar información</Typography>
      <ProfileForm onSubmit={handleSubmit}>
        <Avatar />
        {userInputs.map(input => (
          <Input
            label={input.label}
            state={input.state}
            value={input.value}
            type={input.type}
            handleChange={handleChange}
            disabled={input.disabled}
          />
        ))}
        <FormActions>
          <Link to={getRoute(ROUTES.PROFILE)}>
            <Button type='submit' variant='contained' color='primary'>
              Cancelar
            </Button>
          </Link>

          <Button type='submit' variant='contained' color='primary'>
            Guardar
          </Button>
        </FormActions>
      </ProfileForm>
    </ProfileContainer>
  );
};
