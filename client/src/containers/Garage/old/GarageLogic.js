import React, { Component} from 'react';

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
      },
      show: false
    };
  }

  selectCurrentCar = car => e => {
    e.preventDefault();

    instance
      .post('/cars/update', {
        car
      })
      .then(res => {
        this.setState({ show: true });
      })
      .catch(e => console.log(e));
  };

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
      ...this.state,
      selectCurrentCar: this.selectCurrentCar
    });
  }
}
