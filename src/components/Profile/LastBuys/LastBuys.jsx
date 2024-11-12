import { Box } from '@mui/material';
import React from 'react';
import CustomEmptyListMessage from '../../CustomList/CustomEmptyListMessage';
import MyList from '../../CustomList/MyList';
import MyListItem from '../../CustomList/MyListItem';
import { Navigate, useNavigate } from 'react-router-dom';
import ROUTES, { getRoute } from '../../../pages/routes';

export const LastBuys = ({ buys }) => {
  const navigate = useNavigate();
  return (
    <Box>
      {buys.length ? (
        <MyList title={'Ultimas compras'} onEmpty={null}>
          {buys.map((buy, index) => (
            <MyListItem
              product={buy}
              onRemove={null}
              children={null}
              key={`profile-lastBuys-${index}`}
              small
              handleOnClick={() => navigate(getRoute(ROUTES.BUYS))}
            />
          ))}
        </MyList>
      ) : (
        <CustomEmptyListMessage
          message={'No se encontraron compras'}
          buttonMessage={'Explorar productos'}
        />
      )}
    </Box>
  );
};
