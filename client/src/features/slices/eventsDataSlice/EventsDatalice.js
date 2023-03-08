import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    eventsData: []
};

const eventsDataSlice = createSlice({
    name: 'eventsData',
    initialState,
    reducers: {
       setEventsData: (state, action) =>{
           state.eventsData = action.payload;   
       } 
    }

})

export default eventsDataSlice