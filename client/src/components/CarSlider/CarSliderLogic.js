import React, { Component } from 'react';
import axios from 'axios';

export default class CarSliderLogic extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      index: 0,
      direction: null
    };
  }

  async componentDidMount() {
    
  }

  selectCurrentCar = _id => e => {
    e.preventDefault();

    console.log('here!!', this.props);
    
  }

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
