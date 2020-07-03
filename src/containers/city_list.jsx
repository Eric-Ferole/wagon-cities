/* eslint-disable arrow-parens */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";

// Components
import City from "./city";

class CityList extends Component {
  render() {
    return (
      <div className="cities">
        {this.props.cities.map((city) => (
          <City
            key={city.slug}
            name={city.name}
            address={city.address}
            slug={city.slug}
            selectCity={this.props.selectCity}
            id={city.slug}
          />
        ))}
      </div>
    );
  }
}

export default CityList;
