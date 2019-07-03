import React, { Component } from 'react';

import instance from '../../lib/axios';

import tokenValidationHelper from '../../lib/tokenValidationHelper';

export default class Shop extends Component {
  constructor() {
    super();

    this.state = {
      user: {
        username: '',
        cars: [],
        games: [],
      },
      cars: []
    };
  }

  async componentDidMount() {
    try {
      const user = await tokenValidationHelper();

      this.setState({ user });

      await instance.get('/cars').then(data => {
        const { cars } = data.data;
        const userCars = this.state.user.cars

        const displayCars = cars.filter(car => {
          return userCars.indexOf(car._id) < 0;
        });
        this.setState({ cars: displayCars });
      });
    } catch (e) {
      console.log(e);
    }
  }

  buyCarFunction = _id => e => {
    e.preventDefault();

    instance
      .post('/cars/add', {
        car: _id
      })
      .then(response => {
        alert('Successfully purchased!');
        window.location.reload();
      })
      .catch(e => console.log(e));
  };

  render() {
    return this.props.children({
      ...this.state,
      buyCarFunction: this.buyCarFunction
    });
  }
}
