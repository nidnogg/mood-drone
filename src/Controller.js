
import React, {useEffect, useState, useRef} from 'react';
import { render } from 'react-dom';

// for legacy browsers
const AudioContext = window.AudioContext || window.webkitAudioContext;

var audioContext;
let currentTrack = 0;
const audioUrls = [
                   "https://firebasestorage.googleapis.com/v0/b/cloudtop-8de79.appspot.com/o/serene_mind_waves.mp3?alt=media&token=dd379833-fe01-44da-a405-942cba30b3e2",
                   "https://firebasestorage.googleapis.com/v0/b/cloudtop-8de79.appspot.com/o/pulsewaves.mp3?alt=media&token=8c300cfc-8d24-4895-8586-3159830a4232"
                  ];

const audioStop = () => {
  // gets audio element
  const audioElement = document.querySelector('audio');
  audioElement.currentTime = 0;
}

const audioSetup = () => {
  // generates audio context on first user interaction
  audioContext = new AudioContext();
  // gets audio element
  const audioElement = document.querySelector('audio');

  audioElement.setAttribute('src', audioUrls[currentTrack]);
  // passes it into the audio context
  const track = audioContext.createMediaElementSource(audioElement);

  var analyser = audioContext.createAnalyser();
  track.connect(analyser);
  analyser.fftSize = 256;

  // init dataArray for analysing and displaying audio freqs
  var bufferLength = analyser.frequencyBinCount;
  var dataArray = new Uint8Array(bufferLength);

  // connect gain node to audio destination
  const gainNode = audioContext.createGain();
  gainNode.connect(audioContext.destination);

  track.connect(gainNode);

  // Chains songs on end
  audioElement.onended=function() { 

  };
}

const AudioElem = sourceUrl => {
  return (
    <audio crossOrigin="anonymous" type="audio/mpeg">Failed to load <code>audio</code> element</audio>
  );
}

// Receives moodD parent callback state functions as props and sets MoodD's state from these
const Controller = props => {

  useEffect(() => {
    // gets audio DOM node 
    const audioElement = document.querySelector('audio');
    if(audioContext) {
      if(props.isActive()) {
        audioElement.play();
      } else {
        audioElement.pause();
      }
    }
  });

  return (
    <div className="buttons-wrapper">
      <AudioElem/>
       <button className="playback-button" data-playing="false" role="switch" aria-checked="false" 
          onClick={() => {
            // check for autoplay policy
            if(audioContext.state == 'suspended') {
              audioContext.resume().then(() => {
              });
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

        <button className="playback-button" data-playing="false" role="switch" aria-checked="false" 
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

        <button  className="playback-button" data-playing="false" role="switch" aria-checked="false" 
          onClick={() => {
            if(!audioContext) audioSetup(audioUrls[currentTrack]);
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

        <button  className="playback-button" data-playing="false" role="switch" aria-checked="false" 
          onClick={() => {
            currentTrack = (currentTrack + 1) % audioUrls.length;
            if(!audioContext) {
              audioSetup();
            }

            if(audioContext.state == 'suspended') {
              audioContext.resume();
            }
          
            if(props.isActive()) {
              props.setActive(0);
              audioStop();
              const audioElement = document.querySelector('audio');
    	        audioElement.setAttribute('src', audioUrls[currentTrack]);
              setTimeout(() => {
                props.setActive(1);
              }, 850);
            }
          }}>  
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7.6 7.8">
            <title>next</title>
            <g id="Layer_1" data-name="Layer 1">
              <path d="M0,0,7.6,3.9,0,7.8Z" transform="translate(0)" fill="#d6d6d6"/>
            </g>
            <g id="Layer_2" data-name="Layer 2">
              <rect x="6" y="0.01" width="1.59" height="7.79" fill="#d6d6d6"/>
            </g>
          </svg>
        </button> 

        <button  className="playback-button" data-playing="false" role="switch" aria-checked="false" 
          onClick={() => { 
            console.log('dummy!');
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


export default Controller;