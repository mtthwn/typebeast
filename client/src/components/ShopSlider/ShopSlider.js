import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronLeft
} from '@fortawesome/free-solid-svg-icons';

import carSlide1 from './../../img/car_slider2.jpg';
import car_sprite1 from './../../img/gtx.png';
import './ShopSlider.scss';

export default () => {
  return (
    <div className="ShopSlider-container">
      <div className="car_slide car_fade" id="slide-1">
        <img src={carSlide1} alt="slide" />
      </div>
      <div className="car_slide car_fade" id="slide-2">
        <img src={carSlide1} alt="slide" />
      </div>
      <div className="car_slide car_fade" id="slide-3">
        <img src={carSlide1} alt="slide" />
      </div>

      <div className="controls-wrapper">
        <p className="slider-arrow center_y" id="arrow-prev">
          <FontAwesomeIcon icon={faChevronLeft} />
        </p>
        <p className="slider-arrow center_y" id="arrow-next">
          <FontAwesomeIcon icon={faChevronRight} />
        </p>
      </div>

      <div className="center_x" id="car-sprites-wrapper">
        <div className="car-sprite-nav ">
          <img src={car_sprite1} alt="car sprite" />
        </div>
        <div className="car-sprite-nav">
          <img src={car_sprite1} alt="car sprite" />
        </div>

        <div className="car-sprite-nav">
          <img src={car_sprite1} alt="car sprite" />
        </div>
      </div>
    </div>
  );
};
