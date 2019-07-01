import React, { Component } from 'react';
// import axios from 'axios';
import CarSlider from './../components/CarSlider/CarSlider';
import SocialMedia from './../components/SocialMedia/SocialMedia';
import PlayNow from './../components/PlayNow/PlayNow';

import tokenValidationHelper from '../lib/tokenValidationHelper';

import Header from './../components/Header/Header';

export default class MainPage extends Component {
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

  async componentDidMount() {
    const user = await tokenValidationHelper();

    this.setState({ user });
  }

  render() {
    // console.log(SocialMedia);

    return (
      <div>
        <Header />
        <div>
          <SocialMedia />
          <CarSlider />
          <PlayNow />
        </div>
      </div>
    );
  }
}

