import React, {Component} from 'react'
import { Map, TileLayer, Polyline } from 'react-leaflet'
import Markeri from './Markeri'
import rute from "../data/rute.json"

import geoikonica from "../assets/images/geolocation.png"

export default class Mapa extends Component {

  constructor() {
    super()
    this.state = {
      lat: 44.8092138,
      lng: 20.4871099,
      zoom: 17,
      bugfix: true,
    }
  }

  centerMap = () => {
    navigator.geolocation.getCurrentPosition(position => {
      const {latitude, longitude} = position.coords
      this.setState({
        lat: latitude + (this.state.bugfix ? 0.0000001 : -0.0000001),
        lng: longitude,
        bugfix: !this.state.bugfix,
      })
    }, error => alert("error"), {timeout: 5000})
  }

  render() {
    
    return (
      <React.Fragment>
        <Map center={[this.state.lat, this.state.lng]} zoom={this.state.zoom}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
          <Polyline
            positions={rute[0].putanja}
          />
          <Markeri />
        </Map>
        <img 
          title="Centriraj mapu" 
          src={geoikonica} 
          alt="geolocation" 
          className="geoikonica" 
          onClick={this.centerMap} 
        />
      </React.Fragment>
    );
  }
}