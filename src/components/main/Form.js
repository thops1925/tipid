import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBudget, addExpenses } from '../../services/tipidSlice';

function Form() {
  const [toggled, setToggled] = useState(false);
  const dispatch = useDispatch();
  const [value, setValue] = useState({
    amount: '',
    description: '',
  });
  const [budget, setBudget] = useState({
    amount: '',
  });

  return (
    <div>
      <div className="flex space-x-4 h-14">
        <select
          className="bg-transparent border-b-2 w-full mr-3 py-1 px-2 leading-tight focus:outline-none"
          onChange={() => setToggled(!toggled)}
        >
          <option>Gastos</option>
          <option>Budget</option>
        </select>
      </div>

      {toggled ? (
        <form
          className="space-y-2"
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              dispatch(addBudget(budget));
              setBudget({
                amount: '',
              });
            }
          }}
        >
          <div className="flex space-x-4 h-14">
            <input
              type="text"
              className="bg-transparent border-b-2 w-full mr-3 py-1 px-2 leading-tight focus:outline-none"
              placeholder="Amount"
              onChange={(e) => setBudget({ ...budget, amount: e.target.value })}
              value={budget.amount}
            />
          </div>
        </form>
      ) : (
        <form
          className="space-y-2"
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              dispatch(addExpenses(value));
              setValue({
                amount: '',
                description: '',
              });
            }
          }}
        >
          <div className="flex space-x-4 h-14">
            <input
              type="text"
              className="bg-transparent border-b-2 w-full mr-3 py-1 px-2 leading-tight focus:outline-none"
              placeholder="Amount"
              onChange={(e) => setValue({ ...value, amount: e.target.value })}
              value={value.amount}
            />
          </div>
          <div className="flex space-x-4 h-14">
            <input
              type="text"
              className="bg-transparent border-b-2 w-full mr-3 py-1 px-2 leading-tight focus:outline-none"
              placeholder="Say buhaton nimo sa kwarta mii"
              onChange={(e) =>
                setValue({ ...value, description: e.target.value })
              }
              value={value.description}
            />
          </div>
        </form>
      )}
    </div>
  );
}

export default Form;
