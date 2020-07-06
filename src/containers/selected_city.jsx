/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class SelectedCity extends Component {

  render() {
    // console.log('SelectedCity:', this.props.selectedCity);
    // if (!this.props.selectedCity === null) {
    //   return (<p>Please select a city</p>);
    // }
    console.log('Ville de nuit:', this.props.cities);
    const city = this.props.cities.filter(element => element.name === this.props.id); // Return a list of arrays
    console.log('selectedCityId:', this.props.id);

    return (
      <div>
        <h2>{city[0].name}</h2>
        <p>{city[0].address}</p>
      </div>
    );
  }
}

export default SelectedCity;

// I have an object of arrays and I want to fetch the array containing a certain key