import React from 'react';

function Calendar({ setDate, date }) {
  // const [date, setDate] = useState(d.getMonth());
  console.log(date);

  const calendar = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  if (date > 11) {
    setDate(0);
  }
  if (date < 0) {
    setDate(11);
  }

  const current = calendar[date];

  return (
    <div className="flex  justify-center p-2">
      <div onClick={() => setDate(date - 1)} className="px-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>

      <div className="h-6 text-green-900 font-semibold ">{current}</div>

      <div onClick={() => setDate(date + 1)} className="px-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>{' '}
      </div>
    </div>
  );
}

export default Calendar;
