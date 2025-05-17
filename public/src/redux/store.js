import { configureStore } from '@reduxjs/toolkit';
import visitedReducer from './visitedSlice'; 

export const store = configureStore({
  reducer: {
    visited: visitedReducer,
  },
});
