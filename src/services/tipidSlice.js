import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
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
      const total = state.income.reduce((acc, curr) => {
        return acc + Math.round(curr.budget);
      }, 0);

      if (total === 0) {
        console.log('wala budget');
        toast.info('Please add budget first');
      }
      if (state.budget < 0) {
        console.log('hurot na ang budget');
        toast.info('No Budget');
      }

      if (action.payload.expense > state.budget) {
        console.log('lapas kana sa budget');
        toast.info('Over Budget');
      } else {
        return { ...state, expenses: [action.payload, ...state.expenses] };
      }
    },

    getTotal: (state, action) => {
      const exp = state.expenses.reduce((acc, curr) => {
        return acc + Math.round(curr.expense);
      }, 0);
      const total =
        state.income.reduce((acc, curr) => {
          return acc + Math.round(curr.budget);
        }, 0) - exp;
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

      if (state.total === 0) {
        return { ...state, budget: inc };
      } else {
        const total = state.total;
        return { ...state, budget: inc - total };
      }
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
