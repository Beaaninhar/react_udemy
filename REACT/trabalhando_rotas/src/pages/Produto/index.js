import React, { Component } from 'react';

class Produto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ''
    }
  }
  componentDidMount(){
    const { id } = this.props.match.params;
    this.setState({id: id})
  }
  render() {
    return (
      <div>
       <h3> PRODUTO:   {this.state.id} </h3>

      </div>
    );
  }
}


export default Produto;