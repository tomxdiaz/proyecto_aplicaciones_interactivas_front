import React, { createContext, useState, useContext } from 'react';

const WishListContext = createContext(undefined);

export const WishListProvider = ({ children }) => {
  const [wishList, setWishList] = useState([]);

  return (
    <WishListContext.Provider value={{ wishList, setWishList }}>
      {children}
    </WishListContext.Provider>
  );
};

export const useWishList = () => {
  const context = useContext(WishListContext);
  return context;
};
