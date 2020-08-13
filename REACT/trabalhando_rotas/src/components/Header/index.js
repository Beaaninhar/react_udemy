import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Header extends Component {
  // constructor(props) {
  //   super(props);

  // }

  render() {
    return (
      <div>
          Header: Meu projeto!
          <br/>
          <Link to="/">HOME</Link>
          <hr/>
      </div>
    );
  }
}

Header.propTypes = {

};

export default Header;