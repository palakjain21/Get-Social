// redux/imagesSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  images: [],
  loaded: false,
};

export const fetchImages = createAsyncThunk(
  "images/fetchImages",
  async (count = 10) => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey = "ZSTK_JZ1k8yeMRoTrTskTZHJz4sSICCap3LB3hNyMwQ";

    const response = await axios.get(
      `${apiRoot}/photos/random?client_id=${accessKey}&count=${count}`
    );
    return response.data;
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
