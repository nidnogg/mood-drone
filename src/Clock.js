import React, {useEffect, useState, useRef } from 'react';
import {gsap} from 'gsap';

const Clock = () => {

  let initial_hours = getHours();
  let initial_minutes = getMinutes();

  const blink = useRef(0);
  const [curHours, updateHours] = useState(initial_hours);
  const [curMinutes, updateMinutes] = useState(initial_minutes);

  useInterval(() => {
    updateHours(getHours());
    updateMinutes(getMinutes());
  }, 1000);

  useEffect(() => {
    gsap.fromTo(blink.current, {opacity: 0}, {opacity: 1, duration: 0.1, repeat: true, repeatDelay: 0.3});
  }); 
  return (
    <div>
      <h1>{curHours}<span ref={blink}>:</span>{curMinutes}</h1>
      {/*<h6 className="alarm-text">ALARM SET</h6>*/}
    </div>
  );
}

const getHours = () => {
  let d = new Date();
  let hours = d.getHours() < 10 ? hours = '0' + d.getHours() : d.getHours();
  return hours;
}

const getMinutes = () => {
  let d = new Date();
  let minutes = d.getMinutes() < 10 ? minutes = '0' + d.getMinutes() : d.getMinutes();
  return minutes;
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