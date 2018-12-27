import React, { Component } from 'react'
import {connect} from 'react-redux'
import { setFiltered } from '../store/actions';

class Filteri extends Component {
  state = {
    kategorije: new Set()
  }

  filtriraj = (e, kategorija) => {
    const kategorije = new Set(this.state.kategorije) // kopira stanje
    if (e.target.checked)
      kategorije.add(kategorija)
    else
      kategorije.delete(kategorija)
    this.setState({kategorije})
  }

  render() {
    const kategorije = [...new Set(this.props.lokacije.map(x => x.kategorija))]
  
    const jsx = kategorije.map((kategorija, i) => 
    <div key={i}>
      <label>
        <input type="checkbox" onChange={e => this.filtriraj(e, kategorija)} />
        {kategorija}
      </label>
    </div>
    )

    return (
      <div>
        {jsx}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    lokacije: state.lokacije, 
    filtrirane: state.filtrirane
  }
}

const mapDispatchToProps = {
  setFiltered
}

export default connect(mapStateToProps, mapDispatchToProps)(Filteri)