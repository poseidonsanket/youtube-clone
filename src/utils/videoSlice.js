import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "video",
  initialState: {
    videos: [],
    activeButton: null,
  },
  reducers: {
    addVideos: (state, action) => {
      state.videos = action.payload;
    },
    activateButton: (state, action) => {
      state.activeButton = action.payload;
    },
  },
});

export const { addVideos, activateButton } = videoSlice.actions;
export default videoSlice.reducer;
