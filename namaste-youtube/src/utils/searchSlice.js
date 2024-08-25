import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    // eg: iphone: ["iphone 15", "iphone 16", "iphone pro"]
  },
  reducers: {
    cacheSuggestions: (state, action) => {
      return (state = { ...state, ...action.payload });
    },
  },
});

export const { cacheSuggestions } = searchSlice.actions;

// LRU Cache -  only store 100 values. after 100 keep removing from the top.

export default searchSlice.reducer;
