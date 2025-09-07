import React, { useState, useRef, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(getHours() + ":" + getMinutes());
  
  useInterval(() => {
    setTime(getHours() + ":" + getMinutes());
  }, 1000);

  return (
    <span className="alarm-text">{time}</span>
  );
};

const getHours = () => {
  let d = new Date();
  let hours = d.getHours() < 10 ? "0" + d.getHours() : d.getHours();
  return hours;
};

const getMinutes = () => {
  let d = new Date();
  let minutes = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();
  return minutes;
};

/* custom useInterval hook used in clock component */
function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default Clock;
