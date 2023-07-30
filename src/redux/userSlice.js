import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: null,
  images: [],
  loaded: false,
  listView: true,
};

export const fetchUserData = createAsyncThunk(
  "images/fetchUserData",
  async (userId) => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey = "ZSTK_JZ1k8yeMRoTrTskTZHJz4sSICCap3LB3hNyMwQ";

    const response = await axios.get(
      `${apiRoot}/users/${userId}/?client_id=${accessKey}`
    );
    console.log(response.data);
    return response.data;
  }
);

export const fetchUserPhotos = createAsyncThunk(
  "images/fetchUserPhotos",
  async (userId, count) => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey = "ZSTK_JZ1k8yeMRoTrTskTZHJz4sSICCap3LB3hNyMwQ";

    const response = await axios.get(
      `${apiRoot}/users/${userId}/photos/?client_id=${accessKey}`
    );
    return response.data;
  }
);

const userSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    toggleView(state) {
      state.listView = !state.listView;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(fetchUserPhotos.fulfilled, (state, action) => {
        state.images = [...state.images, ...action.payload];
        state.loaded = true;
      });
  },
});
export const selectUser = (state) => {
  console.log(state, "state");
  return state.users.user;
};
export const selectImages = (state) => {
  return state.images.images;
};
export const selectLoaded = (state) => state.images.loaded;
export const selectListView = (state) => state.users.listView;

export const { toggleView } = userSlice.actions;

export default userSlice.reducer;
