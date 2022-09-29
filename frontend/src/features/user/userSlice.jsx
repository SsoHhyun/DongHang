import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

// const userData = {
//     userId,
//     userPw,
//     userName,
//     userEmail
// }

export const initialState = {
  id: "",
  password: "",
  email: "",
  nickname: "",
};

const courseListSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.email = action.payload.email;
      state.nickname = action.payload.nickname;
      state.id = action.payload.id;
    },
  },
});

const actions = courseListSlice;
export const fetchProfile = actions;
export default courseListSlice.reducer;
