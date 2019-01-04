import React from 'react'
import { Marker, Popup } from 'react-leaflet'
import { Icon, Point } from 'leaflet'
import { connect } from 'react-redux'
import { setFiltered } from '../store/actions';

function Markeri(props) {

  return props.filtrirane
    .filter(item => props.kategorije.has(item.kategorija))
    .map(item => {
      const position = [item.lokacija.lat, item.lokacija.lon];
      const ikonica = new Icon({
        iconUrl: require(`../assets/images/${item.kategorija}.svg`),
        iconSize: new Point(60, 75),
        className: 'leaflet-icon'
      });

      return (
        <Marker
          position={position}
          icon={ikonica}
          key={item.id}>
          <Popup>
            <img src={item.slika} alt={item.naslov} />
            <h3>{item.naslov}</h3>
            <p>{item.lead_tekst}</p>
          </Popup>
        </Marker>
      )
    })
}

const mapStateToProps = (state) => {
  return {
    filtrirane: state.filtrirane,
    kategorije: state.kategorije
  }
}

const mapDispatchToProps = {
  setFiltered
}

export default connect(mapStateToProps, mapDispatchToProps)(Markeri)