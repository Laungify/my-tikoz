import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";


export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(register.fulfilled, (state, action) => {
  //     state.user = action.payload.userAuth.user;
  //   });
  // },
});


// selectors
export const selectUser = (state) => state.user.user;
//   const posts = useSelector((state) => state.posts);

export default userSlice;
