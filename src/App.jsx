import React, { useEffect, useState, useRef } from 'react';
import { gsap } from "gsap";
import toast, { Toaster } from 'react-hot-toast';
import Drone from './Drone.jsx';
import Clock from './Clock.jsx';
import Controller from './Controller.jsx';
import Hamburger from './Hamburger.jsx';
import SideController from './SideController.jsx';
import Background from './Background.jsx';
import BackgroundSelector from './BackgroundSelector.jsx';
import './css/App.css';


const App = () => {

  const [isActive, setActive] = useState(0);
  const [isMenuOpen, setMenuOpen] = useState(0);
  const [currentBackground, setCurrentBackground] = useState({ type: 'video', value: '/mood-drone/videos/mood1.mp4' });
  const [isBackgroundSelectorOpen, setBackgroundSelectorOpen] = useState(false);

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
    setActive(value);
  }

  function isActiveCallback() {
    return isActive;
  } 

  function setMenuOpenCallback(value) {
    setMenuOpen(value);
  }

  function isMenuOpenCallback() {
    return isMenuOpen;
  }

  const backgrounds = [
    { type: 'video', value: '/mood-drone/videos/mood1.mp4' },
    { type: 'color', value: '#F6BD60' },
    { type: 'color', value: '#84C7AE' },
    { type: 'color', value: '#A8DADC' },
    { type: 'color', value: '#E76F51' },
    { type: 'color', value: '#264653' },
    { type: 'color', value: '#2A9D8F' },
    { type: 'color', value: '#E9C46A' },
    { type: 'color', value: '#F4A261' }
  ];
  
  function handleBackgroundChange() {
    const currentIndex = backgrounds.findIndex(bg => 
      bg.type === currentBackground.type && bg.value === currentBackground.value
    );
    const nextIndex = (currentIndex + 1) % backgrounds.length;
    setCurrentBackground(backgrounds[nextIndex]);
  }

  function handleBackgroundSelect(background) {
    setCurrentBackground(background);
  }

  function handleBackgroundSelectorOpen() {
    setBackgroundSelectorOpen(true);
  }

  function handleBackgroundSelectorClose() {
    setBackgroundSelectorOpen(false);
  }

  const showSettingsToast = (message) => {
    toast((t) => (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '12px',
        fontFamily: 'Barlow, sans-serif'
      }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '8px',
          borderBottom: '1px solid rgba(233, 213, 192, 0.3)',
          paddingBottom: '8px'
        }}>
          <span style={{ 
            fontSize: '12px', 
            color: '#e9d5c0',
            letterSpacing: '0.5px'
          }}>
            MOOD DRONE
          </span>
          <span style={{ 
            fontSize: '10px', 
            color: '#ffffff',
            fontWeight: 'normal'
          }}>
            v1.1
          </span>
        </div>
        <div style={{ 
          fontWeight: 'bold', 
          fontSize: '18px',
          color: '#fff9f5'
        }}>
          {message}
        </div>
      </div>
    ), {
      duration: 3000,
      position: 'bottom-right',
      style: {
        background: 'rgba(185, 134, 86, 0.85)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        color: '#fff9f5',
        borderRadius: '12px',
        padding: '16px',
        minWidth: '300px',
        border: '1px solid rgba(233, 213, 192, 0.2)',
        boxShadow: '0 8px 32px rgba(47, 35, 42, 0.3)'
      },
      enter: {
        opacity: 1,
        transform: 'scale(1)',
        transition: 'opacity 377ms ease-out, transform 377ms ease-out'
      },
      exit: {
        opacity: 0,
        transform: 'scale(0.95)',
        transition: 'opacity 377ms ease-in, transform 377ms ease-in'
      }
    });
  };

  function saveSettings() {
    const settings = {
      currentBackground: currentBackground
    };
    localStorage.setItem('mood-drone-settings', JSON.stringify(settings));
    showSettingsToast('Settings saved');
  }

  function loadSettings() {
    try {
      const savedSettings = localStorage.getItem('mood-drone-settings');
      if (savedSettings) {
        const settings = JSON.parse(savedSettings);
        if (settings.currentBackground) {
          setCurrentBackground(settings.currentBackground);
        }
      } else {
        showSettingsToast('Default settings loaded');
      }
    } catch (error) {
      console.error('Error loading settings:', error);
      showSettingsToast('Default settings loaded');
    }
  }
  
  useEffect(() => {
    loadSettings();
  }, []);

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
  }, []); // requirement for using hooks with timelines

  useEffect(() => {
    isMenuOpen ? tl.current.play() : tl.current.reverse();
  }, [isMenuOpen]); 

 

  return (
    <section className="main-section">
      <Background 
        backgroundColor={currentBackground.type === 'color' ? currentBackground.value : '#F6BD60'} 
        videoSrc={currentBackground.type === 'video' ? currentBackground.value : null}
      />
      <Hamburger isMenuOpen={isMenuOpenCallback} setMenuOpen={setMenuOpenCallback} />
      <SideController 
        onColorChange={handleBackgroundChange} 
        onBackgroundSelectorOpen={handleBackgroundSelectorOpen}
        onSaveSettings={saveSettings}
      />
      <section ref={menu} className="main-menu-section">
        <div ref={menuHeaderDiv} className="main-menu-header">
            <span ref={menuHeader} className="menu-header">mood drone </span>
            <span className="ver-num" ref={verNum}>v1.1</span>
        </div>
        
        <div ref={menuContentDiv} className="main-menu-content">
          <p>
            Hi! <br/>
            This is a radio web app built with quality sleep and headspace in mind. 
            It aims to bring you moody tunes and to boost your spirits in times of need. 
            It's also intended as a visual experiment. We've all faced sleepless nights among  
            ever more agonizing deadlines. I hope you can find some peace of mind here.<br/> <br/>

            All the songs are produced by me. Check out my <a href="https://soundcloud.com/nidnogg">soundcloud!</a> <br/>
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
        <Controller isActive={isActiveCallback} setActive={setActiveCallback} />
      </div>
      
      <BackgroundSelector
        isOpen={isBackgroundSelectorOpen}
        onClose={handleBackgroundSelectorClose}
        backgrounds={backgrounds}
        currentBackground={currentBackground}
        onBackgroundSelect={handleBackgroundSelect}
      />
      
     {/*<Tooltip />*/}
     <Toaster />
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

export default App;
