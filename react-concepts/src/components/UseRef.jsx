import React, { useRef, useState } from "react";

const UseRef = () => {
  const [counter, setCounter] = useState(0);
  const interval = useRef(null);
  console.log("Re-renderring");
  const startInterval = () => {
    interval.current = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000);
  };
  const stopInterval = () => {
    clearInterval(interval.current);
  };
  return (
    <div>
      <p>{counter}</p>
      <button onClick={startInterval}>Start Interval</button>
      <button onClick={stopInterval}>Stop Interval</button>
    </div>
  );
};

export default UseRef;
