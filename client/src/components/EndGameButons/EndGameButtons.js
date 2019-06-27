import React from 'react';
import { Row, Col }  from 'react-boostrap';
import Button from './../Button/'

export default props => (
  <Row>
    <Col>
      <Button variant="success" type='newGame' />
    </Col>
    <Col>
      <Button variant="info" type='home' />
    </Col>
  </Row>
);
