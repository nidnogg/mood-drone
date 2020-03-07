import React, {useEffect, useState, useRef} from 'react';
import { gsap } from "gsap";
import './css/App.css';
import Drone from './Drone.js';
import Clock from './Clock.js';
import Controller from './Controller.js';

const App = () => {

  const [isActive, setActive] = useState(0);
  const [isMenuOpen, setMenuOpen] = useState(0);

  //const timeline = useRef(0);
  const tl = useRef(0);
  const menu = useRef(0);
  const menuHeaderDiv = useRef(0);
  const menuHeader = useRef(0);
  const verNum = useRef(0);
  const menuContentDiv = useRef(0);


  // value should be either 0 or 1. These callbacks are passed down to child components
  function setActiveCallback(value) {
    console.log('Setting active state to ' + value);
    setActive(value);
  }

  function isActiveCallback() {
    return isActive;
  } 

  function setMenuOpenCallback(value) {
    console.log('Setting menu open state to ' + value);
    setMenuOpen(value);
  }

  function isMenuOpenCallback() {
    isMenuOpen ? console.log('Menu is active') : console.log('Menu is hidden');
    return isMenuOpen;
  }
  
  //const tl.current = gsap.timeline({defaults: {duration: 0.4, ease:"linear"} }); WIPED OUT ON EVERY RENDER

  useEffect(() => {
    if(!tl.current) {
      tl.current = gsap.timeline({defaults: {duration: 0.2, ease:"expo"} })
                       .to(menu.current, {duration: 0.001, zIndex: 9997, ease:"none"})
                       .to(menu.current, {opacity:"1"})
                       .to(menuHeaderDiv.current, {opacity:"1"})
                       .to(menuHeader.current, {opacity: "1", top:"2%"}, ">-0.2")
                       .to(verNum.current, {opacity: "1", top: "2%"}, ">-0.1");
    }
  }, []); // crap requirement for using hooks with timelines

  useEffect(() => {
    isMenuOpen ? tl.current.play() : tl.current.reverse();
  }, [isMenuOpen]);  // wonder if isMenuOpen is also required for hooks

  return (
    <section className="main-section">
      <section ref={menu} className="main-menu-section">
        <h1 ref={menuHeaderDiv} className="main-menu-content">
          <span ref={menuHeader} className="menu-header">mood drone</span> <span className="ver-num" ref={verNum}>v1.0</span>
          <button className="menu-button" onClick={ ()=> { console.log('menu state is ' + isMenuOpen); setMenuOpen(0);} }>
          <svg viewBox="0 0 6.3 7.5">
            <defs>
              <style>
                {".prefix__a{fill:none;stroke:#d6d6d6;stroke-width:2.3px}"}
              </style>
            </defs>
            <path className="prefix__a" d="M1.15 0v7.5M5.15 0v7.5" />
          </svg>  
          </button>
        </h1>
       
      </section>
      <div className="drone-wrapper">
        <Drone className="drone" isActive={isActiveCallback} />
          <div className="visor-panel-wrapper">
            <section className="visor">
              <Clock />
            </section>
          </div>
          <Controller isActive={isActiveCallback} setActive={setActiveCallback} 
                      isMenuOpen={isMenuOpenCallback} setMenuOpen={setMenuOpenCallback} 
          />
     </div>
    </section>
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