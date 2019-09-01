import React, {useEffect, useState} from 'react';
import ReactSVG from 'react-svg';
import './css/App.css'


const getAudio = () => {
  return 'https://firebasestorage.googleapis.com/v0/b/cloudtop-nidnogg.appspot.com/o/audio%2Fsong_test.mp3?alt=media&token=ccf6f882-47f5-46cb-9836-732bc871ee9a';
}

// for legacy browsers
const AudioContext = window.AudioContext || window.webkitAudioContext;

// generates audio context
const audioContext = new AudioContext();

// gets audio element
const audioElement = document.querySelector('audio');
//console.log('audio context ' + audioContext);
// passes it into the audio context
//const track = audioContext.createMediaElementSource(audioElement);

//track.connect(audioContext.destination);

/*
async function fetchAudio() {
  url = 'https://firebasestorage.googleapis.com/v0/b/cloudtop-nidnogg.appspot.com/o/audio%2Ftest.mp3?alt=media&token=c0ca5d7b-abcf-43c7-87af-764393e539af';
  try {
    const response = await fetch(url);
    console.log("response: " + response.text);
  } catch (err) {
    console.log('Failed to fetch. Error: ' + err);
  }
}
*/

const App = () => {
  return (
    <section className="main">
        <h3>
          all I ever wanted
        </h3>
        <AudioElem />
        <PlayButton />

    </section>
  );
}

const AudioElem = () => {

  useEffect(() => {
    audioSetup();
  });

  return (
    <audio src={'https://firebasestorage.googleapis.com/v0/b/cloudtop-nidnogg.appspot.com/o/audio%2Fsong_test.mp3?alt=media&token=ccf6f882-47f5-46cb-9836-732bc871ee9a'} crossOrigin="anonymous" type="audio/mpeg">Failed to load <code>audio</code> element</audio>
  );
}

const PlayButton = () => {
  const [isActive, setActive] = useState(0);

  return (
    <button className="button" data-playing="false" role="switch" aria-checked="false" 
            onClick={() => {
              if(!isActive) {
                setActive(1);
              }
            }>
      <span>Play/Pause</span>
    </button> 
  );
}

const audioSetup = () => {

  // gets audio element
  const audioElement = document.querySelector('audio');
  console.log('audio context ' + audioContext);
  // passes it into the audio context
  const track = audioContext.createMediaElementSource(audioElement);

  track.connect(audioContext.destination);
}
export default App;