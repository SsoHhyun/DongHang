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
  userId: "",
  userPw: "",
  userEmail: "",
  userName: "",
  usercode: localStorage.getIte("userCode"),
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    fetchProfile: (state, action) => {
      state.userEmail = action.payload.userEmail
      state.userName = action.payload.userName
      state.userId = action.payload.userId
      state.userPw = action.payload.userPw
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
