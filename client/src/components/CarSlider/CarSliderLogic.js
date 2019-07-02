import React, { Component } from 'react';

import tokenValidationHelper from '../../lib/tokenValidationHelper';
import instance from './../../lib/axios'; 

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
