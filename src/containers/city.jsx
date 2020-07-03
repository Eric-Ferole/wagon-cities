/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class City extends Component {
  render() {
    return (
      <li onClick={this.props.clicked1}>{this.props.name}</li>
    );
  }
}

export default City;
