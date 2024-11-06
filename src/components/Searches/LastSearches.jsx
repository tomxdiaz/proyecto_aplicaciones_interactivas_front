import React, { useEffect, useState } from 'react';
import searchService from '../../services/searchService';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ROUTES, { getRoute } from '../../pages/routes';
import {
  CustomButton,
  CustomContainer,
  LastSearchesActions
} from './LastSearches.styles';

const LastSearches = () => {
  const [lastSearches, setLastSearches] = useState([]);
  const navigate = useNavigate();

  const clearSearches = () => {
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
    <CustomContainer>
      <LastSearchesActions>
        <CustomButton onClick={clearSearches}>Borrar busquedas</CustomButton>
      </LastSearchesActions>
      {lastSearches.map((search, i) => {
        return (
          <Button
            key={search.id}
            onClick={() => {
              navigate(getRoute(ROUTES.PRODUCTDETAIL, { id: search.product.id }));
            }}>
            <Box>{search.product.title}</Box>
            <Box>{search.date}</Box>
          </Button>
        );
      })}
    </CustomContainer>
  );
};

export default LastSearches;
