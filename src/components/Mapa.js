import React, {Component} from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import {Icon, Point} from 'leaflet'

import geoikonica from "../assets/images/geolocation.png"
import znamenitosti from '../data/znamenitosti.json'

const ikonica = new Icon({
  iconUrl: require('../assets/images/location-pin.svg'),
  iconSize: new Point(60, 75),
  className: 'leaflet-icon'
});

export default class SimpleExample extends Component {

  constructor() {
    super()
    this.state = {
      lat: 44.808364,
      lng: 20.4939618,
      zoom: 17
    }
  }

  centerMap = () => {
    console.log('centerMap')
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    const markeriJsx = znamenitosti.map(x => {
      // povezati ikonice sa kategorijom
      const position = [x.lokacija.lat, x.lokacija.lon];
      return (
        <Marker 
          position={position}
          icon={ikonica}
          key={x.id}>
        <Popup>
          <img src={x.slika} alt={x.naslov} />
          <h3>{x.naslov}</h3>
          <p>{x.lead_tekst}</p>
        </Popup>
      </Marker>
      )
    })

    return (
      <React.Fragment>
        <Map center={position} zoom={this.state.zoom}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
            {markeriJsx}
        </Map>
        <img src={geoikonica} alt="geolocation" className="geoikonica" onClick={this.centerMap} />
      </React.Fragment>
    );
  }
}
