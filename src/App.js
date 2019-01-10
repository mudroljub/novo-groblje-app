import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import MapaApp from "./components/MapaApp";
import Vesti from "./components/Vesti";

class App extends Component {
  render() {
    return (
      <Switch>
      <Route exact path="/" component={MapaApp} />
      <Route path="/vesti" component={Vesti} />
      </Switch>
    );
  }
}

export default App;
