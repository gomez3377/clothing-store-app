import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";


const addCartItem = (cartItems, productAdded) => {
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === productAdded.id
    );
  
    if (existingCartItem) {
      return cartItems.map((cartItem) =>
        cartItem.id === existingCartItem.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
  
    return [...cartItems, { ...productAdded, quantity: 1 }];
  };
  
  const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === cartItemToRemove.id
    );
    if (existingCartItem.quantity === 1) {
      return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
    }
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  };
  
  const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
  };





const addItemToCart = (productAdded) => {
    const newCartItems = addCartItem(cartItems, productAdded);
    updateCartItemsReducer(newCartItems);
  };

  const removeItemFromCart = (productRemoved) => {
    const newCartItems = removeCartItem(cartItems, productRemoved);
    updateCartItemsReducer(newCartItems);
  };

  const clearItemFromCart = (cartItemToClear) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    updateCartItemsReducer(newCartItems);
  };






export const setIsCartOpen = (Boolean) =>
createAction(CART_ACTION_TYPES.TOGGLE_CART, Boolean) 