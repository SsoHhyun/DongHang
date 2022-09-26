import { configureStore, createSlice } from "@reduxjs/toolkit";

const open = createSlice({
  name: "open",
  initialState: false,
  reducers: {
    setOpen(state) {
      return true;
    },
    setClose(state) {
      return false;
    },
  },
});

export let { setOpen, setClose } = open.actions;

export default configureStore({
  reducer: {
    open: open.reducer,
  },
});
