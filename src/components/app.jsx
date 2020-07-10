/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

// Components
import CityList from '../containers/city_list';
import SelectedCity from '../containers/selected_city';

const cities = [
  { name: 'Paris', address: '16 Villa Gaudelet, 75011 Paris', slug: 'paris' },
  { name: 'London', address: '14-22 Elder St, London E1 6BT', slug: 'london' },
  { name: 'Berlin', address: 'Rudi-Dutschke-Straße 26, 10969 Berlin', slug: 'berlin' },
];

class App extends Component {
  state = {
    selectedCity: false,
    selectedCityId: null
  }

  selectCity = (id) => {
    this.setState({
      selectedCityId: id,
      selectedCity: true
    });
  }

  render() {
    return (
      <div className="app">
        <CityList cities={cities} selectCity={this.selectCity} />
        <SelectedCity selectedCity={this.state.selectedCity} cities={cities} id={this.state.selectedCityId} />
      </div>
    );
  }
}

// const App = () => {
//   return (
//   );
// };

export default App;
