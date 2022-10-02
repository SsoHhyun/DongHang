import { createSlice } from "@reduxjs/toolkit"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const initialState = {
  id: "",
  email: "",
  nickname: "",
  phone: "",
}

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.email = action.payload.email
      state.nickname = action.payload.nickname
      state.id = action.payload.id
      state.phone = action.payload.phone
    },
  },
})

export const { setUserInfo } = userSlice.actions
export default userSlice.reducer
