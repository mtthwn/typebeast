import React from 'react';
import { Button } from 'react-bootstrap';

export default ({ className, buttonText, cb }) => (
  <Button onClick={cb ? cb : ''} className={className} variant="primary">
    {buttonText}
  </Button>
);
