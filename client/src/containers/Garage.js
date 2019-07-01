import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import ShopSlider from './../components/ShopSlider/ShopSlider';

class MainPage extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <ShopSlider />
          </div>
        </Router>
      </div>
    );
  }
}

export default MainPage;
