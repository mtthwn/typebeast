import React, { Component } from 'react';

import tokenValidationHelper from './../../lib/tokenValidationHelper';

export default class MainPage extends Component {
  constructor() {
    super();

    this.state = {
      user: {
        username: '',
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
      return this.props.children({
          ...this.state
      })
  }
}
