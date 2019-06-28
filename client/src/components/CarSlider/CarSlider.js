import React from 'react';
import { Carousel } from 'react-bootstrap';

import CarSliderLogic from './CarSliderLogic';

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
              <img
                className="d-block w-100"
                src={carSlide1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={carSlide2}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={carSlide3}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={carSlide4}
                alt="Fourth slide"
              />
            </Carousel.Item>
          </Carousel>
          <div className="CarSlider-content">
            <h5>Realtime Competitive Typing</h5>
            <h1>Type Faster</h1>
            <p>
              Improve your typing skills while competing in fast-paced races
              with up to 5 typers from around the world. Compete against your
              friends, earn new cars, track your scores, and so much more... all
              for free!
            </p>
          </div>
        </div>
      )}
    </CarSliderLogic>
  );
};
