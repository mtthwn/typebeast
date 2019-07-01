import React, { Component } from 'react';
import ShopUserInfo from '../components/Shop/ShopUserInfo';
import CarList from '../components/Shop/CarList';
import Header from './../components/Header/Header';

import './../components/Shop/Shop.scss';

import tokenValidationHelper from './../lib/tokenValidationHelper';

class MainPage extends Component {
  constructor() {
    super();

    this.state = {
      user: '',
      cars: [],
      username: null,
      games: []
    };
  }

  async componentDidMount() {
    const user = await tokenValidationHelper();

    this.setState({ user });
  }

  render() {
    return (
      <div>
        <Header user={this.state.user} />
        <div className="Shop-container">
          <ShopUserInfo />
          <CarList />
        </div>
      </div>
    );
  }
}

export default MainPage;
