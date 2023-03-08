import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    displayedComponent: 'signin'
};

const toggleSlice = createSlice({
    name: 'toggleSlice',
    initialState,
    reducers: {
        setDisplayedComponent: (state, action) => {
            state.displayedComponent = action.payload;
        }
    }
})

export default toggleSlice;

