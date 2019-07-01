import React, { Component } from 'react';
import axios from 'axios';

import ShopUserInfo from '../components/Shop/ShopUserInfo';
import CarList from '../components/Shop/CarList';
import Header from './../components/Header/Header';

import './../components/Shop/Shop.scss';

import tokenValidationHelper from './../lib/tokenValidationHelper';

class MainPage extends Component {
  constructor() {
    super();

    this.state = {
      user: {
        username: '',
        cars: [],
        games: []
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

    console.log(_id);
  };

  render() {
    return (
      <div>
        <Header user={this.state.user} />
        <div className="Shop-container">
          <ShopUserInfo />
          <CarList buyCarFunction={this.buyCarFunction} cars={this.state.cars} />
        </div>
      </div>
    );
  }
}

export default MainPage;
