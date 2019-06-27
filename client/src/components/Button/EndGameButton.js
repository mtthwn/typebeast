import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default props => (
  <Row>
    <Col>
      <Button variant="success">
        <a href='/play'>New Game</a>
      </Button>
    </Col>
    <Col>
      <Button variant="info">
        <Link to="/">Back to home</Link>
      </Button>
    </Col>
  </Row>
);
