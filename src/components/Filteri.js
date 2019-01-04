import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setCategories } from '../store/actions';

class Filteri extends Component {

  filtriraj = (e, kategorija) => {
    const kategorije = new Set(this.props.kategorije) // kopira stanje
    if (e.target.checked)
      kategorije.add(kategorija)
    else
      kategorije.delete(kategorija)
    this.props.setCategories(kategorije)
  }

  render() {
    const kategorije = [...new Set(this.props.lokacije.map(x => x.kategorija))]

    const jsx = kategorije.map((kategorija, i) =>
      <div key={i}>
        <label>
          <input checked={this.props.kategorije.has(kategorija)? true : false} type="checkbox" onChange={e => this.filtriraj(e, kategorija)} />
          {kategorija}
        </label>
      </div>
    )

    return (
      <aside>
        <div className="category-holder">
          {jsx}
        </div>
      </aside>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    lokacije: state.lokacije,
    filtrirane: state.filtrirane,
    kategorije: state.kategorije
  }
}

const mapDispatchToProps = {
  setCategories
}

export default connect(mapStateToProps, mapDispatchToProps)(Filteri)