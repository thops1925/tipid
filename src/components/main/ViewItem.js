import React from 'react';

function ViewItem({ id, amount, description }) {
  return (
    <div>
      <div
        key={id}
        className="flex justify-between border-b-2 border-blue-100 py-1 px-2"
      >
        <p className="text-gray-800 uppercase text-sm">{description}</p>
        <span className="text-red-600 font-bold text-sm">
          {amount.toLocaleString()}
        </span>
      </div>
    </div>
  );
}
export default ViewItem;
