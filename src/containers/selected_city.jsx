/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class SelectedCity extends Component {

  render() {
    console.log('SelectedCity:', this.props.selectedCity);
    if (this.props.selectedCity === null) {
      return (<p>Please select a city</p>);
    }
    this.props.cities.forEach(element => console.log(element.name));

    return (
      <div>
        {console.log(this.props.citie)}
        {/* <h2>{this.props.selectCity.name}</h2>
        <p>{this.props.selectCity.address}</p> */}
      </div>
    );
  }
}

export default SelectedCity;

// I have an object of arrays and I want to fetch the array containing a certain key