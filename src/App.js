import React, {Component} from 'react';
import './css/App.css'


// for legacy browsers
const AudioContext = window.AudioContext || window.webkitAudioContext;

const audioContext = new AudioContext();

async function fetchAudio() {
  url = 'https://firebasestorage.googleapis.com/v0/b/cloudtop-nidnogg.appspot.com/o/audio%2Ftest.mp3?alt=media&token=c0ca5d7b-abcf-43c7-87af-764393e539af';
  try {
    const response = await fetch(url);
    console.log("response: " + response.text);
  } catch (err) {
    console.log('Failed to fetch. Error: ' + err);
  }
}
const App = () => {
  return (
    <div>
      <h3>
        all I ever wanted
      </h3>
      <audio src="" type="audio/mpeg"></audio>
    </div>
  );
}

export default App;