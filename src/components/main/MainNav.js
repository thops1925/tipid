import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getTotal,
  getTotalBudget,
  totalExpenses,
} from '../../services/tipidSlice';
import Form from './Form';

function MainNav() {
  const dispatch = useDispatch();
  const income = useSelector((state) => state.budget.income);
  const expenses = useSelector((state) => state.budget.expenses);
  const total = useSelector((state) => state.budget.total);
  const budget = useSelector((state) => state.budget.budget);

  useEffect(() => {
    dispatch(totalExpenses());
    dispatch(getTotal());
  }, [expenses, dispatch]);

  useEffect(() => {
    dispatch(getTotalBudget());
  }, [income, dispatch]);

  return (
    <div className="px-8 py-12 mx-auto sm:max-w-lg">
      <div className="flex justify-center py-4 border-b-2">
        <h1 className="flex font-extrabold text-2xl">Overview</h1>
      </div>
      <div className="mx-auto my-4">
        <p className="font-bold text-xl">Pag Budget Ambisyosa ta</p>

        <div className="flex justify-between">
          <p className="text-gray-500">Total Balance</p>
          <p className="text-blue-600 text-lg font-bold">
            {budget.toLocaleString()}
          </p>
        </div>

        <div className="flex justify-between">
          <p className="text-gray-500">Total Expenses</p>
          <p className="text-red-400 text-lg font-bold">
            {total.toLocaleString()}
          </p>
        </div>
      </div>

      <Form />
    </div>
  );
}

export default MainNav;
