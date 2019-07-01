import React, { Component } from 'react';

import GarageSlider from '../components/GarageSlider/GarageSlider';
import Header from './../components/Header/Header';

import tokenValidationHelper from './../lib/tokenValidationHelper'

export default class Garage extends Component {
  constructor() {
    super();

    this.state = {
      user: {
        username: '',
        cars: [],
        email: null,
        games: []
      }
    }
  }

  async componentDidMount () {
    const user = await tokenValidationHelper();

    this.setState({ user });
  }

  render() {
    return (
      <div>
        <Header user={this.state.user} />
          <div>
            <GarageSlider user={this.state.user} />
          </div>
      </div>
    );
  }
}
