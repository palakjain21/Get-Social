import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
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
    const accessKey = process.env.NEXT_PUBLIC_ACCESS_KEY;

    const response = await fetch(
      `${apiRoot}/users/${userId}/?client_id=${accessKey}`
    );
    let data = await response.json();
    console.log(data);
    return data;
  }
);

export const fetchUserPhotos = createAsyncThunk(
  "images/fetchUserPhotos",
  async (userId, count) => {
    console.log("checking");
    const apiRoot = "https://api.unsplash.com";
    const accessKey = process.env.NEXT_PUBLIC_ACCESS_KEY;

    const response = await fetch(
      `${apiRoot}/users/${userId}/photos/?client_id=${accessKey}`
    );
    let data = await response.json();
    console.log(data, "photos");
    return data;
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
        console.log(action.payload, "payload");
        state.images = action.payload;
        state.loaded = true;
      });
  },
});
export const selectUser = (state) => {
  return state.users.user;
};
export const selectImages = (state) => {
  console.log(state, "state");
  return state.users.images;
};
export const selectLoaded = (state) => state.users.loaded;
export const selectListView = (state) => state.users.listView;

export const { toggleView } = userSlice.actions;

export default userSlice.reducer;
