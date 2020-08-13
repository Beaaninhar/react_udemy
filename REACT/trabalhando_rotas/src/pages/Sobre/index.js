import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Sobre extends Component {
  // constructor(props) {
  //   super(props);

  // }
  render() {
    return (
      <div>
        <h2>Página sobre</h2>
        <br/>
        <Link to="/">HOME</Link>
      </div>
    );
  }
}

Sobre.propTypes = {

};

export default Sobre;