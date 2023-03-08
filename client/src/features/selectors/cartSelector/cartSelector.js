
import { createSlice, createSelector } from "@reduxjs/toolkit";

// selectors., after state in cart now

export const cartSelector = (state) => state.cartData;

export const cartTotalItemSelector = createSelector([cartSelector], (cart) =>
  cart.reduce((total, current) => (total += current.quantity), 0)
);

export const cartTotalPriceSelector = createSelector([cartSelector], (cart) =>
  cart.reduce(
    (total, current) => (total += current.price * current.quantity),
    0
  )
);
