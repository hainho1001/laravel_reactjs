import React, { createContext, useReducer } from 'react';
import { CartReducer, sumItems } from './CartReducer';

export const CartContext = createContext(Object ());

export function CartContextProvider({children}: any) {
  let storage: any = [];
  let getData = localStorage.getItem("cart");
  storage = getData ? JSON.parse(getData) : [];

  const initialState = { cartItems: storage, checkout: false, ...sumItems(storage)};

  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addCart = (payload: any) => {
    dispatch({type: 'ADD_CART', payload});
  }

  const increase = (payload: any) => {
    dispatch({type: 'INCREASE', payload});
  }

  const decrease = (payload: any) => {
    dispatch({type: 'DECREASE', payload});
  }
  
  const removeItem = (payload: any) => {
    dispatch({type: 'REMOVE_ITEM', payload});
  }

  const clearItem = () => {
    dispatch({type: 'CLEAR_ITEM'});
  }

  const handleCheckout = () => {
    debugger
    dispatch({type: 'CHECKOUT'});
  }

  const valueContext = {
    addCart,
    increase,
    decrease,
    removeItem,
    clearItem,
    handleCheckout,
    ...state
  }

  return ( 
    <CartContext.Provider value={valueContext} >
        { children }
    </CartContext.Provider>
 );
};