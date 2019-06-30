import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import CarSliderLogic from '../CarSlider/CarSliderLogic';
import { Carousel, Button } from 'react-bootstrap';

import {
  faChevronRight,
  faChevronLeft
} from '@fortawesome/free-solid-svg-icons';

import carSlide1 from './../../img/car_slider2.jpg';
import car_sprite1 from './../../img/gtx.png';
import './ShopSlider.scss';

export default () => {
  return (
    <CarSliderLogic>
      {props => (
        <div className="ShopSlider-container">
          <Carousel
            activeIndex={props.index}
            direction={props.direction}
            onSelect={props.handleSelect}
            indicators={false}
            fade={true}
            controls={true}
            interval="3000"
          >
            <Carousel.Item>
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
              <img src={carSlide1} alt="car sprite" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={carSlide1} alt="car sprite" />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={carSlide1} alt="car sprite" />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <Button className="ShopSlider-BuyBtn" variant="outline-light">
            Buy Now
          </Button>
        </div>
      )}
    </CarSliderLogic>
  );
};
