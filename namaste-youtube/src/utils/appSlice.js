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
  },
});

export const { toggleEvent } = appSlice.actions;

export default appSlice.reducer;
