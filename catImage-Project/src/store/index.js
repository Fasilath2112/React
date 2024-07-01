import { configureStore } from '@reduxjs/toolkit';
import catReducer from './catsl';

export const store = configureStore({
  reducer: {
    cat: catReducer,
  },
});
