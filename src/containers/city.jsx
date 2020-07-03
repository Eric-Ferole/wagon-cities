/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class City extends Component {

  handleClick = () => {
    console.log('Click:');
    if (this.props.selectCity) {
      return this.props.selectCity(this.props.id);
    }
  }


  render() {
    return (
      <li onClick={this.handleClick}>{this.props.name}</li>
    );
  }
}

export default City;
