import React from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

import znamenitosti from '../data/znamenitosti.json'

export default class SimpleExample extends React.Component {
  constructor() {
    super()
    this.state = {
      lat: 44.808364,
      lng: 20.4939618,
      zoom: 17
    }
  }

  render() {
    const position = [this.state.lat, this.state.lng];

    const markeriJsx = znamenitosti.map(x => {
      const position = [x.lokacija.lat, x.lokacija.lon];
      return (
        <Marker position={position} key={x.id}>
        <Popup>
          <img src={x.slika} alt={x.naslov} />
          <h3>{x.naslov}</h3>
          <p>{x.lead_tekst}</p>
        </Popup>
      </Marker>
      )
    }
    )

    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
          {markeriJsx}
      </Map>
    );
  }
}
