import React from 'react';

export default ({ className, src }) => (
  <img
    className={`${className} d-block w-100`}
    src={src}
    alt="slide for cars"
  />
);
