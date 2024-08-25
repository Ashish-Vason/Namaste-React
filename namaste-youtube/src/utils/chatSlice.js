import { createSlice } from '@reduxjs/toolkit';
import { LIVE_CHAT_MAX_LENGTH } from './constants';

const chatSlice = createSlice({
  name: 'message',
  initialState: {
    message: [],
  },
  reducers: {
    addMessage: (state, action) => {
      // state.
      state.message.splice(LIVE_CHAT_MAX_LENGTH, 1);
      state.message.unshift(action.payload);
    },
    addLiveMessage: (state, action) => {
      // state.
      state.message.unshift(action.payload);
    },
  },
});

export const { addMessage, addLiveMessage } = chatSlice.actions;

export default chatSlice.reducer;
