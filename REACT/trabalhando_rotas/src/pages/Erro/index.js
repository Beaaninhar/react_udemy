import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Erro extends Component {
  // constructor(props) {
  //   super(props);

  // }
  render() {
    return (
      <div>
        <h2>Ops! Página não encontrada</h2>
        <br/>
        <Link to="/">Home?</Link>
        <br/>
        <Link to="/Sobre">Sobre?</Link>


      </div>
    );
  }
}


export default Erro;