import React, { Component } from 'react'

import znamenitosti from '../data/znamenitosti.json'

export default class Filteri extends Component {
  render() {
    const kategorije = [...new Set(znamenitosti.map(x => x.kategorija))]
    const jsx = kategorije.map((kategorija, i) => 
    <div key={i}>
      <label>
        <input type="checkbox"/>
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
