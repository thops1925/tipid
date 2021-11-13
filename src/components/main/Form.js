import React, { useState } from 'react';

function Form() {
  const [value, setValue] = useState({
    budget: '',
    amount: '',
    description: '',
  });
  const [total, setTotal] = useState();
  console.log(total);

  return (
    <div>
      <form
        className="space-y-2"
        onKeyPress={async (e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            setTotal(value);
          }
        }}
      >
        <div className="flex space-x-4 h-14">
          <select
            className="bg-transparent border-b-2 w-full mr-3 py-1 px-2 leading-tight focus:outline-none"
            onChange={(e) => setValue({ ...value, budget: e.target.value })}
          >
            <option value="Budget">Budget</option>
            <option value="Gastos">Gastos</option>
          </select>
        </div>
        <div className="flex space-x-4 h-14">
          <input
            type="text"
            className="bg-transparent border-b-2 w-full mr-3 py-1 px-2 leading-tight focus:outline-none"
            placeholder="Amount"
            onChange={(e) => setValue({ ...value, amount: e.target.value })}
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
          />
        </div>
      </form>
    </div>
  );
}

export default Form;
