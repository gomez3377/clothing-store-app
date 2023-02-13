import { createContext, useEffect, useState } from "react";

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
    return cartItems.filter((cartItem) => cartItem.id != cartItemToRemove.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter((cartItem) => cartItem.id != cartItemToClear.id);
};

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
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItems) => total + cartItems.quantity,
      0
    );

    
    setCartCount(newCartCount);
  }, [cartItems]);
  
  useEffect(() => {
    
    const newTotalValue = cartItems.reduce(
      (total, cartItems) => total + cartItems.price * cartItems.quantity,
      0
      );
      setTotalValue(newTotalValue);
  }, [cartItems])

  const addItemToCart = (productAdded) => {
    setCartItems(addCartItem(cartItems, productAdded));
  };

  const removeItemFromCart = (productRemoved) => {
    setCartItems(removeCartItem(cartItems, productRemoved));
  };

  const clearItemFromCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear));
  };

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
