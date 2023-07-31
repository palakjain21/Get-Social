// redux/imagesSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  images: [],
  loaded: false,
};

export const fetchImages = createAsyncThunk(
  "images/fetchImages",
  async (count = 20) => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey = "Vdo7TpSQRd67RLo5ZKLwA6ZegaWJFkJRcbRnz52cNCM";

    const response = await fetch(
      `${apiRoot}/photos/random?client_id=${accessKey}&count=${count}`
    );
    let data = await response.json();
    console.log(data, "imageSlice");
    return data;
  }
);

const imagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchImages.fulfilled, (state, action) => {
      state.images = [...state.images, ...action.payload];
      state.loaded = true;
    });
  },
});

export const selectImages = (state) => state.images.images;
export const selectLoaded = (state) => state.images.loaded;

export default imagesSlice.reducer;
