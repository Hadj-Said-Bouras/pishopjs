"use client"
  import React, { createContext, useContext, useState } from 'react';

  const WishlistContext = createContext();
  
  export function WishlistProvider({ children }) {
      const [wishlistCount, setWishlistCount] = useState(0);
  
      const incrementWishlistCount = () => {
          setWishlistCount(prevCount => prevCount + 1);
      };
  
      return (
          <WishlistContext.Provider value={{ wishlistCount, incrementWishlistCount }}>
              {children}
          </WishlistContext.Provider>
      );
  }
  
  export function useWishlist() {
      return useContext(WishlistContext);
  }
  