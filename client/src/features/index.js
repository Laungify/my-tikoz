import toggleSlice from "./slices/toggle/changeComponentSlice.js";
import eventsDataSlice from "./slices/eventsDataSlice/EventsDatalice.js";
import toggleComponentTruthySlice from "./slices/toggle/toggleComponentTruthySlice.js";
import cartSlice from "./slices/cart/CartSlice.js";
import userSlice from "./slices/users/userSlice.js";
import seatSlice from "./slices/seatsSlice/seatSlice.js"

export const toggleReducer = toggleSlice.reducer;
export const { setDisplayedComponent } = toggleSlice.actions;

// Extract the actions and the reducer from the slice
export const eventDataReducer = eventsDataSlice.reducer;
export const { setEventsData } = eventsDataSlice.actions;

// toggleComponentTruthy
export const toggleComponentTruthyReducer = toggleComponentTruthySlice.reducer;
export const { setToggleComponentTruthy } = toggleComponentTruthySlice.actions;

// cartSlice
export const {
  onAddItemsToCart,
  onIncrementProduct,
  onDecrementProduct,
  onRemoveCartItem,
  onClearCart,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;

// userSlice
export const { login, logout } = userSlice.actions;
export const userReducer = userSlice.reducer;

// seat selection
export const { selectSeat, deselectSeat } = seatSlice.actions;
export const seatReducer =  seatSlice.reducer;
