import React, {useEffect, useState, useRef} from 'react';
import { gsap } from "gsap";
//import { useSpring, animated } from 'react-spring';
import './css/App.css';
import Drone from './Drone.js';
import Clock from './Clock.js';
import Controller from './Controller.js';

const Hentai = props => {
  const { isMenuOpen, setMenuOpen } = props;
  
  return (
    <div className="bread">
      <div className="ham" onClick={() => { 
          isMenuOpen() ? setMenuOpen(0) : setMenuOpen(1);  
          }}>
        <div className="burger"></div>
      </div>
    </div>
  );

}
const App = () => {

  const [isActive, setActive] = useState(0);
  const [isMenuOpen, setMenuOpen] = useState(0);

  //const timeline = useRef(0);
  const tl = useRef(0);
  const menu = useRef(0);
  const menuHeaderDiv = useRef(0);
  const menuHeader = useRef(0);
  const verNum = useRef(0);
  const menuButton = useRef(0);
  const menuContentDiv = useRef(0);
  const blur = useRef(0);

  // value should be either 0 or 1. These callbacks are passed down to child components
  function setActiveCallback(value) {
    console.log('Setting active state to ' + value);
    setActive(value);
  }

  function isActiveCallback() {
    return isActive;
  } 

  function setMenuOpenCallback(value) {
    //console.log('Setting menu open state to ' + value);
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
                      // .add("start", 2)
                       .to(blur.current, {bottom: "-30%", duration: 0.3777}, 0.2) //0.2 could be label start!
                       .set(blur.current, {webkitFilter:"blur(10px)"}, 0.2)
                       .to(menu.current, {opacity:"1"}, 0.4)
                       .to(menuHeaderDiv.current, {opacity:"1"})
                       .to(menuHeader.current, {opacity: "1"}, ">-0.2")
                       .to(verNum.current, {opacity: "1"}, ">-0.1")
                       .to(menuContentDiv.current, {opacity: "1"}, ">-0.2")
                       .to(menuButton.current, {opacity: "1"}, ">-0.2");
    }
  }, []); // crap requirement for using hooks with timelines

  useEffect(() => {
    isMenuOpen ? tl.current.play() : tl.current.reverse();
  }, [isMenuOpen]);  // wonder if isMenuOpen is also required for hooks

  return (
    <section className="main-section">
      <Hentai isMenuOpen={isMenuOpenCallback} setMenuOpen={setMenuOpenCallback} />
      <section ref={menu} className="main-menu-section">
        <div ref={menuHeaderDiv} className="main-menu-header">
            <span ref={menuHeader} className="menu-header">mood drone</span> <span className="ver-num" ref={verNum}>v1.0</span>     
        </div>
        
        <div ref={menuContentDiv} className="main-menu-content">
          <p>
            Hi! This is a radio web app built with quality sleep and headspace in mind. <br/>
            It aims to bring you moody tunes and to boost your spirits in times of need. <br/>
            It's also intended as a visual experiment. We've all faced sleepless nights among <br/> 
            ever more agonizing deadlines. I hope you can find some peace of mind here.<br/> <br/>
            All the songs are produced by me. Feel free to check out my <a href="https://soundcloud.com/nidnogg">soundcloud!</a> <br/>
            Inspired by Docubyte's phenomenal <a href="https://www.docubyte.com/works/guide-to-computing/">Guide to Computing.</a> Cheers!
          </p>
        </div>
      </section>
   
      <div ref={blur} className="drone-wrapper">
        <Drone className="drone" isActive={isActiveCallback} />
          <div className="visor-panel-wrapper">
            <section className="visor">
              <Clock />
            </section>
          </div>
          <Controller isActive={isActiveCallback} setActive={setActiveCallback} 
          />
     </div>
     {/*<Tooltip />*/}
    </section>
  );
}

const Tooltip = () => {
  return (
    <div className="tooltip-container">
      <span className="tooltip">
          Now playing: <br /> songname
      </span>
    </div>
  );
}

// utility function for listing object methods 
const getMethods = obj => {
  let properties = new Set()
  let currentObj = obj
  do {
    Object.getOwnPropertyNames(currentObj).map(item => properties.add(item))
  } while ((currentObj = Object.getPrototypeOf(currentObj)))
    console.log([...properties.keys()].filter(item => typeof obj[item] === 'function'));
}

export default App;