import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  images: [],
  loaded: false,
};

export const fetchImages = createAsyncThunk(
  "images/fetchImages",
  async (count = 10) => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey = process.env.NEXT_PUBLIC_ACCESS_KEY;
    console.log(accessKey, "accessKey");
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
