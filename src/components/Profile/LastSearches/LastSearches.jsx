import { Box } from '@mui/material';
import React from 'react';
import searchService from '../../../services/searchService';
import CustomEmptyListMessage from '../../CustomList/CustomEmptyListMessage';
import MyList from '../../CustomList/MyList';
import LastSearchesItem from '../../Searches/LastSearchesItem';

export const LastSearches = ({ searches, refreshData }) => {
  const clearSearchList = () => {
    searchService.emptySearches().then(() => refreshData());
  };
  return (
    <Box>
      {searches.length ? (
        <MyList title={'Ultimas Búsquedas'} onEmpty={clearSearchList}>
          {searches.map(search => (
            <LastSearchesItem
              search={search}
              key={`profile-lastSearch-${search.product.id}`}
              small
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
