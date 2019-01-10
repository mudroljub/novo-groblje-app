import React, { Component } from 'react';

import Mapa from "./Mapa";
import Filteri from "./Filteri";

class MapaApp extends Component {
  render() {
    return (
        <React.Fragment>
        <h1 id="main-title">Novo Groblje App</h1>
        <Filteri/>
        <Mapa/>
        </React.Fragment>
    );
  }
}

export default MapaApp;