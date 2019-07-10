import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MoodShell />
        <HeaderText />
      </header>
    </div>
  );
}


function MoodShell () {
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


function HeaderText() {
  return (
    <h3 className="header-text"> M O O D <br />D R O N E </h3>
  )
}

export default App;
