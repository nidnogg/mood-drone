import React, {useEffect, useState, useRef, useContext} from 'react';
import { Tween, Timeline } from "gsap";
import './css/App.css';
import Wheel from './resources/wheel.svg';
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

const MoodD = () => {
  const wheel0 = useRef();
  const wheel1 = useRef();
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
        <div className="wheel-grid">
          <WheelSpinner ref={wheel0} />
          <WheelSpinner ref={wheel1}/>
        </div>
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

const WheelSpinner = () => {
  // Fades in spin
  useEffect(() => {
    
  });
  return (
    <Wheel className={wheelClass}/>
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

const PlayButton = props => {
  //const [isActive, setActive] = useState();

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