import React, {useEffect, useState, useRef } from 'react';

const Clock = () => {

  let initial_time = getTime();
 //initial_time = initial_time.split(':').join('<span className="blink">:</span>');
  const [curTime, updateTime] = useState(initial_time);

  useInterval(() => {
    updateTime(getTime());
  }, 1000);

  return ( 
    <h1>{curTime}</h1>
  );
}

const getTime = () => {
  let d = new Date();

  let hours = d.getHours() < 10 ? hours = '0' + d.getHours() : d.getHours();
  let minutes = d.getMinutes() < 10 ? minutes = '0' + d.getMinutes() : d.getMinutes();
  
  const curTime = hours + ':' + minutes;

  return curTime;
}

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