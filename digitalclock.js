import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timerID); // Clear interval on component unmount
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString();
  };

  return (
    <div className="clock-container">
      <h1>Digital Clock</h1>
      <div className="clock">
        {formatTime(time)}
      </div>
    </div>
  );
};

export default App;
