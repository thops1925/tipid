import React from 'react';

function ViewItem({ id, amount, description }) {
  return (
    <div>
      <div key={id} className="flex justify-between border-b-2 py-1 px-2 mt-4">
        <p className="text-gray-500 uppercase">{description}</p>
        <p className="text-gray-500 uppercase">{amount}</p>
      </div>
    </div>
  );
}
export default ViewItem;
