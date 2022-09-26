import { createSlice } from "@reduxjs/toolkit/dist/createSlice"
import { createAsyncThunk } from "@reduxjs/toolkit/dist/createAsyncThunk"
import { request } from "../../utils/axios"

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
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    fetchProfile: (state, action) => {
      state.email = action.payload.email
      state.nickname = action.payload.nickname
      state.id = action.payload.id
      state.password = action.payload.password
    },
  },
})

export const sendRegisterrequest = createAsyncThunk(
  "sendRegisterRequest",
  async (data) => {
    return request("POST", "/api" + "/user/register", data)
  }
)

const actions = userSlice
export const fetchProfile = actions
export default userSlice.reducer
