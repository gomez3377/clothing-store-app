import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart




const newCartCount = newCartItems.reduce(
    (total, cartItems) => total + cartItems.quantity,
    0
  );
  const newTotalValue = newCartItems.reduce(
    (total, cartItems) => total + cartItems.price * cartItems.quantity,
    0
  );