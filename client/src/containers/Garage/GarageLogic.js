import React, { Component } from 'react';

import GarageSlider from '../../components/GarageSlider/GarageSlider';
import Header from '../../components/Header/Header';

import tokenValidationHelper from '../../lib/tokenValidationHelper';
import instance from '../../lib/axios';

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
    };
  }

  async componentDidMount() {
    const user = await tokenValidationHelper();

    await instance.get('/cars/user').then(response => {
      const { cars } = response.data;

      user.cars = cars;
      this.setState({ user });
    });
  }

  render() {
    return this.props.children({
        ...this.state
    })
  }
}
