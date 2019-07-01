import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GarageSlider from '../components/GarageSlider/GarageSlider';

class MainPage extends Component {
  render() {
    return (
      <div>
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
