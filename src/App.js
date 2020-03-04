import React, {useEffect, useState, useRef, useContext} from 'react';
import { TweenMax, TweenLite, Linear, gsap } from "gsap";
import './css/App.css';
//import Wheel from './resources/wheel.svg';
import Wheel from './Wheel.js';
import Clock from './Clock.js';
import Upper from './resources/upper.svg';
import Main from './resources/main.svg'; 

const getAudio = () => {
  return 'https://firebasestorage.googleapis.com/v0/b/cloudtop-nidnogg.appspot.com/o/audio%2Fsong_test.mp3?alt=media&token=ccf6f882-47f5-46cb-9836-732bc871ee9a';
}

// for legacy browsers
const AudioContext = window.AudioContext || window.webkitAudioContext;

// generates audio context
const audioContext = new AudioContext();

const audioUrls = "https://firebasestorage.googleapis.com/v0/b/cloudtop-nidnogg.appspot.com/o/audio%2Fsong_test.mp3?alt=media&token=ccf6f882-47f5-46cb-9836-732bc871ee9a";

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
    <div className="mood-drone">
      <Upper className="upper-wrapper"/>
        <SpinningWheels isActive={isActiveCallback} />
        <Main className="main-wrapper"/>
        <div className="visor-panel-wrapper">
          <section className="visor">
            <Clock />
          </section>
          <section className="control-panel">
            <AudioElem sourceUrl={audioUrls}/>
            <PlayButton isActive={isActiveCallback} setActive={setActiveCallback} />
          </section>
        </div>
    </div>
  );
}

// Currently holds both wheels and uses state from MoodD parent component to fade spin animations
const SpinningWheels = props => {
  const wheel0 = useRef(0);
  const wheel1 = useRef(0);
  const rotation = useRef(0);
  const didMountRef = useRef(0); // this hook starts as a false ref, after first render it is set to true
  // Applies style="transform: translate3d(0px, 0px, 0px) rotate(0deg);" 
  //let rotation = gsap.to([wheel0.current, wheel1.current], .5, {rotation:"360", ease:"linear", repeat:-1, paused:true }).timeScale(0);
  // Fades in spin

  useEffect(() => {
    if(didMountRef.current) {
      rotation.current = gsap.to([wheel0.current, wheel1.current], {duration: .7, rotation:"360", ease:"linear", repeat:-1, paused:true }).timeScale(0);

      if(props.isActive()) {
        console.log('isActive!');
        rotation.current.play();
        gsap.to(rotation.current, {duration: 0.8, timeScale:1}); // tweens rotation timescale to 1, over 0.8 seconds
      }

      if(!props.isActive()) {
        console.log('isNotActive!');
        // tweens rotation timescale back to 1, over 0.8 seconds, and pauses after tweening
        //gsap.to(rotation.current, {duration: 0.8, timeScale:0, onComplete:() => { console.log('boof'); rotation.current.pause()}}); 
        gsap.to(rotation.current, {duration: 0.8, timeScale: 0, onComplete: () => { rotation.current.pause(); }});
      }
    } else {
      didMountRef.current = 1;
    }
  });
  

  return (
    <div className="wheel-grid">
      <div className="wheel-container">
        <svg ref={wheel0} className={wheelClass} data-name="Layer 1" viewBox="0 0 268 268" >
        <circle cx={134} cy={134} r={134} fill="#675858" />
        <circle cx={133.92} cy={133.58} r={49.33} fill="#675858" />
        <circle cx={133.92} cy={133.58} r={48.83} fill="none" stroke="#e6dad1" />
        <circle cx={132.66} cy={133.58} r={48.07} fill="#675858" />
        <circle cx={132.66} cy={133.58} r={47.57} fill="none" stroke="#40393d" />
        <path
          fill="#2f232a"
          d="M159.67 125.82l-23.1 36.44-3.17-2.44L157.28 124z"
        />
        <path fill="#9b8c8c" d="M136.6 162.24l-50-36.12.5-2.12 51.25 35.78z" />
        <path
          fill="#2f232a"
          d="M158.86 126.53l-49.62-33.45a1.34 1.34 0 01.85-.49c.45 0 .23-.1.23-.1l49.57 33.15z"
        />
        <path
          fill="#7e6969"
          d="M156.33 126.53L106.7 93.08a1.34 1.34 0 01.85-.49c.45 0 .23-.1.23-.1l49.57 33.15z"
        />
        <path
          fill="#7e6969"
          d="M156.32 125.48l-22.8 31.08s.4.46.6.46.82.65.82.65l21.83-31.36z"
        />
        <path
          fill="none"
          stroke="#605252"
          d="M176.83 174l18.78 70.26a60.39 60.39 0 01-11.71 6.28 110.55 110.55 0 01-15.3 4.5l-38.86-63.43s-18.87.8-32.52-9-22.05-30.2-22.05-30.2L5.83 133.84l1-14.78 3.14-15 71-1.46s10.75-17 26.7-23.72 37.14-3.2 37.14-3.2l50-51.5 12.87 6.92 10.9 11.14L182 105.7s8.74 16.62 7.45 33.7-12.62 34.6-12.62 34.6z"
        />
        <path
          fill="#675858"
          d="M63.1 168.7a7.81 7.81 0 117.81-7.81 7.82 7.82 0 01-7.81 7.81z"
        />
        <path
          fill="#605252"
          d="M63.1 168.2a7.31 7.31 0 10-7.31-7.31 7.32 7.32 0 007.31 7.31m0 1a8.31 8.31 0 118.31-8.31 8.31 8.31 0 01-8.31 8.31z"
        />
        <path
          fill="#2f232a"
          d="M178 91a41.25 41.25 0 00-7.78-8.57 36.6 36.6 0 00-9.87-5.21L177 60.6a12.07 12.07 0 013.27.94 37.82 37.82 0 013.58 1.66 14 14 0 013.5 3.4 16.4 16.4 0 012.24 4.69zM66.6 113.6a41.25 41.25 0 00-3.53 11 36.6 36.6 0 00.42 11.15l-22.74-6.17a12.07 12.07 0 01-.82-3.3 37.82 37.82 0 01-.35-3.93 14 14 0 011.2-4.73 16.4 16.4 0 012.94-4.29zm80.7 80.2a41.25 41.25 0 0011.31-2.46 36.6 36.6 0 009.45-5.94l6 22.78a12.07 12.07 0 01-2.45 2.36 37.82 37.82 0 01-3.23 2.27 14 14 0 01-4.69 1.33 16.4 16.4 0 01-5.18-.4z"
        />
      </svg>
      </div>
      <div className="wheel-container">
        <svg ref={wheel1} className={wheelClass} data-name="Layer 1" viewBox="0 0 268 268" >
          <circle cx={134} cy={134} r={134} fill="#675858" />
          <circle cx={133.92} cy={133.58} r={49.33} fill="#675858" />
          <circle cx={133.92} cy={133.58} r={48.83} fill="none" stroke="#e6dad1" />
          <circle cx={132.66} cy={133.58} r={48.07} fill="#675858" />
          <circle cx={132.66} cy={133.58} r={47.57} fill="none" stroke="#40393d" />
          <path
            fill="#2f232a"
            d="M159.67 125.82l-23.1 36.44-3.17-2.44L157.28 124z"
          />
          <path fill="#9b8c8c" d="M136.6 162.24l-50-36.12.5-2.12 51.25 35.78z" />
          <path
            fill="#2f232a"
            d="M158.86 126.53l-49.62-33.45a1.34 1.34 0 01.85-.49c.45 0 .23-.1.23-.1l49.57 33.15z"
          />
          <path
            fill="#7e6969"
            d="M156.33 126.53L106.7 93.08a1.34 1.34 0 01.85-.49c.45 0 .23-.1.23-.1l49.57 33.15z"
          />
          <path
            fill="#7e6969"
            d="M156.32 125.48l-22.8 31.08s.4.46.6.46.82.65.82.65l21.83-31.36z"
          />
          <path
            fill="none"
            stroke="#605252"
            d="M176.83 174l18.78 70.26a60.39 60.39 0 01-11.71 6.28 110.55 110.55 0 01-15.3 4.5l-38.86-63.43s-18.87.8-32.52-9-22.05-30.2-22.05-30.2L5.83 133.84l1-14.78 3.14-15 71-1.46s10.75-17 26.7-23.72 37.14-3.2 37.14-3.2l50-51.5 12.87 6.92 10.9 11.14L182 105.7s8.74 16.62 7.45 33.7-12.62 34.6-12.62 34.6z"
          />
          <path
            fill="#675858"
            d="M63.1 168.7a7.81 7.81 0 117.81-7.81 7.82 7.82 0 01-7.81 7.81z"
          />
          <path
            fill="#605252"
            d="M63.1 168.2a7.31 7.31 0 10-7.31-7.31 7.32 7.32 0 007.31 7.31m0 1a8.31 8.31 0 118.31-8.31 8.31 8.31 0 01-8.31 8.31z"
          />
          <path
            fill="#2f232a"
            d="M178 91a41.25 41.25 0 00-7.78-8.57 36.6 36.6 0 00-9.87-5.21L177 60.6a12.07 12.07 0 013.27.94 37.82 37.82 0 013.58 1.66 14 14 0 013.5 3.4 16.4 16.4 0 012.24 4.69zM66.6 113.6a41.25 41.25 0 00-3.53 11 36.6 36.6 0 00.42 11.15l-22.74-6.17a12.07 12.07 0 01-.82-3.3 37.82 37.82 0 01-.35-3.93 14 14 0 011.2-4.73 16.4 16.4 0 012.94-4.29zm80.7 80.2a41.25 41.25 0 0011.31-2.46 36.6 36.6 0 009.45-5.94l6 22.78a12.07 12.07 0 01-2.45 2.36 37.82 37.82 0 01-3.23 2.27 14 14 0 01-4.69 1.33 16.4 16.4 0 01-5.18-.4z"
          />
        </svg>
      </div>
    </div>

  );

}
const AudioElem = sourceUrl => {
  useEffect(() => {
    audioSetup();
  });

  return (
    <audio src={sourceUrl.sourceUrl} crossOrigin="anonymous" type="audio/mpeg">Failed to load <code>audio</code> element</audio>
  );
}

// Receives moodD parent callback state functions as props and sets MoodD's state from these
const PlayButton = props => {

  useEffect(() => {
    // gets audio DOM node
    const audioElement = document.querySelector('audio');

    if(props.isActive()) {
      audioElement.play();

    } else {
      audioElement.pause();
    }
  });

  return (
    <div>
      <button className="button" data-playing="false" role="switch" aria-checked="false" 
        onClick={() => {

          // check for autoplay policy
          if(audioContext.state == 'suspended') {
            audioContext.resume();
          }
          
          if(!props.isActive()) {
            props.setActive(1);
          } else {
            props.setActive(0);
          }
        }}>      
        <span>Play/Pause</span>
      </button> 
      <br/>
      <button className="button" data-playing="false" role="switch" aria-checked="false" 
      onClick={() => {
        if(!props.isActive()) {
          audioStop();
        } else {
          props.setActive(0);
          audioStop();
        }
      }}>
        <span>Stop</span>
      </button> 
    </div>
  );
}

const audioStop = () => {
   // gets audio element
   const audioElement = document.querySelector('audio');
   audioElement.currentTime = 0;
}

const audioSetup = () => {
  // gets audio element
  const audioElement = document.querySelector('audio');
  console.log('audio context ' + audioContext);
  // passes it into the audio context
  const track = audioContext.createMediaElementSource(audioElement);
  track.connect(audioContext.destination);
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