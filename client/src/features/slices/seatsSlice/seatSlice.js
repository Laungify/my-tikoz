import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedSeats: [],
};

export const seatSlice = createSlice({
  name: "seat",
  initialState,
  reducers: {
    selectSeat: (state, action) => {
      const { seatNumber } = action.payload;
      const updatedSelectedSeats = [...state.selectedSeats, seatNumber];
      return { ...state, selectedSeats: updatedSelectedSeats };
    },
    deselectSeat: (state, action) => {
      const { seatNumber } = action.payload;
      const updatedSelectedSeats = state.selectedSeats.filter(
        (seat) => seat !== seatNumber
      );
      return { ...state, selectedSeats: updatedSelectedSeats };
    },
  },
});

export default seatSlice
