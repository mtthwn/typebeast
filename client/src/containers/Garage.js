import React, { Component } from 'react';

import GarageSlider from '../components/GarageSlider/GarageSlider';
import Header from './../components/Header/Header';

export default class Garage extends Component {
  render() {
    return (
      <div>
        <Header />
          <div>
            <GarageSlider />
          </div>
      </div>
    );
  }
}
