import React, {useEffect, useState} from 'react';
import { gsap } from "gsap";
import './css/App.css';
import Drone from './Drone.js';
import Clock from './Clock.js';
import Playback from './Playback.js';

let wheelClass = "wheel-wrapper";

const App = () => {
  return (
    <section className="main-section">
      <MoodD />
    </section>
  );
}

const MoodD = () => {
  const [isActive, setActive] = useState(0);

  // value should be either 0 or 1. This callback is passed to child components
  function setActiveCallback(value) {
    setActive(value);
  }

  function isActiveCallback() {
    return isActive;
  } 

  return (
    <div className="drone-wrapper">
      <Drone className="drone" isActive={isActiveCallback} />
      <div className="visor-panel-wrapper">
        <section className="visor">
          <Clock />
        </section>
        <section className="control-panel">
          <Playback isActive={isActiveCallback} setActive={setActiveCallback} />
        </section>
      </div>
    </div>
  );
}


// utility function for listing object methods 
const getMethods = (obj) => {
  let properties = new Set()
  let currentObj = obj
  do {
    Object.getOwnPropertyNames(currentObj).map(item => properties.add(item))
  } while ((currentObj = Object.getPrototypeOf(currentObj)))
    console.log([...properties.keys()].filter(item => typeof obj[item] === 'function'));
}

export default App;