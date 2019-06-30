import React from 'react';
import carSlide1 from './../../img/car_slider1.jpg';

export default () => {
  return (
    <div className="ShopSlider-container">
      <div className="slide fade" id="slide-1">
        <img src={carSlide1} alt="slide" />
      </div>
      <div className="slide fade" id="slide-2">
        <img src={carSlide1} alt="slide" />
      </div>
      <div className="slide fade" id="slide-3">
        <img src={carSlide1} alt="slide" />
      </div>

      <div id="controls-wrapper">
        <p className="slider-arrow center_y" id="arrow-prev">
          &#1094;
        </p>
        <p className="slider-arrow center_y" id="arrow-prev">
          &#1095;
        </p>
      </div>

      <div className="car-sprites" id="car-sprites-wrapper">
        <div className="car-sprite 1"></div>
        <div className="car-sprite 1"></div>
        <div className="car-sprite 1"></div>
      </div>
    </div>
  );
};
