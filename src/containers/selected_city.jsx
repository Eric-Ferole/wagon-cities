/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class SelectedCity extends Component {

  render() {
    console.log('SelectedCity:', this.props.selectedCity);
    if (this.props.selectedCity === null) {
      return (<p>Please select a city</p>);
    }
    const cities = this.props.cities.filter(element => element.name === this.props.id); // Return a list of arrays
    console.log('selectedCityId:', this.props.id);
    console.log('city:', cities);
    // cities.filter('id === selectedCityIf');

    return (
      <div>
        {console.log()}
        {/* <h2>{this.props.selectCity.name}</h2>
        <p>{this.props.selectCity.address}</p> */}
      </div>
    );
  }
}

export default SelectedCity;

// I have an object of arrays and I want to fetch the array containing a certain key