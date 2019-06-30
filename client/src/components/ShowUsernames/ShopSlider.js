import React from 'react';
import carSlide1 from './../../img/car_slider1.jpg';

export default () => {
  return (
    <div className="ShopSlider-container">
      <div class="slide fade" id="slide-1">
        <img src={carSlide1} alt="slide" />
      </div>
      <div class="slide fade" id="slide-2">
        <img src={carSlide1} alt="slide" />
      </div>
      <div class="slide fade" id="slide-3">
        <img src={carSlide1} alt="slide" />
      </div>
    </div>
  );
};
