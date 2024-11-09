import React, { useEffect, useState } from 'react';
import searchService from '../../services/searchService';
import { Box } from '@mui/material';
import MyList from '../CustomList/MyList';
import LastSearchesItem from './LastSearchesItem';
import CustomEmptyListMessage from '../CustomList/CustomEmptyListMessage';
import { ListContainer } from '../CustomList/MyList.styles';
import { useSnackbar } from '../../context/SnackbarContext';

const LastSearches = () => {
  const [lastSearches, setLastSearches] = useState([]);
  const { openSnackbar } = useSnackbar();

  const emptySearches = () => {
    searchService
      .emptySearches()
      .then(() => {
        refreshSearches();
      })
      .catch(e => {
        openSnackbar('Error al vaciar las busquedas', 'error');
      });
  };

  const refreshSearches = () => {
    searchService
      .getUserSearches()
      .then(searches => {
        setLastSearches(searches);
      })
      .catch(e => {
        openSnackbar('Error al obtener las busquedas', 'error');
      });
  };

  useEffect(() => {
    searchService
      .getUserSearches()
      .then(searches => {
        setLastSearches(searches);
      })
      .catch(e => {
        openSnackbar('Error al obtener las busquedas', 'error');
      });
  });

  return (
    <ListContainer>
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
    </ListContainer>
  );
};

export default LastSearches;
