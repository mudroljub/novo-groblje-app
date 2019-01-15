import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import MapaApp from "./components/MapaApp";
import Vesti from "./components/Vesti";
import Znamenitost from './components/Znamenitost';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={MapaApp} />
        <Route path="/vesti" component={Vesti} />
        <Route path="/znamenitost/:id" component={Znamenitost} />
      </Switch>
    );
  }
}

export default App;
