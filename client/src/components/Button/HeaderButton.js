import React from 'react';
import { Button } from 'react-bootstrap';
import './Button.scss';

export default ({ className, buttonText, cb }) => (
  <Button onClick={cb ? cb : ''} className={className}>
    {buttonText}
  </Button>
);
