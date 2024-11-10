import { Button, Divider, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
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
import { useUser } from '../../context/UserContext';
import authService from '../../services/authenticateService';
export const EditProfile = ({ user }) => {
  const [userData, setUserData] = useState(user);
  const [pass, setPass] = useState('');
  const [newPass1, setNewPass1] = useState('');
  const [newPass2, setNewPass2] = useState('');
  const navigate = useNavigate();
  const { openSnackbar } = useSnackbar();
  const { setUser } = useUser();

  const userInputs = [
    { label: 'Nombre', value: userData.name, state: 'name' },
    { label: 'Apellido', value: userData.lastName, state: 'lastName' },
    {
      label: 'Usuario',
      value: userData.username,
      state: 'username',
      disabled: true
    },
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
    newUser[state] = value;
    setUserData(newUser);
  };

  const updateData = () =>
    userService
      .updateUser(userData)
      .then(newUserData => {
        setUser(newUserData);
        navigate(getRoute(ROUTES.PROFILE));
      })
      .catch(() => openSnackbar('Error al actualizar datos de la cuenta', 'error'));

  const handleSubmit = event => {
    event.preventDefault();
    try {
      if (newPass1 || newPass2) {
        if (newPass1 !== newPass2)
          openSnackbar('Las contraseñas deben coincidir', 'error');
        else if (!pass) openSnackbar('Debe ingresar la contraseña actual', 'error');
        else
          authService
            .login(userData.username, pass)
            .then(() => updateData())
            .catch(() => openSnackbar('La contraseña es incorrecta', 'error'));
      } else updateData();
    } catch (error) {
      openSnackbar('Error al actualizar datos de la cuenta', 'error');
    }
  };

  return (
    <ProfileContainer>
      <Typography variant='h4'>Actualizar información</Typography>
      <ProfileForm onSubmit={handleSubmit}>
        <Avatar />
        <>
          {userInputs.map(input => (
            <Input
              label={input.label}
              state={input.state}
              value={input.value}
              type={input.type}
              handleChange={handleChange}
              disabled={input.disabled}
              key={`editProfile-input-${input.label}`}
            />
          ))}
        </>
        <Divider orientation='horizontal' flexItem sx={{ margin: '1rem 0' }} />
        <Typography variant='h5'>Cambiar contraseña</Typography>
        <TextField
          label='Contraseña actual'
          value={pass}
          fullWidth
          margin='normal'
          onChange={event => setPass(event.target.value)}
          autoComplete='new-password'
        />
        <TextField
          label='Nueva contraseña'
          value={newPass1}
          fullWidth
          margin='normal'
          onChange={event => setNewPass1(event.target.value)}
          autoComplete='new-password'
        />
        <TextField
          label='Confirme nueva contraseña'
          value={newPass2}
          fullWidth
          margin='normal'
          onChange={event => setNewPass2(event.target.value)}
          autoComplete='new-password'
        />
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
