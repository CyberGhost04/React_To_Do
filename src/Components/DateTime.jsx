import React, { useState, useEffect } from 'react';

function DateTimeComponent(props) {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer)
    }
  });

  return (
    <div className={`${props.req} text-white flex justify-center p-1`}>{date.toLocaleString()}</div>
  );
}

export default DateTimeComponent;
