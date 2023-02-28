import { configureStore } from '@reduxjs/toolkit';
import personageReducer from './slice/personageSlice';
import forceReducer from './slice/forceSlice';

export const store = configureStore({
  reducer: {
    force: forceReducer,
    personage: personageReducer,
  },
})