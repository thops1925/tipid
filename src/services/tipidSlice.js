import { createSlice } from '@reduxjs/toolkit';

export const budgetSlice = createSlice({
  name: 'budget',
  initialState: {
    expenses: [],
    income: [],
    total: 0,
    budget: 0,
  },
  reducers: {
    addBudget: (state, action) => {
      return { ...state, income: [action.payload, ...state.income] };
    },

    addExpenses: (state, action) => {
      return { ...state, expenses: [action.payload, ...state.expenses] };
    },

    getTotal: (state, action) => {
      const exp = state.expenses.reduce((acc, curr) => {
        return acc + Math.round(curr.expense);
      }, 0);
      const total = state.budget - exp;
      return { ...state, budget: total };
    },

    totalExpenses: (state, action) => {
      const exp = state.expenses.reduce((acc, curr) => {
        return acc + Math.round(curr.expense);
      }, 0);
      return { ...state, total: exp };
    },

    getTotalBudget: (state, action) => {
      const inc = state.income.reduce((acc, curr) => {
        return acc + Math.round(curr.budget);
      }, 0);

      return { ...state, budget: inc };
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
  getTotalBudget,
  totalExpenses,
} = budgetSlice.actions;
export default budgetSlice.reducer;
