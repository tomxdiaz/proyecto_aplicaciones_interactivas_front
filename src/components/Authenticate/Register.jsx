import React from 'react';
import { Typography, TextField, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import ROUTES, { getRoute } from '../../pages/routes';
import authService from '../../services/authenticateService';
import {
  CustomContainer,
  CustomForm,
  CustomFormActions
} from './Authenticate.styles';
import { useSnackbar } from '../../context/SnackbarContext';
import { useFormik } from 'formik';
import * as yup from 'yup';

// Calcular la fecha mínima de nacimiento (13 años atrás)
const minDate = new Date();
minDate.setFullYear(minDate.getFullYear() - 13);
const minDateISO = minDate.toISOString().split('T')[0];

// Definir el esquema de validación usando yup
const validationSchema = yup.object({
  name: yup.string().required('El nombre es obligatorio'),
  lastName: yup.string().required('El apellido es obligatorio'),
  birthDate: yup
    .date()
    .max(minDate, 'Debes tener al menos 13 años')
    .required('La fecha de nacimiento es obligatoria'),
  username: yup.string().required('El nombre de usuario es obligatorio'),
  emailAddress: yup
    .string()
    .email('Correo electrónico no válido')
    .required('El correo electrónico es obligatorio'),
  password: yup
    .string()
    .min(8, 'La contraseña debe tener al menos 8 caracteres')
    .required('La contraseña es obligatoria')
});

const Register = () => {
  const navigate = useNavigate();
  const { openSnackbar } = useSnackbar();

  const formik = useFormik({
    initialValues: {
      name: '',
      lastName: '',
      birthDate: '',
      emailAddress: '',
      username: '',
      password: ''
    },
    validationSchema: validationSchema,
    onSubmit: async values => {
      try {
        await authService.register(values);
        navigate(getRoute(ROUTES.LOGIN));
      } catch (e) {
        openSnackbar('Error al crear la cuenta', 'error');
      }
    }
  });

  return (
    <CustomContainer>
      <Typography variant='h4'>Registrarse</Typography>
      <CustomForm onSubmit={formik.handleSubmit}>
        <TextField
          label='Name'
          name='name'
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          fullWidth
          margin='normal'
          autoComplete='new-password'
        />
        <TextField
          label='LastName'
          name='lastName'
          value={formik.values.lastName}
          onChange={formik.handleChange}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
          fullWidth
          margin='normal'
          autoComplete='new-password'
        />
        <TextField
          label='Date of Birth'
          type='date'
          name='birthDate'
          value={formik.values.birthDate}
          onChange={formik.handleChange}
          error={formik.touched.birthDate && Boolean(formik.errors.birthDate)}
          helperText={formik.touched.birthDate && formik.errors.birthDate}
          fullWidth
          margin='normal'
          InputLabelProps={{ shrink: true }}
          autoComplete='new-password'
        />
        <TextField
          label='Username'
          name='username'
          value={formik.values.username}
          onChange={formik.handleChange}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
          fullWidth
          margin='normal'
          autoComplete='new-password'
        />
        <TextField
          label='Email'
          type='email'
          name='emailAddress'
          value={formik.values.emailAddress}
          onChange={formik.handleChange}
          error={formik.touched.emailAddress && Boolean(formik.errors.emailAddress)}
          helperText={formik.touched.emailAddress && formik.errors.emailAddress}
          fullWidth
          margin='normal'
          autoComplete='new-password'
        />
        <TextField
          label='Password'
          type='password'
          name='password'
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
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
