
"use client"
import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState('')

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const searchFn = (value) => {
    setSearchValue(value)
  }

  const removeFromCart = (itemToRemove) => {
    if (itemToRemove) {
      setCartItems((prevItems) => prevItems.filter(item => item.id !== itemToRemove.id))
    } else {
      "nothing"
    }
  };

  const cartCount = cartItems.length;

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, cartCount, searchFn, searchValue  }}>
      {children}
    </CartContext.Provider>
  );
}

export default function useCart() {
  return useContext(CartContext);
}
