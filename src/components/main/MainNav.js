import React from 'react';
import { useSelector } from 'react-redux';
import Form from './Form';

function MainNav() {
  const expenses = useSelector((state) => state.budget.expenses);
  const total = expenses.reduce(
    (acc, curr) => acc + Math.round(curr.expense),
    0,
  );
  const budget = expenses.reduce(
    (acc, curr) => acc + Math.round(curr.budget),
    0,
  );
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
          <p className="text-blue-600 text-lg font-bold">
            {total.toLocaleString()}
          </p>
        </div>
      </div>

      <Form />
    </div>
  );
}

export default MainNav;
