import React, {useEffect, useState, useRef} from 'react';
import ReactSVG from 'react-svg';
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

const App = () => {
  return (
    <section className="main-section">

    
    
  
      <div className="mood-drone">
        <Upper className="upper-wrapper"/>
        <div className="wheel-grid">
          <Wheel className="wheel-wrapper" />
          <Wheel className="wheel-wrapper" />
        </div>
        <Main className="main-wrapper"/>
        <div className="visor-panel-wrapper">
          <section className="visor">
            <Clock />
          </section>
          <section className="control-panel">
            <AudioElem sourceUrl={audioUrls}/>
            <PlayButton />
          </section>
        </div>
      </div>
  
    

    </section>
  );
}

const Clock = () => {

  let d = new Date();
  let initial_time = d.getHours() + '<span className="blink">:</span>' + d.getMinutes();
  initial_time = initial_time.split(':').join('<span className="blink">:</span>');
  const [curTime, updateTime] = useState(initial_time);

  useEffect(() => {
    let d = new Date();
    updateTime(d.getHours() + '<span className="blink">:</span>' + d.getMinutes());
  });

  return ( 
    <h1>{curTime}</h1>
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

const PlayButton = () => {
  const [isActive, setActive] = useState(0);
  useEffect(() => {
    
    // gets audio DOM node
    const audioElement = document.querySelector('audio');

    if(isActive) {
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
                
                if(!isActive) {
                  setActive(1);
                } else {
                  setActive(0);
                }
              }}>      
        <span>Play/Pause</span>
      </button> 
      <br/>
      <button className="button" data-playing="false" role="switch" aria-checked="false" 
      onClick={() => {
        if(!isActive) {
          audioStop();
        } else {
          setActive(0);
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