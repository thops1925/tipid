import React, { useEffect, useState } from 'react';
import Form from './Form';

function MainNav() {
  return (
    <div className="px-8 py-12 mx-auto sm:max-w-lg">
      <div className="flex justify-center py-4 border-b-2">
        <h1 className="flex font-extrabold text-2xl">Overview</h1>
      </div>
      <div className="mx-auto my-4">
        <p className="font-bold text-xl">Pag Budget Ambisyosa ta</p>

        <div className="flex justify-between">
          <p className="text-gray-500">Total Balance</p>
          <p className="text-blue-600 text-lg font-bold">P1,000</p>
        </div>
      </div>
      {/* <ProgressBar className="bg-gray-300" completed={completed} /> */}
      <Form />
    </div>
  );
}

export default MainNav;
