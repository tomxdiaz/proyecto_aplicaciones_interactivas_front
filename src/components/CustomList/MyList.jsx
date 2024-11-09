import React from 'react';
import { Typography } from '@mui/material';
import {
  CustomButton,
  CustomList,
  CustomListBar,
  CustomListContainer
} from './MyList.styles';

const MyList = ({ title, onEmpty, children }) => {
  return (
    <CustomListContainer>
      <CustomListBar>
        <Typography variant='h4'>{title}</Typography>
        <CustomButton onClick={onEmpty}>Vaciar</CustomButton>
      </CustomListBar>
      <CustomList>
        <>{children}</>
      </CustomList>
    </CustomListContainer>
  );
};

export default MyList;
