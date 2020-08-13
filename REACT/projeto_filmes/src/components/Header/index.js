import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './styles.css'


class Header extends Component {
  // constructor(props) {
  //   super(props);

  // }
 render() {
    return (
      <div className="header">
          <Link to="/">Home Filmes</Link>
      </div>
    );
  }
}


export default Header;