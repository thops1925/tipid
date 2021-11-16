import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from './Form';

function MainNav() {
  const dispatch = useDispatch();
  const item = useSelector((state) => state.budget);
  // useEffect(() => {
  //   dispatch(item);
  // }, [item]);

  // const total = item.budget.reduce(
  //   (acc, curr) => (acc += Math.round(curr.amount)),
  //   0,
  // );

  // console.log(total);

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
            {/* {total.toLocaleString()} */}
          </p>
        </div>
      </div>

      <Form />
    </div>
  );
}

export default MainNav;
