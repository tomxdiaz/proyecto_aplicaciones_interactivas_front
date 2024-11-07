import { Typography } from '@mui/material';
import React from 'react';
import ROUTES, { getRoute } from '../../pages/routes';
import { CustomEmptyList, CustomLink, CustomButton } from './MyList.styles';

const CustomEmptyListMessage = ({ message, buttonMessage }) => {
  return (
    <CustomEmptyList>
      <Typography textAlign={'center'} variant='h4'>
        {message}
      </Typography>
      <CustomLink to={getRoute(ROUTES.HOME)}>
        <CustomButton>
          <Typography>{buttonMessage}</Typography>
        </CustomButton>
      </CustomLink>
    </CustomEmptyList>
  );
};

export default CustomEmptyListMessage;
