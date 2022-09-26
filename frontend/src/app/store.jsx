import { configureStore, createSlice } from "@reduxjs/toolkit"
import userReducer from "../features/user/userSlice"

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
})
const open = createSlice({
  name: "open",
  initialState: false,
  reducers: {
    setOpen(state) {
      return true
    },
    setClose(state) {
      return false
    },
  },
})

export let { setOpen, setClose } = open.actions

export default configureStore({
  reducer: {
    open: open.reducer,
  },
})
