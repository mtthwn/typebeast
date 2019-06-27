import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default props => (
  <Button variant={props.variant}>
    <Link to={props.link}>{props.text}</Link>
  </Button>
);
