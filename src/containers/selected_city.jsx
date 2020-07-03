/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class SelectedCity extends Component {

  render() {
    if (!this.props.selected) {
      return (<p>Please select a city</p>);
    }

    return (
      <div>
        {console.log(this.props.cities)}
        <h2>{this.props.selectedCity.name}</h2>
        <p>{this.props.selectedCity.address}</p>
      </div>
    );
  }
}

export default SelectedCity;
