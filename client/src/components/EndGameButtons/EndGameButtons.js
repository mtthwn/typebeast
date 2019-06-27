import React from 'react';
import { Row, Col }  from 'react-bootstrap';
import Button from './../Button/Button'

export default props => (
  <Row>
    <Col>
      <Button variant="success" link='/play' text='Play again' />
    </Col>
    <Col>
      <Button variant="info" link='/' text='Home' />
    </Col>
  </Row>
);
