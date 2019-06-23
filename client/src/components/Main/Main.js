import React, { Component } from 'react';
import CarSlider from './../CarSlider/CarSlider';
import SocialMedia from './../SocialMedia/SocialMedia';
import PlayNow from './../PlayNow/PlayNow';

import { BrowserRouter as Router } from 'react-router-dom';

class MainPage extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <CarSlider />
            <SocialMedia />
            <PlayNow />
          </div>
        </Router>
      </div>
    );
  }
}

export default MainPage;
