import React from 'react';
import { Button } from 'react-bootstrap';
import './Button.scss';

export default ({ className, buttonText, cb }) => (
  <Button onClick={cb ? cb : undefined} className={className} variant="primary">
    {buttonText}
  </Button>
);
