import React, { useEffect } from "react";

// for legacy browsers
const AudioContext = window.AudioContext || window.webkitAudioContext;

let audioContext;
let currentTrack = 0;
const audioUrls = [
  "https://firebasestorage.googleapis.com/v0/b/cloudtop-8de79.appspot.com/o/the_zen_bass.mp3?alt=media&token=8b231fcd-0b79-4dbd-ba35-0bb3d509be2f",
  "https://firebasestorage.googleapis.com/v0/b/cloudtop-8de79.appspot.com/o/serene_mind_waves.mp3?alt=media&token=dd379833-fe01-44da-a405-942cba30b3e2",
  "https://firebasestorage.googleapis.com/v0/b/cloudtop-8de79.appspot.com/o/pulsewaves.mp3?alt=media&token=8c300cfc-8d24-4895-8586-3159830a4232",
];

const audioStop = () => {
  // gets audio element
  const audioElement = document.querySelector("audio");
  audioElement.currentTime = 0;
};

const audioSetup = () => {
  // generates audio context on first user interaction
  audioContext = new AudioContext();
  // gets audio element
  const audioElement = document.querySelector("audio");

  audioElement.setAttribute("src", audioUrls[currentTrack]);

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
  audioElement.onended = function() {};
};

const AudioElem = () => {
  return (
    <audio crossOrigin="anonymous" type="audio/mpeg">
      Failed to load <code>audio</code> element
    </audio>
  );
};

// Receives moodD parent callback state functions as props and sets MoodD's state from these
const Controller = (props) => {
  useEffect(() => {
    // gets audio DOM node
    const audioElement = document.querySelector("audio");
    audioElement.onended = () => {
      if (!audioContext) {
        audioSetup();
      }

      if (audioContext.state == "suspended") {
        currentTrack = (currentTrack + 1) % audioUrls.length;
        setTimeout(() => {
          console.log(`current Track:${currentTrack}`);

          audioContext.resume();
        }, 850);
      }

      if (props.isActive()) {
        props.setActive(0);
        audioStop();

        currentTrack = (currentTrack + 1) % audioUrls.length;
        audioElement.setAttribute("src", audioUrls[currentTrack]);

        console.log(`currentTrack:${currentTrack}`);
        setTimeout(() => {
          props.setActive(1);
        }, 850);
      }
    };

    if (audioContext) {
      if (props.isActive()) {
        audioElement.play();
      } else {
        audioElement.pause();
      }
    }
  });

  return (
    <div className="buttons-wrapper">

      <AudioElem />

      {/* Pause button */}
      <button
        className="playback-button"
        data-playing="false"
        role="switch"
        aria-checked="false"
        onClick={() => {
          // check for autoplay policy
          if (audioContext.state == "suspended") {
            audioContext.resume().then(() => {});
          }
          if (props.isActive()) {
            props.setActive(0);
          }
        }}
      >
        <svg viewBox="0 0 6.3 7.5">
          <defs>
            <style>
              {".prefix__a{fill:none;stroke:#d6d6d6;stroke-width:2.3px}"}
            </style>
          </defs>
          <path className="prefix__a" d="M1.15 0v7.5M5.15 0v7.5" />
        </svg>
      </button>


      {/* Stop Button */}
      <button
        className="playback-button"
        data-playing="false"
        role="switch"
        aria-checked="false"
        onClick={() => {
          if (props.isActive()) {
            props.setActive(0);
            audioStop();
          }
        }}
      >
        <svg viewBox="0 0 7.5 7.5">
          <path fill="#d6d6d6" d="M0 0h7.5v7.5H0z" />
        </svg>
      </button>

      {/* Play Button */}
      <button
        className="playback-button"
        data-playing="false"
        role="switch"
        aria-checked="false"
        onClick={() => {
          if (!audioContext) audioSetup();
          // check for autoplay policy
          if (audioContext.state == "suspended") {
            audioContext.resume();
          }

          if (!props.isActive()) {
            props.setActive(1);
          }
        }}
      >
        <svg viewBox="0 0 7.599 7.791">
          <path d="M.002 0l7.6 3.9-7.6 3.9z" fill="#d6d6d6" />
        </svg>
      </button>

      {/* Previous Track Button */}
      <button
        className="playback-button"
        data-playing="false"
        role="switch"
        aria-checked="false"
        onClick={() => {
          if (!audioContext) {
            audioSetup();
          }

          if (audioContext.state == "suspended") {
            currentTrack = (currentTrack - 1) % audioUrls.length;
            console.log(`current Track: ${currentTrack}`);
            audioContext.resume();
          }

          if (props.isActive()) {
            props.setActive(0);
            audioStop();

            // just in case so it does not reach -1
            if (currentTrack == 0) {
              currentTrack = audioUrls.length;
            } else {
              currentTrack = (currentTrack - 1) % audioUrls.length;
            }

            const audioElement = document.querySelector("audio");
            audioElement.setAttribute("src", audioUrls[currentTrack]);
            setTimeout(() => {
              console.log(`current Track: ${currentTrack}`);
              props.setActive(1);
            }, 850);
          }

          // does not reach -1
          if (!props.isActive()) {
            if (currentTrack == 0) {
              currentTrack = audioUrls.length;
            } else {
              currentTrack = (currentTrack - 1) % audioUrls.length;
            }

            setTimeout(() => {
              console.log(`currentTrack: ${currentTrack}`);
              props.setActive(1);
            }, 850);
          }
        }}
      >
        <svg
          className="flip"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 7.6 7.8"
        >
          <title>next</title>
          <g id="Layer_1" data-name="Layer 1">
            <path
              d="M0,0,7.6,3.9,0,7.8Z"
              transform="translate(0)"
              fill="#d6d6d6"
            />
          </g>
          <g id="Layer_2" data-name="Layer 2">
            <rect x="6" y="0.01" width="1.59" height="7.79" fill="#d6d6d6" />
          </g>
        </svg>
      </button>

      {/* Next Track Button */}
      <button
        className="playback-button"
        data-playing="false"
        role="switch"
        aria-checked="false"
        onClick={() => {
          if (!audioContext) {
            audioSetup();
          }

          if (audioContext.state == "suspended") {
            currentTrack = (currentTrack + 1) % audioUrls.length;
            setTimeout(() => {
              console.log(`currrent Track: ${currentTrack}`);
              audioContext.resume();
            }, 850);
          }

          if (props.isActive()) {
            props.setActive(0);
            audioStop();

            currentTrack = (currentTrack + 1) % audioUrls.length;

            const audioElement = document.querySelector("audio");
            audioElement.setAttribute("src", audioUrls[currentTrack]);

            console.log(`currentTrack: ${currentTrack}`);
            setTimeout(() => {
              props.setActive(1);
            }, 850);
          }
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7.6 7.8">
          <title>next</title>
          <g id="Layer_1" data-name="Layer 1">
            <path
              d="M0,0,7.6,3.9,0,7.8Z"
              transform="translate(0)"
              fill="#d6d6d6"
            />
          </g>
          <g id="Layer_2" data-name="Layer 2">
            <rect x="6" y="0.01" width="1.59" height="7.79" fill="#d6d6d6" />
          </g>
        </svg>
      </button>
    </div>
  );
};

export default Controller;
