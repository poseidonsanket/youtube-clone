import { createSlice } from "@reduxjs/toolkit";
import { commentsData } from "../components/CommentsContainer";

const videoSlice = createSlice({
  name: "video",
  initialState: {
    videos: [],
    activeButton: null,
    comments: commentsData,
  },
  reducers: {
    addVideos: (state, action) => {
      state.videos = action.payload;
    },
    activateButton: (state, action) => {
      state.activeButton = action.payload;
    },
    addComments: (state, action) => {
      state.comments = [...state.comments, action.payload];
    },
  },
});

export const { addVideos, activateButton, addComments } = videoSlice.actions;
export default videoSlice.reducer;
