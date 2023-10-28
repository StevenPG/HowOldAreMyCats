import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import init, {hello_world, time_since} from "age-calc-lib";

function App() {

  useEffect(() => {
    init().then(() => {
      console.log(time_since("2019-10-12T07:20:50.52Z"));
    })
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
