import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import {Howl, Howler} from 'howler';

function App() {
  useEffect(() => {
    console.log('Loading data...');
    try {
      fetch('https://firebasestorage.googleapis.com/v0/b/cloudtop-nidnogg.appspot.com/o/audio%2Ftest.mp3?alt=media&token=c0ca5d7b-abcf-43c7-87af-764393e539af')
        .then(response => {
          ßconsole.log('Response is: ' + response);
          let sound = new Howl({
            src: [response]
          });
        });
      console.log('App data successfully loaded.');
    }

    catch(error) {
      console.log('Error detected: ' + error);
    }

  });
  return (
    <div className="App">
      <header className="App-header">
        <MoodShell />
        <PlayButton />
        <HeaderText />
      </header>
    </div>
  );
}


function MoodShell() {
  return (
    <div style={{
      position: 'absolute',
      bottom: '0',
      height: '30vh',
      width: '20vw',
      backgroundColor: '#453643',
      zIndex: 1
    }}>
    </div>
  );
}

function PlayButton() {

  return (
    <div id="play-button">

    </div>
  );

}
function HeaderText() {
  return (
    <h3 className="header-text"> M O O D <br />D R O N E </h3>
  );
}

export default App;
