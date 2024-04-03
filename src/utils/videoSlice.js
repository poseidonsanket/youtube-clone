import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "video",
  initialState: {
    videos: [],
    activeButton: null,
    pageToken: null,
  },
  reducers: {
    addVideos: (state, action) => {
      state.videos = action.payload;
    },
    activateButton: (state, action) => {
      state.activeButton = action.payload;
    },
    addNewVideos: (state, action) => {
      state.videos = [...state.videos, ...action.payload];
    },
    addPageToken: (state, action) => {
      state.pageToken = action.payload;
    },
  },
});

export const { addVideos, activateButton, addNewVideos, addPageToken } =
  videoSlice.actions;
export default videoSlice.reducer;
