import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  description: [],
  budget: 0,
  gastos: 0,
  total: 0,
};

export const tipid = createSlice({
  name: 'tipid',
  initialState,
  reducers: {
    addBudget: (state, action) => {
      state.description.push(action.payload);
    },
  },
});

export const { addBudget } = tipid.actions;
export default tipid.reducer;
