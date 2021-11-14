import { configureStore } from '@reduxjs/toolkit';
import budgetSlice from '../services/tipidSlice';

export const store = configureStore({
  reducer: {
    budget: budgetSlice,
  },
});
