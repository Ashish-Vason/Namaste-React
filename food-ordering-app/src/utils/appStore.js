import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './appSlice';
import loginReducer from './loginSlice';

const appStore = configureStore({
  reducer: {
    // create slices
    cart: cartReducer,
    login: loginReducer,
  },
});

export default appStore;
