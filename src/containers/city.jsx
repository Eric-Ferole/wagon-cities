/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class City extends Component {

  handleClick = () => {
    if (this.props.selectCity) {
      return this.props.selectCity(this.props.id);
    }
  }

  render() {

    return (
      <ul><li onClick={this.handleClick}>{this.props.name}</li></ul>
      

    );
  }
}

export default City;
