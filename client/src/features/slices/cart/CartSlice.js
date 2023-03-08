import { createSlice, createSelector } from "@reduxjs/toolkit";

// initially an empty array of products
const initialState = [];
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    onAddItemsToCart: (state, action) => {
      const { id } = action.payload;
      const checkProductInCart = state.find((item) => item.id === id);
      if (checkProductInCart) {
        return state.map((cartProduct) =>
          cartProduct.id === id
            ? { ...cartProduct, quantity: cartProduct.quantity + 1 }
            : cartProduct
        );
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }
    },

    onIncrementProduct: (state, { payload }) => {
      return state.map((cartItem) =>
        cartItem.id === payload
          ? {
              ...cartItem,
              quantity: cartItem.quantity + 1,
            }
          : cartItem
      );
    },
    // If a product quantity is 1, it should not be decremented
    onDecrementProduct: (state, { payload }) => {
      return state.map((item) =>
        item.id === payload && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    },

    toggleCartQuantity: (state, action) => {
      const { id, value } = action.payload;
    },
    onRemoveCartItem: (state, { payload }) => {
      // find the cart item to remove
      const existingCartItem = state.find(
        (cartItem) => cartItem.id === payload
      );

      // filter the products to only the catItems except the existingCartItem
      return state.filter(
        (cartProducts) => cartProducts.id !== existingCartItem.id
      );
    },
    onClearCart: (state) => {
      return (state = []);
    },
  },
});

export default cartSlice;
