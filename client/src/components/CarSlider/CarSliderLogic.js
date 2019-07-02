import React, { Component } from 'react';
import axios from 'axios';
import tokenValidationHelper from '../../lib/tokenValidationHelper';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:8081/api/',
  timeout: 1000,
  headers: {
    'authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`
  }
});

export default class CarSliderLogic extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      index: 0,
      direction: null
    };
  }

  async componentDidMount() {

    const user = await tokenValidationHelper();

    this.setState({ user });

    await instance
      .get('cars/user')
      .then(response => console.log(response))
      .catch(e => {
        console.log('here', e);
      });
  }

  selectCurrentCar = _id => e => {
    e.preventDefault();

    console.log('here!!', this.props);
  };

  handleSelect = (selectedIndex, e) => {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  };

  render() {
    return this.props.children({
      ...this.state,
      handleSelect: this.handleSelect,
      selectCurrentCar: this.selectCurrentCar
    });
  }
}
