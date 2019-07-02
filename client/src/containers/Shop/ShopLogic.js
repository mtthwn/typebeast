import React, { Component } from 'react';
import axios from 'axios';

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

      await axios.get('http://127.0.0.1:8081/api/cars').then(data => {
        const { cars } = data.data;

        this.setState({ cars });
      });
    } catch (e) {
      console.log(e);
    }
  }

  buyCarFunction = _id => e => {
    e.preventDefault();

    axios
      .post('http://127.0.0.1:8081/api/cars/add', {
        _id: this.state.user._id,
        car: _id
      })
      .then(response => {
        alert('Car successfully bought!');
      })
      .catch(e => console.log(e.message));

    instance
      .post('/cars/add', {
        car: _id
      })
      .then(response => {
        alert('Successfully purchased!');
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
