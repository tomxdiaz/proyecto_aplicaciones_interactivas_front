import { Box } from '@mui/material';
import React from 'react';
import searchService from '../../../services/searchService';
import CustomEmptyListMessage from '../../CustomList/CustomEmptyListMessage';
import MyList from '../../CustomList/MyList';
import LastSearchesItem from '../../Searches/LastSearchesItem';
import { useNavigate } from 'react-router-dom';
import ROUTES, { getRoute } from '../../../pages/routes';

export const LastSearches = ({ searches, refreshData }) => {
  const navigate = useNavigate();
  const clearSearchList = () => {
    searchService.emptySearches().then(() => refreshData());
  };
  return (
    <Box>
      {searches.length ? (
        <MyList title={'Ultimas Búsquedas'} onEmpty={clearSearchList}>
          {searches.map((search, index) => (
            <LastSearchesItem
              search={search}
              key={`profile-lastSearch-${search.product.title}-${index}`}
              small
              handleOnClick={() => navigate(getRoute(ROUTES.LASTSEARCHES))}
            />
          ))}
        </MyList>
      ) : (
        <CustomEmptyListMessage
          message={'No se encontraron busquedas recientes'}
          buttonMessage={'Explorar productos'}
        />
      )}
    </Box>
  );
};
