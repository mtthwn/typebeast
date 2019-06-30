import React from 'react';
import CarSliderLogic from '../CarSlider/CarSliderLogic';
import { Carousel, Button, ProgressBar } from 'react-bootstrap';

import silvia from './../../img/nissan_silvia_slide.png';
import car_sprite1 from './../../img/gtx_md.png';
import './ShopSlider.scss';

export default () => {
  const maxspeed = 170;
  const accerlation = 5.5;

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
                <h5>Nissan</h5>
                <h3>Silvia S15</h3>
                <img
                  className="Car-Sprite"
                  src={car_sprite1}
                  alt="car sprite"
                />
                <h6>Max Speed</h6>
                <ProgressBar
                  now={maxspeed}
                  max="300"
                  label={`${maxspeed}mph`}
                />
                <h6>Acceleration 0-100 kph</h6>
                <ProgressBar
                  now={maxspeed}
                  max="300"
                  label={`${accerlation} seconds`}
                />
                <h6>Price</h6>
                <div className="CarPrice">
                  <h2>$5000</h2>
                  <span className="coins">Coins</span>
                </div>
              </Carousel.Caption>
              <img className="CarSlide" src={silvia} alt="slide" />
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
