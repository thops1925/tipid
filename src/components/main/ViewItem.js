import React from 'react';

function ViewItem({ id, amount, description }) {
  return (
    <div>
      <div key={id} className="flex justify-between border-b-2 py-1 px-2 mt-4">
        <p>{description}</p>
        <p>{amount}</p>
      </div>
    </div>
  );
}
export default ViewItem;
