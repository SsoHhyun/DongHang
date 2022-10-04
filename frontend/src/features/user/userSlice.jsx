import { createSlice } from "@reduxjs/toolkit"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const initialState = {
  id: "",
  email: "",
  nickname: "",
  phoneNumber: "",
  profileImage: "http://www.gravatar.com/avatar/?d=mp",
}

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUserInfo: (state, { payload }) => {
      state.email = payload.email
      state.nickname = payload.nickname
      state.id = payload.id
      state.phone = payload.phone
      if (payload.profileImage !== null) {
        state.profileImage = payload.profileImage
      }
    },
  },
})

export const { setUserInfo } = userSlice.actions
export default userSlice.reducer
