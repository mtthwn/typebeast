import React, { Component } from 'react';
import CarSlider from './../CarSlider/CarSlider';
// import SocialMedia from './SocialMedia';
import PlayNow from './../PlayNow/PlayNow';

import { BrowserRouter, Route, Link } from 'react-router-dom';

class MainPage extends Component {
  render() {
    return (
      <div>
        <CarSlider />
        <PlayNow />
      </div>
    );
  }
}

export default MainPage;
