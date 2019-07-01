import React, { Component } from 'react';
import ShopUserInfo from '../components/Shop/ShopUserInfo';
import CarList from '../components/Shop/CarList';

import './../components/Shop/Shop.scss';

class MainPage extends Component {
  render() {
    return (
      <div className="Shop-container">
        <ShopUserInfo />
        <CarList />
      </div>
    );
  }
}

export default MainPage;
