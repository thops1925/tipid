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
    <div className="px-8 py-2 mx-auto sm:max-w-lg bg-red-300">
      <div className="flex justify-center py-2 border-b-1">
        <h1 className="flex font-extrabold text-xl">WALDAS</h1>
      </div>
      <div className="mx-auto my-4">
        <p className="font-bold">Pag Budget Ambisyosa ta</p>

        <div className="flex flex-row justify-center space-x-4">
          <div className="">
            <p className="text-gray-500">Total Balance</p>
            <p className="text-green-600 text-lg font-bold flex justify-center">
              {budget.toLocaleString()}
            </p>
          </div>

          <div className="">
            <p className="text-gray-500">Total Expenses</p>
            <p className="text-red-600 text-lg font-bold flex justify-center">
              {total.toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      <Form />
    </div>
  );
}

export default MainNav;
