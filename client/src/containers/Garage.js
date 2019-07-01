import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GarageSlider from '../components/GarageSlider/GarageSlider';
import Header from './../components/Header/Header';

class MainPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Router>
          <div>
            <GarageSlider />
          </div>
        </Router>
      </div>
    );
  }
}

export default MainPage;
