import { createContext, useEffect, useReducer } from "react";

export const CartContext = createContext();

const cartReducer = ( state, action ) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return { ...state, cart: action.payload }
    case 'REMOVE_ITEM':
      return { ...state, cart: action.payload }
    case 'DELETE_ITEM':
      return { ...state, cart: action.payload }
    case 'EMPTY_ALL_ITEMS':
      return { ...state, cart: action.payload }
    default:
      return state;
  }
}

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    cart: []
  });

  useEffect(() => {
    console.log(state.cart);
  }, [state.cart]);

  const addToCart = (item) => {
    const isInCart = state.cart.find(cartItem => cartItem.id === item.id);
    if (isInCart) {
      const updatedCart = state.cart.map(cartItem => cartItem.id === item.id 
        ? { ...cartItem, amount: cartItem.amount + 1 }
        : { ...cartItem });
      dispatch({ type: 'ADD_ITEM', payload: updatedCart })
      return;
    }
    dispatch({ type: 'ADD_ITEM', payload: [ ...state.cart, { ...item, amount: 1 } ] })
  }

  const removeFromCart = (id) => {
    const updatedCart = state.cart.reduce((theTotal, theItem) => {
      if (theItem.id === id) {
        if (theItem.amount === 1) return [ ...theTotal, theItem ];
        return [ ...theTotal, { ...theItem, amount: theItem.amount - 1 } ];
      }
      return [ ...theTotal, theItem ];
    }, []);

    dispatch({ type: 'REMOVE_ITEM', payload: updatedCart })
  }
  
  const deleteFromCart = (id) => {
    const updatedCart = state.cart.reduce((theTotal, theItem) => {
      if (theItem.id === id) return theTotal;
      
      return [ ...theTotal, theItem ];
    }, []);
    
    dispatch({ type: 'DELETE_ITEM', payload: updatedCart })
  }

  const emptyCart = () => {
    dispatch({ type: 'EMPTY_ALL_ITEMS', payload: [] })
  }

  return (
    <CartContext.Provider value={{ ...state, addToCart, removeFromCart, deleteFromCart, emptyCart }}>
      { children }
    </CartContext.Provider>
  )
}