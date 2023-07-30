// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import imagesReducer from "./imageSlice";
import userReducer from "./userSlice";

const store = configureStore({
  reducer: {
    images: imagesReducer,
    users: userReducer,
  },
});

export default store;
