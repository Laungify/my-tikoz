// Import the createSlice function from the '@reduxjs/toolkit' library
import { createSlice } from "@reduxjs/toolkit";

// Define the initial state of the slice
const initialState = {
  componentIsOpen: false, // Indicates whether the component is open or closed
  componentName: "cart" // The name of the component (e.g. "cart", "selectSeat")
};

// Create the slice using the createSlice function
const toggleComponentTruthySlice = createSlice({
  name: "toggleCart", // The name of the slice
  initialState, // The initial state defined above
  reducers: {
    setToggleComponentTruthy: (state, action) => {
      // Update the state based on the action payload
      state.componentIsOpen = action.payload.componentIsOpen;
      state.componentName = action.payload.componentName;
    }
  },
});

// Export the slice
export default toggleComponentTruthySlice;
