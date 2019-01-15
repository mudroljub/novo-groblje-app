import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from './Header';


class Znamenitost extends Component {


    render() {
        let znamenitost = this.props.filtrirane.find(item => item.id === Number(this.props.match.params.id))

        return (
            <React.Fragment>
                <Header />
                <h1>{znamenitost.naslov}</h1>
                <h3>{znamenitost.podnaslov}</h3>
                <img src={znamenitost.slika} alt="slika" />
                <p>{znamenitost.glavni_tekst}</p>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        filtrirane: state.filtrirane
    }
}



export default connect(mapStateToProps)(Znamenitost)