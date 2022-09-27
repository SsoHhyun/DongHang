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

const imgIndex = createSlice({
  name: "imgIndex",
  initialState: -1,
  reducers: {
    setImgIndex(state, action) {
      return action.payload;
    },
    nextImg(state) {
      return state + 1;
    },
    previousImg(state) {
      return state - 1;
    },
  },
});

export let { setOpen, setClose } = open.actions;
export let { setImgIndex, nextImg, previousImg } = imgIndex.actions;

export default configureStore({
  reducer: {
    open: open.reducer,
    imgIndex: imgIndex.reducer,
  },
});
