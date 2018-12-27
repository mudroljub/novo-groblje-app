import React, { Component } from 'react';
import {connect} from 'react-redux'

import Mapa from "./components/Mapa";
import Filteri from "./components/Filteri";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Novo Groblje App</h1>
        <Filteri/>
        <Mapa/>
      </div>
    );
  }
}

export default App;
