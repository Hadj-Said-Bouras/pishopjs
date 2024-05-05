"use client"
  import React, { createContext, useContext, useState } from 'react';

  const whishListContext = createContext();
  
  export function WishlistProvider({ children }) {
      const [whishListItems, setWishlistItems] = useState([]);

    const addToWhishList = (item) => {
      setWishlistItems((prevItems) => [...prevItems, item]);
    };
  
    const removeItemFromWhishList = (itemToRemove) => {
      if (itemToRemove) {
        setWishlistItems(...whishListItems, !itemToRemove)
      } else {
        "nothing"
      }
    };
    
      const wishlistCount = whishListItems.length;
  
      return (
          <whishListContext.Provider value={{ wishlistCount, whishListItems, addToWhishList, removeItemFromWhishList }}>
              {children}
          </whishListContext.Provider>
      );
  }
  

  export default function useWishlist() {
    
      return useContext(whishListContext);
  }
  