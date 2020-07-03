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
    selectedCity: true
  }

  handleClick = (event) => {
    console.log('event:', event.target.value);
  }

  render() {
    return (
      <div className="app">
        <CityList cities={cities} clicked={() => this.handleClick(event)} />
        <SelectedCity selected={this.state.selectedCity} />
      </div>
    );
  }
}

// const App = () => {
//   return (
//   );
// };

export default App;
