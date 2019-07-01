import React from 'react';

export default ({ src, className }) => (
  <img
    className={`${className} d-block w-100`}
    src={src}
    alt="slide for cars"
  />
);
