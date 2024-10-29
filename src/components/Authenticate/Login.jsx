import React from 'react';
import LoginCard from './LoginCard';
import authService from '../../services/authenticateService';

const LoginPage = () => {
  const handleLogin = async (credentials) => {
    try {
      console.log(credentials);
      const response = await authService.login(credentials);
      console.log("Login exitoso", response);
       alert("Login exitoso!");
      // Aquí podrías redirigir al usuario o almacenar el token
    } catch (error) {
      console.error("Error al iniciar sesión", error);
       alert("Eror al loggearse");
    }
  };

  return (
   
      <LoginCard onSubmit={handleLogin} />
    
  );
};

export default LoginPage;