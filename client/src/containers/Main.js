import React, { Component } from 'react';
// import axios from 'axios';
import CarSlider from './../components/CarSlider/CarSlider';
import SocialMedia from './../components/SocialMedia/SocialMedia';
import PlayNow from './../components/PlayNow/PlayNow';

import { BrowserRouter as Router } from 'react-router-dom';
import tokenValidationHelper from '../lib/tokenValidationHelper';

class MainPage extends Component {
  constructor() {
    super();

    this.state = {
      user: {
        username: 'Guest',
        email: null,
        _id: null,
        cars: [],
        games: []
      }
    };
  }

  async componentDidMount () {

    const user = await tokenValidationHelper();

    this.setState({ user });
  }

  render() {
    // console.log(SocialMedia);

    return (
      <div>
        <Router>
          <div>
            <SocialMedia />
            <CarSlider />
            <PlayNow />
          </div>
        </Router>
      </div>
    );
  }
}

export default MainPage;
