import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
    toggleChat: false,
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.splice(LIVE_CHAT_COUNT, 1);
      state.messages.push(action.payload);
    },
    chatButtonToggle: (state,action) => {
      state.toggleChat = !state.toggleChat;
    }
  },
});

export const { addMessage,chatButtonToggle } = chatSlice.actions;
export default chatSlice.reducer;
