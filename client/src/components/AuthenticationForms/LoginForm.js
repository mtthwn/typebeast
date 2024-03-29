import React, { Component } from 'react';
import { Button, Form, Alert } from 'react-bootstrap';
import './Form.scss';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  onChange = inputType => event => {
    event.preventDefault();

    document.getElementById('login-alert').style.visibility = 'hidden';

    if (inputType === 'email') {
      this.setState({
        email: event.target.value
      });
    } else {
      this.setState({
        password: event.target.value
      });
    }
  };

  onSubmit = event => {
    event.preventDefault();
    const email = this.state.email;
    const password = this.state.password;
    if (email.length > 0 && password.length > 0) {
      this.props.handleLogin(email, password);
    } else if (email.length === 0 || password.length === 0) {
      document.getElementById('login-alert').innerHTML =
        'Incorrect login credentials. Please try again.';
      document.getElementById('login-alert').style.visibility = 'visible';
    }
  };

  render() {
    return (
      <Form>
        <Alert
          style={{ visibility: 'hidden' }}
          id="login-alert"
          variant="danger"
        ></Alert>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={this.onChange('email')}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={this.onChange('password')}
          />
        </Form.Group>
        <Button
          className="register"
          variant="primary"
          type="submit"
          onClick={this.onSubmit}
        >
          Login
        </Button>
      </Form>
    );
  }
}
