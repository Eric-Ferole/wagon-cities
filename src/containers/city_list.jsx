/* eslint-disable arrow-parens */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";

// Components
import City from "./city";

class CityList extends Component {

  // handleClick = () => {
  //   console.log('Click:');
  // }

  render() {
    return (
      <div className="cities">
        {this.props.cities.map((city) => (
          <City
            key={city.slug}
            name={city.name}
            address={city.address}
            slug={city.slug}
            clicked1={this.props.clicked}
          />
        ))}
      </div>
    );
  }
}

export default CityList;
