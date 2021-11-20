import { createSlice } from '@reduxjs/toolkit';

export const budgetSlice = createSlice({
  name: 'budget',
  initialState: {
    expenses: [],
    total: 0,
    budget: 0,
  },
  reducers: {
    addBudget: (state, action) => {
      return { ...state, expenses: [action.payload, state.expenses] };
    },

    addExpenses: (state, action) => {
      return { ...state, expenses: [action.payload, ...state.expenses] };
    },

    getTotal: (state, action) => {
      const { total } = state.expenses.reduce(
        (acc, curr) => {
          const { expense, budget } = curr;
          const res = expense - budget;
          return (acc = res);
        },
        { total: 0 },
      );
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
  // extraReducers: (builder) => {
  //   builder.addCase(addBudget, (state, action) => {

  //     return { ...state, expenses: [action.payload, ...state.expenses] };
  //   });
  // },
});

export const {
  addExpenses,
  addBudget,
  editBudget,
  deleteBudget,
  total,
  getTotal,
} = budgetSlice.actions;
export default budgetSlice.reducer;
