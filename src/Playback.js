
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
            if(props.isActive()) {
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

        <button className="button" data-playing="false" role="switch" aria-checked="false" 
        onClick={() => {
          if(props.isActive()) {
            props.setActive(0);
            audioStop();
          }
        }}>
        <svg viewBox="0 0 7.5 7.5">
          <path fill="#d6d6d6" d="M0 0h7.5v7.5H0z" />
        </svg>
        </button> 

        <button  className="button" data-playing="false" role="switch" aria-checked="false" 
          onClick={() => {
            // check for autoplay policy
            if(audioContext.state == 'suspended') {
              audioContext.resume();
            }
          
            if(!props.isActive()) {
              props.setActive(1);
            }
          }}>  
        <svg viewBox="0 0 7.599 7.791">
           <path d="M.002 0l7.6 3.9-7.6 3.9z" fill="#d6d6d6" />
        </svg>
        </button> 

        <button  className="button" data-playing="false" role="switch" aria-checked="false" 
          onClick={() => {
          }}>  
        <svg viewBox="0 0 7.5 7.5">
          <g stroke="#d6d6d6" fill="none">
          <g strokeWidth={1.1}>
            <rect width={7.5} height={7.5} rx={3.75} stroke="none" />
            <rect x={0.55} y={0.55} width={6.4} height={6.4} rx={3.2} />
          </g>
            <path d="M3.747 1.486v2.546h1.781" strokeWidth={0.75} />
          </g>
        </svg>
        </button> 

        <button  className="button" data-playing="false" role="switch" aria-checked="false" 
          onClick={() => {          
          }}>  
        <svg viewBox="0 0 7.488 6.719" >
          <defs>
            <style>
              {".prefix__a{fill:none;stroke:#d6d6d6;stroke-width:1.5px}"}
            </style>
          </defs>
          <path className="prefix__a" d="M0 3.36h7.488M0 5.97h7.488M0 .75h7.488" />
        </svg>
        </button> 
    </div>
  );
}

export default Playback