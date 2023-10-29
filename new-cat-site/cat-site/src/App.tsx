import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import init, {hello_world, time_since} from "age-calc-lib";
import Card from "@mui/material/Card";
import BasicCard from "./app/catcard/Card";
import ButtonAppBar from "./app/TopBar";

function App() {

  // TODO - remove and add to lower card where calculation occurs
  useEffect(() => {
    init().then(() => {
      console.log(time_since("2019-10-12T07:20:50.52Z"));
    })
  })

  return (
    <div className="App">
      <header className="App-header">
        // TODO - rename and stretch across whole screen
        // TODO - add a filter that will hide cards when you type in the filter
        <ButtonAppBar/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <BasicCard />
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
