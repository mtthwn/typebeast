import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Form.scss';

export default (props) => {
  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button className="register" variant="primary" type="submit" onClick={props.handleLogin('jskwok@gmail.com', 'hello')} >
        Login
      </Button>
    </Form>
  );
};
