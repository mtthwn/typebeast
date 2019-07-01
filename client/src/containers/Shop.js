import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import UserInfo from '../components/Shop/UserInfo';

class MainPage extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <UserInfo />
          </div>
        </Router>
      </div>
    );
  }
}

export default MainPage;
