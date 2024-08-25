import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    toggleBtn: true,
  },
  reducers: {
    toggleEvent: (state) => {
      state.toggleBtn = !state.toggleBtn;
    },
    closeToggle: (state) => {
      state.toggleBtn = false;
    },
  },
});

export const { toggleEvent, closeToggle } = appSlice.actions;

export default appSlice.reducer;
