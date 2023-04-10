import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";



export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartItems: [],
  cartCount: 0,
  totalValue: 0,
});






export const CartProvider = ({ children }) => {
  

  const [{ cartItems, cartCount, totalValue, isCartOpen }, dispatch] = useReducer(
    cartReducer,
    INITIAL_STATE
  );
  const updateCartItemsReducer = (newCartItems) => {
    
  

    dispatch(
      createAction(
        CART_ACTION_TYPES.SET_CART_ITEMS,
        {
          cartItems: newCartItems,
          totalValue: newTotalValue,
          cartCount: newCartCount,

        }
      )
 );
  };


// Actions that get passed through the reducer



 const setIsCartOpen = (bool) => {
  dispatch(createAction( CART_ACTION_TYPES.TOGGLE_CART, bool))
  }

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
    removeItemFromCart,
    clearItemFromCart,
    totalValue,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
