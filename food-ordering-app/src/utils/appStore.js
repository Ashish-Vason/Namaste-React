import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './appSlice';

const appStore = configureStore({
  reducer: {
    // create slices
    cart: cartReducer,
  },
});

export default appStore;
