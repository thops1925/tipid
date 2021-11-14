import React from 'react';
import { useSelector } from 'react-redux';

function ViewItem() {
  const item = useSelector((state) => state.budget);
  const view = item.expenses;
  return (
    <div>
      {view.map((expense) => (
        <div className="flex justify-between border-b-2 py-1 px-2 mt-4">
          <p key={expense.index}>
            {expense.index} {expense.description}
          </p>
          <p>{expense.amount}</p>
        </div>
      ))}
    </div>
  );
}
export default ViewItem;
