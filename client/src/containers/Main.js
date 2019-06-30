import React, { Component } from 'react';
import axios from 'axios';
import CarSlider from './../components/CarSlider/CarSlider';
import SocialMedia from './../components/SocialMedia/SocialMedia';
import PlayNow from './../components/PlayNow/PlayNow';

import { BrowserRouter as Router } from 'react-router-dom';

// import tokenValidation from './../lib/tokenValidationHelper';

class MainPage extends Component {
  constructor() {
    super();

    this.state = {
      user: {
        username: 'Guest',
        email: null,
        _id: null,
        cars: [],
        games: []
      }
    };
  }

  componentDidMount() {
    const token = localStorage.getItem('token');
    
    axios
      .get(`http://127.0.0.1:8081/api/auth/me/from/token`, {
        params: {
          token: JSON.parse(token)
        }
      })
      .then(response => {
        if (response.data.success) {
          this.setState({ user: response.data.user });
        }
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    // console.log(SocialMedia);

    return (
      <div>
        <Router>
          <div>
            <SocialMedia />
            <CarSlider />
            <PlayNow />
          </div>
        </Router>
      </div>
    );
  }
}

export default MainPage;
