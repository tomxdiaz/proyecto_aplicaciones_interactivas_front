import React, { useEffect, useState } from 'react';
import searchService from '../../services/searchService';
import { Box } from '@mui/material';
import MyList from '../CustomList/MyList';
import LastSearchesItem from './LastSearchesItem';
import CustomEmptyListMessage from '../CustomList/CustomEmptyListMessage';

const LastSearches = () => {
  const [lastSearches, setLastSearches] = useState([]);

  const emptySearches = () => {
    searchService.emptySearches().then(() => {
      refreshSearches();
    });
  };

  const refreshSearches = () => {
    searchService.getUserSearches().then(searches => {
      setLastSearches(searches);
    });
  };

  useEffect(() => {
    searchService.getUserSearches().then(searches => {
      setLastSearches(searches);
    });
  });

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      width={'100%'}
      alignItems={'center'}
      paddingTop={'2rem'}
      paddingBottom={'4rem'}
      gap={'2rem'}>
      {lastSearches.length ? (
        <MyList title={'Busquedas recientes'} onEmpty={emptySearches}>
          {lastSearches.map(search => (
            <LastSearchesItem key={search.id} search={search} />
          ))}
        </MyList>
      ) : (
        <CustomEmptyListMessage
          message={'Oops, parece que no tienes busquedas recientes'}
          buttonMessage={'Explorar productos'}
        />
      )}
    </Box>
  );
};

export default LastSearches;
