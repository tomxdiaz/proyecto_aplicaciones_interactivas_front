import React, { useEffect, useState } from 'react';
import searchService from '../../services/searchService';
import { Box, Button } from '@mui/material';

const LastSearches = () => {
  const [lastSearches, setLastSearches] = useState([]);

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
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column'
      }}>
      <Button onClick={clearSearches}>Clear</Button>
      {lastSearches.map((search, i) => {
        return (
          <Button
            key={search.id}
            onClick={() => {
              console.log(search);
            }}>
            <Box>{search.product.title}</Box>
            <Box>{search.date}</Box>
          </Button>
        );
      })}
    </Box>
  );
};

export default LastSearches;
