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
                  max="250"
                  label={`${maxspeed}mph`}
                />
                <h6>Acceleration 0-100 kph</h6>
                <ProgressBar
                  now={accerlation}
                  max="10"
                  label={`${accerlation} seconds`}
                />
              </Carousel.Caption>
              <img className="CarSlide" src={silvia} alt="slide" />
            </Carousel.Item>
          </Carousel>
          <Button className="ShopSlider-BuyBtn" variant="outline-light">
            Buy Now <span className="CarPrice">$5000 Coins</span>
          </Button>
        </div>
      )}
    </CarSliderLogic>
  );
};
