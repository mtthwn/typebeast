import React from 'react';
import CarSliderLogic from '../CarSlider/CarSliderLogic';
import { Carousel, Button, ProgressBar } from 'react-bootstrap';

import carSlide1 from './../../img/car_slider2.jpg';
import car_sprite1 from './../../img/gtx.png';
import './ShopSlider.scss';

export default () => {
  const maxspeed = 170;
  const now = maxspeed;
  const progressInstance = (
    <ProgressBar now={maxspeed} max="300" label={`${now}mph`} />
  );
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
              <Carousel.Caption className="CarSlider-content">
                <h5>Honda</h5>
                <h3>Civic</h3>
                <h6>Max Speed</h6>
                {progressInstance}

                <h6>Acceleration 0-60</h6>
                {progressInstance}
              </Carousel.Caption>
              <img src={carSlide1} alt="car sprite" />
            </Carousel.Item>
            {/* <Carousel.Item>
              <img src={carSlide1} alt="car sprite" />
              <Carousel.Caption className="CarSlider-content">
                <h5>Nissan</h5>
                <h3>Skyline GTR</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item> */}
          </Carousel>
          <Button className="ShopSlider-BuyBtn" variant="outline-light">
            Buy Now
          </Button>
        </div>
      )}
    </CarSliderLogic>
  );
};
