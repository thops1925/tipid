import { configureStore } from '@reduxjs/toolkit';
import tipid from '../services/tipidSlice';

export const store = configureStore({
  reducer: {
    budget: tipid,
  },
});
