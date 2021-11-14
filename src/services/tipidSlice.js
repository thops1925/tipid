import { createSlice } from '@reduxjs/toolkit';

export const budgetSlice = createSlice({
  name: 'budget',
  initialState: {
    budget: [],
    expenses: [],
  },
  reducers: {
    addBudget(state, action) {
      state.budget.push(action.payload);
    },

    addExpenses: (state, action) => {
      return { ...state, expenses: [action.payload, ...state.expenses] };
    },

    editBudget: (state, action) => {
      const expenses = state.expenses.map((expense) => {
        if (expense.id === action.payload.id) {
          return action.payload;
        }
        return expense;
      });
      return { ...state, expenses: [...expenses] };
    },

    deleteBudget: (state, action) => {
      const expenses = state.expenses.filter((expense) => {
        return expense.id !== action.payload;
      });
      return { ...state, expenses: [...expenses] };
    },
  },
});

export const { addExpenses, addBudget, editBudget, deleteBudget } =
  budgetSlice.actions;
export default budgetSlice.reducer;
