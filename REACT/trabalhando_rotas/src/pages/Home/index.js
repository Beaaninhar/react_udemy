import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Home extends Component {
  // constructor(props) {
  //   super(props);

  // }
  render() {
    return (
      <div>
        <h2>BEM VINDO(A) A PAG HOME!</h2>
        <br />
        <Link to="/Sobre">Ir para sobre</Link>
        <br/>
        <Link to="/Produto">PRODUTO</Link>
      </div>
    );
  }
}

export default Home;