
import React, {useEffect, useState, useRef} from 'react';

const getAudio = () => {
  return 'https://firebasestorage.googleapis.com/v0/b/cloudtop-nidnogg.appspot.com/o/audio%2Fsong_test.mp3?alt=media&token=ccf6f882-47f5-46cb-9836-732bc871ee9a';
}

// for legacy browsers
const AudioContext = window.AudioContext || window.webkitAudioContext;

// generates audio context
const audioContext = new AudioContext();

const audioUrls = "https://firebasestorage.googleapis.com/v0/b/cloudtop-nidnogg.appspot.com/o/audio%2Fsong_test.mp3?alt=media&token=ccf6f882-47f5-46cb-9836-732bc871ee9a";

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

const AudioElem = sourceUrl => {
  useEffect(() => {
    audioSetup();
  });
  return (
    <audio src={sourceUrl.sourceUrl} crossOrigin="anonymous" type="audio/mpeg">Failed to load <code>audio</code> element</audio>
  );
}

// Receives moodD parent callback state functions as props and sets MoodD's state from these
const Playback = props => {
  // gets audio DOM node 
  useEffect(() => {
    const audioElement = document.querySelector('audio');
      if(props.isActive()) {
        audioElement.play();
      } else {
        audioElement.pause();
      }
  });

  return (
    <div className="buttons-wrapper">
      <AudioElem sourceUrl={audioUrls}/>
        <button  className="button" data-playing="false" role="switch" aria-checked="false" 
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
          <svg viewBox="0 0 6.3 7.5">
            <defs>
              <style>
                {".prefix__a{fill:none;stroke:#d6d6d6;stroke-width:2.3px}"}
              </style>
            </defs>
            <path className="prefix__a" d="M1.15 0v7.5M5.15 0v7.5" />
          </svg>    
        </button> 
        <br/>
        <button className="button" data-playing="false" role="switch" aria-checked="false" 
        onClick={() => {
          if(props.isActive()) {
            props.setActive(0);
            audioStop();
          }
        }}>
          <span>Stop</span>
        </button> 
    </div>
  );
}

export default Playback