import React, { Component } from 'react';
import axios from 'axios';

export default class ModalLogic extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show: false
    };
  }

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  handleLogin = (email, password) => {
    // e.preventDefault();
    axios
      .post('http://127.0.0.1:8081/api/auth/login', {
        email,
        password
      })
      .then(res => {
        // console.log('Before saving to storage', res.data.token)
        const token = res.data.token;
        localStorage.setItem('token', JSON.stringify(token));
        window.location.reload();

        // console.log('Retrieve from storage', localStorage.getItem('token'))
      })
      .catch(e => {
        console.log(e.message);
      });
  };

  handleRegister = (username, email, password) => {
    axios
      .post('http://127.0.0.1:8081/api/auth/register', {
        username,
        email,
        password
      })
      .then(res => {
        const token = res.data.token;
        localStorage.setItem('token', JSON.stringify(token));
        console.log('Retrieve from storage', localStorage.getItem('token'));
      })
      .then(() => {
        window.location.reload();
      })
      .catch(e => {
        console.log(e.message);
      });
  };

  render() {
    return this.props.children({
      ...this.state,
      handleClose: this.handleClose,
      handleShow: this.handleShow,
      handleLogin: this.handleLogin,
      handleRegister: this.handleRegister
    });
  }
}
