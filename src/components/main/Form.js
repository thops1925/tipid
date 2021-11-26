import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBudget, addExpenses } from '../../services/tipidSlice';
import ViewItem from './ViewItem';
import { useSelector } from 'react-redux';
import Calendar from './Calendar';

function Form() {
  const item = useSelector((state) => state.budget.expenses);
  const [toggled, setToggled] = useState(false);
  const dispatch = useDispatch();

  const [value, setValue] = useState({
    expense: '',
    description: '',
  });

  const [budget, setBudget] = useState({
    budget: '',
  });

  return (
    <div>
      <div className="flex space-x-4 h-14">
        <button
          className="bg-transparent border-b-2 w-full mr-3 py-1 px-2 leading-tight focus:outline-none"
          onClick={() => setToggled(false)}
        >
          Expenses
        </button>
        <button
          className="bg-transparent border-b-2 w-full mr-3 py-1 px-2 leading-tight focus:outline-none"
          onClick={() => setToggled(true)}
        >
          Budget
        </button>
      </div>

      {toggled ? (
        <form
          className="space-y-2"
          onKeyPress={(e) => {
            if (e.key === 'Enter' && budget !== '') {
              e.preventDefault();
              dispatch(addBudget(budget));
              setBudget({
                budget: '',
              });
            }
          }}
        >
          <div className="flex space-x-4 h-14">
            <input
              type="number"
              className="bg-transparent placeholder-black border-b-2 w-full mr-3 py-1 px-2 leading-tight focus:outline-none"
              placeholder="Amount"
              onChange={(e) => setBudget({ ...budget, budget: e.target.value })}
              required
              value={budget.budget}
            />
          </div>
          <div className="h-screen"></div>
        </form>
      ) : (
        <>
          <form
            className="space-y-2"
            onKeyPress={(e) => {
              if (
                e.key === 'Enter' &&
                value.expense !== '' &&
                value.description !== ''
              ) {
                e.preventDefault();
                dispatch(addExpenses(value));
                setValue({
                  expense: '',
                  description: '',
                });
              }
            }}
          >
            <div className="flex space-x-4 h-10">
              <input
                type="number"
                className="bg-transparent placeholder-black  border-b-2 w-full mr-3 py-1 px-2 leading-tight focus:outline-none"
                placeholder="Amount"
                required
                onChange={(e) =>
                  setValue({ ...value, expense: e.target.value })
                }
                value={value.expense}
              />
            </div>
            <div className="flex space-x-4 h-10">
              <input
                type="text"
                required
                className="bg-transparent placeholder-black  border-b-2 w-full mr-3 py-1 px-2 leading-tight focus:outline-none"
                placeholder="Say buhaton nimo sa kwarta mii"
                onChange={(e) =>
                  setValue({ ...value, description: e.target.value })
                }
                value={value.description}
              />
            </div>
          </form>
          <Calendar />

          <div className="lg:min-h-0 h-80 overflow-scroll mt-4 scrollbar-hide pb-5">
            {item?.map((expense) => (
              <>
                <ViewItem
                  id={expense.id}
                  amount={expense.expense}
                  description={expense.description}
                />
              </>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Form;
