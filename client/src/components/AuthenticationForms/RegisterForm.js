import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import './Form.scss';

export default class RegisterForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      password: ''
    }
  }

  onChange = inputType => event => {
    event.preventDefault();

    if (inputType === 'username') {
      this.setState({
        username: event.target.value
      })
    } else if (inputType === 'email') {
      this.setState({
        email: event.target.value
      })
    } else {
      this.setState({
        password: event.target.value
      })
    }
  }

  onSubmit = event => {
    event.preventDefault();
    const username = this.state.username;
    const email = this.state.email;
    const password = this.state.password;
    if (this.state.username > 0 && this.state.email.length > 0 && this.state.password.length > 0) {
      this.props.handleRegister(username, email, password)();
    }
  }

  render() {
    return (
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter Username" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button className="register" variant="primary" type="submit">
          Register
        </Button>
      </Form>
    );
  }
};
