import React from 'react';
import { Carousel } from 'react-bootstrap';

import CarSliderLogic from './CarSliderLogic';
import ImageSlider from './ImageSlider';
import ImageSliderContent from './ImageSliderContent';

import './CarSlider.scss';
import carSlide1 from './../../img/car_slider1.jpg';
import carSlide3 from './../../img/car_slider2.jpg';
import carSlide2 from './../../img/car_slider3.jpeg';
import carSlide4 from './../../img/car_slider4.jpeg';

export default () => {
  return (
    <CarSliderLogic>
      {props => (
        <div className="CarSlider-container">
          <Carousel
            activeIndex={props.index}
            direction={props.direction}
            onSelect={props.handleSelect}
            indicators={false}
            fade={true}
            controls={false}
            interval="3000"
          >
            <Carousel.Item>
              <ImageSlider src={carSlide1} />
            </Carousel.Item>
            <Carousel.Item>
              <ImageSlider src={carSlide2} />
            </Carousel.Item>
            <Carousel.Item>
              <ImageSlider src={carSlide3} />
            </Carousel.Item>
            <Carousel.Item>
              <ImageSlider src={carSlide4} />
            </Carousel.Item>
          </Carousel>
          <ImageSliderContent />
        </div>
      )}
    </CarSliderLogic>
  );
};
