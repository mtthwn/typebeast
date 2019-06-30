import React from 'react';
import { Carousel, Button } from 'react-bootstrap';

import CarSliderLogic from '../CarSlider/CarSliderLogic';
import SliderCaption from '../ShopSlider/SliderCaption';
import ImageSlider from '../CarSlider/ImageSlider';

import './ShopSlider.scss';

import silvia from './../../img/nissan_silvia_slide.png';
import car_sprite1 from './../../img/gtx_md.png';

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
              <SliderCaption imgSrc={car_sprite1} />
              <ImageSlider className="CarSlide" src={silvia} />
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
