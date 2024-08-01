import appReducer from './appSlice';
import { configureStore } from '@reduxjs/toolkit';

const appStore = configureStore({
  reducer: {
    app: appReducer,
  },
});

export default appStore;
