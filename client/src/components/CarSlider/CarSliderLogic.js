import React, { Component } from 'react';

// import instance from './../../lib/axios';

export default class CarSliderLogic extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      index: 0,
      direction: null
    };
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
      handleSelect: this.handleSelect
    });
  }
}
