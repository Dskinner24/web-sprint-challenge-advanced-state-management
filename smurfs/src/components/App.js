import React from "react";
import "./App.css";
import SmurfList from './SmurfList';
import SmurfForm from "./SmurfForm";


function App(){
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <h2>Current Smurfs in the Village</h2>
        <SmurfList />
        <SmurfForm />
      </div>
    );
}

export default App;
