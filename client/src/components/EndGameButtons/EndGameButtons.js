import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Button from '../Button/Button';
import './EndGameButtons.scss';

export default props => (
  <Row>
    <Col>
      <Button
        className="EndgameButton-PlayAgain"
        variant="success"
        link="/play"
        text="Play again"
      />
    </Col>
    <Col>
      <Button
        className="EndgameButton-Home"
        variant="info"
        link="/"
        text="Home"
      />
    </Col>
  </Row>
);
