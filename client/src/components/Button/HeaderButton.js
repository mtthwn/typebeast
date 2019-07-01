import React from 'react';
import { Button } from 'react-bootstrap';

export default ({ className, buttonText }) => (
  <Button className={className} variant="primary">
    {buttonText}
  </Button>
);
