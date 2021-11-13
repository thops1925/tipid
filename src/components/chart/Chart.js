import React from 'react';
import { Doughnut } from 'react-chartjs-2';

function Chart() {
  const data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
        ],
        hoverOffset: 4,
      },
    ],
  };
  return (
    <div className="py-12 px-12">
      <Doughnut data={data} />
    </div>
  );
}

export default Chart;
