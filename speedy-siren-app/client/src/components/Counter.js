import React, { useEffect, useState } from 'react';
import './counter.css';

const Counter = () => {
  const counters = [
    { icon: 'fa-clock', value: 15, text: 'Average Response time' },
    { icon: 'fas fa-users', value: 875, text: 'Lives Saved' },
    { icon: 'fa-ambulance', value: 107, text: 'Ambulances' },
    { icon: 'fas fa-star', value: 4, text: 'Average User Rating' },
  ];

  return (
    <div className="wrapper-counter">
      {counters.map((counter) => (
        <CounterItem key={counter.text} {...counter} />
      ))}
    </div>
  );
};

const CounterItem = ({ icon, value, text }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const interval = 4000;

  useEffect(() => {
    const duration = Math.floor(interval / value);
    const counter = setInterval(() => {
      setDisplayValue((prevValue) => {
        if (prevValue < value) {
          return prevValue + 1;
        }
        clearInterval(counter);
        return prevValue;
      });
    }, duration);

    return () => clearInterval(counter);
  }, [value, interval]);

  return (
    <div className="container-counter">
      <i className={`fa ${icon}`}></i>
      <span className="num-counter">{displayValue}</span>
      <span className="text-counter">{text}</span>
    </div>
  );
};

export default Counter;