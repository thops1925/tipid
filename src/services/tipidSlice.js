import { createSlice } from '@reduxjs/toolkit';

export const budgetSlice = createSlice({
  name: 'budget',
  initialState: {
    expenses: [],
  },
  reducers: {
    addBudget: (state, action) => {
      return { ...state, expenses: [action.payload, ...state.expenses] };
    },

    addExpenses: (state, action) => {
      const newValue = {
        ...state,
        expenses: [action.payload, ...state.expenses],
      };
      return newValue;
    },

    total: (state, action) => {
      const budget = budget;
      const expenses = expenses.reduce((acc, curr) => acc + curr.amount, 0);
      const total = budget - expenses;
      return (state.total = total);
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

export const { addExpenses, addBudget, editBudget, deleteBudget, total } =
  budgetSlice.actions;
export default budgetSlice.reducer;
