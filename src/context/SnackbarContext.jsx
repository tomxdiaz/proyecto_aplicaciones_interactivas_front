import React, { createContext, useState, useContext } from 'react';
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';

const SnackbarContext = createContext(undefined);

export const SnackbarProvider = ({ children }) => {
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    status: ''
  });

  const openSnackbar = (message, status) => {
    // status: 'success', 'error', 'warning', 'info'
    setSnackbar({ open: true, message, status });
  };

  const closeSnackbar = () => {
    setSnackbar({ open: false, message: '', status: snackbar.status });
  };

  return (
    <SnackbarContext.Provider value={{ openSnackbar }}>
      <Snackbar open={snackbar.open} autoHideDuration={4000} onClose={closeSnackbar}>
        <Alert
          onClose={closeSnackbar}
          severity={
            snackbar.status === 'success'
              ? 'success'
              : snackbar.status === 'error'
              ? 'error'
              : snackbar.status === 'warning'
              ? 'warning'
              : 'info'
          }
          variant='filled'
          sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
      {children}
    </SnackbarContext.Provider>
  );
};

export const useSnackbar = () => {
  const context = useContext(SnackbarContext);
  return context;
};
