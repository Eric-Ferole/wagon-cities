/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class SelectedCity extends Component {

  render() {
    if (!this.props.selectedCity) {
      return (
        <div className="active-city">
          <p>Please select a city</p>
        </div>);
    }
    const city = this.props.cities.filter(element => element.slug === this.props.id); // Return a list of arrays
    const url = "https://kitt.lewagon.com/placeholder/cities/";

    return (
      <div className="active-city">
        <h2>{city[0].name}</h2>
        <p>{city[0].address}</p>
        <img src={url + this.props.id} alt=""/>
      </div>
    );
  }
}

export default SelectedCity;

// I have an object of arrays and I want to fetch the array containing a certain key