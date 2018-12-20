import React, { Component } from 'react';
import Mapa from "./components/Mapa";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Zdravo SVete</h1>
        <Mapa/>
      </div>
    );
  }
}

export default App;
