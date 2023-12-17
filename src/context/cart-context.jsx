import React, { createContext, useReducer } from 'react';
import  cartReducer, {sumItems} from './cart-reducer';

export const CartContext = createContext();

const cartFromStore = localStorage.getItem('cart') ?
 JSON.parse(localStorage.getItem('cart')) : [];

const initialState = { cartItems:cartFromStore, ...sumItems(cartFromStore)};

const CartContextProvider = ({ children }) => {
   const [state, dispatch] = useReducer(cartReducer, initialState)
   const addProduct = (product) => dispatch({ type:'ADD_ITEM', payload:product })
   const increase = (product) => dispatch({ type: 'INCREASE', payload:product })
   const decrease = (product) => dispatch({ type: 'DECREASE', payload:product})
   const removeProd = (product) => dispatch({ type:'REMOVE_ITEM', payload:product })
   const clearCart = () => dispatch( {type:'CLEAR'} )

   const contextValues = {
     ...state,
    addProduct,
    increase,
    decrease,
    removeProd,
    clearCart
   }
   return (
     <CartContext.Provider value = {contextValues}>
        {children}
     </CartContext.Provider>
   )
}

export default CartContextProvider;