import React, {Component} from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import {Icon, Point} from 'leaflet'
import {connect} from 'react-redux'

import geoikonica from "../assets/images/geolocation.png"

const ikonica = new Icon({
  iconUrl: require('../assets/images/location-pin.svg'),
  iconSize: new Point(60, 75),
  className: 'leaflet-icon'
});

class Mapa extends Component {

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
    // https://stackoverflow.com/questions/3397585/navigator-geolocation-getcurrentposition-sometimes-works-sometimes-doesnt
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
    const position = [this.state.lat, this.state.lng];
    const markeriJsx = this.props.filtrirane.map(x => {
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
        <img title="Centriraj mapu" src={geoikonica} alt="geolocation" className="geoikonica" onClick={this.centerMap} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {filtrirane: state.filtrirane}
}

export default connect(mapStateToProps)(Mapa)